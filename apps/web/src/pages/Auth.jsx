import { useState } from "react";
import { sInscrire, seConnecter } from "@senevent/shared";
import { useNavigate } from "react-router-dom";
import styles from "./Auth.module.css";

const Auth = () => {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [nom, setNom] = useState("");
  const [erreur, setErreur] = useState(null);
  const [message, setMessage] = useState(null);
  const [enCours, setEnCours] = useState(false);

  const navigate = useNavigate();

  const soumettre = async (event) => {
    event.preventDefault();

    setErreur(null);
    setMessage(null);
    setEnCours(true);

    try {
      // Dans apps/web/src/pages/Auth.jsx

        if (mode === "signup") {
        await sInscrire(email.trim(), motDePasse, nom);
        setMessage(
            "Compte créé avec succès. Vérifiez votre adresse email si nécessaire."
        );
        setMode("login");
        } else {
        //  On passe les arguments séparément ici
        await seConnecter(email.trim(), motDePasse);
        navigate("/");
        }
    } catch (e) {
      setErreur(e.message);
    } finally {
      setEnCours(false);
    }
  };

  return (
    <main className={styles.page}>
      <form className={styles.form} onSubmit={soumettre}>
        <h2>
          {mode === "signup"
            ? "Créer un compte"
            : "Se connecter"}
        </h2>

        {mode === "signup" && (
          <label className={styles.champ}>
            Nom d'affichage

            <input
              type="text"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              required
            />
          </label>
        )}

        <label className={styles.champ}>
          Email

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label className={styles.champ}>
          Mot de passe

          <input
            type="password"
            value={motDePasse}
            onChange={(e) => setMotDePasse(e.target.value)}
            minLength="6"
            required
          />
        </label>

        {erreur && (
          <p className={styles.erreur}>
            {erreur}
          </p>
        )}

        {message && (
          <p className={styles.message}>
            {message}
          </p>
        )}

        <button
          type="submit"
          disabled={enCours}
          className={styles.bouton}
        >
          {enCours
            ? "..."
            : mode === "signup"
            ? "Créer le compte"
            : "Se connecter"}
        </button>

        <button
          type="button"
          onClick={() =>
            setMode(
              mode === "signup"
                ? "login"
                : "signup"
            )
          }
          className={styles.basculer}
        >
          {mode === "signup"
            ? "Déjà un compte ? Se connecter"
            : "Pas encore de compte ? Créer un compte"}
        </button>
      </form>
    </main>
  );
};

export default Auth;