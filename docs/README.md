
# 🎨 Design System — Variables CSS Regeis

## 🌈 Couleurs

| Variable                          | Rôle / Utilisation |
|-----------------------------------|--------------------|
| `--color-background`              | Couleur de fond globale de l'application (body, dashboard) |
| `--color-surface`                 | Fond des éléments de surface (cartes, panels, menus) |
| `--color-accent-primary`          | Couleur d'accent principale (boutons primaires, liens actifs) |
| `--color-accent-secondary`        | Couleur d'accent secondaire (boutons secondaires, tags, badges) |
| `--color-text-primary`            | Couleur principale du texte (texte standard) |
| `--color-text-secondary`          | Couleur du texte secondaire (légendes, informations secondaires) |

## 🖋️ Typographie

| Variable                          | Rôle / Utilisation |
|-----------------------------------|--------------------|
| `--font-family`                   | Police principale de l'application |

## 📏 Espacements

| Variable                          | Rôle / Utilisation |
|-----------------------------------|--------------------|
| `--spacing-xs`                    | Espace extra-petit (4px), ex: petite marge interne |
| `--spacing-sm`                    | Espace petit (8px), ex: padding de bouton |
| `--spacing-md`                    | Espace moyen (16px), ex: marge standard entre composants |
| `--spacing-lg`                    | Espace large (24px), ex: padding de section |
| `--spacing-xl`                    | Espace extra-large (32px), ex: grande séparation de blocs |

## 🟦 Bordures

| Variable                          | Rôle / Utilisation |
|-----------------------------------|--------------------|
| `--border-radius-sm`              | Coins légèrement arrondis (4px), ex: petits boutons |
| `--border-radius-md`              | Coins moyennement arrondis (8px), ex: cards, boutons moyens |
| `--border-radius-lg`              | Coins très arrondis (16px), ex: composants visuels forts (ex: panels, modales) |

## 🌟 Ombres

| Variable                          | Rôle / Utilisation |
|-----------------------------------|--------------------|
| `--shadow-md`                     | Ombre moyenne, utilisée pour donner de la profondeur aux composants comme les cards |

## Exemple d'utilisation dans le CSS

```css
body {
  background-color: var(--color-background);
  color: var(--color-text-primary);
  font-family: var(--font-family);
}

.card {
  background-color: var(--color-surface);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-md);
}
```

## Notes

👉 Cette charte est conçue pour garantir :
- cohérence visuelle
- respect de ta charte Regeis (palette 2)
- facilité d'extension dans le futur (on pourra ajouter `--color-error`, `--color-success`, etc.)

👉 Ce document peut être **placé en commentaire en haut de `variables.css`** → pour que tout le monde dans l'équipe sache à quoi sert chaque variable.
