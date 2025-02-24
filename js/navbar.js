function loadNavbar(){
    // Get the content of the iframe
    var iframeContent = (this.contentDocument.body || this.contentDocument).innerHTML;
    // Insert the content of the iframe after the navbar
    this.insertAdjacentHTML('afterend', iframeContent);
    // Remove the iframe
    this.remove();

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
}