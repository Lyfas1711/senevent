"use strict";

(function () {
    const id = name => document.getElementById(name);

    const chargerEvenements = async () => {
        try {
            const response = await fetch("evenements.json");
            const evenements = await response.json();
            afficherEvenements(evenements);
        } catch (error) {
            id("liste").textContent = "Erreur de chargement.";
            console.error("Erreur :", error);
        }
    };

    const afficherEvenements = (evenements) => {
        const liste = id("liste");
        liste.innerHTML = ""; // Vider la liste avant de remplir

        // 1. Déclarer les options de date UNE SEULE FOIS au début de la fonction
        const dateOption = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
        
        evenements.forEach(ev => {
            const carte = document.createElement("div");
            carte.classList.add("carte");
            
            const prix = ev.prix === 0 ? "Gratuit" : `${ev.prix} FCFA`;

            // 2. Transformer la date du JSON en format lisible en toute sécurité
            const dateFormatee = new Date(ev.date_debut).toLocaleDateString('fr-FR', dateOption);
            
            carte.innerHTML = `
                <h3>${ev.titre}</h3>
                <p>Categorie : ${ev.categorie}</p>
                <p>Lieu : ${ev.lieu_nom}</p>
                <p><strong>Date :</strong> ${dateFormatee}</p>
                <p>Prix : ${prix}</p>
                <img src="${ev.image_url}" alt="${ev.titre}" style="width: 100%; max-height: 150px; object-fit: cover; border-radius: 4px; margin-bottom: 0.5rem;">
            `;
            liste.appendChild(carte);
        });
    };

    const init = () => {
        id("btn-charger").addEventListener("click", chargerEvenements);
    };

    window.addEventListener("load", init);
})();