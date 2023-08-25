const magias = [];

        function inserirMagia() {
            const magiaInput = document.getElementById("magiaInput");
            const manaInput = document.getElementById("manaInput");
            const status = document.getElementById("status");

            const magia = magiaInput.value;
            const mana = parseInt(manaInput.value);

            if (magia && !isNaN(mana)) {
                magias.push([magia, mana]);
                status.textContent = "Magia inserida com sucesso!";
            } else {
                status.textContent = "Preencha todos os campos!";
            }

            magiaInput.value = "";
            manaInput.value = "";
        }

        function exibirMagias() {
            const magiasInseridas = document.getElementById("magiasInseridas");
            const magiasTexto = magias.map(magia => `[${magia.join(", ")}]`).join(", ");
            magiasInseridas.textContent = `Magias inseridas: ${magiasTexto}`;
        }