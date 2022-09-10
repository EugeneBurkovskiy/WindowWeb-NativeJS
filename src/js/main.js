import "./slider";
import modal from "./modules/modal";
import tabs from "./modules/tabs";
import timer from "./modules/timer";



document.addEventListener('DOMContentLoaded', () => {
    modal('#engineerBtn', ".popup_engineer");
    modal('.phone_link', ".popup");
    tabs(".no_click", ".decoration_content > div > div");
    tabs(".glazing_block", ".glazing_content");
    timer('2022-12-1');//2022-11-21
});