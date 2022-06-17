import Logo from "./img/restaurant.png";

const contactInfo = (department) => {

}

const departments = () => {

}

const mainPage = () => {
    // Header
    const menuItems = ["Hjem", "Meny", "Avdelinger", "Noe annet", "Noe annet"];
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



    return { header };
}

const menu = () => {
    
}

export { mainPage };