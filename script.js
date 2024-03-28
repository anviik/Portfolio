document.addEventListener('DOMContentLoaded', function () {
    var timeline = document.querySelector('.timeline');
    var timelinePosition = timeline.offsetTop - window.innerHeight + 100; // Adjust this value if needed
    var animationTriggered = false;

    function checkTimelineVisibility() {
        if (window.scrollY > timelinePosition && !animationTriggered) {
            timeline.classList.add('animate-timeline');
            animationTriggered = true;
            window.removeEventListener('scroll', checkTimelineVisibility);
        }
    }

    window.addEventListener('scroll', checkTimelineVisibility);
    checkTimelineVisibility(); // Check visibility on page load
});



// window.onscroll = () => {
// let header = document.querySelector('.header');
// header.classList.toggle('sticky', window.scrollY > 100);
// };

// let darkModeIcon = document.querySelector('#darkMode-icon');

// darkModeIcon.oneclick = () => { 
//     darkModeIcon.classList.toggle('bx-sun');
//     document.body.classList.toggle('dark-mode');
// } 