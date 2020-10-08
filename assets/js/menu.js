function add_local_class() {
    // Get the 'registered' file name
    const fname = `${document.getElementById('side').getAttribute('data-fname')}.html`;
    const links = document.querySelectorAll('nav#side a');
    // Cycle through all the links to find the 'local' one
    for (let i = 0; i < links.length; i++) {
        const a = links[i];
        if (a.getAttribute('href') === fname) {
            // That is what we wanted: set the enclosing <li> element's class to 'local'
            a.parentElement.setAttribute('class', 'local');
            break;
        }
    }
}


window.addEventListener('load', add_local_class);
