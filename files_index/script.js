document.addEventListener('DOMContentLoaded', () => {
    initSystemInfo();
    initReviews(13); 
    initModal();
    initThemeLogic();
});


function initSystemInfo() {
    const sysData = {
        os: navigator.platform,
        browser: navigator.userAgent,
        screen: `${window.innerWidth}x${window.innerHeight}`
    };

    localStorage.setItem('userSystemInfo', JSON.stringify(sysData));

    const info = JSON.parse(localStorage.getItem('userSystemInfo'));
    const footerElement = document.getElementById('system-info');
    
    if (footerElement) {
        footerElement.innerText = `OS: ${info.os} | Browser: ${info.browser} | Resolution: ${info.screen}`;
    }
}

async function initReviews(variant) {
    const container = document.getElementById('reviews-container');
    const url = `https://jsonplaceholder.typicode.com/posts/${variant}/comments`; 

    try {
        const response = await fetch(url); 
        if (!response.ok) throw new Error('Помилка завантаження даних');
        
        const comments = await response.json(); 
        container.innerHTML = ''; 

        comments.forEach(item => {
            const card = document.createElement('div');
            card.className = 'review-card';
            
    
            card.innerHTML = `
                <strong>${item.email.toLowerCase()}</strong>
                <p>"${item.body}"</p>
            `;
            container.appendChild(card); 
        });
    } catch (error) {
        container.innerHTML = '<p style="color: red;">Не вдалося завантажити відгуки роботодавців.</p>';
        console.error('Fetch error:', error);
    }
}

// Модальне вікно
function initModal() {
    const modal = document.getElementById('contact-modal');
    const closeBtn = document.querySelector('.close-button');

    if (!modal) return;

    setTimeout(() => {
        modal.style.display = 'flex'; 
    }, 60000);

    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };
    
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

// Тему переключає по годинам
function initThemeLogic() {
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    function applyAutoTheme() {
        const hour = new Date().getHours(); 
        if (hour >= 7 && hour < 21) {
            body.classList.remove('dark-mode');
        } else {
            body.classList.add('dark-mode');
        }
    }

    applyAutoTheme();

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
        });
    }
}