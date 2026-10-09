/* ICT251 Activity 3: contact form, gallery viewer, project filter and theme switch. */
"use strict";

document.addEventListener("DOMContentLoaded", () => {
    setupContactForm();
    setupGallery();
    setupProjectFilter();
    setupThemeSwitch();
});

// Check the contact form locally and display a safe preview without sending data.
function setupContactForm() {
    const form = document.querySelector("#contact-form");
    if (!form) return;

    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const messageInput = document.querySelector("#message");
    const topicInput = document.querySelector("#topic");
    const status = document.querySelector("#form-status");
    const preview = document.querySelector("#form-preview");

    const errorTargets = {
        name: document.querySelector("#name-error"),
        email: document.querySelector("#email-error"),
        message: document.querySelector("#message-error")
    };

    function showError(input, target, message) {
        target.textContent = message;
        input.setAttribute("aria-invalid", message ? "true" : "false");
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        preview.hidden = true;
        status.textContent = "";
        status.classList.remove("success-message");

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const nameError = name ? "" : "Please enter your name; spaces alone are not accepted.";
        const emailError = emailPattern.test(email) ? "" : "Enter a valid email address, for example student@example.com.";
        const messageError = message ? "" : "Please enter a message; spaces alone are not accepted.";

        showError(nameInput, errorTargets.name, nameError);
        showError(emailInput, errorTargets.email, emailError);
        showError(messageInput, errorTargets.message, messageError);

        if (nameError || emailError || messageError) {
            status.textContent = "Please correct the highlighted fields and try again.";
            const firstInvalid = form.querySelector('[aria-invalid="true"]');
            if (firstInvalid) firstInvalid.focus();
            return;
        }

        // textContent treats user input as text rather than executable HTML.
        document.querySelector("#preview-name").textContent = name;
        document.querySelector("#preview-email").textContent = email;
        document.querySelector("#preview-topic").textContent = topicInput.value;
        document.querySelector("#preview-message").textContent = message;
        preview.hidden = false;
        status.textContent = "Success: your data was validated in this browser. No message was sent or delivered.";
    });

    [nameInput, emailInput, messageInput].forEach((input) => {
        input.addEventListener("input", () => {
            const target = errorTargets[input.id];
            if (target) showError(input, target, "");
            status.textContent = "";
        });
    });
}

// Move through the supplied three photos, wrapping correctly at either end.
function setupGallery() {
    const image = document.querySelector("#gallery-image");
    const caption = document.querySelector("#gallery-caption");
    const count = document.querySelector("#gallery-count");
    const previous = document.querySelector("#gallery-prev");
    const next = document.querySelector("#gallery-next");
    if (!image || !caption || !count || !previous || !next) return;

    const photos = [
        { src: "images/photo1.jpeg", alt: "Latif taking a mirror photo at the gym", caption: "At the gym" },
        { src: "images/photo2.jpeg", alt: "Latif taking a mirror selfie wearing a white vest", caption: "Personal photo" },
        { src: "images/photo3.jpeg", alt: "Latif taking another seated mirror selfie", caption: "Personal photo" }
    ];
    let currentIndex = 0;

    function showPhoto(index) {
        currentIndex = (index + photos.length) % photos.length;
        const photo = photos[currentIndex];
        image.src = photo.src;
        image.alt = photo.alt;
        caption.textContent = `Photo ${currentIndex + 1} of ${photos.length} — ${photo.caption}`;
        count.textContent = `${currentIndex + 1} / ${photos.length}`;
    }

    previous.addEventListener("click", () => showPhoto(currentIndex - 1));
    next.addEventListener("click", () => showPhoto(currentIndex + 1));
    showPhoto(currentIndex);
}

// Filter the project/skill cards by their title, description and keywords.
function setupProjectFilter() {
    const search = document.querySelector("#project-search");
    const reset = document.querySelector("#project-reset");
    const status = document.querySelector("#filter-status");
    const cards = Array.from(document.querySelectorAll(".project-card"));
    if (!search || !reset || !status || cards.length === 0) return;

    function filterProjects() {
        const query = search.value.trim().toLowerCase();
        let visibleCount = 0;

        cards.forEach((card) => {
            const searchableText = `${card.textContent} ${card.dataset.search || ""}`.toLowerCase();
            const matches = searchableText.includes(query);
            card.hidden = !matches;
            if (matches) visibleCount += 1;
        });

        if (visibleCount === 0) {
            status.textContent = "No projects or skills match that search. Try another word or reset the filter.";
        } else if (query === "") {
            status.textContent = `Showing all ${visibleCount} projects and skills.`;
        } else {
            status.textContent = `Showing ${visibleCount} matching project${visibleCount === 1 ? "" : "s"}.`;
        }
    }

    search.addEventListener("input", filterProjects);
    reset.addEventListener("click", () => {
        search.value = "";
        filterProjects();
        search.focus();
    });
    filterProjects();
}

// Toggle between readable light and dark themes.
function setupThemeSwitch() {
    const button = document.querySelector("#theme-toggle");
    if (!button) return;

    button.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark-theme");
        button.setAttribute("aria-pressed", String(isDark));
        button.textContent = isDark ? "Switch to light theme" : "Switch to dark theme";
    });
}
