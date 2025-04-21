# Component Registration Scripts

This directory contains scripts to help you register, build, and sort components in the MVPBlocks project.

## Auto-Register Component

The `auto-register.ts` script automatically adds a component to the appropriate registry, builds the registry, and sorts it. This script is used by the other scripts in this directory.

## Register Component Script

### Windows (PowerShell)

Use the `register-component.ps1` script to register a component, build the registry, and sort it in one command:

```powershell
# Using the script directly
./scripts/register-component.ps1 "components/mvpblocks/basics/buttons/my-button.tsx"

# Using the npm script
npm run add-component "components/mvpblocks/basics/buttons/my-button.tsx"
# or with bun
bun run add-component "components/mvpblocks/basics/buttons/my-button.tsx"
```

### Unix/Linux/Mac (Bash)

Use the `register-component.sh` script to register a component, build the registry, and sort it in one command:

```bash
# Make the script executable (first time only)
chmod +x ./scripts/register-component.sh

# Using the script directly
./scripts/register-component.sh "components/mvpblocks/basics/buttons/my-button.tsx"
```

## What the Script Does

1. Identifies the type of component based on its path:
   - Components in `/components/mvpblocks/` are registered as `registry:block`
   - Components in `/components/ui/` are registered as `registry:ui`
   - Components in `/hooks/` are registered as `registry:hook`
   - Components in `/lib/` are registered as `registry:lib`

2. Automatically detects dependencies:
   - Detects npm package dependencies (like `lucide-react`) from import statements
   - Detects registry dependencies (like UI components, hooks, and utilities) from import statements

3. Adds the component to the appropriate registry file:
   - `registry-blocks.ts` for blocks
   - `registry-ui.ts` for UI components
   - `registry-hooks.ts` for hooks
   - `registry-lib.ts` for library utilities

4. Runs the build script to generate the public registry files

5. Runs the sort script to sort the registry alphabetically

## Notes

- The component name is derived from the file name (without extension)
- The script automatically detects dependencies based on the component path
- If a component with the same name already exists in the registry, it will not be added again
