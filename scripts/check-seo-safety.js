#!/usr/bin/env node
/**
 * SEO Safety Check Script
 * Validates that critical SEO elements exist in the build output
 * Run as part of the build process to catch SEO regressions
 */

const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'out');

const checks = {
    passed: 0,
    failed: 0,
    warnings: 0,
};

function log(type, msg) {
    const prefix = {
        pass: '\x1b[32m✓\x1b[0m',
        fail: '\x1b[31m✗\x1b[0m',
        warn: '\x1b[33m⚠\x1b[0m',
        info: '\x1b[36mℹ\x1b[0m',
    };
    console.log(`${prefix[type]} ${msg}`);
}

function checkFileExists(filePath, required = true) {
    const exists = fs.existsSync(filePath);
    const name = path.basename(filePath);

    if (exists) {
        log('pass', `${name} exists`);
        checks.passed++;
    } else if (required) {
        log('fail', `${name} is MISSING`);
        checks.failed++;
    } else {
        log('warn', `${name} is missing (optional)`);
        checks.warnings++;
    }
    return exists;
}

function checkHtmlForSchema(htmlPath) {
    if (!fs.existsSync(htmlPath)) {
        log('fail', 'index.html not found in output');
        checks.failed++;
        return;
    }

    const html = fs.readFileSync(htmlPath, 'utf8');

    // Check for JSON-LD
    if (html.includes('application/ld+json')) {
        log('pass', 'JSON-LD schema detected');
        checks.passed++;

        // Check for Organization type
        if (html.includes('"@type":"Organization"') || html.includes('"@type": "Organization"')) {
            log('pass', 'Organization schema present');
            checks.passed++;
        } else {
            log('warn', 'Organization schema not found');
            checks.warnings++;
        }

        // Check for logo in schema
        if (html.includes('"logo"')) {
            log('pass', 'Logo defined in schema');
            checks.passed++;
        } else {
            log('fail', 'Logo MISSING from schema - Google may show grey globe');
            checks.failed++;
        }
    } else {
        log('fail', 'No JSON-LD schema found');
        checks.failed++;
    }

    // Check meta description
    if (html.includes('<meta name="description"')) {
        log('pass', 'Meta description present');
        checks.passed++;
    } else {
        log('fail', 'Meta description MISSING');
        checks.failed++;
    }

    // Check canonical
    if (html.includes('rel="canonical"')) {
        log('pass', 'Canonical URL present');
        checks.passed++;
    } else {
        log('warn', 'Canonical URL missing');
        checks.warnings++;
    }
}

// Main execution
console.log('\n🔍 SEO Safety Check\n');

// Check public assets
const publicDir = path.join(__dirname, '..', 'public');
checkFileExists(path.join(publicDir, 'favicon.ico'), false);
checkFileExists(path.join(publicDir, 'icon.png'), false);
checkFileExists(path.join(publicDir, 'apple-touch-icon.png'), false);
checkFileExists(path.join(publicDir, 'logo.png'));
checkFileExists(path.join(publicDir, 'robots.txt'));
checkFileExists(path.join(publicDir, 'sitemap.xml'));

// Check built output if exists
if (fs.existsSync(OUT_DIR)) {
    console.log('\n📦 Checking build output...\n');
    checkHtmlForSchema(path.join(OUT_DIR, 'index.html'));
} else {
    log('info', 'No build output found (run after build)');
}

// Summary
console.log('\n' + '─'.repeat(40));
console.log(`\x1b[32m${checks.passed} passed\x1b[0m | \x1b[31m${checks.failed} failed\x1b[0m | \x1b[33m${checks.warnings} warnings\x1b[0m\n`);

if (checks.failed > 0) {
    console.log('\x1b[31mSEO check failed! Fix issues before deploying.\x1b[0m\n');
    process.exit(1);
}

console.log('\x1b[32mSEO check passed!\x1b[0m\n');
process.exit(0);
