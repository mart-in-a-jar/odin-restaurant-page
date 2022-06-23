import "./style.css";
import { renderTemplate, changePage, renderDepartmentInfo } from "./draw_content";


renderTemplate();

// Page navigation
const menuButtons = document.querySelectorAll("header ul.menu li a");
menuButtons.forEach(button => {
    button.addEventListener("click", () => {
        changePage(button.textContent.toLowerCase());
        
        menuButtons.forEach(button => {
            button.classList.remove("active");
        });

        button.classList.add("active");

    });
});

// Navigate to departments
const departmentCards = document.querySelectorAll(".departments a");
departmentCards.forEach(card => {
    card.addEventListener("click", (e) => {
        const name = e.target.querySelector(".name").textContent;
        const place = e.target.querySelector(".location").textContent;
        const img = e.target.style["background-image"].match(/url\(\"(.+)\"\)/)[1];
        const department = { name, place, img }
        renderDepartmentInfo(department);
    });
});