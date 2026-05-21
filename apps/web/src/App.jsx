import { useState } from "react";

const App = () => {
  // Déclaration des deux états indispensables
  const [evenements, setEvenements] = useState([]);
  const [chargement, setChargement] = useState(false);

  // Fonction asynchrone pour récupérer le fichier JSON dans le dossier public
  const charger = async () => {
    setChargement(true); // Le chargement commence, le bouton va se désactiver
    try {
      const reponse = await fetch("/evenements.json");
      const data = await reponse.json();
      setEvenements(data); // On enregistre les données dans l'état
    } catch (error) {
      console.error("Erreur de chargement :", error);
    }
    setChargement(false); // Le chargement est fini
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto", fontFamily: "sans-serif", padding: "0 1rem" }}>
      <h1 style={{ color: "#1a3a5c" }}>SenEvent --- Événements à Dakar</h1>
      
      {/* Gestion dynamique de l'état du bouton */}
      <button 
        onClick={charger} 
        disabled={chargement}
        style={{
          padding: "0.6rem 1.5rem",
          fontSize: "1rem",
          cursor: chargement ? "not-allowed" : "pointer",
          backgroundColor: "#1a3a5c",
          color: "white",
          border: "none",
          borderRadius: "4px"
        }}
      >
        {chargement ? "Chargement..." : "Charger les événements"}
      </button>

      {/* Boucle map pour transformer chaque objet du tableau en composant visuel */}
      <div style={{ marginTop: "1.5rem" }}>
        {evenements.map(ev => (
          <EvenementCarte key={ev.id} ev={ev} />
        ))}
      </div>
    </div>
  );
};

// Composant Enfant : Reçoit l'événement "ev" via les props du parent
const EvenementCarte = ({ ev }) => {
  const prix = ev.prix === 0 ? "Gratuit" : `${ev.prix} FCFA`;
  
  // Formatage de la date en français pour éviter le format brut de la base de données
  const dateOption = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
  const dateFormatee = new Date(ev.date_debut).toLocaleDateString('fr-FR', dateOption);

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "0.8rem 0", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
      {/* Affichage de l'image si elle existe */}
      {ev.image_url && (
        <img 
          src={ev.image_url} 
          alt={ev.titre} 
          style={{ width: "100%", maxHeight: "180px", objectFit: "cover", borderRadius: "4px", marginBottom: "0.5rem" }} 
        />
      )}
      <h3 style={{ margin: 0, color: "#1a3a5c" }}>{ev.titre}</h3>
      <p style={{ margin: "0.2rem 0", color: "#555" }}><strong>Catégorie :</strong> {ev.categorie}</p>
      <p style={{ margin: "0.2rem 0", color: "#555" }}><strong>Lieu :</strong> {ev.lieu_nom}</p>
      <p style={{ margin: "0.2rem 0", color: "#555" }}><strong>Date :</strong> {dateFormatee}</p>
      <p style={{ margin: "0.2rem 0", color: "#ea7d2b", fontWeight: "bold" }}>{prix}</p>
    </div>
  );
};

export default App;