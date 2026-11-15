/**
 * AIO 2026 · AI KNOWLEDGE HUB CONTROLLER (app.js)
 * Interactive logic for tabs, KaTeX math, quizzes, flashcards, search hub
 */

document.addEventListener("DOMContentLoaded", () => {
  // Application State
  const state = {
    activeCourseId: "python",
    activeLessonId: "py_basics",
    activeTab: "theory",
    isSearchHubOpen: false,
    activeSearchTag: "all",
    theme: localStorage.getItem("aio_theme") || "light"
  };

  // DOM Elements
  const courseTabsContainer = document.getElementById("course-tabs-container");
  const lessonPillsContainer = document.getElementById("lesson-pills-container");
  const lessonHero = document.getElementById("lesson-hero");
  const contentPanel = document.getElementById("content-panel");
  const categoryMenu = document.getElementById("category-menu");
  const standardView = document.getElementById("standard-view");
  const searchHubView = document.getElementById("search-hub-view");
  const btnSearchHub = document.getElementById("btn-search-hub");
  const globalSearchInput = document.getElementById("global-search-input");
  const clearSearchBtn = document.getElementById("clear-search-btn");
  const searchResultsContainer = document.getElementById("search-results-container");
  const searchTagsContainer = document.getElementById("search-tags-container");
  const themeToggle = document.getElementById("theme-toggle");
  const quizBadge = document.getElementById("quiz-count");

  // Apply Initial Theme
  document.body.className = `theme-${state.theme}`;
  updateThemeIcon();

  // ================= 1. THEME CONTROLLER =================
  themeToggle.addEventListener("click", () => {
    state.theme = state.theme === "light" ? "dark" : "light";
    document.body.className = `theme-${state.theme}`;
    localStorage.setItem("aio_theme", state.theme);
    updateThemeIcon();
  });

  function updateThemeIcon() {
    const iconSpan = themeToggle.querySelector(".theme-icon");
    iconSpan.textContent = state.theme === "light" ? "🌙" : "☀️";
  }

  // ================= 2. NAVIGATION RENDERERS =================
  function renderCourseTabs() {
    courseTabsContainer.innerHTML = "";
    window.AIO_COURSES.forEach(course => {
      const btn = document.createElement("button");
      btn.className = `course-tab-btn ${course.id === state.activeCourseId && !state.isSearchHubOpen ? "active" : ""}`;
      btn.innerHTML = `<span>${course.icon}</span> <span>${course.title}</span>`;
      btn.addEventListener("click", () => {
        state.isSearchHubOpen = false;
        state.activeCourseId = course.id;
        state.activeLessonId = course.lessons[0].id;
        updateView();
      });
      courseTabsContainer.appendChild(btn);
    });

    // Add Tab for Search Hub
    const searchTab = document.createElement("button");
    searchTab.className = `course-tab-btn ${state.isSearchHubOpen ? "active" : ""}`;
    searchTab.innerHTML = `<span>📚</span> <span>Sổ Tra cứu Tổng hợp</span>`;
    searchTab.addEventListener("click", openSearchHub);
    courseTabsContainer.appendChild(searchTab);
  }

  function renderLessonPills() {
    lessonPillsContainer.innerHTML = "";
    if (state.isSearchHubOpen) {
      document.getElementById("lesson-bar").classList.add("hidden");
      return;
    }
    document.getElementById("lesson-bar").classList.remove("hidden");

    const currentCourse = window.AIO_COURSES.find(c => c.id === state.activeCourseId);
    if (!currentCourse) return;

    currentCourse.lessons.forEach((lesson, index) => {
      const pill = document.createElement("button");
      pill.className = `lesson-pill ${lesson.id === state.activeLessonId ? "active" : ""}`;
      pill.innerHTML = `<span>#${index + 1}</span> ${lesson.title.split(":")[0]}`;
      pill.title = lesson.title;
      pill.addEventListener("click", () => {
        state.activeLessonId = lesson.id;
        renderLessonContent();
      });
      lessonPillsContainer.appendChild(pill);
    });
  }

  // ================= 3. CONTENT RENDERERS =================
  function renderLessonContent() {
    const currentCourse = window.AIO_COURSES.find(c => c.id === state.activeCourseId);
    if (!currentCourse) return;
    const currentLesson = currentCourse.lessons.find(l => l.id === state.activeLessonId);
    if (!currentLesson) return;

    // Render Hero Banner
    lessonHero.innerHTML = `
      <span class="hero-badge">${currentLesson.badge}</span>
      <h2 class="hero-title">${currentLesson.title}</h2>
      <p class="hero-desc">${currentLesson.description}</p>
    `;

    // Update Quiz badge count
    quizBadge.textContent = currentLesson.content.quiz ? currentLesson.content.quiz.length : 0;

    // Render Tab Content
    renderActiveTabContent(currentLesson);
    renderLessonPills();
  }

  function renderActiveTabContent(lesson) {
    const tab = state.activeTab;
    let html = "";

    switch (tab) {
      case "theory":
        html = `
          <h3 class="tab-pane-title"><span>📘</span> Lý thuyết Cốt lõi & Bản chất</h3>
          ${lesson.content.theory || "<p>Chưa có nội dung cho phần này.</p>"}
        `;
        break;

      case "math":
        html = `
          <h3 class="tab-pane-title"><span>📐</span> Công thức Toán & Trực giác Hình học</h3>
          ${lesson.content.math || "<p>Chưa có công thức toán cho phần này.</p>"}
        `;
        break;

      case "code":
        html = `
          <h3 class="tab-pane-title"><span>💻</span> Code Template Thực hành</h3>
          <p style="margin-bottom: 12px; font-size: 14px; color: var(--text-secondary);">
            Đoạn mã Python / PyTorch chuẩn hóa kèm giải thích, sẵn sàng copy chạy thử:
          </p>
          <div class="code-container">
            <div class="code-header">
              <span>Python · Live Sandbox</span>
              <button class="btn-copy-code" onclick="copyCode(this)">Sao chép</button>
            </div>
            <pre><code class="language-python">${escapeHtml(lesson.content.code.trim())}</code></pre>
          </div>
        `;
        break;

      case "quiz":
        html = renderQuizSection(lesson.content.quiz);
        break;

      case "flashcards":
        html = renderFlashcardsSection(lesson.content.flashcards);
        break;

      case "tips":
        html = `
          <h3 class="tab-pane-title"><span>💡</span> Mẹo Thực chiến & Phỏng vấn AI</h3>
          ${lesson.content.tips || "<p>Chưa có ghi chú mẹo.</p>"}
        `;
        break;
    }

    contentPanel.innerHTML = html;

    // Trigger Code Highlighting
    if (tab === "code") {
      document.querySelectorAll("pre code").forEach(block => {
        hljs.highlightElement(block);
      });
    }

    // Trigger MathJax / KaTeX render
    triggerMathRender();
  }

  function renderQuizSection(quizzes) {
    if (!quizzes || quizzes.length === 0) {
      return `<h3 class="tab-pane-title"><span>🎯</span> Mini Quiz Ôn tập</h3><p>Chưa có bài quiz nào cho bài này.</p>`;
    }

    let quizHtml = `
      <h3 class="tab-pane-title"><span>🎯</span> Mini Quiz Ôn tập & Củng cố (Tương tác ngay)</h3>
      <p style="margin-bottom: 20px; font-size: 14px; color: var(--text-secondary);">
        Chọn một phương án để kiểm tra kiến thức và xem lời giải thích chi tiết:
      </p>
    `;

    quizzes.forEach((q, qIndex) => {
      quizHtml += `
        <div class="quiz-item" data-quiz="${qIndex}">
          <div class="quiz-question">Câu ${qIndex + 1}: ${q.question}</div>
          <div class="quiz-options">
            ${q.options.map((opt, optIndex) => `
              <button class="quiz-opt-btn" onclick="handleQuizAnswer(${qIndex}, ${optIndex}, ${q.answer})">
                <span class="opt-label">${String.fromCharCode(65 + optIndex)}.</span>
                <span>${opt}</span>
              </button>
            `).join("")}
          </div>
          <div class="quiz-explanation" id="quiz-exp-${qIndex}">
            <strong>💡 Giải thích chi tiết:</strong> ${q.explanation}
          </div>
        </div>
      `;
    });

    return quizHtml;
  }

  function renderFlashcardsSection(flashcards) {
    if (!flashcards || flashcards.length === 0) {
      return `<h3 class="tab-pane-title"><span>📇</span> Flashcards Thuật ngữ</h3><p>Chưa có flashcard cho bài này.</p>`;
    }

    let fcHtml = `
      <h3 class="tab-pane-title"><span>📇</span> Flashcards Ghi nhớ Thuật ngữ (Bấm để lật thẻ)</h3>
      <p style="margin-bottom: 15px; font-size: 14px; color: var(--text-secondary);">
        Nhấp chuột vào bất kỳ thẻ nào để lật sang mặt sau xem định nghĩa:
      </p>
      <div class="flashcards-grid">
    `;

    flashcards.forEach(card => {
      fcHtml += `
        <div class="flashcard-card" onclick="this.classList.toggle('flipped')">
          <div class="flashcard-inner">
            <div class="flashcard-front">
              <h4>${card.front}</h4>
              <span class="hint">Bấm để lật mặt sau ↻</span>
            </div>
            <div class="flashcard-back">
              <p>${card.back}</p>
            </div>
          </div>
        </div>
      `;
    });

    fcHtml += `</div>`;
    return fcHtml;
  }

  // ================= 4. MATH RENDERING HELPER =================
  function triggerMathRender() {
    if (window.renderMathInElement) {
      renderMathInElement(contentPanel, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false }
        ],
        throwOnError: false
      });
    }
  }

  // ================= 5. EVENT HANDLERS & SEARCH HUB =================
  categoryMenu.addEventListener("click", e => {
    const btn = e.target.closest(".cat-btn");
    if (!btn) return;
    document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    state.activeTab = btn.dataset.tab;
    const currentCourse = window.AIO_COURSES.find(c => c.id === state.activeCourseId);
    const currentLesson = currentCourse.lessons.find(l => l.id === state.activeLessonId);
    renderActiveTabContent(currentLesson);
  });

  function openSearchHub() {
    state.isSearchHubOpen = true;
    renderCourseTabs();
    document.getElementById("lesson-bar").classList.add("hidden");
    standardView.classList.add("hidden");
    searchHubView.classList.remove("hidden");
    globalSearchInput.focus();
    performSearch();
  }

  function closeSearchHub() {
    state.isSearchHubOpen = false;
    searchHubView.classList.add("hidden");
    standardView.classList.remove("hidden");
    document.getElementById("lesson-bar").classList.remove("hidden");
    renderCourseTabs();
    renderLessonContent();
  }

  btnSearchHub.addEventListener("click", openSearchHub);

  // Search Logic
  globalSearchInput.addEventListener("input", performSearch);
  clearSearchBtn.addEventListener("click", () => {
    globalSearchInput.value = "";
    performSearch();
    globalSearchInput.focus();
  });

  searchTagsContainer.addEventListener("click", e => {
    const pill = e.target.closest(".tag-pill");
    if (!pill) return;
    document.querySelectorAll(".tag-pill").forEach(p => p.classList.remove("active"));
    pill.classList.add("active");
    state.activeSearchTag = pill.dataset.tag;
    performSearch();
  });

  function performSearch() {
    const query = globalSearchInput.value.toLowerCase().trim();
    const tag = state.activeSearchTag;
    searchResultsContainer.innerHTML = "";

    const allLessons = [];
    window.AIO_COURSES.forEach(c => {
      c.lessons.forEach(l => {
        allLessons.push({ ...l, courseId: c.id, courseTitle: c.title });
      });
    });

    const filtered = allLessons.filter(lesson => {
      const matchTag = tag === "all" || (lesson.tags && lesson.tags.includes(tag)) || lesson.courseId === tag;
      const matchQuery = !query ||
        lesson.title.toLowerCase().includes(query) ||
        lesson.description.toLowerCase().includes(query) ||
        (lesson.tags && lesson.tags.some(t => t.toLowerCase().includes(query))) ||
        (lesson.content.theory && lesson.content.theory.toLowerCase().includes(query));
      return matchTag && matchQuery;
    });

    if (filtered.length === 0) {
      searchResultsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
          <p style="font-size: 18px;">Không tìm thấy bài học nào phù hợp với từ khóa "${query}".</p>
        </div>
      `;
      return;
    }

    filtered.forEach(lesson => {
      const card = document.createElement("div");
      card.className = "search-card";
      card.innerHTML = `
        <div class="search-card-badge">${lesson.courseTitle}</div>
        <h4>${lesson.title}</h4>
        <p>${lesson.description}</p>
        <div style="margin-top: 10px; display: flex; gap: 4px; flex-wrap: wrap;">
          ${(lesson.tags || []).map(t => `<span style="font-size: 11px; background: var(--bg-surface); padding: 2px 6px; border-radius: 4px; border: 1px solid var(--border-color); color: var(--text-muted);">#${t}</span>`).join("")}
        </div>
      `;
      card.addEventListener("click", () => {
        state.activeCourseId = lesson.courseId;
        state.activeLessonId = lesson.id;
        state.isSearchHubOpen = false;
        closeSearchHub();
      });
      searchResultsContainer.appendChild(card);
    });
  }

  // Keyboard shortcut Ctrl+K / Cmd+K
  document.addEventListener("keydown", e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (state.isSearchHubOpen) {
        closeSearchHub();
      } else {
        openSearchHub();
      }
    }
    if (e.key === "Escape" && state.isSearchHubOpen) {
      closeSearchHub();
    }
  });

  // Global helper functions
  window.handleQuizAnswer = (qIndex, chosenIndex, correctIndex) => {
    const quizItem = document.querySelector(`.quiz-item[data-quiz="${qIndex}"]`);
    const options = quizItem.querySelectorAll(".quiz-opt-btn");
    const explanation = document.getElementById(`quiz-exp-${qIndex}`);

    options.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === correctIndex) {
        btn.classList.add("correct");
        btn.querySelector(".opt-label").textContent = "✓";
      } else if (idx === chosenIndex) {
        btn.classList.add("incorrect");
        btn.querySelector(".opt-label").textContent = "✗";
      }
    });

    explanation.style.display = "block";
  };

  window.copyCode = btn => {
    const pre = btn.closest(".code-container").querySelector("pre code");
    navigator.clipboard.writeText(pre.innerText).then(() => {
      const originalText = btn.textContent;
      btn.textContent = "Đã chép! ✓";
      btn.style.background = "#10b981";
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = "";
      }, 2000);
    });
  };

  function escapeHtml(text) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
  }

  function updateView() {
    renderCourseTabs();
    renderLessonPills();
    renderLessonContent();
  }

  // Initial Run
  updateView();
});
