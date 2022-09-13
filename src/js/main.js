import "./slider";
import modal from "./modules/modal";
import tabs from "./modules/tabs";
import timer from "./modules/timer";
import gallery from "./modules/gallery";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";



document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let modalState = {

    };

    changeModalState(modalState);

    modal('#engineerBtn', ".popup_engineer", ".popup_close");
    modal('.phone_link', ".popup", ".popup_close");
    modal('.popup_calc_btn', '.popup_calc', ".popup_calc_close");
    modal('.popup_calc_button', '.popup_calc_profile', ".popup_calc_profile_close");
    modal('.popup_calc_profile_button', ".popup_calc_end", ".popup_calc_end_close");

    tabs(".no_click", ".decoration_content > div > div", "after_click");
    tabs(".glazing_block", ".glazing_content", "after_click");
    tabs(".balcon_icons_img", ".big_img > img", "do_image_more");

    timer('2022-12-1');
    gallery();
    forms(modalState);
});