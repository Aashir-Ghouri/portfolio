window.onload = function () {
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    const date = document.getElementById('date');
    if (date) {
        date.textContent = "Today's Date: " + new Date().toDateString();
    }

    let text = "Welcome to My Portfolio";
    let index = 0;

    function typeWriter() {
        const typingElement = document.getElementById("typingText");
        if (!typingElement) return;

        typingElement.textContent = text.slice(0, index);
        index++;

        if (index <= text.length) {
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();

};
