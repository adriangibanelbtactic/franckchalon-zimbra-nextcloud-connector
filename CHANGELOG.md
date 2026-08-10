# Historique

## 3.0.2 — 2026-08-10

- correction de l’envoi WebDAV par blocs qui s’arrêtait après le premier bloc avec `t is not defined` et restait affiché à 1 % ;
- téléchargement des versions depuis le `href` exact et validé renvoyé par Nextcloud, avec nouvelle vérification de l’existence juste avant le transfert ;
- restauration des versions par le flux DAV officiel `MOVE .../versions/{fileId}/{versionId}` vers `.../restore/target` ;
- ajout d’un test de transport simulant la liste, le téléchargement et la restauration d’une version Nextcloud, y compris la méthode et la destination DAV ;
- choix Unsplash demandé aussi lors d’une mise à jour par `install.sh`, en plus de `configure.sh`, avec valeur précédente par défaut et variable `CLOUD_UNSPLASH=true|false` pour les installations non interactives ;
- conservation de la parité des onze langues et des protections de mise à jour existantes.

## 3.0.1 — 2026-08-10

- insertion des liens publics en lecture seule via l’API officielle `insertAtCaret` de Zimbra Modern, avec prise en charge des composeurs HTML et texte brut ;
- suppression du secours automatique fondé sur `navigator.clipboard.writeText`, qui échouait lorsque le document ne possédait pas le focus ;
- ajout d’une zone de copie manuelle sûre lorsque l’API d’insertion n’est pas disponible, sans recréer les partages lors d’une nouvelle tentative identique ;
- question d’installation explicite pour autoriser ou non les arrière-plans Unsplash, désactivés par défaut pour préserver la confidentialité ;
- couverture d’intégration du mode Nextcloud géré : création OCS, échange du mot de passe d’application, vérification WebDAV, stockage chiffré, refus d’une double activation, protection d’un utilisateur préexistant et suppression de retour arrière ;
- parité des nouvelles chaînes dans les onze langues prises en charge.

## 3.0.0 — 2026-08-10

- détection des capacités Nextcloud et application des permissions WebDAV, verrous, montages et restrictions de téléchargement à l’interface ;
- vues intelligentes Favoris, Récents, Partagés par moi, Partagés avec moi et Liens publics ;
- recherche avancée par portée, catégorie, date et taille, avec réponses de dossiers paginées ;
- envoi WebDAV par blocs avec glisser-déposer de dossiers, progression, annulation, reprise manuelle, trois tentatives par bloc et choix de collision ;
- gestion cohérente des fichiers vides, création automatique contrôlée des dossiers parents et détection des créations concurrentes ;
- téléchargement ZIP des dossiers et sélections d’un même emplacement ;
- panneau de détails avec métadonnées, permissions, partages, versions, commentaires et activité ;
- connexion sécurisée via le Login Flow v2 Nextcloud, validation stricte de l’origine et révocation vérifiée du mot de passe d’application lors du retrait d’un profil ;
- sélecteur du composeur enrichi avec comptes, favoris, récents, recherche, limites Zimbra, progression et liens publics en lecture seule ;
- modèles personnalisés facultatifs, diagnostics utilisateur et scripts administrateur `diagnose.sh` et `lifecycle-report.sh` ;
- garde-fous de charge, verrouillage inter-processus du stockage chiffré et options pour stockage partagé ;
- fonds distants désactivés par défaut, interface responsive modernisée et maintien de la parité des onze langues ;
- compatibilité ascendante des profils chiffrés et configurations 2.x ; aucune intégration Collabora dans cette version.

## 2.3.6 — 2026-08-10

- barre d’actions de sélection transformée en panneau flottant centré en bas de la zone Cloud ;
- actions Déplacer, Copier, Corbeille et Tout désélectionner accessibles sans remonter au début d’un long dossier ;
- espace inférieur réservé lorsque la sélection est active afin de ne pas masquer la dernière rangée de fichiers ;
- adaptation du panneau aux écrans étroits et aux boutons traduits plus longs ;
- contrôle automatique maintenu sur la parité des clés des onze langues prises en charge.

## 2.3.5 — 2026-08-10

- sélection multiple étendue aux fichiers et aux dossiers dans les vues cartes, liste et résultats de recherche ;
- nouvelle barre d’actions groupées persistante proposant déplacement, copie et mise à la corbeille Nextcloud ;
- ajout d’un sélecteur de dossier de destination avec navigation par fil d’Ariane ;
- exécution WebDAV directe côté Nextcloud, sans mise en cache ni copie temporaire dans Zimbra ;
- confirmation obligatoire avant la mise à la corbeille et interdiction de déplacer ou copier un dossier dans lui-même ;
- traitement limité à 200 éléments, suppression des descendants redondants et compte rendu des éventuels échecs partiels ;
- traduction des nouvelles actions dans les onze langues prises en charge.

## 2.3.4 — 2026-08-10

- ouverture initiale de l’éditeur ONLYOFFICE/Euro-Office sur presque toute la zone disponible sous la navigation Zimbra ;
- suppression de l’ancienne limite de largeur à 1500 px, trop étroite sur les écrans Full HD et supérieurs ;
- marges initiales ramenées à 12 px horizontalement et 4 px verticalement dans la zone de travail ;
- conservation du déplacement, du redimensionnement manuel, de la persistance de session et de la taille habituelle des fenêtres multimédias.

## 2.3.3 — 2026-08-10

- correction de la régression 2.3.2 qui empêchait l’ouverture des documents, images, vidéos et musiques sur certaines versions de Zimbra 10.1 ;
- suppression du montage direct d’une seconde racine Preact, dont la fonction `render` n’est pas garantie dans tous les environnements Zimlet Modern ;
- remplacement par un hôte DOM natif persistant, indépendant de la route Cloud et compatible avec les composants Preact fournis par Zimbra ;
- conservation de la même iframe ONLYOFFICE/Euro-Office et du même élément multimédia lors d’un passage vers Mail ou Agenda puis d’un retour dans Cloud ;
- ajout d’un test d’exécution ouvrant réellement une image, une vidéo, une musique et un document, puis vérifiant que les nœuds ne sont pas recréés pendant la navigation.

## 2.3.2 — 2026-08-10

- l’éditeur ONLYOFFICE/Euro-Office devient une fenêtre flottante non modale placée sous la navigation Zimbra ;
- Mail, Agenda et les autres onglets restent accessibles pendant une édition ou un aperçu ;
- l’iframe de l’éditeur reste montée lorsque l’utilisateur quitte Cloud, afin de conserver la session collaborative en cours ;
- la fenêtre est masquée hors de l’onglet Cloud puis restaurée sans recharger le document au retour ;
- les aperçus image, vidéo et audio bénéficient de la même persistance, y compris la lecture en cours ;
- l’éditeur et les médias restent déplaçables et redimensionnables, avec un bouclier de glissement au-dessus des iframes ;
- fermeture et navigation précédent/suivant synchronisées avec l’état de session même depuis la fenêtre persistante.

## 2.3.1 — 2026-08-09

- renommage public du projet et des archives en `zimbra-nextcloud-connector` ;
- attribution du copyright à Franck Chalon et suppression de l’ancienne identité d’entreprise ;
- remplacement de l’ancien espace de noms Java par `fr.franckchalon.zimbra.nextcloud` ;
- conservation de l’identifiant Zimbra `com_nextcloud_connector` pour assurer les mises à jour sans doublon ;
- ajout du russe Russie dans l’interface Modern, le sélecteur du composeur, les erreurs Java, les documents créés et tous les scripts d’administration ;
- affichage des trois connexions Nextcloud dans **Trombone → Cloud**, avec changement de compte avant la navigation et l’ajout des pièces jointes ;
- configuration bureautique indépendante par compte Cloud : valeur globale héritée ou surcharge ONLYOFFICE/Euro-Office, URL, mode JWT, en-tête et secret ;
- chiffrement AES-GCM des paramètres bureautiques personnalisés avec le profil Nextcloud, sans jamais renvoyer le secret JWT au navigateur ;
- conservation du réglage global comme valeur par défaut et migration transparente des profils 2.2.0 ;
- autorisation du choix bureautique sur un compte Nextcloud géré sans permettre à l’utilisateur de modifier ses identifiants administrés ;
- validation HTTPS, protection contre les réseaux privés et correspondance stricte de l’URL annoncée par Nextcloud ;
- documentation de la contrainte de coédition : un même document ne rejoint la même session que si les ouvertures utilisent le même Document Server et la même configuration de connecteur Nextcloud.

## 2.2.0 — 2026-08-09

- ajout de deux connexions Nextcloud supplémentaires, soit trois comptes maximum par utilisateur Zimbra ;
- sélection du compte actif dans le bandeau Cloud, nom convivial facultatif, ajout, modification et retrait sans suppression distante ;
- conservation chiffrée de tous les profils et migration transparente des anciens profils mono-compte ;
- association de toutes les routes, miniatures, aperçus, téléchargements, tickets et callbacks bureautiques au compte actif ;
- maintien d’un seul serveur ONLYOFFICE ou Euro-Office au niveau de Zimbra, avec vérification du connecteur bureautique sur chaque Nextcloud ;
- ajout du portugais Portugal, portugais Brésil, espagnol Argentine, hindi Inde, malais Malaisie et clarification de l’anglais États-Unis ;
- traduction des interfaces Modern, messages serveur et scripts d’administration dans les dix variantes prises en charge ;
- application de la langue régionale au nouvel éditeur et à la structure interne des nouveaux documents ODT, ODS, ODP, DOCX et PPTX ;
- repli documenté de l’éditeur en anglais pour l’hindi, qui n’est pas proposé par l’API Docs actuelle ;
- tests de la limite de trois comptes, du changement de compte persistant, de la suppression isolée, de la migration 2.1 et de la localisation des modèles.

## 2.1.0 — 2026-08-09

- choix de la langue au début de la configuration, avec français par défaut, anglais, espagnol, italien et allemand ;
- langue des scripts d’installation, réparation, désinstallation, compilation et rapport de stockage conservée dans `ui.default_language` ;
- détection automatique de la langue de chaque utilisateur Zimbra Modern, indépendamment de la langue choisie par l’administrateur ;
- traduction de tous les libellés visibles de Cloud, des aperçus, de la corbeille, des liens publics et du sélecteur de pièces jointes ;
- transmission de la langue aux routes Java et localisation des erreurs serveur sans traduire les identifiants techniques ;
- ajout de vrais modèles OpenDocument `.odt`, `.ods` et `.odp` à la fenêtre de création ;
- maintien des modèles OOXML `.docx`, `.xlsx` et `.pptx` et de la coédition Nextcloud avec ONLYOFFICE ou Euro-Office ;
- ajout d’une documentation anglaise, d’un guide de contribution et d’une procédure de sécurité pour une publication communautaire.

## 2.0.20 — 2026-08-09

- choix à l’installation entre le mode personnel existant et un mode de comptes Nextcloud gérés ;
- configuration d’un serveur Nextcloud commun, d’un compte de service à mot de passe d’application, d’un groupe, d’un quota et d’une langue ;
- création à la demande du compte Nextcloud avec l’adresse Zimbra normalisée comme identifiant ;
- génération d’un mot de passe principal robuste affiché une seule fois, avec écran imposant une confirmation de sauvegarde ;
- création immédiate d’un mot de passe d’application distinct et stockage chiffré de ce seul secret dans le profil Zimbra ;
- conservation du fonctionnement manuel et des profils existants lors de la mise à jour ;
- refus sûr des collisions avec un utilisateur Nextcloud existant, sans aucune réinitialisation automatique ;
- suppression de rollback du compte nouvellement créé lorsqu’une activation échoue avant sa finalisation ;
- utilisation automatique du quota Nextcloud par défaut lorsque l’administrateur ne force pas de valeur ;
- protection contre la déconnexion locale d’un compte géré et documentation explicite du cycle de vie des comptes.

## 2.0.19 — 2026-08-09

- choix entre ONLYOFFICE et Euro-Office au début de l’installation ou lors d’une migration depuis une version antérieure ;
- sélection automatique du connecteur OCS Nextcloud `onlyoffice` ou `eurooffice` ;
- configuration générique de l’adresse, du mode de sécurité, de l’en-tête JWT et du secret ;
- mode JWT recommandé et mode sans JWT disponible uniquement pour les tests isolés ;
- affichage dynamique du moteur choisi dans les réglages et dans la fenêtre d’édition ;
- conservation de la clé et du callback fournis par Nextcloud pour rejoindre la même session de coédition ;
- compatibilité de lecture avec l’ancienne configuration `onlyoffice.*` lors de la migration.

## 2.0.18 — 2026-08-09

- déplacement des fenêtres d’aperçu vidéo et audio par leur bandeau blanc ;
- redimensionnement des aperçus vidéo et audio depuis leurs quatre bords et leurs quatre coins ;
- comportement désormais commun aux images, vidéos et musiques ;
- PDF, textes, ONLYOFFICE et sélecteur **Trombone → Cloud** conservés à taille fixe.

## 2.0.17 — 2026-08-09

- attachement du gestionnaire de clic extérieur seulement lorsque la véritable page Cloud est rendue ;
- utilisation du document DOM propriétaire de cette page, même après l’écran initial de chargement ;
- retrait propre puis réattachement automatique du gestionnaire si Zimbra remonte la page ;
- fermeture du menu Actions par un clic partout en dehors du menu et de son bouton.

## 2.0.16 — 2026-08-09

- déplacement de la fenêtre d’aperçu d’image par glissement de son bandeau blanc ;
- boutons Plein écran et Fermer exclus de la zone de déplacement ;
- maintien de la fenêtre dans les limites visibles du navigateur pendant le déplacement ;
- fermeture du menu Actions par un clic à n’importe quel endroit extérieur, en écoutant le document réel de Zimbra Modern.

## 2.0.15 — 2026-08-09

- remplacement des événements Pointer par des événements souris natifs, compatibles avec le contexte d’exécution de Zimbra Modern ;
- écoute du glissement sur le document qui possède réellement la fenêtre, et non sur le contexte global isolé de la Zimlet ;
- redimensionnement maintenu sur les quatre bords et les quatre coins de l’aperçu d’image ;
- sélecteur **Trombone → Cloud** conservé à taille fixe.

## 2.0.14 — 2026-08-08

- correction de la fermeture de l’aperçu au début ou à la fin d’un redimensionnement ;
- capture explicite du pointeur par la poignée active et neutralisation du clic final ;
- fermeture par le fond limitée aux clics visant réellement le fond de la fenêtre ;
- désactivation CSS explicite du redimensionnement dans le sélecteur **Trombone → Cloud**, y compris si une ancienne feuille de style reste en mémoire.

## 2.0.13 — 2026-08-08

- redimensionnement volontairement limité à la fenêtre d’aperçu des images ;
- poignée disponible sur les quatre bords et les quatre coins de l’aperçu ;
- retour à une taille fixe pour Détails, partage, connexion, création, renommage et le sélecteur Cloud du composeur ;
- conservation du plein écran et de la navigation précédent/suivant dans l’aperçu d’image.

## 2.0.12 — 2026-08-08

- redimensionnement des fenêtres Cloud depuis les quatre bords et les quatre coins avec la souris ;
- conservation de limites minimales et des limites de l’écran pendant le redimensionnement ;
- redimensionnement du sélecteur Cloud du composeur et adaptation automatique de la liste de fichiers ;
- conservation du mode plein écran pour les aperçus et de la fenêtre ONLYOFFICE fixe.

## 2.0.11 — 2026-08-08

- menu Actions ancré dans la carte ou la ligne du fichier, sans coordonnées globales ni rendu en haut à gauche ;
- fenêtre Cloud du composeur redimensionnée par les propriétés officielles de `ModalDialog`, avec suppression du pied de dialogue Zimbra en double ;
- suppression complète du mécanisme de préparation des pièces jointes depuis l’onglet Cloud ;
- sélection et désélection en un clic de tous les fichiers actuellement affichés ;
- liens publics explicitement en lecture seule (`permissions=1`, dépôt public désactivé) ;
- lecture du statut OCS et affichage du motif réel renvoyé par Nextcloud lorsqu’un partage est refusé ;
- ajout des fichiers au message uniquement depuis **Trombone → Cloud**, point d’extension officiel et indépendant de la langue.

## 2.0.10 — 2026-08-08

- remplacement de l’entrée « Fichiers Cloud sélectionnés » par **Cloud** dans le menu du trombone ;
- sélecteur de fichiers Cloud intégré au composeur officiel Zimbra avec navigation dans les dossiers et sélection multiple ;
- présélection dans le composeur des fichiers préparés depuis l’onglet Cloud ;
- suppression complète du pilotage du DOM et de la recherche de libellés « Nouveau e-mail » ;
- fonctionnement du composeur indépendant de la langue de l’interface Zimbra ;
- libellés français et anglais pour le nouveau sélecteur, avec anglais par défaut ;
- positionnement du menu Actions renforcé au moyen d’une transformation fixe calculée depuis le clic réel ;
- action depuis l’espace Cloud renommée « Préparer pour un e-mail » afin de refléter exactement son fonctionnement stable.

## 2.0.9 — 2026-08-07

- menu contextuel par clic droit ou bouton « Actions » sur chaque fichier et dossier ;
- regroupement des commandes ouvrir, modifier, télécharger, nouveau mail, lien public, détails, renommer et supprimer ;
- panneau de détails avec type, emplacement, taille, dates, type MIME et chemin Cloud ;
- bouton de sélection des fichiers affichés rendu contrasté et directement accessible dans la barre de filtres ;
- barre de sélection conservée à l’écran pendant le défilement ;
- ouverture du composeur corrigée en actionnant l’onglet Mail réel de Zimbra, sans dépendre d’une route interne à la Zimlet ;
- détection multilingue et multi-document du bouton Nouveau e-mail, avec secours manuel conservé.

## 2.0.8 — 2026-08-07

- suppression de la route erronée `/email/compose`, interprétée comme un dossier de messagerie ;
- ouverture du véritable composeur Zimbra Modern depuis la boîte de réception, avec secours dans le menu du trombone ;
- création de liens publics Nextcloud en lecture seule, avec mot de passe et expiration facultatifs ;
- accès WebDAV aux fichiers supprimés, restauration, suppression définitive et vidage de la corbeille ;
- libellé de suppression normale clarifié afin d’indiquer le déplacement dans la corbeille ;
- tests du décodage des propriétés spécifiques de la corbeille Nextcloud.

## 2.0.7 — 2026-08-07

- affichage du quota de stockage Nextcloud avec barre de progression et seuils d’avertissement ;
- tri par nom, date de création, dernière modification ou taille, croissant ou décroissant ;
- plein écran de la galerie multimédia en conservant la navigation précédent/suivant ;
- sélection multiple de fichiers et transfert au composeur officiel Zimbra Modern ;
- limites de protection de 20 fichiers et 100 Mo par sélection, en complément de la limite Zimbra ;
- rapport administrateur en lecture seule sur l’espace utilisé par les profils, fichiers temporaires et sauvegardes ;
- récupération WebDAV des propriétés `creationdate`, `quota-used-bytes` et `quota-available-bytes`.

## 2.0.6 — 2026-08-07

- remplacement des aperçus de cartes en pleine résolution par des miniatures Nextcloud 256 × 256 ;
- chargement paresseux avec une file limitée à quatre requêtes simultanées ;
- annulation des miniatures inutiles lors d’un changement de dossier ;
- navigation précédent/suivant pour les images, vidéos et fichiers audio, également avec les flèches du clavier ;
- recherche dans le dossier actuel par défaut ou dans tout le compte via WebDAV SEARCH ;
- limite de 500 résultats pour la recherche globale ;
- grille responsive plafonnée à huit colonnes sur les grands écrans ;
- tests de l’échappement XML, de la portée récursive et de la limite des recherches.

## 2.0.5 — 2026-08-07

- ajout du défilement vertical interne à la page Cloud ;
- remplacement du titre par **Mon espace Cloud** ;
- récupération de la configuration d’édition via l’API OCS officielle de l’application ONLYOFFICE de Nextcloud ;
- réutilisation de la clé de document, du callback et du JWT Nextcloud afin de rejoindre la même session de coédition ;
- validation stricte du serveur ONLYOFFICE annoncé par Nextcloud ;
- tests du format OCS et de l’isolation de l’origine ONLYOFFICE.

## 2.0.4 — 2026-08-07

- sauvegardes des extensions déplacées hors de `/opt/zimbra/lib/ext`, afin que Zimbra ne charge jamais un ancien JAR en double ;
- mise en quarantaine automatique des sauvegardes 2.0.0 à 2.0.3 laissées dans le chemin actif ;
- contrôle de la version exacte `2.0.4` après le redémarrage de `mailboxd` ;
- rollback conservé dans un dossier récupérable sous `/opt/zimbra/data`.

## 2.0.3 — 2026-08-07

- analyse des réponses WebDAV compatible avec l’implémentation XML de Zimbra 10.1.20 ;
- conservation des protections XXE même lorsque certaines options Java XML ne sont pas prises en charge ;
- limite de 32 Mio pour les listes WebDAV ;
- conservation du dossier, de la recherche, de l’aperçu et de l’éditeur lors des changements d’onglet ;
- état de navigation séparé pour chaque compte Zimbra dans la session du navigateur.

## 2.0.2 — 2026-08-07

- renommage du bouton visible en **Cloud** ;
- route principale déplacée de `/email/nextcloud` vers `/cloud` ;
- suppression de la dépendance au slug de messagerie, qui faisait interpréter `nextcloud` comme un dossier mail.

## 2.0.1 — 2026-08-07

- suppression du fournisseur de contexte autour du routeur Modern ;
- isolation des erreurs de la page Nextcloud afin de préserver la navigation Zimbra ;
- formulaire de première connexion intégré à la page au lieu d’une modale globale ;
- script de réparation de l’interface sans redémarrage de `mailboxd` ;
- procédure de diagnostic navigateur et désactivation d’urgence documentées.

## 2.0.0 — 2026-08-07

- initialisation différée et tolérante aux erreurs afin de préserver `mailboxd` ;
- suppression de la dépendance de journalisation Zimbra incompatible ;
- point de contrôle public minimal et rollback automatique à l’installation ;
- accès libre aux Nextcloud publics HTTPS, par utilisateur ;
- blocage des réseaux privés avec liste d’exceptions administrateur ;
- interface en cartes ou liste, recherche, transparence et fonds Unsplash facultatifs ;
- installateur ne demandant plus de serveur Nextcloud global ;
- désinstallation et vidage du cache rendus non bloquants.

## 1.0.0 — 2026-08-07

- première version expérimentale, remplacée par la refonte 2.0.0.
