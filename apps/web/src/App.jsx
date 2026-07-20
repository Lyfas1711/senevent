import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { supabase } from "./lib/supabase";

import Accueil from "./pages/Accueil";
import NouvelEvenement from "./pages/NouvelEvenement";
import Detail from "./pages/Detail";
import Auth from "./pages/Auth";
import NavBar from "./components/NavBar";

const App = () => {
  const [evenements, setEvenements] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);
  const [session, setSession] = useState(null);

  useEffect(() => {
    const recupererSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      setSession(session);
    };

    recupererSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (_event, nouvelleSession) => {
        setSession(nouvelleSession);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const charger = async () => {
    setChargement(true);
    setErreur(null);

    const { data, error } = await supabase
      .from("evenements")
      .select(`*,
        profiles(nom)
      `)
      .order("date_debut", { ascending: true });

    if (error) {
      setErreur(error.message);
    } else {
      setEvenements(data);
    }

    setChargement(false);
  };

  useEffect(() => {
    charger();
  }, []);

  return (
    <BrowserRouter>
      <NavBar session={session} />

      <Routes>
        <Route
          path="/"
          element={
            <Accueil
              evenements={evenements}
              chargement={chargement}
              erreur={erreur}
              onReessayer={charger}
            />
          }
        />

        <Route
          path="/nouveau"
          element={
            <NouvelEvenement
              onAjoutReussi={charger}
            />
          }
        />

        <Route
          path="/evenement/:id"
          element={
              <Detail
                  evenements={evenements}
                  session={session}
              />
          }
      />

        <Route
          path="/auth"
          element={<Auth />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;