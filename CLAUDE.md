# Finance Excellence Assessment — repo notes for Claude

Owner: Patrik (Patriks313), non-technical — make technical calls yourself, ask only business questions, restate + "Go?" before acting.

- Live (GitHub Pages, main/root): https://patriks313.github.io/Finance-assessment/ (form; `?a=<client code>&to=<assessor email>`) and `/assessment_summary.html`.
- Respondents save a CSV reply and email it; the summary tool merges CSVs locally. No server, no database, no answers in this repo.
- Edit questions/roles/reverse scoring ONLY in `src/questions.js` (bump `version`), then `cd src && python3 build.py` and copy `assessment_form.html` + `assessment_summary.html` to the repo root. Commit and push; Pages republishes in ~1 min.
- Role routing: CEO all; CFO Finance organization + deliverables; Finance team Finance organization only; other roles Planning/Reporting/Financial management. Deliverable "in place" only when CEO and CFO both answer yes.
- RAG defaults: amber ≥50%, green ≥80% (adjustable in the summary).
- Source of truth for question wording: Finance_excellence_V6.docx section 5 (in the claude.ai project "Finance excellence"). Keep tool and doc in sync.
- Claude cannot toggle Pages settings via API; Patrik does that in the browser.
- Scoring (decided 2026-10-27): How per process = average of the three pillar scores (equal pillars, not pooled answers); cell scores = share of good answers; pillar (column) totals = average of the four process cells (equal processes). What = % deliverables in place. Summary shows the matrix plus a How/What bubble graph (x = What %, y = How %, dashed RAG threshold lines); "Save pictures" exports both PNGs. Long-term aim: same number of questions per pillar.
