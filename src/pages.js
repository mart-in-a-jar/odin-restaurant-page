import Logo from "./img/restaurant.png";
import Data from "./config.json";
import { faker } from "@faker-js/faker/locale/nb_NO";

const contactInfo = (department) => {
    const dept = document.createElement("div");
    dept.classList.add("main", "departmentInfo");
    const heading = document.createElement("h1");
    heading.textContent = department.name;
    const loc = document.createElement("h2");
    loc.textContent = department.place;
    const img = document.createElement("img");
    img.alt = "department image";
    img.src = department.img;
    const openingHours = (() => {
        const openingHours = document.createElement("div");
        openingHours.classList.add("openingHours");
        const table = document.createElement("table");
        const caption = document.createElement("caption");
        caption.textContent = "Åpningstider";
        table.appendChild(caption);

        for(let i = 0; i < 7; i++) {
            const row = document.createElement("tr");
            for(let j = 0; j < 2; j++) {
                let cell;
                if(j === 1) {
                    cell = document.createElement("td");
                    let openHours = Math.floor(Math.random() * (15 - 8)) + 8;
                    let closeHours = Math.floor(Math.random() * (23 - 15)) + 15
                    function appendZero(hours) {
                        if(hours < 10) {
                            hours = "0" + hours;
                        }
                        return hours;
                    }
                    openHours = appendZero(openHours);
                    closeHours = appendZero(closeHours);
                    cell.textContent = `${openHours}:00 - ${closeHours}:00`
                } else if(j === 0) {
                    cell = document.createElement("th");
                    switch(i) {
                        case 0:
                            cell.textContent = "Mandag";
                            break;
                        case 1:
                            cell.textContent = "Tirsdag";
                            break;
                        case 2:
                            cell.textContent = "Onsdag";
                            break;
                        case 3:
                            cell.textContent = "Torsdag";
                            break;
                        case 4:
                            cell.textContent = "Fredag";
                            break;
                        case 5:
                            cell.textContent = "Lørdag";
                            break;
                        case 6:
                            cell.textContent = "Søndag";
                            break;
                    }
                }
                row.appendChild(cell);
            } 
            table.appendChild(row);
        } 

        openingHours.appendChild(table);

        return openingHours;
    })();


    const address = document.createElement("div");
    address.classList.add("address");
    address.textContent = `${faker.address.streetAddress()}, ${faker.address.zipCode()} ${faker.address.city()}`;


    dept.append(heading, loc, img, openingHours, address);

    return dept;
}

const departments = (() => {
    const depts = document.createElement("div");
    depts.classList.add("main", "departments");

    function generateDepartments() {
        const card = document.createElement("a");
        card.classList.add("card");

        const name = document.createElement("div");
        name.classList.add("name");
        name.textContent = faker.company.companyName();

        const location = document.createElement("div");
        location.classList.add("location");
        location.textContent = faker.address.city();

        card.style.background = `url(${faker.image.city() + "?" + faker.random.numeric(3)})`;

        card.append(name, location);
        depts.appendChild(card);
    }
    for(let i = 0; i < 15; i++) {
        generateDepartments();
    }
    return depts;
})();

const mainPage = (() => {
    //// Header
    function generateHeader() {
        const menuItems = ["Hjem", "Meny", "Avdelinger"];
        const header = document.createElement("header");

        // Menu
        function generateMenu() {
            const menu = document.createElement("ul");
            menu.classList.add("menu");
    
            menuItems.forEach(item => {
                const listItem = document.createElement("li");
                const link = document.createElement("a");
                // link.href = "";
                link.textContent = item;
                if (item.toLowerCase() === "hjem") {
                    link.classList.add("active");
                }
                listItem.appendChild(link);
                menu.appendChild(listItem);
            });
            return menu;
        }

        // Logo
        function generateLogo() {
            const logo = new Image();
            logo.alt = "logo";
            logo.src = Logo;
            logo.classList.add("logo");
            return logo;
        }

        //Login
        function generateLogin() {
            const login = document.createElement("a");
            login.classList.add("login");
            login.href = "";
            login.textContent = "Logg inn";
            const loginIcon = document.createElement("i");
            loginIcon.classList.add("fa-solid", "fa-circle-user");
            login.appendChild(loginIcon);
            return login;
        }

        const menu = generateMenu();
        const logo = generateLogo();
        const login = generateLogin();

        header.append(menu, logo, login);
        return header;
    }
   
    
    //// Main content
    // Main wrapper
    function generateMainWrapper() {
        const content = document.createElement("div");
        content.classList.add("mainContent", "noFlex");
        return content;
    }

    // Content
    function generateMainContent() {
        const wrapper = document.createElement("div");
        wrapper.classList.add("mainWrapper");
        function generateBanner() {
            const banner = document.createElement("div");
            banner.classList.add("banner");
            const para = document.createElement("p");
            banner.appendChild(para);
            para.textContent = "Her står det noe fint om restauranten";
            return banner;
        }
        function generateBody() {
            const para = document.createElement("p");
            para.classList.add("startPageDesc");
            function generateSvada(num) {
                for (let i = 0; i < num; i++) {
                    para.textContent += faker.hacker.phrase() + " ";
                }
            }
            generateSvada(4);
            return para;
        }
        const banner = generateBanner();
        const body = generateBody();
        wrapper.appendChild(body);
        return { banner, wrapper }
    }


    //// Footer
    function generateFooter() {
        const footer = document.createElement("footer");
        const footerBox = document.createElement("div");
        footerBox.classList.add("footerBox");

        // Contact
        function generateContactBox() {
            const contactBox = document.createElement("div");
            contactBox.classList.add("contact");
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

            return contactBox;
        }

        function generateInfoBox() {
            const infoBox = document.createElement("div");
            infoBox.classList.add("info");
    
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

            return infoBox;
        }

        const contactBox = generateContactBox();
        const infoBox = generateInfoBox();

        footerBox.append(contactBox, infoBox);
        footer.appendChild(footerBox);

        return footer;
    }


    const header = generateHeader();
    const contentWrapper = generateMainWrapper();
    const content = generateMainContent();
    const footer = generateFooter();


    return { header, contentWrapper, footer, content };
})();

const menu = (() => {
    const menu = document.createElement("div");
    menu.classList.add("main", "menu");

    function generateMenuItem() {
        const card = document.createElement("div");
        card.classList.add("card");
        
        const image = document.createElement("img");
        image.src = faker.image.food() + "?" + faker.random.numeric(3);
        image.alt = "food";

        const title = document.createElement("div");
        title.classList.add("title");
        title.textContent = faker.commerce.productName();
        
        const description = document.createElement("div");
        description.classList.add("desc");
        description.textContent = faker.commerce.productDescription();

        const price = document.createElement("div");
        price.classList.add("price");
        price.textContent = faker.commerce.price(50, 300, 0, "kr ");

        card.append(image, title, description, price);
        menu.appendChild(card);
    }

    for(let i = 0; i < 10; i++) {
        generateMenuItem();
    }

    return menu;
})();

export { mainPage, menu, departments, contactInfo };