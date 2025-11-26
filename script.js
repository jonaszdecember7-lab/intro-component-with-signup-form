    document.addEventListener('DOMContentLoaded', () => {
        const userInput = document.querySelectorAll('input');
        const errorMessage = document.querySelectorAll('.error-message');
        const submitBtn = document.getElementById('submit');
        const form = document.querySelector('form');

        if (!submitBtn) return;

        submitBtn.addEventListener('click', e => {
            e.preventDefault();
            let hasError = false;

            for(let i = 0; i < userInput.length; i++) {
                const errorSpan = errorMessage[i];
                const input = userInput[i];

                if (!input.value.trim()) {
                    errorSpan.classList.remove('hidden');
                    hasError = true;
                } else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) {
                    errorSpan.textContent = "Please use a valid email format"
                    errorSpan.classList.remove('hidden');
                    hasError = true;
                } else {
                    errorSpan.classList.add('hidden');
                }
            }   
            if (!hasError) {   
                userInput.forEach(input => input.value = '');
                form.submit()
            };
        });
    });

