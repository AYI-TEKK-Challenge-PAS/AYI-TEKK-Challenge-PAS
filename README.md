# AYI-TEKK-Challenge-PAS

## Transcription audio en texte dans le domaine médical

## Chalenge PAS : Domaine Santé
### Description :
Transcriptions audio en texte : Les professionnels de santé consacrent beaucoup de temps à la
saisie de notes médicales dans les dossiers médicaux des patients.

La transcription voix-texte de ces notes à l’aide de l’IA augmenterait le temps consacré aux
soins des patients et permettrait d’avoir des notes écrites des vrais mots des patients. Les
professionnels pourront ainsi prendre plus le temps pour discuter avec les patients au lieu de
se soucier des prises de notes.

### Objectif :
Mettre en place un outil qui permettrait de traduire en temps réel les réponses des patients aux
questions posées par les professionnels de santé ainsi que leurs diagnostiques et conclusions.
Cette transcription devra se faire sur des langues locales par exemple le Wolof,
bambara, poular etc.

Dans le cadre de ce travail nous avons utilisé la langue wolof.

### Démarche :
Ces instructions vous permettront d&#39;obtenir une copie du projet opérationnel sur votre
ordinateur local à des fins de développement et de test.

  **Prérequis**
  
  Installez les dépendances pour ce projet en exécutant les commandes suivantes sur votre
  terminal :
  
      pip install transformers
      pip install torch
      pip install librosa
      pip install wolof
      pip install datasets
      pip install sentencepiece
      pip install sacrebleu
      pip install spacy
      python -m spacy download fr_core_news_sm
      
  **Implémentation**
  
  Pour réaliser ce projet nous avons implémenté les 3 modèles suivants :
  
   - Un modèle basé sur les transformers seq2seq existant
  
   - Un modèle basé sur les transformers de traduction que nous avons entrainé

   - Un modèle pour la prédiction du diagnostic avec spacy

  **Test (de préférence Vs Code)**
  
  1) Pointez-vous sur le répertoire Challenge-PAS-BQCKEND et tapez la commande `uvicorn main :app –reload` pour charger les modèle et lancer le serveur, **port par défaut 8000**
  2) Pointez-vous sur le répertoire Challenge-PAS-FRONTEND et tapez la commande `ng serve` pour lancer le serveur angular, **port par défaut 4200**

