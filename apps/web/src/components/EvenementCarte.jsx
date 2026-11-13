import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./EvenementCarte.module.css";

const EvenementCarte = ({ ev, afficherDetails }) => {
  const [imageErreur, setImageErreur] = useState(false);

  const prix = Number(ev.prix) === 0
    ? "Gratuit"
    : `${ev.prix} FCFA`;

  return (
    <Link to={`/evenement/${ev.id}`} className={styles.lien}>
      <article className={styles.carte}>
        <div className={styles.zoneImage}>
          {ev.image_url && !imageErreur ? (
            <img
              src={ev.image_url}
              alt={ev.titre || "Événement SenEvent"}
              className={styles.image}
              loading="lazy"
              onError={() => setImageErreur(true)}
            />
          ) : (
            <div className={styles.imageSecours}>
              <span className={styles.emoji}>🎉</span>
              <span>Découvrez cet événement</span>
            </div>
          )}

          <span className={styles.badge}>
            {ev.categorie || "Événement"}
          </span>
        </div>

        <div className={styles.contenu}>
          <h3 className={styles.titre}>{ev.titre}</h3>

          {afficherDetails && (
            <p className={styles.info}>
              <span>📍</span> {ev.lieu_nom || "Lieu à préciser"}
            </p>
          )}

          <div className={styles.pied}>
            <span className={styles.lieu}>
              📍 {ev.lieu_nom || "Dakar"}
            </span>
            <span className={styles.prix}>{prix}</span>
          </div>

          <span className={styles.voir}>
            Voir les détails →
          </span>
        </div>
      </article>
    </Link>
  );
};

export default EvenementCarte;
