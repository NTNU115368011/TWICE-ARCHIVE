
// ========================================
// TWICE ARCHIVE
// Common JavaScript
// ========================================

// 1. 自動更新頁尾年份
const yearElement = document.querySelector("#current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// 2. 自動標示目前所在頁面
const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }
});
