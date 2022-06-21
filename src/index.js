import "./style.css";
import { clearContent, renderTemplate, renderStartPage, changePage } from "./draw_content";


renderTemplate();

const menuButtons = document.querySelectorAll("header ul.menu li a");


menuButtons.forEach(button => {
    button.addEventListener("click", () => {
        changePage(button.textContent.toLowerCase());
    });
});


window.clearContent = clearContent;