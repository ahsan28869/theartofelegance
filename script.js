document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobile Navigation Toggle
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }

    // 2. Newsletter Form Handling
    const newsletterForm = document.getElementById("newsletterForm");
    const emailInput = document.getElementById("emailInput");

    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {
            e.preventDefault();
            if (emailInput.value.trim() !== "") {
                alert(`Thank you for subscribing, ${emailInput.value}! Welcome to the Vibe List.`);
                emailInput.value = "";
            }
        });
    }

    // 3. Simple Collections Carousel Navigation
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const collectionsGrid = document.querySelector(".collections-grid");

    if (prevBtn && nextBtn && collectionsGrid) {
        nextBtn.addEventListener("click", () => {
            collectionsGrid.scrollBy({ left: 300, behavior: "smooth" });
        });

        prevBtn.addEventListener("click", () => {
            collectionsGrid.scrollBy({ left: -300, behavior: "smooth" });
        });
    }

    // 4. Add to Bag Interactive Feedback
    const addToBagButtons = document.querySelectorAll(".btn-add-cart");
    addToBagButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const originalText = button.textContent;
            button.textContent = "ADDED!";
            button.style.background = "#ffffff";
            button.style.color = "#000000";

            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = "";
                button.style.color = "";
            }, 1500);
        });
    });
});