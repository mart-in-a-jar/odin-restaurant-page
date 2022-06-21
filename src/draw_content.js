import { mainPage } from "./pages";


const clearContent = () => {
    const content = document.querySelector(".mainContent");
    content.textContent = "";
}

const renderTemplate = () => {
    const content = document.querySelector("#content");
    const header = mainPage().header;
    const mainContent = mainPage().content;
    const footer = mainPage().footer;
    content.append(header, mainContent, footer);
}

const renderStartPage = () => {

}

const renderMenuPage = () => {

}

const renderDepartments = () => {
    
}

const changePage = (page) => {
    clearContent();

    switch (page) {
        case "hjem":
            renderStartPage();
            break;
        case "meny":
            renderMenuPage();
            break;
        case "avdelinger":
            renderDepartments();
            break;
        default:
            break;
    }
}

export { clearContent, renderTemplate, renderStartPage, changePage };