import Logo from "./img/restaurant.png";
import Data from "./config.json";

const contactInfo = (department) => {

}

const departments = () => {

}

const mainPage = () => {
    //// Header
    const menuItems = ["Hjem", "Meny", "Avdelinger", "Noe annet"];
    const header = document.createElement("header");

    // Menu
    const menu = document.createElement("ul");
    menu.classList.add("menu");

    menuItems.forEach(item => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = "";
        link.textContent = item;
        if (item.toLowerCase() === "hjem") {
            link.classList.add("active");
        }
        listItem.appendChild(link);
        menu.appendChild(listItem);
    });


    // Logo
    const logo = new Image();
    logo.alt = "logo";
    logo.src = Logo;
    logo.classList.add("logo");

    //Login
    const login = document.createElement("a");
    login.classList.add("login");
    login.href = "";
    login.textContent = "Logg inn";
    const loginIcon = document.createElement("i");
    loginIcon.classList.add("fa-solid", "fa-circle-user");
    login.appendChild(loginIcon);

    header.append(menu, logo, login);

    //// Main content
    const content = document.createElement("div");
    content.classList.add("mainContent");

    //// Footer
    const footer = document.createElement("footer");
    const footerBox = document.createElement("div");
    footerBox.classList.add("footerBox");
    const contactBox = document.createElement("div");
    contactBox.classList.add("contact");
    const infoBox = document.createElement("div");
    infoBox.classList.add("info");

    // Contact
    function createContactWebsite(className, iconClass) {
        const element = document.createElement("a");
        element.classList.add(className);
        element.href = `https://www.${className}.com/${Data.common.web[className]}`;
        const icon = document.createElement("i");
        icon.classList.add(...iconClass.split(" "));
        const textBox = document.createElement("div");
        textBox.classList.add("text");
        const line1 = document.createElement("span");
        const line2 = document.createElement("span");
        line1.classList.add("line-1");
        line2.classList.add("line-2");
        line1.textContent = "Følg oss på";
        line2.textContent = className;
        textBox.append(line1, line2);
        element.append(icon, textBox);
        return element;
    }

    const contactPhone = document.createElement("a");
    contactPhone.classList.add("phone");
    contactPhone.href = `tel:${Data.common.contact.phone}`;
    const phoneIcon = document.createElement("i");
    phoneIcon.classList.add("fa-regular", "fa-circle-phone");
    const phoneTextBox = document.createElement("div");
    phoneTextBox.classList.add("text");
    const phoneTextLine1 = document.createElement("span");
    const phoneTextLine2 = document.createElement("span");
    phoneTextLine1.classList.add("line-1");
    phoneTextLine2.classList.add("line-2");
    phoneTextLine1.textContent = "Ring oss på";
    phoneTextLine2.textContent = Data.common.contact.phone.match(/.{1,2}/g).join(" ");
    phoneTextBox.append(phoneTextLine1, phoneTextLine2);
    contactPhone.append(phoneIcon, phoneTextBox);

    const contactFacebook = createContactWebsite("facebook", "fa-brands fa-facebook");
    const contactInstagram = createContactWebsite("instagram", "fa-brands fa-instagram");

    [contactPhone, contactFacebook, contactInstagram].forEach(item => contactBox.appendChild(item));

    const infoList = document.createElement("ul");
    const info1 = document.createElement("li");
    const info2 = document.createElement("li");
    const info1link = document.createElement("a");
    const info2link = document.createElement("a");
    info1link.href = "";
    info2link.href = "";
    info1link.textContent = "Personvernpolicy";
    info2link.textContent = "Viktig informasjon";
    info1.appendChild(info1link);
    info2.appendChild(info2link);
    infoList.append(info1, info2);
    infoBox.appendChild(infoList);

    footerBox.append(contactBox, infoBox);
    footer.appendChild(footerBox);

    return { header, content, footer };
}

const menu = () => {
    
}

export { mainPage };