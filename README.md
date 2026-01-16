# CSS Organization Standard

## Structure hiérarchique

Ce projet utilise un système de marqueurs organisés par niveaux d'importance pour structurer les fichiers CSS. Chaque catégorie est entourée de commentaires délimiteurs avec un nombre d'égales (=) proportionnel à son importance.

---

## Syntaxe des marqueurs

### Type 1 - Catégories principales (20 égales)
```css
/* ===================================== */
/* Nom de la catégorie */
/* ===================================== */
```

**Exemples :**
- Global Styles
- Main Container
- Header

**Utilisation :** Styles fondamentaux et structure générale du site

---

### Type 2 - Catégories importantes (15 égales)
```css
/* =============================== */
/* Nom de la catégorie */
/* =============================== */
```

**Exemples :**
- Form
- Section Titles

**Utilisation :** Composants majeurs avec une importance significative

---

### Type 3 - Catégories moyennes (10 égales)
```css
/* ========================= */
/* Nom de la catégorie */
/* ========================= */
```

**Exemples :**
- Grid Section
- Labels
- Input Fields
- Textarea
- Containers
- Submit Button

**Utilisation :** Groupes de styles pour des éléments spécifiques

---

### Type 4 - Catégories mineures (5 égales)
```css
/* ==================== */
/* Nom de la catégorie */
/* ==================== */
```

**Exemples :**
- File Cells
- Clear Buttons
- Folder Container
- Animations
- Responsive Design

**Utilisation :** Styles spécialisés et cas particuliers

---

## Hiérarchie complète du fichier style.css

```
Type 1 - Global Styles (20=)
    └─ Réinitialisation des styles par défaut

Type 1 - Main Container (20=)
    └─ Conteneur principal de la page

Type 1 - Header (20=)
    └─ Titre principal et sous-titre

Type 2 - Form (15=)
    └─ Styles du formulaire principal

Type 2 - Section Titles (15=)
    └─ Titres des sections

Type 3 - Grid Section (10=)
    └─ Grille de mise en page

Type 3 - Labels (10=)
    └─ Étiquettes des champs

Type 3 - Input Fields (10=)
    └─ Champs de texte, fichiers et zones de texte

Type 3 - Textarea (10=)
    └─ Styles spécifiques aux textareas

Type 3 - Containers (10=)
    └─ Conteneurs CSS, JS et dossiers

Type 4 - Folder Container (5=)
    └─ Conteneur de dossiers spécifique

Type 3 - Submit Button (10=)
    └─ Bouton de soumission du formulaire

Type 4 - File Cells (5=)
    └─ Cellules de fichiers

Type 4 - Clear Buttons (5=)
    └─ Boutons d'effacement

Type 4 - Animations (5=)
    └─ Animations CSS

Type 4 - Responsive Design (5=)
    └─ Media queries et design responsive
```

---

## Guide d'ajout de nouvelles catégories

1. **Déterminez l'importance** : Quelle est la portée de cette catégorie ?
   - Affecte la structure générale ? → **Type 1 (20=)**
   - Affecte un composant principal ? → **Type 2 (15=)**
   - Groupe d'éléments spécifiques ? → **Type 3 (10=)**
   - Cas particulier ou spécialité ? → **Type 4 (5=)**

2. **Placez le marqueur** : Insérez le commentaire délimiteur au bon endroit dans le fichier

3. **Respectez la syntaxe** : Trois lignes obligatoires :
   ```css
   /* [égales] */
   /* Nom de la catégorie */
   /* [égales] */
   ```

4. **Maintenez l'ordre hiérarchique** : Gardez les catégories dans un ordre logique

---

## Exemple complet

```css
/* ===================================== */
/* Header */
/* ===================================== */

main > h1 {
    font-family: 'Frick Regular', serif;
    font-size: clamp(32px, 5vw, 48px);
    text-align: center;
}

.sub-title {
    font-size: clamp(16px, 2vw, 20px);
    text-align: center;
}

/* =============================== */
/* Form */
/* =============================== */

form {
    background: white;
    border-radius: 20px;
    padding: 50px;
}
```

---

## Avantages de cette structure

✓ **Clarté visuelle** : Hiérarchie facile à identifier au premier coup d'œil  
✓ **Navigation rapide** : Trouvez les sections facilement  
✓ **Maintenabilité** : Code organisé et logique  
✓ **Scalabilité** : Facile d'ajouter de nouvelles catégories  
✓ **Collaboration** : Standard clair pour tous les développeurs  

---

**Version** : 1.0  
**Créé** : 15 janvier 2026
