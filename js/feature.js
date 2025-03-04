document.addEventListener("DOMContentLoaded", function () {
    // ===== Scroll to Top Button =====
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // ===== Loading Spinner =====
    const spinner = document.getElementById("loadingSpinner");
    function showSpinner() {
        spinner.style.display = "block";
    }
    function hideSpinner() {
        spinner.style.display = "none";
    }

    // Simulate loading effect (can remove in production)
    showSpinner();
    setTimeout(hideSpinner, 1500);

    // ===== Back Button =====
    document.getElementById("backBtn").addEventListener("click", function () {
        window.history.back();
    });

    // ===== Toast Notifications =====
    function showToast(message) {
        const toast = document.getElementById("toast");
        toast.textContent = message;
        toast.classList.add("show");

        setTimeout(function () {
            toast.classList.remove("show");
        }, 3000);
    }

    // Example usage (remove or modify in production)
    setTimeout(() => showToast("Welcome to EarnScholar!"), 2000);

    // ===== Lazy Loading for Images =====
    const lazyImages = document.querySelectorAll(".lazy-load");

    function lazyLoad() {
        lazyImages.forEach(img => {
            if (img.getBoundingClientRect().top < window.innerHeight && img.getBoundingClientRect().bottom > 0) {
                img.src = img.dataset.src;
                img.classList.add("loaded");
                img.classList.remove("lazy-load");
            }
        });
    }

    window.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    lazyLoad(); // Initial check
});
