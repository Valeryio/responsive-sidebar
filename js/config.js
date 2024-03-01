/**
 * Declaring some variables to have some html elements
 */

let body = document.querySelector("body");
console.log(body);

/**
 * The amburger menu that is the key button of the interaction
 */
let amburgerMenu = document.querySelector(".amburger-menu");


/**
 * This array have the html child element of the aside 
 * tag that we have to hide
 */
let elementToHide = [document.querySelector(".brand-logo"), document.querySelector(".profile")];

/**
 * This one have all the parameters of the links description
 * that we want to hide
 */
let linkDescriptions = document.querySelectorAll(".nav-link-description");


let navbar = {
    header: document.querySelector(".navbar-header"),
    footer: document.querySelector(".navbar-footer")
}
