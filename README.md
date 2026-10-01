# AgentJob AI

SaaS de recherche et d'analyse d'offres d'emploi avec agents IA.

## Stack
- Backend: Python / FastAPI
- Database: PostgreSQL
- Frontend: Next.js / TypeScript
- Vector search: pgvector (prévu)
- Jobs: Redis/Celery (prévu)
- DevOps: Docker Compose

## Démarrage

```bash
cp .env.example .env
docker compose up --build
```

API: http://localhost:8000
Documentation: http://localhost:8000/docs

## MVP
1. Ingestion d'offres
2. Nettoyage et déduplication
3. Analyse structurée par agent
4. Matching CV/offre
5. Dashboard frontend
