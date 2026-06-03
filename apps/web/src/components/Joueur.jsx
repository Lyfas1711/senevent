function Joueur({ nom, buts, passes }) {
  return (
    <p className="alert alert-primary display-4">
      <em>{nom}</em> : <strong>{buts}</strong> buts et <strong>{passes}</strong> passes decisives.
    </p>
  );
}

export default Joueur;