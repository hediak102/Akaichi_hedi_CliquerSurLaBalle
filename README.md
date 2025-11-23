# 🏀 Basketball Click Game

## Description
Un jeu interactif et dynamique où le joueur doit cliquer sur un ballon de basketball qui apparaît aléatoirement sur l'écran. Le but est d'obtenir le score le plus élevé possible dans le temps imparti, avec une expérience immersive inspirée des terrains de basketball professionnels.

## Technologies utilisées
- **HTML5** - Structure sémantique de la page
- **CSS3** - Styles avancés, animations et effets visuels
- **JavaScript Vanilla** - Logique du jeu et gestion des interactions
- **Animations CSS** - Keyframes pour les effets de mouvement
- **Gradients CSS** - Arrière-plans et effets visuels modernes
- **Flexbox** - Mise en page responsive
- **LocalStorage API** - Stockage persistant des données

## Fonctionnalités principales
- ✅ **Système de score en temps réel** avec affichage dynamique
- ✅ **Compte à rebours** de 5 secondes avec reset automatique
- ✅ **Saisie personnalisée du nom du joueur** avec validation
- ✅ **Ballon interactif** qui change de position aléatoirement à chaque clic
- ✅ Système de high score persistant sauvegardé dans le localStorage
- ✅ Bouton de reset du high score avec confirmation
- ✅ Effet visuel glow quand un nouveau record est établi
- ✅ **Effets visuels avancés** : ballons flottants, orbes lumineux, terrain de basketball
- ✅ **Système de redémarrage** avec transitions fluides
- ✅ **Design responsive** avec media queries
- ✅ **Animations CSS** : flottement, pulsation, effet glitch, rebond
  
## Lien vers GitHub Pages
[🔗 Voir le projet en ligne](- https://hediak102.github.io/Akaichi_hedi_CliquerSurLaBalle/)

## Nouveautés explorées
- **Animations CSS complexes** : Maîtrise des keyframes pour créer des effets de flottement et de pulsation
- **Gestion d'état en JavaScript** : Implémentation d'un système de jeu avec états (actif/inactif)
- **Manipulation dynamique du DOM** : Création et suppression d'éléments en temps réel
- **Effets visuels avancés** : Utilisation des gradients, ombres portées et filtres blur
- **Gestion du timing** : Implémentation précise des intervalles de temps et animations synchronisées
- **Stockage persistant avec localStorage** : Implémentation d'un système de sauvegarde qui conserve le high score même après fermeture du navigateur
- **Gestion d'état complexe** : Développement d'un système pour suivre l'état du high score (nouveau record établi ou non)
- **Animation conditionnelle** : Création d'un effet glow qui s'active uniquement quand un nouveau record est battu et persiste jusqu'à la fin de la partie
- **Architecture modulaire** : Séparation des préoccupations entre la logique du jeu et la gestion des données persistantes
  
## Difficultés rencontrées
### Gestion des états du jeu
- Problème de synchronisation entre le timer et l'état actif/inactif du jeu
- Gestion des multiples écouteurs d'événements qui pouvaient entrer en conflit
- Implémentation d'un système de high score persistant avec stockage local, permettant de conserver le record même après la fermeture du navigateur.

### Animations et performances
- Optimisation des animations CSS pour éviter les saccades
- Gestion du z-index pour la superposition des éléments
- Performance avec plusieurs animations simultanées
- l'utilisation de gradients pour les buttons et les labels.
- Créer un effet de glow continu sans surcharger le processeur, et s'assurer que l'animation s'arrête au bon moment (game over ou reset).

### Expérience utilisateur
- Création de transitions fluides entre les différents états du jeu
- Gestion des reset complets sans rechargement de la page
- Synchronisation entre le high score, le score actuel et l'état du jeu (actif/inactif). Gérer la persistance des données sans interférer avec le déroulement du jeu.

## Solutions apportées
- Ce projet a bénéficié de mes recherches sur le cours Moodle et de l'étude d'exemples provenant de plateformes éducatives comme W3Schools et Coursera. Ces ressources m'ont été indispensables pour comprendre et appliquer des concepts avancés.
### Pour la gestion des états
- **Implémentation d'un flag `gameActive`** pour contrôler l'état du jeu
- **Utilisation de `clearInterval()`** pour réinitialiser proprement le timer
- **Validation des conditions** avant chaque action pour éviter les comportements inattendus
- **Utilisation du localStorage** pour sauvegarder le high score, et mise à jour conditionnelle uniquement lorsque le score actuel le dépasse. Réinitialisation de l'état du jeu lors du reset du high score en réutilisant la fonction de redémarrage.

### Pour les animations
- **Optimisation des keyframes** avec des transformations hardware-accelerated
- **Utilisation de `opacity` et `transform`** pour de meilleures performances
- **Gestion des délais d'animation** pour créer un effet naturel
-  **Utilisation d'une animation CSS keyframe avec la propriété infinite pour le glow**, et contrôle de l'animation via JavaScript en ajoutant/supprimant la classe ou en modifiant la propriété animation. Arrêt de l'animation lors du game over ou du reset.

### Pour l'expérience utilisateur
- **Système de fade-in/fade-out** avec transitions CSS pour les changements d'état
- **Validation côté client** pour le nom du joueur avant le démarrage
- **Feedback visuel immédiat** au clic sur le ballon avec repositionnement aléatoire
- **Message de confirmation** pour le reset du high score
- **Effet visuel distinctif** (glow) pour indiquer un nouveau record
