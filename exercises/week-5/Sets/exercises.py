import json

# Opening JSON file
f = open(r"exercises\\week-5\\Sets\\nyc_jobs.json")

jobs = json.load(f)
print(jobs)

# Search in Description


def find_in_description(word):
    return [job for job in jobs if word in job.get("job_description")]


print(len(find_in_description("experience")))  # 165

# Junior Jobs in Brooklin


def junior_jobs_in_brooklin():
    agencies = set([job["agency"]
                    for job in jobs if job["career_level"] == "Entry-Level" and "Broadway" in job["work_location"]])
    print("broadway", agencies)
    return agencies


junior_jobs_in_brooklin()

# Max Hourly Salary


def max_hourly_salary():
    hourly_jobs = set([job["salary_range_to"]
                      for job in jobs if job["salary_frequency"] == "Hourly"])
    entry_level_jobs = set([job["salary_range_to"]
                           for job in jobs if job["career_level"] == "Entry-Level"])
    res = hourly_jobs-entry_level_jobs
    print("max", max(res))
    return max(res)


max_hourly_salary()

# Salaries in Range


def is_in_range(job, from_, to):
    is_above_min = float(job.get("salary_range_from")) >= from_
    is_below_max = float(job.get("salary_range_to")) <= to
    return is_above_min and is_below_max


salary_min = 17
salary_max = 21.
agencies_in_range = [job["agency"]
                     for job in jobs if is_in_range(job, salary_min, salary_max)]
print("in range", (set(agencies_in_range)))
f.close()
