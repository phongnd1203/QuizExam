/**
 * PMG201c Knowledge Hub & Articles Manager
 * Handles:
 * - On-demand Article loading from data/articles/ (lightweight metadata)
 * - Raw TXT Monospace Viewer with EOS Copy & Section Jump Anchors
 * - Full Markdown Parsing + Robust KaTeX Math + Mermaid Diagrams
 * - Interactive Table of Contents (TOC) with ScrollSpy
 * - Smart Related Articles Recommendation Links
 * - A-Z Glossary Search
 * - Interactive EVM Calculator
 */

// State
let allArticles = [];
let currentArticle = null;
let activeCategory = "all";
let searchQuery = "";
let activeTag = "";
let currentFontSize = "normal"; // 'small' | 'normal' | 'large'
const articleContentCache = {}; // Cache: articleId -> rawContent

// DOM Elements
const articlesTabContent = document.getElementById("articles-tab-content");
const articlesListSection = document.getElementById("articles-list-section");
const articleDetailSection = document.getElementById("article-detail-section");
const articlesGrid = document.getElementById("articles-grid");
const articleSearchInput = document.getElementById("article-search-input");
const articleClearSearch = document.getElementById("article-clear-search");
const categoryPillsContainer = document.getElementById("category-pills");
const tagFilterContainer = document.getElementById("tag-filter-container");
const articlesCountBadge = document.getElementById("articles-count-badge");

// Reader DOM
const backToArticlesBtn = document.getElementById("back-to-articles-btn");
const articleTitleEl = document.getElementById("article-detail-title");
const articleCategoryBadge = document.getElementById("article-detail-category");
const articleMetaInfo = document.getElementById("article-detail-meta");
const articleTagsList = document.getElementById("article-detail-tags");
const articleBodyEl = document.getElementById("article-rendered-body");
const articleTocList = document.getElementById("article-toc-list");
const readingProgressBar = document.getElementById("reading-progress-bar");
const copyEosBtn = document.getElementById("copy-eos-btn");
const printArticleBtn = document.getElementById("print-article-btn");
const fontSizeToggle = document.getElementById("font-size-toggle");
const prevArticleBtn = document.getElementById("prev-article-btn");
const nextArticleBtn = document.getElementById("next-article-btn");

// Glossary DOM
const glossarySearchInput = document.getElementById("glossary-search-input");
const alphabetFilterContainer = document.getElementById(
  "alphabet-filter-container",
);
const glossaryCardsContainer = document.getElementById(
  "glossary-cards-container",
);

// EVM Calculator DOM
const evmBacInput = document.getElementById("evm-bac");
const evmDacInput = document.getElementById("evm-dac");
const evmTimeInput = document.getElementById("evm-time");
const evmProgressInput = document.getElementById("evm-progress");
const evmAcInput = document.getElementById("evm-ac");
const evmCalculateBtn = document.getElementById("evm-calculate-btn");
const evmResultCard = document.getElementById("evm-result-card");

// Initialization
document.addEventListener("DOMContentLoaded", () => {
  initMermaidConfig();
  initArticlesData();
  initArticleEvents();
  initGlossary();
  initEvmCalculator();
  initScrollProgress();
  initThemeListener();
});

// Configure Mermaid
function initMermaidConfig() {
  if (window.mermaid) {
    const isDark =
      document.documentElement.getAttribute("data-theme") !== "light";
    mermaid.initialize({
      startOnLoad: false,
      theme: isDark ? "dark" : "default",
      securityLevel: "loose",
      fontFamily: "Inter, -apple-system, sans-serif",
      themeVariables: isDark
        ? {
            darkMode: true,
            background: "#18181b",
            primaryColor: "#3b82f6",
            primaryTextColor: "#f4f4f5",
            primaryBorderColor: "#3f3f46",
            lineColor: "#a1a1aa",
            secondaryColor: "#8b5cf6",
            tertiaryColor: "#10b981",
          }
        : {
            darkMode: false,
            background: "#ffffff",
            primaryColor: "#2563eb",
            primaryTextColor: "#0f172a",
            primaryBorderColor: "#cbd5e1",
            lineColor: "#64748b",
            secondaryColor: "#7c3aed",
            tertiaryColor: "#059669",
          },
    });
  }
}

// Re-render Mermaid on Theme Toggle
function initThemeListener() {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "data-theme"
      ) {
        initMermaidConfig();
        if (
          currentArticle &&
          articleContentCache[currentArticle.id] &&
          !articleDetailSection.classList.contains("hidden")
        ) {
          const isRaw = checkIfRawTextArticle(currentArticle);
          if (isRaw) {
            renderRawTxtContent(
              articleContentCache[currentArticle.id],
              currentArticle,
            );
          } else {
            renderArticleContent(articleContentCache[currentArticle.id]);
          }
        }
      }
    });
  });
  observer.observe(document.documentElement, { attributes: true });
}

// Load Articles Metadata from window.PMG_ARTICLES or data/articles.json
async function initArticlesData() {
  if (window.PMG_ARTICLES && Array.isArray(window.PMG_ARTICLES)) {
    allArticles = window.PMG_ARTICLES;
  } else {
    try {
      const res = await fetch("data/articles.json");
      if (res.ok) {
        allArticles = await res.json();
      }
    } catch (e) {
      console.warn("Could not fetch data/articles.json", e);
    }
  }

  renderCategoryPills();
  renderTagFilters();
  renderArticlesGrid();
}

// Render Category Filter Pills (Emoji-free)
function renderCategoryPills() {
  if (!categoryPillsContainer) return;

  const categories = [
    { id: "all", name: "Tất cả" },
    { id: "dictionary", name: "Từ điển & Thuật ngữ" },
    { id: "course", name: "Bài giảng Lý thuyết" },
    { id: "real-exam", name: "Đề thi Thực chiến" },
    { id: "practice", name: "11 Bộ đề Ôn tập" },
    { id: "solution", name: "Đáp án Chi tiết" },
    { id: "guide", name: "Bí kíp & Chuẩn EOS" },
    { id: "script", name: "Bản ghi & Transcript" },
  ];

  categoryPillsContainer.innerHTML = categories
    .map((cat) => {
      const count =
        cat.id === "all"
          ? allArticles.length
          : allArticles.filter((a) => a.category === cat.id).length;
      const isActive = activeCategory === cat.id ? "active" : "";
      return `
            <button class="cat-pill-btn ${isActive}" data-category="${cat.id}">
                <span class="cat-name">${cat.name}</span>
                <span class="cat-count">${count}</span>
            </button>
        `;
    })
    .join("");

  categoryPillsContainer.querySelectorAll(".cat-pill-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeCategory = btn.getAttribute("data-category");
      renderCategoryPills();
      renderArticlesGrid();
    });
  });
}

// Render Top Tags
function renderTagFilters() {
  if (!tagFilterContainer) return;

  const tagCounts = {};
  allArticles.forEach((a) => {
    if (a.tags) {
      a.tags.forEach((t) => {
        tagCounts[t] = (tagCounts[t] || 0) + 1;
      });
    }
  });

  const sortedTags = Object.keys(tagCounts)
    .sort((a, b) => tagCounts[b] - tagCounts[a])
    .slice(0, 14);

  tagFilterContainer.innerHTML = `
        <span class="tag-filter-label">Tags nổi bật:</span>
        <button class="tag-chip ${activeTag === "" ? "active" : ""}" data-tag="">Tất cả</button>
        ${sortedTags
          .map(
            (tag) => `
            <button class="tag-chip ${activeTag === tag ? "active" : ""}" data-tag="${tag}">
                #${tag} <small>(${tagCounts[tag]})</small>
            </button>
        `,
          )
          .join("")}
    `;

  tagFilterContainer.querySelectorAll(".tag-chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      const tag = btn.getAttribute("data-tag");
      activeTag = activeTag === tag ? "" : tag;
      renderTagFilters();
      renderArticlesGrid();
    });
  });
}

// Render Articles Grid Cards (Clean, emoji-free)
function renderArticlesGrid() {
  if (!articlesGrid) return;

  const filtered = allArticles.filter((art) => {
    const matchesCategory =
      activeCategory === "all" || art.category === activeCategory;
    const matchesTag = !activeTag || (art.tags && art.tags.includes(activeTag));
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      art.title.toLowerCase().includes(q) ||
      (art.desc && art.desc.toLowerCase().includes(q)) ||
      (art.tags && art.tags.some((t) => t.toLowerCase().includes(q)));
    return matchesCategory && matchesTag && matchesSearch;
  });

  if (articlesCountBadge) {
    articlesCountBadge.textContent = `${filtered.length} bài viết`;
  }

  if (filtered.length === 0) {
    articlesGrid.innerHTML = `
            <div class="empty-state-card">
                <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <h3>Không tìm thấy bài viết phù hợp</h3>
                <p>Thử tìm kiếm với từ khóa khác hoặc xóa bộ lọc để xem toàn bộ tài liệu.</p>
                <button class="secondary-btn" id="reset-filters-btn">Xóa tất cả bộ lọc</button>
            </div>
        `;
    const resetBtn = document.getElementById("reset-filters-btn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        activeCategory = "all";
        activeTag = "";
        searchQuery = "";
        if (articleSearchInput) articleSearchInput.value = "";
        renderCategoryPills();
        renderTagFilters();
        renderArticlesGrid();
      });
    }
    return;
  }

  articlesGrid.innerHTML = filtered
    .map((art) => {
      const tagsHtml = art.tags
        ? art.tags
            .slice(0, 4)
            .map((t) => `<span class="card-tag">#${t}</span>`)
            .join("")
        : "";
      const mermaidBadge = art.hasMermaid
        ? `<span class="card-mermaid-pill">Sơ đồ</span>`
        : "";
      const isTxt = checkIfRawTextArticle(art);
      const formatBadge = isTxt
        ? `<span class="card-format-pill">Plain Text</span>`
        : "";

      return `
            <article class="article-card" data-id="${art.id}">
                <div class="card-header">
                    <span class="card-cat-badge cat-${art.category}">
                        <span>${art.categoryName || "Tài liệu"}</span>
                    </span>
                    <div class="card-meta-right">
                        ${formatBadge}
                        ${mermaidBadge}
                        <span class="card-read-time">${art.readTime || "3 phút"}</span>
                    </div>
                </div>
                <h3 class="card-title">${escapeHtml(art.title)}</h3>
                <p class="card-desc">${escapeHtml(art.desc || "")}</p>
                <div class="card-tags-row">${tagsHtml}</div>
                <div class="card-footer">
                    <span class="card-word-count">${art.wordCount ? art.wordCount.toLocaleString() : "0"} từ</span>
                    <button class="card-read-btn">
                        <span>${isTxt ? "Xem lời giải" : "Đọc bài"}</span>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </button>
                </div>
            </article>
        `;
    })
    .join("");

  // Attach click listeners to cards
  articlesGrid.querySelectorAll(".article-card").forEach((card) => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-id");
      openArticle(id);
    });
  });
}

// Check if article is a raw text file
function checkIfRawTextArticle(art) {
  if (!art) return false;
  const file = (art.file || "").toLowerCase();
  const dataPath = (art.dataPath || "").toLowerCase();
  return (
    file.endsWith(".txt") ||
    dataPath.endsWith(".txt") ||
    art.category === "solution" ||
    art.category === "script"
  );
}

// Open Article Detail Reader (Fetches content on demand)
async function openArticle(articleId) {
  const art = allArticles.find((a) => a.id === articleId);
  if (!art) return;

  currentArticle = art;
  const isRawText = checkIfRawTextArticle(art);

  // Switch section views
  if (articlesListSection) articlesListSection.classList.add("hidden");
  if (articleDetailSection) articleDetailSection.classList.remove("hidden");

  // Populate Reader Header Meta
  if (articleTitleEl) articleTitleEl.textContent = art.title;
  if (articleCategoryBadge) {
    articleCategoryBadge.innerHTML = `<span>${art.categoryName || "Tài liệu"}</span>`;
    articleCategoryBadge.className = `article-detail-cat-badge cat-${art.category}`;
  }
  if (articleMetaInfo) {
    const formatLabel = isRawText ? "Plain Text EOS" : "Markdown";
    articleMetaInfo.innerHTML = `
            <span>${art.readTime || "5 phút đọc"}</span>
            <span>•</span>
            <span>${art.wordCount ? art.wordCount.toLocaleString() : "0"} từ</span>
            <span>•</span>
            <span>Định dạng: ${formatLabel}</span>
            <span>•</span>
            <span>${art.file || art.dataPath}</span>
        `;
  }
  if (articleTagsList && art.tags) {
    articleTagsList.innerHTML = art.tags
      .map((t) => `<span class="tag-chip-sm">#${t}</span>`)
      .join("");
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "instant" });

  // Check content cache or fetch on demand
  let content = articleContentCache[articleId];
  if (!content) {
    articleBodyEl.innerHTML = `
            <div class="article-loading-state">
                <div class="loading-spinner"></div>
                <p>Đang tải nội dung tài liệu...</p>
            </div>
        `;

    try {
      const targetPath = art.dataPath || `data/articles/${art.id}.md`;
      const res = await fetch(targetPath);
      if (res.ok) {
        content = await res.text();
        articleContentCache[articleId] = content;
      } else {
        content = `Không thể tải bài viết\n\nKhông tìm thấy file tài liệu tại ${targetPath}.`;
      }
    } catch (e) {
      content = `Lỗi kết nối\n\nKhông thể tải bài viết qua mạng. Chi tiết: ${e.message}`;
    }
  }

  // Render Content: Monospace codeblock for raw txt, Markdown for md
  if (isRawText) {
    renderRawTxtContent(content, art);
  } else {
    renderArticleContent(content);
  }

  // Build Table of Contents
  buildTableOfContents(isRawText, content);

  // Render Related Articles Links
  renderRelatedArticles(art);

  // Setup Next / Prev Article links
  setupAdjacentArticles(art.id);
}

// Render Plain Text raw file inside a clean monospace codeblock
function renderRawTxtContent(rawContent, art) {
  if (!articleBodyEl) return;

  const lines = rawContent.split("\n");
  const lineCount = lines.length;
  const wordCount = rawContent.trim().split(/\s+/).filter(Boolean).length;

  let secIdx = 0;
  const processedLines = lines.map((line) => {
    const trimmed = line.trim();
    const isHeading =
      /^(?:REQUEST\s*\d+|EXAM\s*\d+|ĐỀ\s*\d+|Cost Item\s*\d+|Task\s*\d+|Mục tiêu\s*\d+|Objective\s*\d+|PHẦN\s*[I|V|X]+|Activity\s*\d+|[1-4]\.\s+[A-ZĐÁÀẢÃẠÂẤẦẨẪẬĂẮẰẲẴẶÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴ])/i.test(
        trimmed,
      );
    if (isHeading) {
      const anchor = `<span id="raw-sec-${secIdx}" class="raw-sec-anchor"></span>`;
      secIdx++;
      return anchor + escapeHtml(line);
    }
    return escapeHtml(line);
  });

  const formattedCode = processedLines.join("\n");

  articleBodyEl.innerHTML = `
        <div class="raw-txt-container">
            <div class="raw-txt-toolbar">
                <div class="raw-txt-meta">
                    <span class="raw-txt-badge">Plain Text EOS Format</span>
                    <span class="raw-txt-info">${lineCount} dòng • ${wordCount.toLocaleString()} từ</span>
                </div>
                <button class="raw-txt-copy-btn" id="raw-txt-quick-copy">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    <span>Sao chép toàn bộ text</span>
                </button>
            </div>
            <pre class="raw-txt-block"><code>${formattedCode}</code></pre>
        </div>
    `;

  const quickCopyBtn = document.getElementById("raw-txt-quick-copy");
  if (quickCopyBtn) {
    quickCopyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(rawContent).then(() => {
        const orig = quickCopyBtn.innerHTML;
        quickCopyBtn.innerHTML = `
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span style="color: #10b981;">Đã sao chép!</span>
                `;
        setTimeout(() => {
          quickCopyBtn.innerHTML = orig;
        }, 2000);
      });
    });
  }
}

// Render Markdown + KaTeX + Mermaid Diagrams
function renderArticleContent(rawMarkdown) {
  if (!articleBodyEl) return;

  // 1. Protect LaTeX Math Blocks
  const mathTokens = [];
  let text = rawMarkdown;

  text = text.replace(/\$\$([\s\S]*?)\$\$/g, (match, formula) => {
    const idx = mathTokens.length;
    mathTokens.push({ type: "display", formula: formula.trim() });
    return `%%%MATH_TOKEN_${idx}%%%`;
  });
  text = text.replace(/\\\[([\s\S]*?)\\\]/g, (match, formula) => {
    const idx = mathTokens.length;
    mathTokens.push({ type: "display", formula: formula.trim() });
    return `%%%MATH_TOKEN_${idx}%%%`;
  });

  text = text.replace(/\$([^\$\n]+?)\$/g, (match, formula) => {
    const idx = mathTokens.length;
    mathTokens.push({ type: "inline", formula: formula.trim() });
    return `%%%MATH_TOKEN_${idx}%%%`;
  });
  text = text.replace(/\\\(([^\n]+?)\\\)/g, (match, formula) => {
    const idx = mathTokens.length;
    mathTokens.push({ type: "inline", formula: formula.trim() });
    return `%%%MATH_TOKEN_${idx}%%%`;
  });

  // 2. Preprocess GitHub Alerts (Emoji-free)
  text = text.replace(
    /^>\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*\n((?:>.*\n?)*)/gim,
    (match, type, content) => {
      const cleanContent = content.replace(/^>\s?/gm, "");
      const alertType = type.toLowerCase();
      const titles = {
        note: "Lưu ý (Note)",
        tip: "Mẹo làm bài (Tip)",
        important: "Quan trọng (Important)",
        warning: "Cảnh báo bẫy thi (Warning)",
        caution: "Cẩn trọng (Caution)",
      };
      return `\n\n<div class="markdown-alert alert-${alertType}">
            <div class="alert-header"><strong>${titles[alertType]}</strong></div>
            <div class="alert-body">\n\n${cleanContent}\n\n</div>
        </div>\n\n`;
    },
  );

  // 3. Preprocess Mermaid code blocks before marked
  text = text.replace(/```mermaid\s*\n([\s\S]*?)\n```/g, (match, code) => {
    return `<div class="mermaid-diagram-container"><pre class="mermaid">\n${code.trim()}\n</pre></div>`;
  });

  // 4. Parse Markdown with marked.js
  let html = "";
  if (window.marked) {
    marked.setOptions({
      gfm: true,
      breaks: true,
      headerIds: true,
      mangle: false,
    });
    html = marked.parse(text);
  } else {
    html = `<pre class="fallback-pre">${escapeHtml(text)}</pre>`;
  }

  // 5. Restore Math Tokens and render with KaTeX
  html = html.replace(/%%%MATH_TOKEN_(\d+)%%%/g, (match, idxStr) => {
    const token = mathTokens[parseInt(idxStr, 10)];
    if (!token) return "";
    if (window.katex) {
      try {
        return katex.renderToString(token.formula, {
          displayMode: token.type === "display",
          throwOnError: false,
        });
      } catch (e) {
        return `<code class="math-error">${escapeHtml(token.formula)}</code>`;
      }
    }
    return token.type === "display"
      ? `$$${token.formula}$$`
      : `$${token.formula}$`;
  });

  articleBodyEl.innerHTML = html;

  // 6. Run Mermaid renderer on all .mermaid blocks
  if (window.mermaid) {
    const mermaidNodes = articleBodyEl.querySelectorAll(".mermaid");
    if (mermaidNodes.length > 0) {
      mermaid
        .run({
          nodes: mermaidNodes,
        })
        .catch((err) => {
          console.warn("Mermaid rendering error:", err);
        });
    }
  }

  // 7. Enhance Code Blocks with Copy Buttons
  articleBodyEl.querySelectorAll("pre:not(.mermaid)").forEach((pre) => {
    const wrapper = document.createElement("div");
    wrapper.className = "code-block-wrapper";
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);

    const copyBtn = document.createElement("button");
    copyBtn.className = "code-copy-btn";
    copyBtn.innerHTML = `
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            <span>Copy</span>
        `;
    copyBtn.addEventListener("click", () => {
      const code = pre.querySelector("code")
        ? pre.querySelector("code").innerText
        : pre.innerText;
      navigator.clipboard.writeText(code).then(() => {
        copyBtn.innerHTML = `
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span style="color: #10b981;">Copied!</span>
                `;
        setTimeout(() => {
          copyBtn.innerHTML = `
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                        <span>Copy</span>
                    `;
        }, 2000);
      });
    });
    wrapper.appendChild(copyBtn);
  });

  // 8. Wrap Tables for horizontal scroll
  articleBodyEl.querySelectorAll("table").forEach((tbl) => {
    const wrap = document.createElement("div");
    wrap.className = "table-scroll-wrapper";
    tbl.parentNode.insertBefore(wrap, tbl);
    wrap.appendChild(tbl);
  });
}

// Build Sticky Table of Contents (TOC) with ScrollSpy
function buildTableOfContents(isRawText, rawContent) {
  if (!articleTocList || !articleBodyEl) return;

  if (isRawText && rawContent) {
    const lines = rawContent.split("\n");
    let tocHtml = "";
    let secIdx = 0;

    lines.forEach((line) => {
      const trimmed = line.trim();
      const isHeading =
        /^(?:REQUEST\s*\d+|EXAM\s*\d+|ĐỀ\s*\d+|Cost Item\s*\d+|Task\s*\d+|Mục tiêu\s*\d+|Objective\s*\d+|PHẦN\s*[I|V|X]+|[1-4]\.\s+[A-ZĐÁÀẢÃẠÂẤẦẨẪẬĂẮẰẲẴẶÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴ])/i.test(
          trimmed,
        );
      if (isHeading) {
        const targetId = `raw-sec-${secIdx}`;
        let levelClass = "toc-h2";
        if (/^(?:REQUEST|EXAM|ĐỀ|PHẦN)/i.test(trimmed)) {
          levelClass = "toc-h1";
        } else if (/^(?:Cost Item|Task|Mục tiêu|Objective)/i.test(trimmed)) {
          levelClass = "toc-h3";
        }

        const label = trimmed
          .replace(/^=+\s*|\s*=+$|^-+\s*|\s*-+$/g, "")
          .trim();
        if (label.length > 0 && label.length < 80) {
          tocHtml += `
                        <li class="toc-item ${levelClass}">
                            <a href="#${targetId}" class="toc-link" data-target="${targetId}">${escapeHtml(label)}</a>
                        </li>
                    `;
        }
        secIdx++;
      }
    });

    if (!tocHtml) {
      articleTocList.innerHTML =
        '<li class="toc-empty">Văn bản thuần túy EOS</li>';
      return;
    }

    articleTocList.innerHTML = tocHtml;

    articleTocList.querySelectorAll(".toc-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("data-target");
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          const headerOffset = 90;
          const elementPosition = targetEl.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      });
    });
    return;
  }

  const headings = articleBodyEl.querySelectorAll("h1, h2, h3");
  if (headings.length === 0) {
    articleTocList.innerHTML = '<li class="toc-empty">Không có mục lục</li>';
    return;
  }

  let tocHtml = "";
  headings.forEach((heading, idx) => {
    const id = `heading-sec-${idx}`;
    heading.id = id;
    const level = heading.tagName.toLowerCase();
    const text = heading.textContent.replace(/^[#\s]+/, "").trim();
    tocHtml += `
            <li class="toc-item toc-${level}">
                <a href="#${id}" class="toc-link" data-target="${id}">${escapeHtml(text)}</a>
            </li>
        `;
  });

  articleTocList.innerHTML = tocHtml;

  articleTocList.querySelectorAll(".toc-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("data-target");
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const headerOffset = 90;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  setupScrollSpy(headings);
}

// ScrollSpy Observer
function setupScrollSpy(headings) {
  const links = articleTocList
    ? articleTocList.querySelectorAll(".toc-link")
    : [];
  if (links.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          links.forEach((l) => {
            if (l.getAttribute("data-target") === id) {
              l.classList.add("active");
            } else {
              l.classList.remove("active");
            }
          });
        }
      });
    },
    {
      rootMargin: "-90px 0px -70% 0px",
      threshold: 0.1,
    },
  );

  headings.forEach((h) => observer.observe(h));
}

// Calculate Smart Related Articles
function getRelatedArticles(currentArt) {
  if (!currentArt || !allArticles || allArticles.length === 0) return [];

  const candidates = allArticles.filter((a) => a.id !== currentArt.id);
  const scored = candidates.map((cand) => {
    let score = 0;

    // 1. Direct Exam Number Matching (e.g. practice-de-01 <-> solution-de-01-vie / solution-de-01-eng)
    const currNum = (currentArt.id.match(/(?:de-)(\d+)/i) ||
      (currentArt.file || "").match(/(?:De_|Đề\s*)(\d+)/i) ||
      [])[1];
    const candNum = (cand.id.match(/(?:de-)(\d+)/i) ||
      (cand.file || "").match(/(?:De_|Đề\s*)(\d+)/i) ||
      [])[1];
    if (currNum && candNum && currNum === candNum) {
      score += 60;
    }

    // 2. Course <-> Script matching (e.g. course-buoi-1 <-> script-buoi-1)
    const currBuoi = (currentArt.id.match(/buoi-(\d+)/i) || [])[1];
    const candBuoi = (cand.id.match(/buoi-(\d+)/i) || [])[1];
    if (currBuoi && candBuoi && currBuoi === candBuoi) {
      score += 50;
    }

    // 3. Real Exam <-> Script matching
    if (currentArt.id.includes("sp26") && cand.id.includes("sp26")) score += 50;
    if (currentArt.id.includes("su26") && cand.id.includes("su26")) score += 50;

    // 4. Solutions <-> Master solutions
    if (
      currentArt.category === "solution" &&
      cand.id.startsWith("solution-master")
    )
      score += 20;
    if (
      currentArt.id.startsWith("solution-master") &&
      cand.category === "solution"
    )
      score += 15;

    // 5. Shared tags
    if (currentArt.tags && cand.tags) {
      const shared = cand.tags.filter((t) => currentArt.tags.includes(t));
      score += shared.length * 8;
    }

    // 6. Category connection
    if (cand.category === currentArt.category) {
      score += 5;
    }

    // 7. General guide connection
    if (
      cand.id === "guide-eos-tips" &&
      (currentArt.category === "practice" || currentArt.category === "solution")
    ) {
      score += 10;
    }
    if (cand.id === "glossary-pmg201c") {
      score += 4;
    }

    return { article: cand, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored
    .filter((s) => s.score > 0)
    .slice(0, 4)
    .map((s) => s.article);
}

// Render Related Articles Section in Reader
function renderRelatedArticles(currentArt) {
  let container = document.getElementById("related-articles-section");
  if (!container) {
    container = document.createElement("div");
    container.id = "related-articles-section";
    container.className = "related-articles-section";
    const adjRow = document.querySelector(".adjacent-articles-row");
    if (adjRow && adjRow.parentNode) {
      adjRow.parentNode.insertBefore(container, adjRow);
    } else if (articleBodyEl && articleBodyEl.parentNode) {
      articleBodyEl.parentNode.appendChild(container);
    }
  }

  const related = getRelatedArticles(currentArt);
  if (!related || related.length === 0) {
    container.innerHTML = "";
    container.classList.add("hidden");
    return;
  }

  container.classList.remove("hidden");
  container.innerHTML = `
        <div class="related-section-header">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
            <h3>Tài liệu & Bài giải liên quan</h3>
        </div>
        <div class="related-articles-grid">
            ${related
              .map(
                (art) => `
                <div class="related-article-card" data-id="${art.id}">
                    <div class="related-card-top">
                        <span class="card-cat-badge cat-${art.category}">
                            ${art.categoryName || "Tài liệu"}
                        </span>
                        <span class="related-read-time">${art.readTime || "3 phút"}</span>
                    </div>
                    <h4 class="related-card-title">${escapeHtml(art.title)}</h4>
                    <p class="related-card-desc">${escapeHtml(art.desc || "")}</p>
                    <div class="related-card-footer">
                        <span class="related-link-text">
                            <span>Xem tài liệu</span>
                            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </span>
                    </div>
                </div>
            `,
              )
              .join("")}
        </div>
    `;

  container.querySelectorAll(".related-article-card").forEach((card) => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-id");
      openArticle(id);
    });
  });
}

// Adjacent Articles Navigation (Prev/Next)
function setupAdjacentArticles(currentId) {
  const currIdx = allArticles.findIndex((a) => a.id === currentId);
  if (currIdx === -1) return;

  const prevArt = currIdx > 0 ? allArticles[currIdx - 1] : null;
  const nextArt =
    currIdx < allArticles.length - 1 ? allArticles[currIdx + 1] : null;

  if (prevArticleBtn) {
    if (prevArt) {
      prevArticleBtn.classList.remove("hidden");
      prevArticleBtn.innerHTML = `
                <div class="adj-direction">← Bài trước</div>
                <div class="adj-title">${escapeHtml(prevArt.title)}</div>
            `;
      prevArticleBtn.onclick = () => openArticle(prevArt.id);
    } else {
      prevArticleBtn.classList.add("hidden");
    }
  }

  if (nextArticleBtn) {
    if (nextArt) {
      nextArticleBtn.classList.remove("hidden");
      nextArticleBtn.innerHTML = `
                <div class="adj-direction">Bài tiếp theo →</div>
                <div class="adj-title">${escapeHtml(nextArt.title)}</div>
            `;
      nextArticleBtn.onclick = () => openArticle(nextArt.id);
    } else {
      nextArticleBtn.classList.add("hidden");
    }
  }
}

// Reading Scroll Progress Bar
function initScrollProgress() {
  window.addEventListener("scroll", () => {
    if (
      !readingProgressBar ||
      !articleDetailSection ||
      articleDetailSection.classList.contains("hidden")
    ) {
      if (readingProgressBar) readingProgressBar.style.width = "0%";
      return;
    }

    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.pageYOffset / totalHeight) * 100;
      readingProgressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }
  });
}

// Setup Event Listeners
function initArticleEvents() {
  if (articleSearchInput) {
    articleSearchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      if (articleClearSearch) {
        articleClearSearch.classList.toggle("hidden", !searchQuery);
      }
      renderArticlesGrid();
    });
  }

  if (articleClearSearch) {
    articleClearSearch.addEventListener("click", () => {
      searchQuery = "";
      if (articleSearchInput) articleSearchInput.value = "";
      articleClearSearch.classList.add("hidden");
      renderArticlesGrid();
    });
  }

  if (backToArticlesBtn) {
    backToArticlesBtn.addEventListener("click", () => {
      if (articleDetailSection) articleDetailSection.classList.add("hidden");
      if (articlesListSection) articlesListSection.classList.remove("hidden");
      window.scrollTo({ top: 0, behavior: "instant" });
    });
  }

  if (copyEosBtn) {
    copyEosBtn.addEventListener("click", () => {
      if (!currentArticle) return;
      const rawContent = articleContentCache[currentArticle.id] || "";
      const cleanText = formatMarkdownForEOS(rawContent);
      navigator.clipboard.writeText(cleanText).then(() => {
        const orig = copyEosBtn.innerHTML;
        copyEosBtn.innerHTML = `
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span style="color: #10b981;">Đã copy Text EOS!</span>
                `;
        setTimeout(() => {
          copyEosBtn.innerHTML = orig;
        }, 2500);
      });
    });
  }

  if (printArticleBtn) {
    printArticleBtn.addEventListener("click", () => {
      window.print();
    });
  }

  if (fontSizeToggle) {
    fontSizeToggle.addEventListener("click", () => {
      const sizes = ["normal", "large", "small"];
      const currentIdx = sizes.indexOf(currentFontSize);
      currentFontSize = sizes[(currentIdx + 1) % sizes.length];
      if (articleBodyEl) {
        articleBodyEl.className = `article-rendered-content font-${currentFontSize}`;
      }
      fontSizeToggle.querySelector(".size-label").textContent =
        currentFontSize === "large"
          ? "A+"
          : currentFontSize === "small"
            ? "A-"
            : "A";
    });
  }
}

// Clean markdown text for EOS exam copy
function formatMarkdownForEOS(markdown) {
  return markdown
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/```mermaid[\s\S]*?```/g, "")
    .replace(/\$\$(.*?)\$\$/gs, "$1")
    .replace(/\$(.*?)\$/g, "$1")
    .trim();
}

// GLOSSARY & ACRONYMS QUICK SEARCH
const GLOSSARY_TERMS = [
  {
    acronym: "AC",
    name: "Actual Cost",
    desc: "Chi phí thực tế đã chi ra tính đến thời điểm đánh giá.",
  },
  {
    acronym: "AON",
    name: "Activity-On-Node",
    desc: "Sơ đồ mạng biểu diễn công việc trong các nút hình hộp.",
  },
  {
    acronym: "BA",
    name: "Business Analyst",
    desc: "Chuyên viên phân tích nghiệp vụ, làm rõ yêu cầu khách hàng thành SRS.",
  },
  {
    acronym: "BAC",
    name: "Budget at Completion",
    desc: "Tổng ngân sách dự toán ban đầu được phê duyệt của toàn bộ dự án.",
  },
  {
    acronym: "CPI",
    name: "Cost Performance Index",
    desc: "Chỉ số hiệu suất chi phí: CPI = EV / AC (>1: dưới ngân sách, <1: vượt ngân sách).",
  },
  {
    acronym: "CPM",
    name: "Critical Path Method",
    desc: "Phương pháp đường găng xác định thời gian tối thiểu hoàn thành dự án.",
  },
  {
    acronym: "CR",
    name: "Change Request",
    desc: "Yêu cầu thay đổi phạm vi, tiến độ hoặc ngân sách.",
  },
  {
    acronym: "CV",
    name: "Cost Variance",
    desc: "Độ lệch chi phí: CV = EV - AC (>0: tiết kiệm chi phí, <0: bội chi).",
  },
  {
    acronym: "DAC",
    name: "Duration at Completion",
    desc: "Tổng thời lượng kế hoạch ban đầu của toàn bộ dự án.",
  },
  {
    acronym: "EAC",
    name: "Estimate at Completion",
    desc: "Ước tính tổng chi phí khi hoàn thành toàn bộ dự án: EAC = BAC / CPI.",
  },
  {
    acronym: "EF",
    name: "Early Finish",
    desc: "Thời điểm sớm nhất hoạt động có thể kết thúc (EF = ES + Duration).",
  },
  {
    acronym: "ES",
    name: "Early Start",
    desc: "Thời điểm sớm nhất hoạt động có thể bắt đầu.",
  },
  {
    acronym: "ETC",
    name: "Estimate to Complete",
    desc: "Chi phí còn lại cần bỏ ra để làm nốt phần việc: ETC = EAC - AC.",
  },
  {
    acronym: "EV",
    name: "Earned Value",
    desc: "Giá trị thu được từ khối lượng công việc thực tế đã hoàn thành.",
  },
  {
    acronym: "EVM",
    name: "Earned Value Management",
    desc: "Kỹ thuật quản trị tích hợp Phạm vi - Tiến độ - Chi phí.",
  },
  {
    acronym: "FF",
    name: "Finish-to-Finish",
    desc: "Quan hệ kết thúc - kết thúc: Việc sau kết thúc phụ thuộc việc trước kết thúc.",
  },
  {
    acronym: "FS",
    name: "Finish-to-Start",
    desc: "Quan hệ kết thúc - bắt đầu: Việc trước xong thì việc sau mới được bắt đầu.",
  },
  {
    acronym: "LF",
    name: "Late Finish",
    desc: "Thời điểm muộn nhất hoạt động phải kết thúc để không làm chậm dự án.",
  },
  {
    acronym: "LS",
    name: "Late Start",
    desc: "Thời điểm muộn nhất hoạt động phải bắt đầu để không làm chậm dự án.",
  },
  {
    acronym: "MVP",
    name: "Minimum Viable Product",
    desc: "Sản phẩm khả thi tối thiểu mang lại giá trị nhanh nhất để lấy phản hồi.",
  },
  {
    acronym: "PDM",
    name: "Precedence Diagramming Method",
    desc: "Phương pháp lập sơ đồ mạng theo 4 mối quan hệ phụ thuộc (FS, SS, FF, SF).",
  },
  {
    acronym: "PM",
    name: "Project Manager",
    desc: "Quản trị viên dự án (người chịu trách nhiệm cao nhất về kết quả dự án).",
  },
  {
    acronym: "PMBOK",
    name: "Project Management Body of Knowledge",
    desc: "Bộ chuẩn mực kiến thức quản lý dự án quốc tế của PMI.",
  },
  {
    acronym: "PV",
    name: "Planned Value",
    desc: "Giá trị kế hoạch của khối lượng công việc dự kiến phải làm tại mốc t.",
  },
  {
    acronym: "QA",
    name: "Quality Assurance",
    desc: "Đảm bảo chất lượng quy trình phát triển để ngăn ngừa lỗi.",
  },
  {
    acronym: "QC",
    name: "Quality Control",
    desc: "Kiểm soát chất lượng kiểm tra trực tiếp sản phẩm đầu ra để tìm và sửa lỗi.",
  },
  {
    acronym: "RACI",
    name: "Responsible - Accountable - Consulted - Informed",
    desc: "Ma trận phân công trách nhiệm (quy tắc: mỗi task chỉ có duy nhất 1 chữ A).",
  },
  {
    acronym: "SDLC",
    name: "Software Development Life Cycle",
    desc: "Vòng đời phát triển phần mềm: Yêu cầu -> Thiết kế -> Code -> Test -> Release.",
  },
  {
    acronym: "SF",
    name: "Start-to-Finish",
    desc: "Quan hệ bắt đầu - kết thúc: Việc trước bắt đầu thì việc sau mới được kết thúc.",
  },
  {
    acronym: "SLA",
    name: "Service Level Agreement",
    desc: "Thỏa thuận cam kết mức độ dịch vụ với đối tác/khách hàng.",
  },
  {
    acronym: "SMART",
    name: "Specific - Measurable - Achievable - Relevant - Time-bound",
    desc: "Tiêu chuẩn 5 yếu tố thiết lập mục tiêu dự án khoa học và định lượng.",
  },
  {
    acronym: "SPI",
    name: "Schedule Performance Index",
    desc: "Chỉ số hiệu suất tiến độ: SPI = EV / PV (>1: nhanh tiến độ, <1: chậm tiến độ).",
  },
  {
    acronym: "SRS",
    name: "Software Requirement Specification",
    desc: "Tài liệu đặc tả yêu cầu kỹ thuật và nghiệp vụ phần mềm.",
  },
  {
    acronym: "SS",
    name: "Start-to-Start",
    desc: "Quan hệ bắt đầu - bắt đầu: Hai việc có thể bắt đầu song song cùng lúc.",
  },
  {
    acronym: "SSO",
    name: "Single Sign-On",
    desc: "Cơ chế đăng nhập một lần (Google OAuth, Apple ID, Microsoft SSO).",
  },
  {
    acronym: "SV",
    name: "Schedule Variance",
    desc: "Độ lệch tiến độ: SV = EV - PV (>0: nhanh tiến độ, <0: chậm trễ).",
  },
  {
    acronym: "TF / Float",
    name: "Total Float (Slack)",
    desc: "Độ trôi cho phép: Float = LS - ES = LF - EF (Float = 0 là công việc găng).",
  },
  {
    acronym: "UAT",
    name: "User Acceptance Testing",
    desc: "Kiểm thử chấp nhận người dùng cuối trước khi bàn giao chính thức.",
  },
  {
    acronym: "VAC",
    name: "Variance at Completion",
    desc: "Chênh lệch ngân sách khi hoàn thành: VAC = BAC - EAC (>0: dư tiền, <0: thiếu hụt).",
  },
  {
    acronym: "WBS",
    name: "Work Breakdown Structure",
    desc: "Cấu trúc phân rã công việc theo thứ bậc sản phẩm bàn giao (Levels 1-4).",
  },
];

let currentGlossaryFilter = "ALL";

function initGlossary() {
  renderAlphabetFilter();
  renderGlossaryCards();

  if (glossarySearchInput) {
    glossarySearchInput.addEventListener("input", () => {
      renderGlossaryCards();
    });
  }
}

function renderAlphabetFilter() {
  if (!alphabetFilterContainer) return;

  const letters = [
    "ALL",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "L",
    "M",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
  ];
  alphabetFilterContainer.innerHTML = letters
    .map(
      (char) => `
        <button class="alpha-btn ${currentGlossaryFilter === char ? "active" : ""}" data-char="${char}">
            ${char}
        </button>
    `,
    )
    .join("");

  alphabetFilterContainer.querySelectorAll(".alpha-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentGlossaryFilter = btn.getAttribute("data-char");
      renderAlphabetFilter();
      renderGlossaryCards();
    });
  });
}

function renderGlossaryCards() {
  if (!glossaryCardsContainer) return;

  const q = glossarySearchInput
    ? glossarySearchInput.value.toLowerCase().trim()
    : "";
  const filtered = GLOSSARY_TERMS.filter((item) => {
    const matchesAlpha =
      currentGlossaryFilter === "ALL" ||
      item.acronym.toUpperCase().startsWith(currentGlossaryFilter);
    const matchesSearch =
      !q ||
      item.acronym.toLowerCase().includes(q) ||
      item.name.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q);
    return matchesAlpha && matchesSearch;
  });

  if (filtered.length === 0) {
    glossaryCardsContainer.innerHTML = `
            <div class="empty-state-sm">Không tìm thấy thuật ngữ nào phù hợp.</div>
        `;
    return;
  }

  glossaryCardsContainer.innerHTML = filtered
    .map(
      (item) => `
        <div class="glossary-card">
            <div class="glossary-card-top">
                <span class="glossary-acronym">${item.acronym}</span>
                <span class="glossary-full-name">${item.name}</span>
            </div>
            <p class="glossary-desc">${item.desc}</p>
        </div>
    `,
    )
    .join("");
}

// INTERACTIVE EVM CALCULATOR
function initEvmCalculator() {
  if (!evmCalculateBtn) return;

  evmCalculateBtn.addEventListener("click", () => {
    calculateEVM();
  });

  [
    evmBacInput,
    evmDacInput,
    evmTimeInput,
    evmProgressInput,
    evmAcInput,
  ].forEach((inp) => {
    if (inp) {
      inp.addEventListener("input", () => {
        calculateEVM();
      });
    }
  });
}

function calculateEVM() {
  const bac = parseFloat(evmBacInput ? evmBacInput.value : 0) || 0;
  const dac = parseFloat(evmDacInput ? evmDacInput.value : 0) || 0;
  const t = parseFloat(evmTimeInput ? evmTimeInput.value : 0) || 0;
  const progressPercent =
    parseFloat(evmProgressInput ? evmProgressInput.value : 0) || 0;
  const ac = parseFloat(evmAcInput ? evmAcInput.value : 0) || 0;

  if (bac <= 0 || dac <= 0) {
    if (evmResultCard) evmResultCard.classList.add("hidden");
    return;
  }

  const pv = (t / dac) * bac;
  const ev = (progressPercent / 100) * bac;
  const cv = ev - ac;
  const sv = ev - pv;
  const cpi = ac > 0 ? ev / ac : 0;
  const spi = pv > 0 ? ev / pv : 0;
  const eac = cpi > 0 ? bac / cpi : 0;
  const etc = eac - ac;
  const vac = bac - eac;

  const isCostGood = cv >= 0;
  const isScheduleGood = sv >= 0;

  if (evmResultCard) {
    evmResultCard.classList.remove("hidden");
    evmResultCard.innerHTML = `
            <div class="evm-results-grid">
                <div class="evm-stat-box ${isCostGood ? "stat-good" : "stat-bad"}">
                    <div class="stat-label">Cost Performance Index (CPI)</div>
                    <div class="stat-val">${cpi.toFixed(3)}</div>
                    <div class="stat-tag">${isCostGood ? "Tiết kiệm chi phí" : "Vượt ngân sách (Bội chi)"}</div>
                    <small>CV = ${cv >= 0 ? "+" : ""}$${cv.toLocaleString()}</small>
                </div>

                <div class="evm-stat-box ${isScheduleGood ? "stat-good" : "stat-bad"}">
                    <div class="stat-label">Schedule Performance Index (SPI)</div>
                    <div class="stat-val">${spi.toFixed(3)}</div>
                    <div class="stat-tag">${isScheduleGood ? "Nhanh tiến độ" : "Chậm tiến độ (Trễ hạn)"}</div>
                    <small>SV = ${sv >= 0 ? "+" : ""}$${sv.toLocaleString()}</small>
                </div>

                <div class="evm-stat-box">
                    <div class="stat-label">Planned Value (PV)</div>
                    <div class="stat-val">$${Math.round(pv).toLocaleString()}</div>
                    <small>Kế hoạch tại tháng ${t}/${dac}</small>
                </div>

                <div class="evm-stat-box">
                    <div class="stat-label">Earned Value (EV)</div>
                    <div class="stat-val">$${Math.round(ev).toLocaleString()}</div>
                    <small>Thực tế hoàn thành ${progressPercent}%</small>
                </div>

                <div class="evm-stat-box">
                    <div class="stat-label">Estimate at Completion (EAC)</div>
                    <div class="stat-val">$${Math.round(eac).toLocaleString()}</div>
                    <small>Dự báo tổng chi phí</small>
                </div>

                <div class="evm-stat-box">
                    <div class="stat-label">Variance at Completion (VAC)</div>
                    <div class="stat-val ${vac >= 0 ? "text-good" : "text-bad"}">${vac >= 0 ? "+" : ""}$${Math.round(vac).toLocaleString()}</div>
                    <small>${vac >= 0 ? "Dư ngân sách" : "Thiếu hụt ngân sách"}</small>
                </div>
            </div>

            <div class="evm-action-advice">
                <h4>Đề xuất hành động khắc phục cho bài thi EOS:</h4>
                <ul>
                    ${
                      !isScheduleGood
                        ? `
                        <li><strong>Khắc phục Tiến độ (SPI = ${spi.toFixed(2)} < 1.0):</strong> Áp dụng <em>Fast-tracking</em> (thực hiện song song các task độc lập) hoặc <em>Crashing</em> (bổ sung thêm nhân sự làm thêm giờ OT) trên các công việc thuộc đường găng.</li>
                    `
                        : `
                        <li><strong>Tiến độ (SPI = ${spi.toFixed(2)} ≥ 1.0):</strong> Tiếp tục duy trì hiệu suất làm việc hiện tại, theo dõi sát sao các rủi ro kỹ thuật.</li>
                    `
                    }
                    ${
                      !isCostGood
                        ? `
                        <li><strong>Khắc phục Chi phí (CPI = ${cpi.toFixed(2)} < 1.0):</strong> Rà soát quy trình mua sắm, đàm phán lại đơn giá license/nhà thầu, cắt giảm các chi phí vận hành không cần thiết và trích quỹ dự phòng <em>Contingency Reserve</em>.</li>
                    `
                        : `
                        <li><strong>Chi phí (CPI = ${cpi.toFixed(2)} ≥ 1.0):</strong> Quản lý chi tiêu đang rất hiệu quả ($1 bỏ ra tạo ra $${cpi.toFixed(2)} giá trị).</li>
                    `
                    }
                </ul>
            </div>
        `;
  }
}

// Utility: HTML Escape
function escapeHtml(text) {
  if (!text) return "";
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}
