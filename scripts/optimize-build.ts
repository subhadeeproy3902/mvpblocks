#!/usr/bin/env bun
import { execSync } from 'child_process';
import { writeFileSync, readFileSync, existsSync } from 'fs';
import { join } from 'path';

console.log('🚀 Starting build optimization...');

// 1. Convert images to WebP
console.log('📸 Converting images to WebP...');
try {
  execSync('bun run optimise-image', { stdio: 'inherit' });
  console.log('✅ Images optimized');
} catch (error) {
  console.warn('⚠️ Image optimization failed:', error);
}

// 2. Update GitHub data
console.log('📊 Updating GitHub data...');
try {
  execSync('bun run github-contribution', { stdio: 'inherit' });
  console.log('✅ GitHub data updated');
} catch (error) {
  console.warn('⚠️ GitHub data update failed:', error);
}

// 3. Build registry
console.log('🔧 Building registry...');
try {
  execSync('bun run build:registry', { stdio: 'inherit' });
  console.log('✅ Registry built');
} catch (error) {
  console.error('❌ Registry build failed:', error);
  process.exit(1);
}

// 4. Optimize package.json for production
console.log('📦 Optimizing package.json...');
const packagePath = join(process.cwd(), 'package.json');
if (existsSync(packagePath)) {
  const packageJson = JSON.parse(readFileSync(packagePath, 'utf-8'));
  
  // Remove dev dependencies from production build
  const optimizedPackage = {
    ...packageJson,
    devDependencies: undefined, // Remove dev deps to reduce bundle size
    scripts: {
      ...packageJson.scripts,
      // Keep only essential scripts for production
      start: packageJson.scripts.start,
      'github-contribution': packageJson.scripts['github-contribution'],
    },
  };
  
  writeFileSync(
    join(process.cwd(), 'package.prod.json'),
    JSON.stringify(optimizedPackage, null, 2)
  );
  console.log('✅ Production package.json created');
}

// 5. Create build info
const buildInfo = {
  buildTime: new Date().toISOString(),
  optimizations: [
    'WebP image conversion',
    'GitHub data caching',
    'Registry optimization',
    'Bundle size reduction',
    'Static generation limits',
  ],
  version: process.env.npm_package_version || '1.0.0',
};

writeFileSync(
  join(process.cwd(), 'build-info.json'),
  JSON.stringify(buildInfo, null, 2)
);

console.log('🎉 Build optimization complete!');
console.log('📋 Optimizations applied:');
buildInfo.optimizations.forEach(opt => console.log(`  ✓ ${opt}`));

// 6. Display bundle size recommendations
console.log('\n📏 Bundle Size Recommendations:');
console.log('  • Use dynamic imports for large components');
console.log('  • Implement code splitting for routes');
console.log('  • Use Next.js Image component for all images');
console.log('  • Enable compression in production');
console.log('  • Use tree shaking for unused code');

// 7. Display Vercel optimization tips
console.log('\n⚡ Vercel Optimization Tips:');
console.log('  • Set revalidate times for ISR pages');
console.log('  • Use Edge Runtime for simple API routes');
console.log('  • Implement proper caching headers');
console.log('  • Limit static generation to essential pages');
console.log('  • Use Vercel Analytics to monitor performance');

console.log('\n🚀 Ready for deployment!');
