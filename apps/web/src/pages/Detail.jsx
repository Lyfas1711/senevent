import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { supprimerEvenement } from "@senevent/shared";
import styles from "./Detail.module.css";
import BoutonInscription from "../components/BoutonInscription";

const Detail = ({ evenements, session }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [imageErreur, setImageErreur] = useState(false);

  const evenement = evenements.find(
    (ev) => ev.id === Number(id)
  );

  if (!evenement) {
    return (
      <main className={styles.container}>
        <div className={styles.introuvable}>
          <span className={styles.iconeVide}>🎟️</span>
          <h1>Événement introuvable</h1>
          <p>Cet événement n'existe pas ou n'est plus disponible.</p>
          <Link to="/" className={styles.boutonRetour}>
            Découvrir les événements
          </Link>
        </div>
      </main>
    );
  }

  const prix =
    evenement.prix === 0
      ? "Gratuit"
      : `${evenement.prix} FCFA`;

  const date = evenement.date_debut
    ? new Date(evenement.date_debut).toLocaleString("fr-FR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "Date non précisée";

  const organisateur = evenement.profiles?.nom || "Équipe SenEvent";

  const supprimer = async () => {
    const confirme = window.confirm("Supprimer cet événement ?");
    if (!confirme) return;

    try {
      await supprimerEvenement(evenement.id);
      navigate("/");
    } catch (error) {
      alert("Erreur : " + error.message);
    }
  };

  return (
    <main className={styles.container}>
      <button
        onClick={() => navigate(-1)}
        className={styles.retour}
      >
        <span>←</span> Retour aux événements
      </button>

      <article className={styles.fiche}>
        <div className={styles.visuel}>
          {evenement.image_url && !imageErreur ? (
            <img
              src={evenement.image_url}
              alt={evenement.titre}
              className={styles.image}
              onError={() => setImageErreur(true)}
            />
          ) : (
            <div className={styles.imageSecours}>
              <span>🎉</span>
              <p>Vivez l'événement avec SenEvent</p>
            </div>
          )}
          <div className={styles.overlay}></div>
          <span className={styles.badgeImage}>
            {evenement.categorie || "Événement"}
          </span>
        </div>

        <div className={styles.contenu}>
          <div className={styles.entete}>
            <div>
              <span className={styles.surtitre}>SENEVENT • À NE PAS MANQUER</span>
              <h1 className={styles.titre}>{evenement.titre}</h1>
              <p className={styles.sousTitre}>
                Découvrez tous les détails et réservez votre place.
              </p>
            </div>
          </div>

          <div className={styles.grilleInfos}>
            <div className={styles.infoCarte}>
              <span className={styles.infoIcone}>📍</span>
              <div>
                <span className={styles.infoLabel}>LIEU</span>
                <strong>{evenement.lieu_nom || "Lieu à préciser"}</strong>
              </div>
            </div>

            <div className={styles.infoCarte}>
              <span className={styles.infoIcone}>📅</span>
              <div>
                <span className={styles.infoLabel}>DATE ET HEURE</span>
                <strong>{date}</strong>
              </div>
            </div>

            <div className={styles.infoCarte}>
              <span className={styles.infoIcone}>💰</span>
              <div>
                <span className={styles.infoLabel}>PRIX D'ENTRÉE</span>
                <strong className={styles.prix}>{prix}</strong>
              </div>
            </div>

            <div className={styles.infoCarte}>
              <span className={styles.infoIcone}>👤</span>
              <div>
                <span className={styles.infoLabel}>ORGANISATEUR</span>
                <strong>{organisateur}</strong>
              </div>
            </div>
          </div>

          <section className={styles.reservation}>
            <div>
              <h2>Envie de participer ?</h2>
              <p>Inscrivez-vous dès maintenant pour réserver votre place.</p>
            </div>
            <div className={styles.actions}>
              <BoutonInscription
                evenementId={evenement.id}
                session={session}
              />
            </div>
          </section>

          {session &&
            session.user.id === evenement.organisateur_id && (
              <div className={styles.zoneSuppression}>
                <p>Vous êtes l'organisateur de cet événement.</p>
                <button
                  onClick={supprimer}
                  className={styles.supprimer}
                >
                  Supprimer cet événement
                </button>
              </div>
            )}
        </div>
      </article>
    </main>
  );
};

export default Detail;
