# QA work samples — Taweshal Dev Thakur

## Scope and provenance
Portfolio practice material for a fictional public-service application portal. Prepared for this portfolio; not employer work, not an SDOC assessment, and not executed testing. All test data must be synthetic. Actual results, environment, evidence links and execution dates are intentionally unrecorded until execution. This pack demonstrates a proposed documentation structure; it does not establish professional API, automation or performance-testing experience.

## Test plan
Goal: validate a user's application from form entry to a unique confirmation, including clear errors, document validation and access control.
Scope: functional checks, API authorization, submission integrity, keyboard access, browser/device coverage, and retesting.
Out of scope: penetration tests, load against production, real identity documents and real applicant accounts.
Prerequisites: authorized non-production environment; agreed acceptance criteria; test accounts; known reset procedure; approved synthetic fixtures; documented supported browsers and limits.
Entry criteria: testable build, stable test environment, approved requirements and fixtures.
Exit proposal: critical journeys executed, no unresolved critical/high defects without explicit risk acceptance, fixes retested, regression complete, evidence reviewed by the QA lead.

## Requirements and traceability
| Requirement | Acceptance criterion | Test case | Execution |
|---|---|---|---|
| REQ-01 | Required fields reject empty/whitespace data; valid input submits | TC-01, TC-02 | Not executed |
| REQ-02 | Protected application data is inaccessible without authorization | TC-03 | Not executed |
| REQ-03 | Repeated same submission does not create duplicates | TC-04 | Not executed |
| REQ-04 | Form supports keyboard completion and understandable errors | TC-05 | Not executed |
| REQ-05 | Document type and size limits are enforced consistently | TC-06 | Not executed |

## Cases
### TC-01 — Valid submission / Functional
Data: Test Applicant, qa.applicant@example.com, approved synthetic PDF.
Steps: enter valid details; select a role; upload permitted PDF; submit once.
Expected: one application created; unique reference and confirmation shown; submitted values retained correctly.

### TC-02 — Required fields / Functional
Steps: leave required name and email empty; submit; repeat with whitespace-only values.
Expected: block submission; identify specific invalid fields; retain valid entries; errors available to assistive technology.

### TC-03 — Access control / API
Steps: request a protected application without a session; repeat with an expired session; in the test environment attempt to access account B's synthetic application from account A.
Expected: denial with the agreed HTTP status; no applicant data returned; no state change. Record agreed 401/403/404 behavior before execution rather than guessing the API contract.

### TC-04 — Duplicate submission / Regression
Steps: submit twice rapidly; retry the same request ID after a simulated timeout.
Expected: one stored application; consistent response to retries; no duplicate notification.

### TC-05 — Keyboard workflow / Accessibility
Steps: use only Tab, Shift+Tab, Enter and Space; trigger and correct a validation error.
Expected: logical focus order, visible focus, no keyboard trap; programmatically associated labels and errors. Manual screen-reader checking is a separate step.

### TC-06 — Upload boundary / Functional
Data: synthetic PDFs of limit minus 1 byte, exactly the limit, and limit plus 1 byte; a disallowed type and a renamed non-PDF.
Steps: upload each in isolation using a reset test application.
Expected: valid PDFs within the agreed limit accepted; oversized and disallowed content rejected with clear messages. Confirm server-side validation independently.

## Illustrative defect: DEMO-001
Title: repeated submission creates duplicate records.
Status: hypothetical example, not observed.
Severity: proposed High because duplicate records can affect processing integrity.
Priority: for triage with the product owner.
Environment/build: record on execution.
Precondition: synthetic applicant, valid form, authorized test environment.
Steps: (1) complete valid form; (2) activate submit twice rapidly; (3) compare resulting record identifiers.
Expected: one application and one reference.
Hypothetical actual: two application records created.
Evidence to collect: sanitized requests/responses, timestamps, build identifier, screen recording and record counts. Never publish tokens or identity documents.
Retest: repeat original steps after fix; retry after timeout; verify slow-network and single-submit paths; link outcome to TC-04.
Closure: record fixed build, retest result, evidence and reviewer. Do not close solely because a developer marks it fixed.

## Regression and UAT
Smoke: form loads, required fields work, valid submission succeeds, reference shown.
Regression: TC-01 through TC-06 plus role selection, session expiry, back navigation, refresh and server error recovery.
Cross-browser/device: execute agreed supported Chrome, Firefox, Edge and Safari versions; mobile widths; touch input; capture real versions and results.
UAT: ask a representative user to complete an agreed synthetic journey; record feedback, linked requirement, acceptance decision and unresolved issues.

## API, automation and performance extension plan
API: verify schema, required fields, status codes, authorization and idempotency against an agreed API contract.
Automation: prioritize deterministic smoke/regression cases; isolate fixtures; clean up test state; record failing assertions and screenshots; avoid relying on arbitrary waits.
Performance: agree workload and response-time/error-rate thresholds; run only against an authorized test environment; document hardware, concurrency, duration, throughput and percentile latency. No performance results claimed.
Accessibility: combine automated checks with keyboard, focus and screen-reader checks. Automated results alone do not establish conformance.

## Release-summary template
Build / environment / execution window / tester: record on execution.
Planned, executed, passed, failed, blocked, not run: populate from execution log; do not count unexecuted cases as passed.
Outstanding defects: severity, impact, owner, linked requirement, evidence and disposition.
Coverage gaps: untested browsers, integrations or scenarios and resulting risk.
Recommendation: go / conditional go / no-go with rationale and QA-lead approval.
Sensitive evidence: use controlled access, synthetic fixtures and redaction.
