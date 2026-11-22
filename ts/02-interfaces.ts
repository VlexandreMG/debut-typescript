/*
 * 02 — INTERFACES ET TYPES UNION
 */

// A. Écrivez l'interface Categorie : id (nombre), nom (texte).
// TODO

// B. Écrivez l'interface Plat :
//    id (nombre), nom (texte), prix (texte, ex. "6000.00"), disponible (booléen),
//    description (texte, FACULTATIVE), categorie (une Categorie ou null).
// TODO

// C. Écrivez le type StatutCommande : une des quatre valeurs
//    'en_attente', 'en_preparation', 'servie', 'payee'.
// TODO

// D. Une fois Plat écrit, le compilateur trouve DEUX erreurs dans cet objet.
//    Corrigez les valeurs.

// A Interface Categorie 
export interface Categorie {
  id: number;
  nom: string;
}

// B Interface Plat 
export interface Plat {
  id: number;
  nom: string;
  prix: string;
  disponible: boolean;
  description?: string;
  categorie: Categorie | null;
}

// C Le type de StatutCommande 
export type StatutCommande = 'en_attente' | 'en_preparation' | 'servie' | 'payee';

export const romazava: Plat = {
  id: 1,
  nom: 'Romazava',
  prix: '6000',
  disponible: true,
  categorie: { id: 1, nom: 'Plats' },
};

// E. Complétez : 'en_attente' -> 'En attente', 'en_preparation' -> 'En préparation',
//    'servie' -> 'Servie', 'payee' -> 'Payée'.
//    Utilisez un switch SANS default : que dit le compilateur s'il manque un cas ?
export function libelleStatut(statut: StatutCommande): string {
  // TODO
  switch (statut) {
    case 'en_attente': return 'En attente';
    case 'en_preparation': return 'En preparation';
    case 'servie': return 'Servie';
    case 'payee': return 'Payée';
  }
}
