import "./style.css";
import { mainPage } from "./pages";



const a = mainPage().header;
const b = mainPage().content;
const c = mainPage().footer;
const content = document.querySelector("#content");
content.append(a, b, c);