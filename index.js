// Minimal, non-destructive recon script. Extend with real checks, or replace entirely.
// Usage: node index.js https://target-url.example.com

const target = process.argv[2];

if (!target) {
  console.error('Usage: node index.js <target-url>');
  process.exit(1);
}

const SECURITY_HEADERS = [
  'content-security-policy',
  'x-frame-options',
  'x-content-type-options',
  'strict-transport-security',
];

async function main() {
  console.log(`Checking ${target} ...\n`);

  const res = await fetch(target, { method: 'GET' });
  console.log(`Status: ${res.status}`);

  console.log('\nSecurity headers:');
  for (const header of SECURITY_HEADERS) {
    const value = res.headers.get(header);
    console.log(`  ${header}: ${value || 'MISSING'}`);
  }

  console.log('\nDone. This is a starting point, not a real scanner - add your own checks.');
}

main().catch((err) => {
  console.error('Request failed:', err.message);
  process.exit(1);
});
