let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;

    document.querySelectorAll('section').forEach(sec => {
        let top = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (scrollPosition >= top && scrollPosition < top + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            console.log("id", id)
            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
        } else {
            document.querySelector('header nav a[href="#' + id + '"]').classList.remove('active');
        }
    });
});


