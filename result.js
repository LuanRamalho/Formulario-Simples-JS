        function getUrlParams() {
            const params = new URLSearchParams(window.location.search);
            const data = {
                nome: params.get('name'),
                idade: params.get('age'),
                email: params.get('email'),
                local: params.get('location'),
                sexo: params.get('gender'),
                hobbies: params.get('hobbies')
            };
            return data;
        }

        function displayUserData() {
            const data = getUrlParams();
            const userDataDiv = document.getElementById('userData');

            userDataDiv.innerHTML = `
                <div class="data"><strong>Nome:</strong> ${data.nome}</div>
                <div class="data"><strong>Idade:</strong> ${data.idade}</div>
                <div class="data"><strong>Email:</strong> ${data.email}</div>
                <div class="data"><strong>Local onde reside:</strong> ${data.local}</div>
                <div class="data"><strong>Sexo:</strong> ${data.sexo}</div>
                <div class="data"><strong>Hobbies:</strong> ${data.hobbies}</div>
            `;
        }

        displayUserData();
