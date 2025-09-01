# Automated Registry System

## Overview
The MVPBlocks CLI now uses an automated registry system that keeps the component list in sync with your actual components without manual maintenance.

## How It Works

### 1. Auto-Generated Constants
- **File**: `cli/src/constants.js`
- **Purpose**: Contains the list of all available components
- **Status**: Auto-generated - DO NOT EDIT MANUALLY

### 2. Build Registry Script
- **Command**: `bun run build:registry`
- **Purpose**: Scans the registry and updates both:
  - Public JSON files in `/public/r/`
  - CLI constants file
- **File**: `scripts/build-registry.ts`

### 3. Workflow
1. Add new components to the registry (`registry/registry-*.ts`)
2. Run `npm | bun | pnpm | yarn run build:registry`
3. Both website and CLI are automatically updated!

## Key Benefits

✅ **No Manual Updates**: Component list syncs automatically  
✅ **Single Source of Truth**: Registry files are the only place to manage components  
✅ **Type Safety**: TypeScript ensures everything stays in sync  
✅ **Automatic Stats**: CLI shows live component counts and metadata  
✅ **Zero Maintenance**: Add components once, they appear everywhere  

## Usage Examples

### Adding a New Component
1. Add to appropriate registry file (`registry/registry-blocks.ts`, etc.)
2. Run: `bun run build:registry`
3. Component appears in CLI automatically!

### Checking Component Stats
```bash
npx mvpblocks help
# Shows: 📦 Total Components: 178
```

### Development Workflow
```bash
# After adding new components
bun run build:registry

# Test CLI with updated components
cd cli && node src/index.js list
```

## Files Modified

- `scripts/build-registry.ts` - Enhanced to update CLI constants
- `cli/src/constants.js` - Auto-generated component list
- `cli/src/index.js` - Uses auto-generated constants
- `package.json` - Already has `build:registry` script

## Error Handling

The system gracefully handles:
- Missing components (skips silently)
- Network errors during fetching
- Malformed JSON files
- TypeScript compilation issues

The CLI will always work with whatever components are successfully loaded.
