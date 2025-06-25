"use strict";

const itemData = {
    item1: {
        name: 'Finalista 01',
        image: 'https://picsum.photos/seed/animal/250/200',
        photographer: 'John Doe',
        description: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        score: 42
    },
    item2: {
        name: 'Finalista 2',
        image: 'https://picsum.photos/seed/beach/250/200',
        photographer: 'Jane Smith',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        score: 84
    },
    item3: {
        name: 'Finalista 3',
        image: 'https://picsum.photos/seed/mountain/250/200',
        photographer: 'Alice Johnson',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        score: 36
    }
};

    document.addEventListener("DOMContentLoaded", () => {
        const select = document.getElementById("items");
        const img = document.getElementById("displayImage");
        const photographerInput = document.getElementById("photographer");
        const descriptionInput = document.getElementById("description");
        const scoreInput = document.getElementById("score");
        const btnIncrease = document.getElementById("increaseScore");
        const btnDecrease = document.getElementById("decreaseScore");

        // Agregar opciones al select
        Object.values(itemData).forEach((item, idx) => {
            const option = document.createElement("option");
            option.value = idx;
            option.textContent = item.name;
            select.appendChild(option);
        });

        let currentIndex = null;

        // Mostrar datos del ítem seleccionado
        select.addEventListener("change", (e) => {
            const idx = parseInt(e.target.value, 10);
            const item = Object.values(itemData)[idx];
            currentIndex = idx;
            img.src = item.image;
            photographerInput.value = item.photographer;
            descriptionInput.value = item.description;
            scoreInput.value = item.score;
        });

        // Aumentar puntaje
        btnIncrease.addEventListener("click", (e) => {
            e.preventDefault();
            if (currentIndex !== null) {
                Object.values(itemData)[currentIndex].score++;
                scoreInput.value = Object.values(itemData)[currentIndex].score;
            }
        });

        // Disminuir puntaje
        btnDecrease.addEventListener("click", (e) => {
            e.preventDefault();
            if (currentIndex !== null) {
                Object.values(itemData)[currentIndex].score--;
                scoreInput.value = Object.values(itemData)[currentIndex].score;
            }
        });
    });