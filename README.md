# Clone X with React and tailwind

Ce projet est un clone de Twitter développé en utilisant **React** et **Tailwind CSS**. Il a pour but de reproduire les fonctionnalités de base de Twitter avec une interface utilisateur moderne et responsive. Ce document décrit comment exécuter l'application localement et présente les principaux choix techniques.

## Fonctionnalités

-L'utilisateur peut voir une page d'accueil avec une mise en page basique comprenant un en-tête, un contenu principal et un pied de page.
- L'utilisateur peut visualiser des tweets factices affichés sur la page.
-L'utilisateur peut accéder à un formulaire de création de tweet (non fonctionnel pour le moment).

## Prérequis

Avant d'exécuter l'application, assurez-vous d'avoir installé les outils suivants sur votre machine :

- **Node.js** (version 18 ou supérieure)
- **npm** (gestionnaire de paquets Node.js) ou **yarn**

## Installation

### Étapes d'installation

1. Clonez le dépôt GitHub dans votre environnement local :

    ```bash
    git clone https://github.com/kadea-academy-learners/clone-x-with-react-AntoBbk9.git
    ```

2. Accédez au dossier du projet :

    ```bash
    cd clone-x-with-react-AntoBbk9
    ```

3. Installez les dépendances du projet :

    ```bash
    npm install
    ```

4. Une fois les dépendances installées, démarrez le serveur de développement :

    ```bash
    npm run dev
    ```

5. Ouvrez votre navigateur et accédez à l'URL suivante :

    ```bash
    http://localhost:5173/
    ```

L'application sera désormais exécutée en mode développement sur votre machine locale.

## Choix Techniques

### 1. **React**

L'application utilise **React** pour construire une interface utilisateur dynamique et modulaire. Chaque élément visuel, tel qu'un tweet, est encapsulé dans des composants réutilisables, rendant le code plus maintenable et évolutif.

### 2. **Tailwind CSS**

Pour le style de l'application, nous avons opté pour **Tailwind CSS**, un framework CSS utilitaire qui permet de construire rapidement des interfaces responsive sans avoir à écrire beaucoup de CSS personnalisé. Cela permet une approche **mobile-first** et une gestion fine des styles.

### 3. **Composants**

Les composants sont organisés dans des dossiers distincts au sein du répertoire `src/components`. Chaque composant correspond à une partie de l'interface, par exemple :

- `Tweet`: Représente un tweet individuel.
- `Sidebar`: Composant de navigation pour accéder aux différentes sections.
- `Button`: Boutons interactifs avec différentes tailles et icônes pour desktop.
- `ButtonMobile`: Boutons interactifs avec différentes tailles et icônes pour mobiles.
- etc.

### 4. **Responsive**

L'application a été conçue avec une approche **responsive**. Les composants sont ajustés pour être compatibles avec les petits écrans (smartphones) comme avec les plus grands (ordinateurs). Tailwind facilite cette adaptation grâce à ses classes utilitaires responsives comme `md:w-full`, `sm:hidden`, etc.
