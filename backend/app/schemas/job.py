from pydantic import BaseModel, HttpUrl

class Job(BaseModel):
    title: str
    company: str = ""
    location: str = ""
    url: HttpUrl | None = None
    description: str

class JobAnalysis(BaseModel):
    title: str
    extracted_skills: list[str]
    seniority: str
    summary: str
