

navbar.menu.addEventListener("click", (event) => {

    /**
     * Resizing the differents sections (article and main)
     * in the body
     */
    body.classList.toggle("reduced-navbar");

    /**
     * Hide all the name of the setting
     */
    linkDescriptions.forEach(element => {
       element.classList.toggle("hide-or-not");
    });

    /**
     * Hide t
     */
    toHide.forEach(element => {
        element.classList.toggle("hide-or-not");
     });

     navbar.footer.classList.toggle("centered-content");
     navbar.header.classList.toggle("centered-content");

})