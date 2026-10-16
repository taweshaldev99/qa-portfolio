# Taweshal Dev Thakur — QA portfolio

A responsive Next.js static portfolio tailored to the responsibilities in SDOC Quality Analyst vacancy SDOC-2083-S3-11. Built from the existing portfolio repository and its QA CV. No backend, tracking, external fonts or form service required.

## Run / build
Requires Node.js 22 and npm.

```sh
npm ci
npm run dev
npm run build
```

Production output: `out/`. Deploy the contents of that folder, not the source folder.

## Edit
- Main page, contact details, sample scenarios: `src/app/page.tsx`
- Styling and responsive breakpoints: `src/styles/global.css`
- Title and metadata: `src/app/layout.tsx`
- CV: `public/Taweshal_Dev_Thakur_QA_CV.pdf`
- Downloadable practice evidence: `public/qa-work-samples.md`

The prior section components remain in source for reference but are not rendered.

## Content requiring owner review
1. Email: QA CV uses `thakur2sl.py@gmail.com`; previous portfolio uses `dev2sl.py@gmail.com`. This version follows the QA CV.
2. Education: BIT is retained as 2022–Present, as in the QA CV. Confirm completion and update only with accurate details. The vacancy requires a bachelor's degree in an IT-related subject and lists prior relevant experience in its Nepali requirements.
3. Professional title and dates follow the QA CV: Associate Junior QA, July 2026–Present; Quality Assurance Intern, March–July 2026.
4. QA workbench and sample pack are newly prepared, hypothetical, unexecuted exercises. Review and customize before presenting them as your own work. No production defect, test pass rate or automation proficiency is claimed.
5. API testing, performance, accessibility and automation appear as future development areas, not verified professional experience.

## Sources
- Existing repository: https://github.com/taweshaldev99/Portfolio-Taweshal_Dev_Thakur
- QA CV supplied in that repository.
- Vacancy: https://sdoc.gov.np/vacancies/quality-analyst-sdoc-2083-s3-11 (read 16 October 2026).
- Live reference https://portfolio-taweshal-dev-thakur.pages.dev/ returned HTTP 403; repository source was used instead.

See DEPLOYMENT.md for hosting instructions.
