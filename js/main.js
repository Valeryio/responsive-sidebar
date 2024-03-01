

amburgerMenu.addEventListener("click", (event) => {

    /**
     * Resizing the differents sections (article and main)
     * in the body
     */
    body.classList.toggle("reduced-navbar");

    /**
     * Hide all the name of the setting
     */
    linkDescriptions.forEach(element => {
    //    element.classList.toggle("hide-or-not");
        element.classList.toggle("progressive-disappearing")
    });

    /**
     * Hide the different element that should change 
     * when the button is clicked
     */
    elementToHide.forEach(element => {
        element.classList.toggle("hide-or-not");
     });

    /**
     * Centered content to have a better displaying of them
     */
    navbar.footer.classList.toggle("centered-content");
    navbar.header.classList.toggle("centered-content");

})