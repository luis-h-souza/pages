"use strict";

document.documentElement.classList.add("js");

const menuButton = document.querySelector(".nav-toggle");
const navigation = document.querySelector(".site-nav__links");

if (menuButton && navigation) {
    const closeMenu = () => {
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.querySelector(".sr-only").textContent = "Abrir menu";
        navigation.classList.remove("is-open");
    };

    menuButton.addEventListener("click", () => {
        const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", String(!isExpanded));
        menuButton.querySelector(".sr-only").textContent = isExpanded ? "Abrir menu" : "Fechar menu";
        navigation.classList.toggle("is-open", !isExpanded);
    });

    navigation.addEventListener("click", (event) => {
        if (event.target instanceof HTMLAnchorElement) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
            closeMenu();
            menuButton.focus();
        }
    });
}

document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
});
