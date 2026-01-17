# Implémentation des Pages d'Authentification

## Vue d'ensemble

Ce document décrit l'implémentation complète des pages d'authentification pour le projet Téléphonie-IA.

## Pages créées

### 1. Page d'inscription (`/[lang]/inscription`)
- **Chemin** : `/fr/inscription` ou `/en/inscription`
- **Composant** : `SignupForm`
- **Fonctionnalités** :
  - Formulaire complet avec validation côté client
  - Champs : nom complet, email, mot de passe, confirmation, société, taille équipe, téléphone (optionnel)
  - Validation email (regex)
  - Validation mot de passe (min 8 caractères + 1 chiffre)
  - Vérification correspondance mots de passe
  - Checkbox consentement obligatoire
  - Toggle afficher/masquer mot de passe
  - États loading/success/error
  - Redirection vers connexion après succès

### 2. Page de connexion (`/[lang]/connexion`)
- **Chemin** : `/fr/connexion` ou `/en/connexion`
- **Composant** : `SigninForm`
- **Fonctionnalités** :
  - Formulaire email + mot de passe
  - Validation côté client
  - Checkbox "Se souvenir de moi"
  - Lien vers mot de passe oublié
  - Simulation d'erreur si email contient "fail"
  - Redirection vers home après succès (1s)
  - États loading/success/error

### 3. Page mot de passe oublié (`/[lang]/connexion/mot-de-passe-oublie`)
- **Chemin** : `/fr/connexion/mot-de-passe-oublie` ou `/en/connexion/mot-de-passe-oublie`
- **Composant** : `ForgotPasswordForm`
- **Fonctionnalités** :
  - Formulaire simple avec email
  - Validation email
  - Message de succès générique (sécurité)
  - Lien retour connexion

## Composants réutilisables créés

### `AuthLayout`
Layout split-screen pour toutes les pages auth :
- Colonne gauche : formulaire
- Colonne droite : image + proposition de valeur (desktop uniquement)
- Responsive : image masquée sur mobile
- Éléments décoratifs : checkmarks avec bénéfices

### `FormField`
Wrapper pour champs de formulaire :
- Label avec indicateur requis (*)
- Gestion des erreurs avec icône
- Accessible (htmlFor, aria-invalid)

### `PasswordField`
Input mot de passe avec toggle show/hide :
- Bouton œil pour afficher/masquer
- Hérite de toutes les props Input
- Accessible (aria-label)

## Traductions

Toutes les traductions sont dans `lib/i18n/fr.ts` et `lib/i18n/en.ts` sous `authPage` :
- `authPage.signup` : page inscription
- `authPage.signin` : page connexion
- `authPage.forgotPassword` : page mot de passe oublié

## Design System

### Couleurs
- Primaire : `brand-blue` (bleu)
- Succès : `green-600`
- Erreur : `red-600`
- Neutre : `neutral-*`

### Composants UI utilisés
- `Input` : champs texte
- `Select` : sélecteur taille équipe
- `Checkbox` : consentement, remember me
- `Button` : soumission, navigation

### Accessibilité
- Labels avec `htmlFor` correct
- `aria-invalid` sur champs en erreur
- Messages d'erreur avec rôle `alert`
- Focus visible sur tous les éléments interactifs
- Navigation clavier complète

## Images

Images Unsplash utilisées :
- **Inscription** : `photo-1600880292203-757bb62b4baf` (équipe professionnelle)
- **Connexion** : `photo-1551434678-e076c223a692` (dashboard/bureau)

## Validation

### Email
```typescript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

### Mot de passe
- Minimum 8 caractères
- Au moins 1 chiffre
```typescript
password.length >= 8 && /\d/.test(password)
```

## Simulation Backend

Toutes les soumissions sont simulées avec :
```typescript
await new Promise((resolve) => setTimeout(resolve, 1500));
```

### Comportements simulés

**Inscription** :
- Toujours succès après 1.5s
- Affiche message de confirmation
- Bouton vers page connexion

**Connexion** :
- Succès si email ne contient pas "fail"
- Erreur "Identifiants invalides" si email contient "fail"
- Redirection vers home après 1s si succès

**Mot de passe oublié** :
- Toujours succès (message générique pour sécurité)
- Pas de redirection automatique

## Navigation

### Liens Header
- Desktop : boutons "Connexion" et "Inscription" en haut à droite
- Mobile : boutons dans le menu mobile

### Liens inter-pages
- Inscription → Connexion : "Vous avez déjà un compte ?"
- Connexion → Inscription : "Vous n'avez pas de compte ?"
- Connexion → Mot de passe oublié : "Mot de passe oublié ?"
- Mot de passe oublié → Connexion : "Retour à la connexion"

## Structure des fichiers

```
app/[lang]/
├── inscription/
│   └── page.tsx
├── connexion/
│   ├── page.tsx
│   └── mot-de-passe-oublie/
│       └── page.tsx

components/auth/
├── AuthLayout.tsx
├── FormField.tsx
├── PasswordField.tsx
├── SignupForm.tsx
├── SigninForm.tsx
├── ForgotPasswordForm.tsx
└── index.ts

lib/i18n/
├── fr.ts (+ authPage)
├── en.ts (+ authPage)
└── dictionaries.ts

types/
└── i18n.ts (+ authPage interface)
```

## Prochaines étapes (backend)

Quand le backend sera prêt :
1. Remplacer les simulations par de vrais appels API
2. Gérer les tokens JWT
3. Implémenter la gestion de session
4. Ajouter la vérification email
5. Implémenter le reset password réel
6. Ajouter OAuth (Google, Microsoft, etc.)

## Tests manuels suggérés

- [ ] Inscription avec tous les champs valides
- [ ] Inscription avec email invalide
- [ ] Inscription avec mot de passe trop court
- [ ] Inscription avec mots de passe non correspondants
- [ ] Inscription sans consentement
- [ ] Connexion avec email contenant "fail"
- [ ] Connexion avec succès
- [ ] Toggle show/hide password
- [ ] Mot de passe oublié avec email valide
- [ ] Navigation entre les pages
- [ ] Responsive mobile/desktop
- [ ] Accessibilité clavier
