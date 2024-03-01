/**
 * Declaring some variables to have some html elements
 */

let body = document.querySelector("body");
console.log(body);

let toHide = [
                document.querySelector(".brand-logo"), 
                document.querySelector(".profile")
            ];

let linkDescriptions = document.querySelectorAll(".nav-link-description");


let navbar = {
    menu: document.querySelector(".amburger-menu"),
    logo: document.querySelector(".brand-logo"),
    header: document.querySelector(".navbar-header"),
    footer: document.querySelector(".navbar-footer"),
    linkDescription: document.querySelectorAll(".nav-link-description"),
    profileInformations: document.querySelector(".profile")
}
