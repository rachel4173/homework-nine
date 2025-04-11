import {getPageStuff} from "./model.js";


function initApp() {
    getPageStuff("home");

    $("nav a").on("click", (e) => {
        e.preventDefault();
        // let btnID = $(e.target).attr("id");
        let btnID = e.currentTarget.id;

        if(btnID == "help") {
            helpMe();
        } else {
            getPageStuff(btnID);
        }
    });
}

$(document).ready(() => {
    initApp();
});