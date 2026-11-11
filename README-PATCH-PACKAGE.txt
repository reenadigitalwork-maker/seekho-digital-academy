SEEKHO DIGITAL — AUDIT FIX PATCH

This ZIP contains a Python patch script. Run it only from a clean checkout of:
reenadigitalwork-maker/seekho-digital-academy
on the platform-redesign branch.

PHONE / BROWSER WORKFLOW
1. Open the repository on GitHub and switch to platform-redesign.
2. Choose Code → Codespaces → Create codespace on platform-redesign.
3. In the Codespaces file explorer, upload this ZIP into the repository root.
4. Open the Codespaces terminal and run:

   unzip -o seekho-digital-audit-patch.zip
   python3 apply_seekho_audit_fixes.py

5. Review git diff before committing. The script does not commit, push or deploy.
6. The script creates APPLY-IN-CODESPACES.md and QA-CHECKLIST.md in the repository.

SAFETY
- The script checks the current branch and refuses to run on main or another branch.
- It refuses to overwrite an existing dirty worktree (the uploaded patch files are allowed).
- It stages no files, creates no commit and performs no push.
- It uses only the checked-out repository files; no external API or network access.
- It stops if an expected source-code anchor no longer matches.
