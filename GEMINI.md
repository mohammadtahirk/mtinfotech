# Development & Deployment Rules

## Mandatory Rules for React, Next.js, and Vue Projects

1. **Always Build Before Deploy**:
   - Before deploying or committing code, always execute the production build (`npm run build`, `next build`, or framework equivalent).
   - Verify that the build succeeds with 0 errors and 0 warnings.
   - Never push or deploy broken code.

2. **Git Commit & Deploy Workflow**:
   - Once the build succeeds, stage changes (`git add .`).
   - Create a clear, descriptive commit message explaining what was implemented or fixed.
   - Push / deploy changes to the repository (`git push origin <branch>`).

3. **Responsive Verification**:
   - Always ensure changes are responsive across Desktop (1280px+), Tablet (768px-1024px), and Mobile (320px-430px).
