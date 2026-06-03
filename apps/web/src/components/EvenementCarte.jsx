const EvenementCarte = ({ ev, afficherDetails }) => {
  const prix = ev.prix === 0 ? "Gratuit" : `${ev.prix} FCFA`;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        margin: "0.8rem 0",
        borderRadius: "8px"
      }}
    >
      <h3>{ev.titre}</h3>

      <p>Catégorie : {ev.categorie}</p>

      {afficherDetails && (
        <p>Lieu : {ev.lieu_nom}</p>
      )}

      <p>{prix}</p>
    </div>
  );
};

export default EvenementCarte;