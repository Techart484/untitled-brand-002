// AWDE maintenance monitor — mon_e510b47b
// Site: Untitled Brand (https://www.genuineorigin.com/?msclkid=9a0f21433c1d1a0d25fe4b682629e017)
// Cadence: every 6h · weekly digest · monthly stack audit
(function () {
  const checks = [
  "perf",
  "deps",
  "uptime",
  "seo",
  "a11y"
];
  const run = async () => {
    for (const id of checks) {
      try { await fetch('/__awde/check/' + id, { method: 'POST' }); }
      catch (_) { /* swallow */ }
    }
  };
  if (typeof window !== 'undefined') {
    setInterval(run, 6 * 60 * 60 * 1000);
    run();
  }
})();
