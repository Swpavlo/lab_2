// Чекаємо повного завантаження сторінки
document.addEventListener('DOMContentLoaded', () => {
    console.log("Скрипт ініціалізовано");

    // --- 1. РОБОТА З LOCALSTORAGE [cite: 6, 9, 45, 46] ---
    const sysInfo = {
        browser: navigator.userAgent,
        platform: navigator.platform
    };
    localStorage.setItem('user_os_info', JSON.stringify(sysInfo));
    
    const footer = document.getElementById('main-footer');
    const savedData = JSON.parse(localStorage.getItem('user_os_info'));
    if (footer && savedData) {
        footer.innerHTML += `<p style="color: gray; font-size: 0.8em;">
            Ваша система: ${savedData.platform} | Браузер: ${savedData.browser}
        </p>`;
    }

    // --- 2. ПЕРЕМИКАЧ ТЕМИ [cite: 39, 42, 71, 73] ---
    const themeBtn = document.getElementById('theme-toggle');
    
    function applyTheme() {
        const hours = new Date().getHours();
        // Денна тема: 07:00 - 21:00 [cite: 73]
        if (hours < 7 || hours >= 21) {
            document.body.classList.add('dark-mode');
        }
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    }
    applyTheme();

    // --- 3. ЗАВАНТАЖЕННЯ ВІДГУКІВ (FETCH) [cite: 15, 17, 49, 50] ---
    async function fetchComments() {
        const variant = 1; // Заміни на свій номер у журналі [cite: 51]
        const container = document.getElementById('comments-container');
        
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${variant}/comments`);
            const data = await response.json();
            
            container.innerHTML = ''; // Очищуємо текст "Завантаження"
            data.forEach(comment => {
                const card = document.createElement('div');
                card.className = 'comment-card';
                card.innerHTML = `
                    <h4>${comment.name}</h4>
                    <p>${comment.body}</p>
                    <small>Email: ${comment.email}</small>
                `;
                container.appendChild(card);
            });
        } catch (error) {
            container.innerHTML = "Не вдалося завантажити відгуки. Перевірте з'єднання.";
            console.error("Помилка Fetch:", error);
        }
    }
    fetchComments();

    // --- 4. МОДАЛЬНЕ ВІКНО З ТАЙМЕРОМ [cite: 54, 55, 144] ---
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('close-modal');

    // Вікно з'явиться через 60 секунд (як у методичці)
    // Для швидкої перевірки можеш змінити 60000 на 5000 (5 сек)
    setTimeout(() => {
        if (modal) modal.classList.remove('modal-hidden');
    }, 60000); 

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.add('modal-hidden');
        });
    }
});
// --- 1. ЗБЕРІГАННЯ ТА ВИВІД ДАНИХ (ЯК НА СКРІНШОТІ) ---
const info = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    cookiesEnabled: navigator.cookieEnabled,
    onlineStatus: navigator.onLine,
    appVersion: navigator.appVersion
};

// Зберігаємо об'єкт у localStorage [cite: 7, 9, 13]
localStorage.setItem('browserInfo', JSON.stringify(info));

// Виводимо у футер саме як текст об'єкта
const footer = document.getElementById('main-footer');
const savedData = localStorage.getItem('browserInfo'); // Отримуємо сирий рядок JSON [cite: 10]

if (footer) {
    // Створюємо такий самий вигляд: синій заголовок + текст об'єкта
    footer.innerHTML += `
        <div style="background: #f8f9fa; padding: 10px; border-radius: 8px; font-family: monospace; font-size: 12px; border: 1px solid #e0e0e0; margin-top: 20px;">
            <span style="color: #007bff; font-weight: bold;">browserInfo:</span> 
            <span style="color: #333;">${savedData}</span>
        </div>
    `;
}