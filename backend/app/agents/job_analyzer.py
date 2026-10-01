from app.schemas.job import Job, JobAnalysis

def analyze_job(job: Job) -> JobAnalysis:
    text = f"{job.title} {job.description}".lower()
    known = ["python", "fastapi", "react", "typescript", "postgresql", "docker", "aws"]
    skills = [skill for skill in known if skill in text]

    return JobAnalysis(
        title=job.title,
        extracted_skills=skills,
        seniority="unknown",
        summary=job.description[:500],
    )
