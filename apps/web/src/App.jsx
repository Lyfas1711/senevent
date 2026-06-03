import { useState } from "react";
import EvenementCarte from "./ components / EvenementCarte ";

const App = () => {
  const [evenements, setEvenements] = useState([]);
  const [chargement, setChargement] = useState(false);

  const charger = async () => {
    setChargement(true);

    try {
      const reponse = await fetch("/evenements.json");
      const data = await reponse.json();
      setEvenements(data);
    } catch (error) {
      console.error("Erreur :", error);
    }

    setChargement(false);
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <h1>SenEvent --- Evenements à Dakar</h1>

      <button onClick={charger} disabled={chargement}>
        {chargement ? "Chargement..." : "Charger les événements"}
      </button>

      {evenements.map((ev) => (
        <EvenementCarte key={ev.id} ev={ev} />
      ))}
    </div>
  );
};

const EvenementCarte = ({ ev }) => {
  return (
    <div>
      <h3>{ev.titre}</h3>
      <p>{ev.categorie}</p>
      <p>{ev.lieu_nom}</p>
      <p>{ev.prix} FCFA</p>
    </div>
  );
};

export default App;