export type Categorie =
    | "concert"
    | "expo"
    | "conference"
    | "atelier"
    | "soutenance";

export interface Evenement {
    id: number;
    titre: string;
    categorie: Categorie;
    lieu_nom: string;
    date_debut: string;
    prix: number;
    image_url: string | null;
    organisateur_id: string | null;
    created_at: string;
}

export interface NouvelEvenementInput {
    titre: string;
    categorie: Categorie;
    lieu_nom: string;
    date_debut: string;
    prix: number;
    image_url?: string | null;
    organisateur_id: string;
}

export interface Profile {
    id: string;
    nom: string;
    telephone: string | null;
    role: "PUBLIC" | "ORGANISATEUR" | "ADMIN";
    created_at: string;
}