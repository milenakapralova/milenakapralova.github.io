document.addEventListener("DOMContentLoaded", function () {
    // Apply fade-in on load
    document.body.classList.add("fade-in");

    // Handle fade-out on navigation click
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            if (link.hostname === window.location.hostname) {
                event.preventDefault();
                document.body.classList.remove("fade-in");
                document.body.classList.add("fade-out");
                setTimeout(() => {
                    window.location = link.href;
                }, 100); // Adjust duration as needed
            }
        });
    });
});
