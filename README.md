# Finance Excellence Assessment

- `assessment_form.html` — respondent form (link: `?a=<assessment code>&to=<email>`). Saves answers as a CSV file the respondent emails back.
- `assessment_summary.html` — assessor tool. Drop in reply CSVs to build the matrix. Runs locally; nothing is uploaded.
- `src/` — sources. Edit `src/questions.js` (question bank and role routing), then run `python3 src/build.py` from `src/` and copy the two built pages to the root.

No answers are stored in this repository or on any server.
