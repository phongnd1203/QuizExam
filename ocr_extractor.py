import os
import re
import sys
import glob
import json
import asyncio
from pathlib import Path
from PIL import Image
import winocr

if sys.stdout and hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')
if sys.stderr and hasattr(sys.stderr, 'reconfigure'):
    sys.stderr.reconfigure(encoding='utf-8', errors='replace')

def natural_sort_key(s):
    return [int(text) if text.isdigit() else text.lower() for text in re.split(r'(\d+)', str(s))]

async def ocr_image(image_path: str, lang: str = "en") -> dict:
    try:
        with Image.open(image_path) as img:
            result = await winocr.recognize_pil(img, lang=lang)
            lines = [line.text.strip() for line in result.lines if line.text.strip()]
            full_text = "\n".join(lines)
            return {
                "file": os.path.basename(image_path),
                "path": image_path,
                "lines": lines,
                "text": full_text
            }
    except Exception as e:
        print(f"Error processing {image_path}: {e}")
        return {
            "file": os.path.basename(image_path),
            "path": image_path,
            "lines": [],
            "text": "",
            "error": str(e)
        }

async def process_folder(folder_path: str, output_txt: str = None, output_json: str = None, lang: str = "en"):
    folder = Path(folder_path)
    if not folder.exists():
        print(f"Folder not found: {folder_path}")
        return []

    # Find all image files (.webp, .png, .jpg, .jpeg)
    image_extensions = {".webp", ".png", ".jpg", ".jpeg"}
    image_files_dict = {}
    for file_path in folder.iterdir():
        if file_path.is_file() and file_path.suffix.lower() in image_extensions:
            image_files_dict[file_path.resolve()] = file_path

    # Sort naturally (Q1, Q2, ..., Q10, etc.)
    image_files = sorted(list(image_files_dict.values()), key=natural_sort_key)
    print(f"Found {len(image_files)} unique images in {folder_path}")

    results = []
    for idx, img_path in enumerate(image_files, 1):
        print(f"[{idx}/{len(image_files)}] OCR {img_path.name}...", end=" ", flush=True)
        res = await ocr_image(str(img_path), lang=lang)
        print(f"Done ({len(res['lines'])} lines)")
        results.append(res)

    if output_json:
        with open(output_json, "w", encoding="utf-8") as f:
            json.dump(results, f, ensure_ascii=False, indent=2)
        print(f"Saved raw JSON to {output_json}")

    if output_txt:
        with open(output_txt, "w", encoding="utf-8") as f:
            for item in results:
                f.write(f"=== File: {item['file']} ===\n")
                f.write(item['text'])
                f.write("\n\n" + "="*40 + "\n\n")
        print(f"Saved raw text to {output_txt}")

    return results

if __name__ == "__main__":
    target_folder = sys.argv[1] if len(sys.argv) > 1 else r"sources/Data_Đề_Thi_FE PMG201c_-_SU26_-_FE"
    out_json = sys.argv[2] if len(sys.argv) > 2 else "ocr_results_SU26_FE.json"
    out_txt = sys.argv[3] if len(sys.argv) > 3 else "ocr_results_SU26_FE.txt"

    asyncio.run(process_folder(target_folder, output_txt=out_txt, output_json=out_json))
