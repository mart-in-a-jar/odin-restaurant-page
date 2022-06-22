import "./style.css";
import { clearContent, renderTemplate, renderStartPage, changePage } from "./draw_content";


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


window.clearContent = clearContent;