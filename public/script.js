// Password validation
function checkPassword() {
    const input = document.getElementById('password-input');
    const password = input.value.trim();
    
    if (password === '3000') {
        // Correct password - transition to wishes page
        const passwordPage = document.getElementById('password-page');
        const wishesPage = document.getElementById('wishes-page');
        
        passwordPage.classList.remove('active');
        wishesPage.classList.add('active');
        
        // Start animations and confetti
        createConfetti();
        createExtraBalloons();
    } else {
        // Wrong password - shake animation
        input.classList.add('shake');
        input.value = '';
        input.placeholder = '❌ YOU DONT KNOW?';
        
        setTimeout(() => {
            input.classList.remove('shake');
            input.placeholder = 'Guess :p';
        }, 500);
    }
}

// Allow Enter key to submit
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('password-input');
    if (input) {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkPassword();
            }
        });
    }
    
    // Add floating hearts continuously
    setInterval(createFloatingHeart, 3000);
});

// Create floating heart animation
function createFloatingHeart() {
    const passwordPage = document.getElementById('password-page');
    if (!passwordPage.classList.contains('active')) return;
    
    const container = document.querySelector('.floating-hearts');
    if (!container) return;
    
    const heart = document.createElement('div');
    heart.innerHTML = ['💕', '💖', '💗', '💓', '💝'][Math.floor(Math.random() * 5)];
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
    heart.style.animation = `float ${Math.random() * 3 + 5}s ease-in-out forwards`;
    heart.style.bottom = '0';
    
    container.appendChild(heart);
    
    setTimeout(() => heart.remove(), 8000);
}

// Create confetti
function createConfetti() {
    const container = document.querySelector('.confetti-container');
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#feca57', '#ff9ff3', '#54a0ff', '#48dbfb', '#ff6348'];
    const confettiCount = 100;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 3 + 's';
            confetti.style.animationDuration = Math.random() * 3 + 3 + 's';
            
            container.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 8000);
        }, i * 30);
    }
    
    // Repeat confetti every 8 seconds
    setInterval(() => {
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.animationDelay = '0s';
                confetti.style.animationDuration = Math.random() * 3 + 3 + 's';
                
                container.appendChild(confetti);
                
                setTimeout(() => confetti.remove(), 8000);
            }, i * 50);
        }
    }, 8000);
}

// Create extra balloons
function createExtraBalloons() {
    const container = document.querySelector('.balloons-container');
    const balloons = ['🎈', '🎈', '🎈', '🎈'];
    
    setInterval(() => {
        const balloon = document.createElement('div');
        balloon.innerHTML = balloons[Math.floor(Math.random() * balloons.length)];
        balloon.style.position = 'absolute';
        balloon.style.left = Math.random() * 90 + '%';
        balloon.style.bottom = '-100px';
        balloon.style.fontSize = (Math.random() * 30 + 40) + 'px';
        balloon.style.animation = `balloonFloat ${Math.random() * 4 + 6}s ease-in-out forwards`;
        
        container.appendChild(balloon);
        
        setTimeout(() => balloon.remove(), 12000);
    }, 3000);
}

// Add shake animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
        20%, 40%, 60%, 80% { transform: translateX(10px); }
    }
    .shake {
        animation: shake 0.5s;
    }
`;
document.head.appendChild(style);
