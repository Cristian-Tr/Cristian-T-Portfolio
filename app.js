document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById('bookModal');
    const modalTitle = document.getElementById('modalBookTitle');
    const closeBtn = document.getElementById('closeBtn');
    const quizFeedback = document.getElementById('quizFeedback');

    // 1. SELECTARE CARTI
    const books = document.querySelectorAll('.book');
    books.forEach(book => {
        book.addEventListener('click', function () {
            const title = this.getAttribute('data-title');
            modalTitle.innerText = "Manual Interactiv de " + title + " (Format HTML5/Enhanced)";
            modal.classList.add('active');
            quizFeedback.innerText = '';
        });
    });

    // 2. INCHIDERE DIN BUTON X
    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            modal.classList.remove('active');
        });
    }

    // 3. INCHIDERE LA CLICK IN FUNDAL (pe fundal întunecat)
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.classList.remove('active');
        }
    });


    // 4. OPTIUNI QUIZ
    const quizButtons = document.querySelectorAll('.quiz-btn');
    quizButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            const isCorrect = this.getAttribute('data-correct') === 'true';
            if (isCorrect) {
                quizFeedback.innerHTML = "🎉 Corect! Acest element JS demonstrează conceptul de evaluare formativă în timp real.";
                quizFeedback.style.color = "springgreen";
            } else {
                quizFeedback.innerHTML = "❌ Incorect! Analizează din nou informațiile din pagina anterioară.";
                quizFeedback.style.color = "red";
            }
        });
    });



    // 5. OPTIMIZARE YouTube (Lazy Loading pentru eliminarea cookie-urilor la pornire)
    const videoFacade = document.getElementById('youtube-facade');
    if (videoFacade) {
        videoFacade.addEventListener('click', function () {
            this.innerHTML = `
                <iframe src="https://www.youtube-nocookie.com/embed/DebnwYhYAF8"
                    title="differences between printed books or electronic books-Books or no books"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen style="width:100%; height:100%; border:none; position:absolute; top:0; left:0;">
                </iframe>
            `;
        });
    }

});