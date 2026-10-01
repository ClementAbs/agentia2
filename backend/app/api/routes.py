from fastapi import APIRouter
from app.agents.job_analyzer import analyze_job
from app.schemas.job import Job, JobAnalysis

router = APIRouter(prefix="/api")

@router.get("/jobs")
def list_jobs():
    return {"items": []}

@router.post("/jobs/analyze", response_model=JobAnalysis)
def analyze(job: Job):
    return analyze_job(job)
