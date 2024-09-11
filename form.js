        function submitForm(event) {
            event.preventDefault();

            const form = document.getElementById('userForm');
            const formData = new FormData(form);
            const params = new URLSearchParams(formData).toString();

            window.location.href = `result.html?${params}`;
        }

