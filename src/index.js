import "./style.css";
import { renderTemplate, changePage } from "./draw_content";


renderTemplate();
changePage("meny");


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