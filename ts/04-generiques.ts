/*
 * 04 — GÉNÉRIQUES
 */

import { romazava } from './02-interfaces.ts';

const p = premier([romazava]);                                                                                                                             

// A. premier : renvoie le premier élément d'un tableau, ou undefined s'il est vide.
//    Elle doit marcher pour un tableau de Plat, de nombres, de textes...
//    premier([3, 4]) a le type  number | undefined
//    premier(plats)  a le type  Plat | undefined
export function premier<T>(liste: T[]): T | undefined{
  // TODO : remplacez les any par un paramètre de type <T>
  return liste[0];
}

premier([3, 4]);
premier(p);

// B. Depot<T> : stocke des éléments qui ont TOUS un id numérique.
//    - ajouter(element)  : ajoute l'élément
//    - trouver(id)       : renvoie l'élément ou undefined
//    - tous()            : renvoie une COPIE du tableau (modifier la copie ne change pas le dépôt)
//    Contrainte : new Depot<number>() doit provoquer une erreur de compilation.
//    Indice : <T extends { id: number }>
export class Depot {
  // TODO
}
