$(document).ready(function() {
    // Active Link Handling based on current URL
    var path = window.location.pathname;
    var page = path.split("/").pop();
    
    // Default to index.html if empty
    if(page === "") page = "index.html";
    
    // Remove active class from all links
    $('.nav-link').removeClass('active');
    
    // Add active class to matching link (Sidebar and Mobile Nav)
    $('.nav-link[href="' + page + '"]').addClass('active');

    // Smooth Scroll for anchor links (if any)
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70 // Offset for mobile header
            }, 800);
        }
    });

    // Animate elements on scroll logic (Simple intersection observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                entry.target.style.opacity = 1;
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    $('.card, .timeline-item').each(function() {
        $(this).css('opacity', '0'); // Initially hide
        observer.observe(this);
    });
});
