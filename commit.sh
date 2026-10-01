#!/bin/bash

# Vérifier si un message de commit a été fourni en argument
if [ -z "$1" ]; then
  echo "❌ Erreur : Veuillez fournir un message de commit."
  echo "Usage: ./commit.sh \"Ton message de commit\""
  exit 1
fi

MESSAGE=$1

echo "📦 Ajout des fichiers modifiés..."
git add .

echo "📝 Création du commit..."
git commit -m "$MESSAGE"

echo "🚀 Envoi vers GitHub..."
git push

echo "✅ Terminé avec succès !"
