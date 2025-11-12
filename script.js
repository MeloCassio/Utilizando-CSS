document.addEventListener("DOMContentLoaded", () => {
    // === PERGUNTA 1 - COPA DO MUNDO ===
    const radios = document.querySelectorAll('input[name="resposta"]');
    const msg1 = document.createElement("p");
    radios[0].parentElement.parentElement.appendChild(msg1);

    radios.forEach(radio => {
        radio.addEventListener("change", () => {
            if (radio.id === "t") {
                msg1.textContent = "✅ Correto! A primeira Copa foi no Uruguai (1930).";
                msg1.style.color = "green";
            } else {
                msg1.textContent = "❌ Errado! A resposta certa é Uruguai.";
                msg1.style.color = "red";
            }
        });
    });

    // === PERGUNTA 2 - COPAS DO BRASIL ===
    const txtPergunta = document.getElementById("pergunta-texto");
    const msg2 = document.createElement("p");
    txtPergunta.parentElement.appendChild(msg2);

    txtPergunta.addEventListener("input", () => {
        const valor = txtPergunta.value.trim();
        if (valor === "") {
            msg2.textContent = "";
            return;
        }
        if (valor === "5") {
            msg2.textContent = "✅ Isso mesmo! O Brasil tem 5 Copas do Mundo.";
            msg2.style.color = "green";
        } else {
            msg2.textContent = "❌ Errado. O Brasil tem 5 Copas do Mundo.";
            msg2.style.color = "red";
        }
    });

    // === PERGUNTA 3 - CHAMPIONS + BOLA DE OURO ===
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const msg3 = document.createElement("p");
    checkboxes[0].parentElement.parentElement.appendChild(msg3);

    const corretos = ["Cristiano Ronaldo", "Messi", "Ronaldinho"];

    checkboxes.forEach(chk => {
        chk.addEventListener("change", () => {
            const selecionados = Array.from(checkboxes)
                .filter(c => c.checked)
                .map(c => c.nextElementSibling.textContent.trim());

            const acertou = corretos.every(nome => selecionados.includes(nome)) &&
                selecionados.length === corretos.length;

            if (selecionados.length === 0) {
                msg3.textContent = "";
            } else if (acertou) {
                msg3.textContent = "✅ Todos corretos! Todos ganharam Champions e Bola de Ouro.";
                msg3.style.color = "green";
            } else {
                msg3.textContent = "❌ Ainda não. Lembre-se: apenas 3 ganharam Champions e Bola de Ouro.";
                msg3.style.color = "red";
            }
        });
    });

    // === PERGUNTA 4 - QUEM É O MELHOR ===
    const select = document.querySelector('select');
    const msg4 = document.createElement("p");
    select.parentElement.appendChild(msg4);

    select.addEventListener("change", () => {
        const valor = select.value.trim();
        if (valor === "Neymar") {
            msg4.textContent = "✅ Correto! O GOAT é Neymar 🐐";
            msg4.style.color = "green";
        } else if (valor === "none" || valor === "Selecione") {
            msg4.textContent = "";
        } else {
            msg4.textContent = "❌ Errado! A resposta certa é Mininu nei 😎";
            msg4.style.color = "red";
        }
    });


});