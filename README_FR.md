# zimbra-nextcloud-connector

Version 3.0.2 — correctifs de transfert, versions Nextcloud et choix de confidentialité Unsplash, sans intégration Collabora.

Projet communautaire indépendant créé et maintenu par **Franck Chalon**.

## Nouveautés 3.0.2

- l’envoi par blocs ne reste plus bloqué à 1 % après le premier bloc : l’appel de traduction JavaScript erroné a été corrigé et un test empêche sa réintroduction ;
- le téléchargement d’une ancienne version utilise le `href` WebDAV exact fourni par Nextcloud, contrôlé sur la même origine ;
- la restauration suit le flux officiel Nextcloud par `MOVE` vers `versions/{utilisateur}/restore/target` ;
- `install.sh` et `configure.sh` demandent tous deux si les arrière-plans Unsplash doivent être autorisés ; pour une installation automatisée, `CLOUD_UNSPLASH=true` ou `false` évite l’invite ;
- l’insertion des liens publics en lecture seule utilise désormais l’API officielle `insertAtCaret` du composeur Zimbra ; si cette API est indisponible, les liens restent affichés dans une zone copiable au lieu d’échouer avec une erreur de focus du presse-papiers ;
- le script de configuration propose explicitement les photos d’arrière-plan Unsplash, tout en conservant le dégradé local comme choix par défaut respectueux de la confidentialité ;
- le mode géré dispose d’un test d’intégration automatisé couvrant la création OCS, le mot de passe d’application, la vérification WebDAV, le stockage chiffré, le refus des doublons et le retour arrière avec suppression du compte incomplet.

- l’interface détecte les capacités du Nextcloud connecté et respecte les permissions WebDAV, les montages, l’interdiction de téléchargement et les verrous de fichiers ;
- navigation rapide dans **Fichiers**, **Favoris**, **Récents**, **Partagés par moi**, **Partagés avec moi** et **Liens publics**, selon les fonctions réellement disponibles ;
- recherche avancée par mots-clés, catégorie, date de modification et taille, dans le dossier actuel ou tout le compte ;
- envoi par blocs directement vers Nextcloud avec glisser-déposer de fichiers ou dossiers, progression, annulation, nouvelle tentative et choix explicite en cas de collision ;
- les fichiers vides et les arborescences de dossiers suivent les mêmes règles de conflit ;
- téléchargement ZIP d’un dossier ou d’une sélection située dans un même dossier, sans conserver les fichiers Cloud dans Zimbra ;
- panneau de détails enrichi : propriétaire, type, dates, tags, sommes de contrôle, permissions, verrou, partages, versions, commentaires et activité lorsque Nextcloud les fournit ;
- création et révocation de partages, avec liens publics toujours forcés en **lecture seule** par la Zimlet ;
- connexion recommandée par le **Login Flow v2 Nextcloud** : le mot de passe d’application est transmis de Nextcloud au serveur Zimbra sans être affiché dans le navigateur ; la saisie manuelle reste disponible ;
- sélecteur **Trombone → Cloud** amélioré : trois comptes, favoris, récents, recherche globale, limites réelles du message Zimbra, progression et insertion de liens en lecture seule ;
- modèles de documents personnalisés facultatifs en plus des six modèles intégrés ;
- limitation des requêtes, pagination des réponses, verrouillage inter-processus du stockage chiffré et option de stockage partagé pour une installation multi-mailbox correctement préparée ;
- diagnostic utilisateur intégré, `diagnose.sh` pour l’administrateur et rapport en lecture seule des profils potentiellement orphelins avec `lifecycle-report.sh` ;
- apparence modernisée et responsive ; les fonds distants Unsplash sont désactivés par défaut, tandis qu’un dégradé local reste disponible sans appel externe.

Les fenêtres d’édition et multimédias restent persistantes, déplaçables et redimensionnables sous la navigation Zimbra. Les trois comptes chiffrés, les configurations ONLYOFFICE/Euro-Office par compte, les onze langues et les formats OOXML/OpenDocument sont conservés. **Collabora n’est volontairement pas intégré à cette version.**

Les tests locaux couvrent la compilation Java, les parseurs sensibles, les traductions, les scripts d’installation, l’intégration Modern et la persistance des fenêtres. Avant une publication communautaire ou un déploiement en production, validez néanmoins le paquet sur une préproduction possédant les mêmes versions de Zimbra, Nextcloud et du serveur d’édition.

## Nouveautés 2.3.6

- dès qu’un fichier ou dossier est sélectionné, la barre **Déplacer / Copier / Corbeille / Tout désélectionner** reste visible en bas de la zone Cloud ;
- il n’est plus nécessaire de remonter au début d’un dossier long pour agir sur la sélection ;
- un espace est ajouté sous la dernière rangée afin que la barre flottante ne masque aucun élément ;
- sur les écrans étroits, la barre et ses boutons s’adaptent automatiquement à la largeur et aux traductions plus longues ;
- aucun nouveau libellé n’a été ajouté : les actions restent disponibles dans les onze langues et le test de construction vérifie que chaque dictionnaire contient exactement les mêmes clés.

## Nouveautés 2.3.5

- les cases permettent maintenant de sélectionner plusieurs fichiers **et dossiers** ;
- la barre de sélection propose **Déplacer**, **Copier**, **Corbeille** et **Tout désélectionner** ;
- déplacer ou copier ouvre une arborescence simple pour choisir le dossier de destination dans le compte Cloud actif ;
- la suppression demande une confirmation puis place les éléments dans la corbeille Nextcloud, où ils restent restaurables ;
- les opérations sont exécutées directement par WebDAV dans Nextcloud : la Zimlet ne conserve aucune copie des éléments dans Zimbra ;
- un dossier ne peut pas être déplacé ou copié dans lui-même et les collisions de noms restent refusées par Nextcloud ;
- une opération peut traiter jusqu’à 200 éléments et indique clairement les éventuels éléments refusés ;
- toutes les nouvelles fonctions sont traduites dans les onze langues prises en charge.

## Nouveautés 2.3.4

- l’éditeur ONLYOFFICE/Euro-Office occupe maintenant presque toute la largeur et toute la hauteur disponibles sous la barre Zimbra dès son ouverture ;
- il conserve une petite marge de 12 px à gauche et à droite et de 4 px en haut et en bas de la zone Cloud ;
- la barre principale de Zimbra reste visible et cliquable ;
- le déplacement et le redimensionnement manuel restent disponibles ;
- la taille initiale des fenêtres d’images, vidéos et musiques ne change pas.

## Nouveautés 2.3.3

- correction du clic sur les documents, images, vidéos et musiques qui pouvait ne rien ouvrir avec la version 2.3.2 sur Zimbra 10.1 ;
- remplacement de la seconde racine Preact par un hôte DOM natif compatible avec l’environnement des Zimlets Modern ;
- maintien de la même iframe bureautique et du même lecteur multimédia pendant un passage vers Mail, Agenda ou Contacts ;
- test automatisé d’ouverture des quatre catégories de fichiers et de conservation des fenêtres pendant la navigation.

## Nouveautés 2.3.2

- l’éditeur ONLYOFFICE ou Euro-Office s’ouvre maintenant dans une grande fenêtre flottante placée sous la navigation principale de Zimbra ;
- les onglets Mail, Agenda, Contacts et les autres applications restent cliquables sans fermer le document ;
- en quittant Cloud, la fenêtre est seulement masquée : son iframe reste chargée et la session de coédition continue ;
- au retour dans Cloud, le document réapparaît sans recréer l’éditeur ni perdre son contexte ;
- les images, vidéos et musiques suivent le même fonctionnement et leur élément multimédia reste monté pendant la navigation ;
- les fenêtres bureautiques et multimédias sont déplaçables et redimensionnables ;
- le plein écran multimédia reste disponible. Comme tout plein écran du navigateur, il masque temporairement Zimbra jusqu’à sa fermeture.

Ce maintien concerne la navigation entre les applications de la même page Zimbra. Un rechargement complet du navigateur, une déconnexion ou la fermeture de l’onglet recrée nécessairement l’éditeur.

## Nouveautés 2.3.1

- chaque utilisateur Zimbra peut connecter, nommer et basculer simplement entre **trois comptes Nextcloud** ;
- le compte actif, les trois profils et leurs mots de passe d’application restent chiffrés côté Zimbra ; aucun fichier Cloud n’est mis en cache ;
- une ancienne configuration à un seul compte est migrée automatiquement au premier chargement, sans ressaisie du mot de passe ;
- retirer une connexion depuis Zimbra ne supprime jamais le compte ni ses fichiers dans Nextcloud ;
- chaque compte Cloud peut utiliser le réglage bureautique global ou sa propre configuration ONLYOFFICE/Euro-Office (URL, mode de sécurité, en-tête et secret JWT) ;
- les réglages personnalisés sont chiffrés avec le profil et le secret JWT n’est jamais renvoyé au navigateur ;
- **Trombone → Cloud** affiche les comptes connectés et permet de choisir celui qui contient les pièces jointes avant de parcourir ses dossiers ;
- les nouveaux documents reçoivent la langue régionale de l’utilisateur Zimbra. Ainsi, un nouveau `.odt` français n’affiche plus « English — United States » comme langue du document ;
- ce changement ne réécrit jamais les documents déjà existants, dont la langue peut être corrigée manuellement dans l’éditeur ;
- langues disponibles : français, anglais États-Unis, espagnol Espagne, espagnol Argentine, italien, allemand, portugais Portugal, portugais Brésil, hindi Inde, malais Malaisie et russe Russie.

Le russe est transmis au moteur d’édition sous la forme `ru`/`ru-RU`. L’API de l’éditeur prend en charge le malais, mais pas encore l’hindi : l’interface Cloud reste en hindi et l’éditeur bureautique utilise l’anglais américain pour `hi-IN`. Pour l’Argentine, le document conserve `es-AR`, tandis que l’interface de l’éditeur utilise son espagnol officiellement pris en charge.

## Langues et formats OpenDocument

- l’installation propose les onze variantes linguistiques listées ci-dessus, avec le français par défaut ;
- la langue choisie pilote les scripts d’administration et le repli des messages serveur ;
- dans Zimbra Modern, chaque utilisateur voit automatiquement Cloud dans la langue de son propre compte Zimbra ; une langue non prise en charge revient au français ;
- les libellés, dialogues, menus, erreurs HTTP et le sélecteur **Trombone → Cloud** utilisent la même traduction ;
- la création de documents propose désormais `.odt`, `.ods` et `.odp` en plus de `.docx`, `.xlsx` et `.pptx` ;
- les six modèles inclus sont de vrais fichiers bureautiques valides et peuvent rejoindre la coédition fournie par ONLYOFFICE ou Euro-Office via Nextcloud.

Les clés techniques, identifiants d’API, noms de propriétés et journaux internes restent volontairement stables pour éviter de casser les outils d’exploitation. Ils ne sont pas utilisés comme libellés de l’interface.

## Deux modes de comptes Nextcloud

L’installateur propose désormais deux fonctionnements globaux :

- **Personnel** : chaque utilisateur saisit librement l’URL de son Nextcloud, son identifiant et son mot de passe d’application, comme dans les versions précédentes ;
- **Géré** : l’administrateur Zimbra configure un Nextcloud commun. Lors de sa première ouverture de **Cloud**, l’utilisateur clique sur **Activer mon compte Cloud** et la Zimlet crée son compte avec son adresse Zimbra complète comme identifiant.

En mode géré, un mot de passe principal aléatoire est affiché une seule fois à l’utilisateur. La Zimlet demande immédiatement à Nextcloud un mot de passe d’application distinct, enregistre uniquement ce dernier dans le profil AES-GCM, puis oublie le mot de passe principal. L’utilisateur peut donc changer ultérieurement son mot de passe principal sans couper Cloud dans Zimbra.

La création utilise l’API OCS officielle de provisionnement de Nextcloud et son point d’accès de génération d’un mot de passe d’application. Si l’identifiant existe déjà, la Zimlet refuse l’activation et ne réinitialise jamais son mot de passe. Si une étape échoue après la création, le compte vide créé pendant cette tentative est supprimé automatiquement.

Le quota demandé dans l’installateur est facultatif. Lorsqu’il reste vide, Nextcloud applique automatiquement son **quota par défaut pour les nouveaux utilisateurs**. La capacité dépend donc bien de la configuration du serveur Nextcloud. Une valeur explicite comme `10 GB` permet de la remplacer pour ces comptes.

Le compte de service de provisionnement et son mot de passe d’application sont conservés dans `/opt/zimbra/conf/nextcloud-zimlet.properties`, accessible uniquement à `zimbra` en mode `0600`. Utilisez un compte dédié ; un administrateur de groupe limité au groupe choisi est préférable à un administrateur global lorsque votre organisation le permet.

La désactivation ou la suppression de la Zimlet ne supprime jamais les utilisateurs ni leurs fichiers sur Nextcloud. Leur cycle de vie doit être géré séparément par l’administrateur.

## ONLYOFFICE ou Euro-Office par compte Cloud

- l’installateur propose **ONLYOFFICE** ou **Euro-Office** ;
- la Zimlet sélectionne automatiquement l’API OCS de l’application Nextcloud correspondante : `onlyoffice` ou `eurooffice` ;
- l’adresse publique, le mode de sécurité, l’en-tête JWT et le secret définis au niveau du serveur Zimbra restent la valeur par défaut ;
- dans **Connexion → Édition des documents**, l’utilisateur peut surcharger ces valeurs uniquement pour le compte Cloud actif ;
- trois comptes Nextcloud peuvent ainsi utiliser trois serveurs de documents différents ;
- le mode JWT est recommandé en production ; le mode sans JWT est réservé à un test isolé ;
- le nom du moteur choisi est affiché dans les réglages et dans la fenêtre d’édition ;
- la coédition utilise la clé, le callback, l’utilisateur et le jeton fournis par le connecteur Nextcloud afin de rejoindre la même session que l’interface Nextcloud.

La Zimlet ne possède pas les droits d’administration nécessaires pour modifier automatiquement l’application bureautique de Nextcloud. Pour chaque compte personnalisé, l’administrateur du Nextcloud doit donc configurer l’application `onlyoffice` ou `eurooffice` avec le même fournisseur, la même URL et le même secret JWT. Un même fichier ouvert via deux Nextcloud ne peut partager une session temps réel que si les deux ouvertures aboutissent au même Document Server et à une clé de document commune ; deux serveurs de documents différents créent nécessairement deux sessions distinctes.

Euro-Office est un fork du Document Server ONLYOFFICE et conserve `DocsAPI.DocEditor`, les callbacks et la coédition temps réel. Son connecteur officiel exige actuellement **Nextcloud 34 ou plus récent**. Il doit être installé et configuré sur chaque Nextcloud utilisé pour modifier des documents : <https://euro-office.github.io/documentation/integration/nextcloud/>.

## Aperçus multimédias ajustables 2.0.18

- les fenêtres d’image, de vidéo et de musique peuvent être déplacées depuis leur bandeau blanc ;
- elles peuvent toutes être redimensionnées depuis les bords et les coins ;
- la navigation précédent/suivant et le plein écran sont conservés ;
- les fenêtres PDF, texte, serveur bureautique et **Trombone → Cloud** restent fixes.

## Clic extérieur du menu Actions 2.0.17

- le gestionnaire de fermeture est maintenant installé au moment où la vraie page Cloud apparaît, après l’écran de chargement initial ;
- il écoute le document DOM qui contient réellement la page dans Zimbra Modern ;
- un clic en dehors du menu ou de son bouton le referme immédiatement ;
- le déplacement et le redimensionnement de l’aperçu d’image restent inchangés.

## Déplacement et menus 2.0.16

- maintenez le clic gauche sur le bandeau blanc de l’aperçu d’image pour déplacer la fenêtre ;
- la fenêtre reste dans la zone visible du navigateur ;
- Plein écran et la croix restent des boutons indépendants et ne démarrent pas le déplacement ;
- le menu Actions se ferme maintenant dès que vous cliquez ailleurs dans Zimbra.

## Correctif du glissement 2.0.15

- le redimensionnement de l’aperçu d’image utilise maintenant les événements souris natifs reconnus par Zimbra/Preact ;
- les déplacements sont écoutés sur le document qui contient réellement la fenêtre, ce qui évite la perte des mouvements dans le contexte isolé de la Zimlet ;
- les quatre bords et les quatre coins restent utilisables ;
- le sélecteur **Trombone → Cloud** reste volontairement fixe.

## Correctif du redimensionnement 2.0.14

- le pointeur reste capturé par la poignée pendant tout le redimensionnement de l’aperçu d’image ;
- le clic produit à la fin du glissement ne ferme plus la fenêtre ;
- un clic sur le fond ne ferme la fenêtre que s’il vise réellement le fond, jamais une poignée ou un bord ;
- le sélecteur **Trombone → Cloud** reçoit explicitement `resize: none`, afin d’annuler aussi une ancienne règle CSS éventuellement conservée par Zimbra ou le navigateur.

## Aperçu d’image redimensionnable 2.0.13

- seule la fenêtre ouverte pour afficher une image peut être étirée ou rétrécie depuis ses quatre bords et ses quatre coins ;
- un petit repère apparaît dans le coin inférieur droit ;
- la taille minimale et les limites de l’écran empêchent de perdre la fenêtre hors de la zone visible ;
- le bouton **Plein écran** et la navigation vers les images précédente et suivante restent disponibles ;
- les fenêtres Détails, partage, connexion, création, renommage, le sélecteur **Trombone → Cloud** et ONLYOFFICE conservent une taille fixe.

## Corrections 2.0.11

- le menu **Actions** est rendu dans la carte ou la ligne correspondante et ne dépend plus des coordonnées globales de la fenêtre ;
- le sélecteur Cloud du composeur occupe correctement la fenêtre Zimbra, sans second pied de dialogue ;
- **Sélectionner les fichiers affichés** devient automatiquement **Désélectionner les fichiers affichés** lorsque tous les fichiers visibles sont cochés ;
- l’ancien mécanisme « préparer pour un e-mail » est entièrement supprimé ;
- les pièces jointes Cloud s’ajoutent uniquement depuis un nouveau message, via **Trombone → Cloud** ;
- les liens publics demandent explicitement les permissions Nextcloud `1` (lecture), désactivent le dépôt public et affichent le motif précis d’un refus Nextcloud.

Dans un nouveau message Zimbra, ouvrez le trombone puis choisissez **Cloud**. Si plusieurs comptes sont connectés, sélectionnez d’abord le compte voulu dans la barre supérieure. La fenêtre permet ensuite de parcourir ses dossiers, de sélectionner plusieurs fichiers et de les ajouter directement au message. Cette intégration utilise le point d’extension officiel du composeur et ne recherche aucun bouton selon son texte ou la langue de l’interface.

## Actions contextuelles 2.0.9

Faites un clic droit sur un fichier ou un dossier, ou utilisez son bouton **Actions**. Le menu donne accès à l’ouverture, la modification, au téléchargement, au lien public en lecture seule, aux détails, au renommage et à la corbeille selon le type d’élément. La commande de sélection des fichiers affichés est un bouton contrasté dans la barre de filtres.

## Partage et corbeille 2.0.8

- l’action **Nouveau mail avec pièces jointes** n’utilise plus `/email/compose`, que Zimbra interprétait comme un dossier nommé `compose` ;
- la Zimlet revient dans la boîte de réception et actionne le véritable bouton **Nouveau e-mail** de Zimbra Modern ;
- chaque fichier ou dossier peut produire un lien public Nextcloud, avec mot de passe et date d’expiration facultatifs ;
- la vue **Fichiers supprimés** liste la corbeille Nextcloud et permet de restaurer un élément, de le supprimer définitivement ou de vider la corbeille ;
- une suppression normale depuis Cloud déplace désormais explicitement l’élément vers les fichiers supprimés.

## Stockage, tri et messagerie 2.0.7

- le quota communiqué par Nextcloud est affiché à côté de **Mon espace Cloud**, avec une barre passant en orange puis en rouge à l’approche de la limite ;
- les éléments peuvent être triés par nom, date de création, dernière modification ou taille, dans les deux sens ;
- l’aperçu des images, vidéos et sons peut passer en plein écran sans perdre les boutons précédent/suivant ;
- un ou plusieurs fichiers peuvent être sélectionnés puis remis au composeur officiel de Zimbra Modern comme pièces jointes ;
- Zimbra applique sa propre limite de pièces jointes ; la Zimlet limite aussi une sélection à 20 fichiers et 100 Mo pour protéger le navigateur ;
- `storage-report.sh` indique l’espace réellement occupé par les profils chiffrés, les fichiers temporaires et les sauvegardes d’anciens modules.

La navigation, les miniatures et les aperçus sont diffusés à la demande et ne sont pas conservés dans la boîte Zimbra. Une pièce jointe ajoutée à un brouillon ou à un message est en revanche copiée dans Zimbra et compte alors dans le quota de la boîte.

## Navigation et performances 2.0.6

- les cartes utilisent les miniatures 256 × 256 générées par Nextcloud, jamais les photographies originales ;
- seules les miniatures proches de la zone visible sont chargées, avec quatre requêtes simultanées au maximum ;
- si une miniature est indisponible, l’icône du fichier reste affichée sans bloquer la page ;
- les images, vidéos et musiques disposent de boutons précédent/suivant et des touches fléchées du clavier ;
- la recherche cible par défaut le dossier actuel, avec un choix **Tout le compte** utilisant WebDAV SEARCH ;
- la recherche globale est limitée aux 500 premiers résultats afin de préserver le serveur ;
- la grille affiche jusqu’à huit cartes sur un grand écran et réduit automatiquement le nombre de colonnes sur les fenêtres plus petites.

## Coédition et interface 2.0.5

Le titre affiché est maintenant **Mon espace Cloud** et la page possède son propre défilement vertical, y compris lorsque Zimbra Modern bloque le défilement de sa zone principale.

Pour ouvrir un document, la Zimlet demande à l’application bureautique choisie dans Nextcloud sa configuration officielle OCS. Elle réutilise donc la même clé de document, le même callback Nextcloud, le même utilisateur et le même jeton JWT que l’ouverture depuis l’interface Nextcloud. Deux utilisateurs ouvrant le même fichier depuis Nextcloud et depuis Zimbra rejoignent ainsi la même session collaborative et voient les modifications en direct.

Pour l’édition collaborative, le serveur Nextcloud choisi par l’utilisateur doit avoir l’application **ONLYOFFICE** ou **Euro-Office** correspondant au réglage global ou personnalisé de ce compte, configurée avec exactement le même serveur de documents. La navigation, les aperçus et les transferts restent utilisables même si cette application n’y est pas installée.

## Correction du chargement serveur 2.0.4

Les installateurs précédents plaçaient la sauvegarde de l’ancien JAR dans un sous-dossier de `/opt/zimbra/lib/ext`. Zimbra pouvait alors charger simultanément le nouveau module et la sauvegarde 2.0.0. Le symptôme caractéristique était un `ping` restant en version `2.0.0` après l’installation de la 2.0.3.

La 2.0.4 déplace automatiquement ces anciennes copies vers `/opt/zimbra/data/nextcloud-zimlet-extension-backups`, hors du chemin analysé par Zimbra. Après le redémarrage, l’installateur exige maintenant que le `ping` annonce exactement `2.0.4` avant de poursuivre.

## Correction WebDAV 2.0.3

L’analyse XML accepte maintenant les réponses `207 Multi-Status` de Nextcloud avec l’implémentation XML embarquée par Zimbra 10.1.20. Les protections contre les entités externes et les déclarations `DOCTYPE` restent actives, même lorsqu’une option Java XML facultative n’est pas reconnue par le serveur.

Le dossier courant, la recherche, l’aperçu et l’éditeur bureautique sont conservés lorsque l’utilisateur passe de Cloud à Mail ou Agenda puis revient. Cet état temporaire est séparé pour chaque compte Zimbra et ne contient aucun mot de passe.

## Correction de routage 2.0.2

Le bouton s’appelle maintenant **Cloud** et ouvre la route principale `/cloud`. La version 2.0.1 utilisait `/email/nextcloud` : Zimbra l’interprétait comme un dossier de messagerie nommé `nextcloud` et affichait `no such folder path`.

## Correction de navigation 2.0.1

La route Modern est maintenant enregistrée directement dans le contexte fourni par Zimbra. La version 2.0.0 enveloppait cette route dans un second fournisseur de contexte, ce qui pouvait figer Mail, Agenda et les autres boutons de navigation sur certaines versions de Zimbra 10.1.

La page Nextcloud possède aussi sa propre barrière d’erreur : une exception de son interface est contenue dans cette page et ne peut plus interrompre le routeur général. Lors de la première utilisation, le formulaire de connexion est affiché dans la page Nextcloud au lieu d’une fenêtre globale plein écran.

## Fonctions

- accès **Cloud** dans le menu principal de Zimbra Modern ;
- choix entre un Nextcloud libre par utilisateur et un Nextcloud commun avec activation automatique ;
- navigation par cartes ou en liste, recherche locale ou globale et fil d’Ariane ;
- dégradé local esthétique par défaut et photographies Unsplash facultatives, activables explicitement par l’administrateur ;
- aperçu intégré des images, vidéos, sons, PDF et textes ;
- édition Word, Excel, PowerPoint, OpenDocument et PDF avec ONLYOFFICE ou Euro-Office dans Zimbra ;
- coédition en temps réel dans la même session que l’interface Nextcloud ;
- sauvegarde du document modifié dans Nextcloud ;
- envoi de plusieurs fichiers, création de dossiers et de documents `.docx`, `.xlsx`, `.pptx`, `.odt`, `.ods` ou `.odp` ;
- téléchargement, renommage, suppression et tri par dates ;
- création de liens publics Nextcloud avec protection et expiration facultatives ;
- consultation et gestion des fichiers supprimés Nextcloud ;
- ajout de fichiers ou de liens en lecture seule depuis **Trombone → Cloud** dans un message Zimbra ;
- jusqu’à trois profils Nextcloud chiffrés par compte Zimbra, chacun avec son réglage bureautique, retrouvés depuis les autres ordinateurs.

## Correction importante de la version 2.0

Le module Java n’accède plus à la configuration, au stockage ou au client HTTP pendant le démarrage de `mailboxd`. Il enregistre uniquement sa route, puis initialise les services lors de la première requête.

Une configuration absente, une URL incorrecte, un secret JWT invalide ou une incompatibilité liée au connecteur renvoie ainsi une erreur uniquement dans la Zimlet. Ces problèmes ne doivent plus empêcher Zimbra de démarrer ou perturber la page de connexion.

L’installateur charge et teste d’abord le module serveur sur :

```text
/service/extension/nextcloud-connector/public/ping
```

L’interface Modern n’est déployée qu’après une réponse HTTP 200. En cas d’échec, le JAR est retiré automatiquement et l’ancienne version éventuelle est restaurée.

Avant le redémarrage, l’installateur recompile également le module Java contre les bibliothèques exactes de `/opt/zimbra/lib/jars` présentes sur le serveur. Une incompatibilité d’API arrête donc l’installation avant toute modification de `mailboxd`.

## Sécurité et persistance

Le navigateur ne reçoit jamais le mot de passe d’application Nextcloud enregistré. En mode personnel, utilisez un **mot de passe d’application Nextcloud**. En mode géré, la Zimlet le génère automatiquement. Il est chiffré en AES-GCM dans `/opt/zimbra/data/nextcloud-zimlet`, avec un profil différent pour chaque identifiant de compte Zimbra. Les URL et secrets JWT bureautiques propres à un compte Cloud sont inclus dans le même bloc chiffré. L’API transmet seulement un indicateur signalant qu’un secret existe.

Tous les serveurs Nextcloud publics utilisant HTTPS sont acceptés. Les adresses locales, loopback et réseaux privés sont bloqués par défaut afin qu’un utilisateur ne puisse pas transformer Zimbra en proxy vers le réseau interne.

Pour autoriser volontairement un Nextcloud ou un serveur d’édition personnalisé privé, ajoutez son nom ou son IP :

```properties
nextcloud.private_hosts=cloud.interne.local,10.20.22.50
```

Redémarrez ensuite uniquement `mailboxd`.

## Prérequis réseau

- Zimbra doit pouvoir joindre les serveurs Nextcloud choisis par les utilisateurs ;
- le navigateur doit pouvoir joindre l’adresse publique du serveur bureautique choisi pour le compte actif ;
- Zimbra doit pouvoir appeler l’API OCS de l’application `onlyoffice` ou `eurooffice` de chaque Nextcloud ;
- chaque serveur bureautique doit pouvoir joindre le Nextcloud associé pour télécharger le document et envoyer son callback ;
- les certificats HTTPS doivent être valides.

Le secret global ou personnalisé doit être strictement identique à celui du serveur bureautique et à celui configuré dans l’application du Nextcloud concerné. Euro-Office utilise `Authorization` par défaut ; saisissez toujours l’en-tête réellement configuré sur le serveur.

## Installation propre

La restauration du snapshot antérieur signifie qu’aucun nettoyage de la version 1.0 n’est requis.

```bash
cd /tmp
unzip zimbra-nextcloud-connector-v3.0.2.zip
cd zimbra-nextcloud-connector-3.0.2
sudo ./install.sh
```

Le script demande uniquement :

- la langue d’administration parmi les onze variantes prises en charge, français par défaut ;
- l’adresse publique de Zimbra, par exemple `https://mail.example.com` ;
- l’activation facultative des photos d’arrière-plan Unsplash ; le choix par défaut reste le dégradé local sans appel externe ;
- le mode Nextcloud **Personnel** ou **Géré** ;
- en mode géré : l’URL du Nextcloud commun, un compte de service et son mot de passe d’application, puis un groupe, un quota et une langue facultatifs ;
- le moteur **ONLYOFFICE** ou **Euro-Office** ;
- l’adresse publique de ce moteur, par exemple `https://office.example.com` ;
- le mode de sécurité **JWT** ou **sans JWT** ;
- en mode JWT, le nom d’en-tête et le secret, sans afficher ce dernier.

En mode personnel, aucune adresse ni aucun compte Nextcloud n’est demandé à l’administrateur.

### Réglages avancés facultatifs de la version 3

Ils sont ajoutés automatiquement à `/opt/zimbra/conf/nextcloud-zimlet.properties` avec des valeurs prudentes. Modifiez-les seulement si nécessaire, conservez le propriétaire `zimbra:zimbra` et le mode `0600`, puis redémarrez `mailboxd` :

```properties
# true uniquement si storage.dir est un stockage partagé fiable entre plusieurs mailboxd
storage.shared=false
# dossier administrateur facultatif contenant jusqu’à 200 modèles OOXML/OpenDocument
templates.dir=
# autorise les appels directs du navigateur vers images.unsplash.com
ui.remote_backgrounds=false
# taille d’un bloc et taille maximale d’un fichier envoyé
files.upload_chunk_bytes=8388608
files.max_upload_bytes=1073741824
# protections de mailboxd
limits.max_concurrent_requests=24
limits.max_requests_per_account_minute=600
limits.max_directory_response_items=5000
```

Sur plusieurs nœuds mailbox, le stockage doit réellement prendre en charge les verrous de fichiers et les déplacements atomiques de façon cohérente. `storage.shared=true` décrit cette topologie et l’affiche dans le diagnostic ; cette option ne transforme pas un partage de fichiers inadapté en stockage sûr.

## Mise à jour depuis une version 2.0 antérieure

Les corrections du chargement et de WebDAV se trouvent dans le module serveur. Il faut donc exécuter le script d’installation complet, et non `repair-modern-ui.sh` :

```bash
cd /tmp/zimbra-nextcloud-connector-3.0.2
sudo ./install.sh
```

La configuration et les profils existants sont conservés. L’installateur recompile le JAR contre ce serveur, effectue un unique redémarrage contrôlé de `mailboxd`, vérifie le point `ping`, puis déploie l’interface.

## Première connexion d’un utilisateur

1. Se reconnecter à Zimbra Modern ou faire `Ctrl+F5`.
2. Ouvrir **Cloud** dans le menu principal.
3. En mode personnel, saisir l’URL, l’identifiant et un mot de passe d’application, puis cliquer sur **Enregistrer et tester**.
4. En mode géré, cliquer sur **Activer mon compte Cloud**, puis sauvegarder immédiatement le serveur, l’identifiant et le mot de passe affichés une seule fois.

Dans les deux modes, le profil chiffré reste associé au compte Zimbra et non à l’ordinateur.

## Vérifications

Vérification sans authentification, directement sur le serveur Zimbra :

```bash
curl -sS http://127.0.0.1:8080/service/extension/nextcloud-connector/public/ping
```

Sur une installation où `mailboxd` écoute aussi en HTTPS interne, le même contrôle peut être effectué avec `curl -k https://127.0.0.1:8443/...`. Sur l’environnement de référence, le point de contrôle répond sur le port interne 8080.

Résultat attendu :

```json
{"status":"ok","version":"3.0.2"}
```

Autres contrôles :

```bash
su - zimbra -c 'zmmailboxdctl status'
su - zimbra -c 'zmzimletctl listZimlets' | grep -A3 -B3 com_nextcloud_connector
sudo ./diagnose.sh
sudo ./lifecycle-report.sh
```

`diagnose.sh` vérifie `mailboxd`, la version du point `ping`, l’unicité du JAR actif, les permissions de configuration, le déploiement Modern, le stockage chiffré et les erreurs récentes du connecteur. `lifecycle-report.sh` est strictement en lecture seule : il signale les profils qui ne correspondent plus à un identifiant Zimbra actuel, mais ne les supprime jamais car les alias et restaurations peuvent produire des faux positifs.

### Contrôle de l’espace utilisé

La Zimlet ne met pas en cache les fichiers Nextcloud sur le disque Zimbra. Elle conserve seulement un petit profil chiffré par compte et supprime ses fichiers temporaires après chaque transfert. Le rapport fourni mesure ces données et les sauvegardes de modules créées lors des mises à jour :

```bash
cd /tmp/zimbra-nextcloud-connector-3.0.2
sudo ./storage-report.sh
sudo ./storage-report.sh utilisateur@domaine.tld
```

La seconde commande affiche la taille exacte du profil chiffré de l’utilisateur demandé. Les pièces jointes remises au composeur deviennent des données normales du brouillon ou du message Zimbra et sont donc comptabilisées dans le quota de la boîte.

Le message `service.PROXY_ERROR` de `zmprov fc all`, s’il apparaît après le redémarrage, est désormais traité comme un avertissement non bloquant par les scripts.

### Diagnostic de l’interface Modern

Une erreur de navigation est généralement visible dans le navigateur : ouvrir les outils avec `F12`, choisir **Console**, activer **Preserve log**, recharger avec `Ctrl+F5`, puis reproduire le clic. Copier les lignes rouges complètes, y compris la pile d’appel.

Pour désactiver uniquement l’interface de cette Zimlet sans retirer l’extension serveur ni ses réglages :

```bash
su - zimbra -c 'zmzimletctl disable com_nextcloud_connector'
```

Il suffit ensuite de se déconnecter, recharger avec `Ctrl+F5` et se reconnecter. Pour la réactiver :

```bash
su - zimbra -c 'zmzimletctl enable com_nextcloud_connector'
```

## Le serveur bureautique renvoie une URL interne

Si le callback contient par exemple une URL `http://10.0.0.42/...`, adaptez :

```properties
office.download_hosts=office.example.com,10.0.0.42
office.allow_http_downloads=true
```

N’activez HTTP que si l’hôte est maîtrisé et uniquement sur le réseau interne.

## Activation sur un autre COS

```bash
su - zimbra
zmzimletctl acl com_nextcloud_connector NOM_DU_COS grant
zmprov fc all
```

## Désinstallation récupérable

```bash
sudo ./uninstall.sh
```

La configuration et les profils restent conservés. Pour les mettre également de côté :

```bash
sudo ./uninstall.sh --purge
```

Même avec `--purge`, les fichiers sont déplacés avec un horodatage au lieu d’être effacés définitivement.

## Recompilation

La compilation de l’interface utilise la version stable verrouillée de l’outil officiel `@zimbra/zimlet-cli`. Au moment de cette version, `npm audit` signale encore des dépendances transitives vulnérables dans cet **outil de développement** sans correctif compatible proposé par npm. Elles ne sont ni exécutées sur Zimbra ni incluses dans l’archive livrée (`node_modules` est exclu) ; `npm audit --omit=dev` ne remonte aucune dépendance d’exécution vulnérable. Compilez dans un environnement isolé, n’exposez pas le serveur de développement et consultez `SECURITY.md` avant de publier une construction.

```bash
npm install
npm run build
npm run package
./server/test-local.sh
./build-release.sh
```

Le JAR local utilise des interfaces de compilation minimales mais n’embarque aucune classe Zimbra. Le script `server/build-on-zimbra.sh` permet également de recompiler contre les JAR exacts du serveur présents dans `/opt/zimbra/lib/jars`.

## Limites connues

- pas d’historique de versions Nextcloud dans l’interface ;
- une configuration bureautique globale est obligatoire comme valeur de repli, même si chaque compte Cloud peut ensuite la surcharger ;
- l’édition collaborative exige l’application Nextcloud correspondant au moteur choisi et le même serveur de documents que celui déclaré pour ce profil ;
- Euro-Office exige actuellement Nextcloud 34 ou plus récent selon sa documentation officielle ;
- le test final WebDAV et du serveur bureautique doit être effectué avec les serveurs réels, leurs certificats et leur secret JWT.
