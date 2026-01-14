document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const input = document.getElementById('userInput');
    const trigger = document.getElementById('chat-trigger');
    const windowChat = document.getElementById('chat-window');

    // 1. Dicționarul de răspunsuri (fără diacritice în chei)
    const dictionary = {
        // Saluturi și politețe
        "salut": "Bună!  🙋🏻‍♂️ Cu ce te pot ajuta?",
        "buna": "Salut!  🙋🏻‍♂️ Cu ce te pot ajuta?",
        "ce faci": "Aștept mesajul tău!",
        "faci": "Aștept mesajul tău!",
        "mersi": "Cu mare drag! 😊",
        "multumesc": "Plăcerea este de partea mea!😊",
        "mulțumesc": "Plăcerea este de partea mea!😊",

        // Informații Profesionale
        "proiecte": "Am dezvoltat proiecte HTML, CSS, SVG, JavaScript la BRAT!",
        "ecommerce": "Vizitează aplicația Green Escapade!",
        "robotherapy": "Vizitează aplicația RoboTherapy!",
        "robo terapie": "Vizitează aplicația RoboTherapy!",
        "roboterapie": "Vizitează aplicația RoboTherapy!",
        "vanzari": "Am experiență în vânzări la companii multinaționale!",
        "vânzări": "Am experiență în vânzări la companii multinaționale!",
        "marketing": "Vizitează aplicația Nobilio!",
        "stack": "Tehnologiile mele preferate sunt: HTML, CSS, SVG, JavaScript.",
        "experienta": "Am dezvoltat proiecte HTML, CSS, SVG, JavaScript la BRAT!",
        "experiență": "Am dezvoltat proiecte HTML, CSS, SVG, JavaScript la BRAT!",
        "experience": "I developed HTML, CSS, SVG, JavaScript projects!",
        "javascript": "Am dezvoltat proiecte HTML, CSS, JavaScript, jQuery!",
        "html": "Am dezvoltat proiecte HTML, CSS, SVG, JavaScript, jQuery!",
        "studii": "Am absolvit inginerie si am urmat un curs FrontEnd la Ejobs.",
        "cv": "Dacă dorești CV-ul meu, scrie-mi un mesaj pe Linkedin!",
        "numele": "Numele meu este Cristian T. Mă găsești pe LinkedIn: https://www.linkedin.com/in/cristian-t-664193210/",
        "cv": "Dacă dorești CV-ul, scrie-mi un mesaj pe LinkedIn: https://www.linkedin.com/in/cristian-t-664193210/",

        // Contact și Disponibilitate
        "contact": "Aștept mesaj pe LinkedIn: https://www.linkedin.com/in/cristian-t-664193210/",
        "linkedin": "Mă poți găsi pe LinkedIn: https://www.linkedin.com/in/cristian-t-664193210/",
        "portofoliu": "Portofoliu personal: https://github.com/Cristian-Tr/",
        "angajare": "Sunt deschis la noi oportunități!",
        "email": "Mă poți găsi pe LinkedIn: https://www.linkedin.com/in/cristian-t-664193210/",
        "mail": "Mă poți găsi pe LinkedIn: https://www.linkedin.com/in/cristian-t-664193210/",
        "github": "Portofoliu personal: https://github.com/Cristian-Tr/",
        "angajare": "Sunt deschis la noi oportunități!",
        "remote": "Da dar sunt deschis și la variante hibrid sau la sediu.",

    };

    // 2. Funcție pentru Salut Dinamic (în funcție de oră)
    function getDynamicGreeting() {
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 12) return "Bună dimineața!";
        if (hour >= 12 && hour < 18) return "Bună ziua!";
        if (hour >= 18 && hour < 22) return "Bună seara!";
        return "Bună! 🦉 Dacă nu e târziu, aștept mesajul tău!";
    }

    // 3. Afișare mesaj inițial la încărcare
    const startMsg = document.createElement('div');
    startMsg.className = 'bot-msg';
    startMsg.textContent = getDynamicGreeting();
    display.appendChild(startMsg);

    // 4. Funcție de Scroll Fluid (pentru a evita "mersul înapoi")
    const scrollToBottom = () => {
        setTimeout(() => {
            display.scrollTo({ top: display.scrollHeight, behavior: 'smooth' });
        }, 50);
    };

    // 5. Logica de Deschidere/Închidere (Toggle)
    window.toggleChat = function () {
        const isHidden = (windowChat.style.display === 'none' || windowChat.style.display === '');
        windowChat.style.display = isHidden ? 'block' : 'none';
        trigger.style.display = isHidden ? 'none' : 'block';
        if (isHidden) input.focus();
    };

    // 6. Logica de Trimitere Mesaj (cu transformare toLowerCase)
    window.handleChat = function () {
        const val = input.value.trim();
        if (!val) return;

        // Mesaj Utilizator
        const u = document.createElement('div');
        u.className = 'user-msg';
        u.textContent = val;
        display.appendChild(u);
        scrollToBottom();
        input.value = "";

        // Răspuns Bot
        setTimeout(() => {
            const b = document.createElement('div');
            b.className = 'bot-msg';

            // Verificare cuvânt cheie
            let r = "Scuze. Nu înțeleg ce spui. Scrie te rog corect dar fără diacritice!";
            const lowVal = val.toLowerCase();

            for (let key in dictionary) {
                if (lowVal.includes(key)) r = dictionary[key];
            }

            b.textContent = r;
            display.appendChild(b);
            scrollToBottom();
        }, 750);
    };

    // 7. Urmărire Cursor (Ochi)
    document.addEventListener('mousemove', (e) => {
        const irises = document.querySelectorAll(".iris");
        const x = (e.clientX * 100) / window.innerWidth + "%";
        const y = (e.clientY * 100) / window.innerHeight + "%";
        irises.forEach(iris => {
            iris.style.left = x;
            iris.style.top = y;
            iris.style.transform = `translate(-${x}, -${y})`;
        });
    });

    // 8. Inimioare Robot (Generare automată)
    const heartContainer = document.getElementById('heart-container');
    if (heartContainer) {
        for (let i = 0; i < 6; i++) {
            let p = document.createElement('div');
            p.className = 'particle';
            p.style.left = Math.random() * 90 + '%';
            p.style.animationDelay = (Math.random() * 3) + 's';
            heartContainer.appendChild(p);
        }
    }

    // 9. Suport pentru tasta Enter
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') window.handleChat();
    });
});