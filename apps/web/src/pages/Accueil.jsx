import { useState, useEffect } from "react";
import EvenementCarte from "../components/EvenementCarte";
import SearchBar from "../components/SearchBar";
import EtatChargement from "../components/EtatChargement";
import styles from "./Accueil.module.css";

const Accueil = ({ evenements, chargement, erreur, onReessayer }) => {
  const [recherche, setRecherche] = useState("");
  const [categorieActive, setCategorieActive] = useState("Toutes");

  const categories = [
    "Toutes",
    ...new Set(
      evenements
        .map((ev) => ev.categorie)
        .filter(Boolean)
    ),
  ];

  const evenementsFiltres = evenements.filter((ev) => {
    const texte = recherche.toLowerCase();

    const correspondRecherche =
      (ev.titre || "").toLowerCase().includes(texte) ||
      (ev.categorie || "").toLowerCase().includes(texte) ||
      (ev.lieu_nom || "").toLowerCase().includes(texte);

    const correspondCategorie =
      categorieActive === "Toutes" ||
      ev.categorie === categorieActive;

    return correspondRecherche && correspondCategorie;
  });

  useEffect(() => {
    document.title =
      evenementsFiltres.length > 0
        ? `(${evenementsFiltres.length}) SenEvent`
        : "SenEvent — Découvrez les événements";
  }, [evenementsFiltres.length]);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroFond}></div>

        <div className={styles.heroContenu}>
          <span className={styles.heroBadge}>
            ✨ VOTRE AGENDA ÉVÉNEMENTIEL
          </span>

          <h1>
            Découvrez les événements
            <br />
            <span>qui vous font vibrer.</span>
          </h1>

          <p>
            Concerts, conférences, festivals et rencontres :
            trouvez votre prochaine expérience au Sénégal.
          </p>

          <a href="#evenements" className={styles.heroBouton}>
            Explorer les événements <span>→</span>
          </a>

          <div className={styles.heroStatistiques}>
            <div>
              <strong>{evenements.length}</strong>
              <span>Événements</span>
            </div>
            <div className={styles.separateur}></div>
            <div>
              <strong>100%</strong>
              <span>Découvertes</span>
            </div>
          </div>
        </div>

        <div className={styles.heroDecoration}>
          <span>🎵</span>
          <span>🎭</span>
          <span>🎉</span>
        </div>
      </section>

      <section id="evenements" className={styles.sectionEvenements}>
        <div className={styles.sectionEntete}>
          <div>
            <span className={styles.surtitre}>TROUVEZ VOTRE PROCHAINE SORTIE</span>
            <h2>Les événements à découvrir</h2>
            <p>Les meilleures occasions de sortir et de partager.</p>
          </div>

          <span className={styles.compteur}>
            {evenementsFiltres.length} résultat(s)
          </span>
        </div>

        <EtatChargement
          chargement={chargement}
          erreur={erreur}
          onReessayer={onReessayer}
        />

        {!chargement && !erreur && (
          <>
            <div className={styles.recherche}>
              <SearchBar
                recherche={recherche}
                onRecherche={setRecherche}
              />
            </div>

            {categories.length > 1 && (
              <div className={styles.filtres}>
                {categories.map((categorie) => (
                  <button
                    key={categorie}
                    type="button"
                    onClick={() => setCategorieActive(categorie)}
                    className={
                      categorieActive === categorie
                        ? `${styles.filtre} ${styles.filtreActif}`
                        : styles.filtre
                    }
                  >
                    {categorie}
                  </button>
                ))}
              </div>
            )}

            {evenementsFiltres.length === 0 ? (
              <div className={styles.vide}>
                <span>🔎</span>
                <h3>Aucun événement trouvé</h3>
                <p>
                  Essayez un autre mot-clé ou choisissez une autre catégorie.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setRecherche("");
                    setCategorieActive("Toutes");
                  }}
                >
                  Réinitialiser les filtres
                </button>
              </div>
            ) : (
              <div className={styles.grille}>
                {evenementsFiltres.map((ev) => (
                  <EvenementCarte
                    key={ev.id}
                    ev={ev}
                    afficherDetails={true}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </section>

      <section className={styles.bandeau}>
        <div>
          <span>🎟️</span>
          <div>
            <h2>Vous organisez un événement ?</h2>
            <p>Partagez votre événement et faites-le découvrir à la communauté.</p>
          </div>
        </div>
        <a href="/nouveau">Publier un événement <span>→</span></a>
      </section>
    </main>
  );
};

export default Accueil;
