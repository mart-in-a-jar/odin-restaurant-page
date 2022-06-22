import { mainPage, menu, departments } from "./pages";

const clearContent = () => {
    const content = document.querySelector(".mainContent");
    content.textContent = "";
    content.classList.remove("noFlex");
}

const renderTemplate = () => {
    const content = document.querySelector("#content");
    const header = mainPage.header;
    const mainContent = mainPage.contentWrapper;
    const footer = mainPage.footer;
    content.append(header, mainContent, footer);
    renderStartPage();
}

const renderStartPage = () => {
    const ele = mainPage.content;
    const maincontent = document.querySelector(".mainContent");
    maincontent.classList.add("noFlex");
    maincontent.append(ele.banner);
    maincontent.append(ele.wrapper);
}

const renderMenuPage = () => {
    wrapContent(menu);
}

const renderDepartments = () => {
    wrapContent(departments);
}

const wrapContent = (element) => {
    const maincontent = document.querySelector(".mainContent");
    const wrapper = document.createElement("div");;
    wrapper.classList.add("mainWrapper");
    wrapper.appendChild(element);
    maincontent.appendChild(wrapper);
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

export { renderTemplate, changePage };