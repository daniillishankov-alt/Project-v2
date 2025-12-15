    // theme chek

const toggleBtn = document.getElementById("theme-toggle");


if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
}

    // theme switching

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

    // dropdown

document.querySelectorAll('.dropdown-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const menu = btn.parentElement;

        menu.classList.toggle('open');
    });
});

    // Cookies

const cookieMessage = document.querySelector('.cookie-message');
const acceptCookie = document.querySelector('.accept-cookie');
let cookieAccepted = localStorage.getItem('cookieAccepted');

if (cookieAccepted === 'true'){
    cookieMessage.style.display = 'none';
} else {
    cookieMessage.style.display = 'block';
}

acceptCookie.addEventListener('click', () => {
    cookieMessage.style.display = 'none';
    localStorage.setItem('cookieAccepted', 'true');
});




