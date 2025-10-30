# Git Best Practices for Claude Code

## Overview
Claude handles ALL git operations for this project. You should never need to run git commands manually.

## Pre-Commit Rules

### ALWAYS Before Committing:
1. **Run the build** - `npm run build` must pass successfully
2. **Review all changes** - Check what's being committed
3. **Never commit secrets**:
   - No `.env` files
   - No API keys or tokens
   - No credentials or passwords
   - No private keys
4. **Verify .gitignore** - Ensure it's properly configured

### Build Check Command:
```bash
npm run build
```
✅ Only commit if build succeeds
❌ Never commit broken code

## Commit Message Format

Use **Conventional Commits** format:

### Types:
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting, semicolons, etc.)
- `refactor` - Code refactoring (no feature changes)
- `test` - Adding or updating tests
- `chore` - Maintenance tasks (dependencies, config, etc.)

### Format:
```
<type>: <subject>

<body>

<footer>
```

### Rules:
1. **Use imperative mood** - "Add feature" NOT "Added feature"
2. **First line under 50 characters**
3. **Explain WHAT and WHY, not HOW**
4. **One logical change per commit** (atomic commits)
5. **Blank line between subject and body**

### Examples:

#### Good:
```
feat: Add user authentication with JWT

Implement JWT-based authentication to secure API endpoints.
Users can now log in and receive a token for subsequent requests.
```

#### Bad:
```
Added some stuff and fixed things
```

## Workflow

### Solo Development (Main Branch):
- Work directly on `main` branch
- No feature branches needed for solo work
- Claude handles all commits and pushes
- Always ensure builds pass before committing

### Git Operations Handled by Claude:
- `git add` - Staging changes
- `git commit` - Creating commits with proper messages
- `git push` - Pushing to remote
- `git pull` - Pulling updates (when needed)
- `git status` - Checking repository state

### You (User) Just:
1. Tell Claude what changes you want
2. Claude makes the changes
3. Claude tests the build
4. Claude commits with proper message
5. Claude pushes to GitHub
6. Vercel auto-deploys

## Security Checklist

### Before Every Commit:
- [ ] No `.env` files
- [ ] No API keys in code
- [ ] No hardcoded passwords
- [ ] No AWS/GCP credentials
- [ ] No private keys or certificates
- [ ] No personal access tokens

### .gitignore Should Include:
```
# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Secrets
secrets/
*.key
*.pem
*.crt

# IDE
.vscode/
.idea/

# Dependencies
node_modules/

# Build
.next/
out/
build/
dist/

# Misc
.DS_Store
*.log
```

## Build Verification

### Before Each Commit:
```bash
# 1. Run build
npm run build

# 2. Check for errors
# Build must complete successfully

# 3. Only then commit
git add .
git commit -m "feat: descriptive message"
git push
```

### If Build Fails:
1. ❌ DO NOT commit
2. Fix the errors
3. Run build again
4. Only commit when build passes

## Commit Frequency

### Atomic Commits:
- One logical change per commit
- Keep commits small and focused
- Makes rollback easier if needed
- Better for code review

### Good Examples:
- ✅ `feat: Add navigation header component`
- ✅ `style: Update button hover effects`
- ✅ `fix: Correct typo in hero section`

### Bad Examples:
- ❌ `fix: Various updates and changes`
- ❌ Committing 10 different features at once

## Deployment Flow

```
Local Changes
    ↓
npm run build (verify)
    ↓
git commit (atomic, well-described)
    ↓
git push to GitHub
    ↓
Vercel Auto-Deploy (via GitHub integration)
    ↓
Live Site Updated
```

## Remember

**Claude is in charge of:**
- Running builds before commits
- Writing proper commit messages
- Checking for secrets
- Managing all git operations
- Ensuring code quality before push

**You just:**
- Request features or changes
- Review the results
- Approve deployments

---

*This ensures clean git history, secure code, and smooth deployments.*
