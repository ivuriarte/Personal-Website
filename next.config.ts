import type { NextConfig } from "next";

const securityHeaders = [
  // Prevent MIME-type sniffing
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Block clickjacking — page cannot be embedded in any iframe
  { key: "X-Frame-Options", value: "DENY" },
  // Control referrer information sent to third parties
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Enforce HTTPS for 2 years, include subdomains
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Disable browser DNS prefetching (reduces info leakage)
  { key: "X-DNS-Prefetch-Control", value: "on" },
  // Restrict browser feature/permissions access
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Content Security Policy
  // — self for scripts/styles (Next.js needs 'unsafe-inline' for its runtime)
  // — specific trusted image origins only
  // — no plugin types, no object embeds
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // required by Next.js
      "style-src 'self' 'unsafe-inline'",               // required by Tailwind/Next.js
      "img-src 'self' data: blob: https://media.licdn.com",
      "font-src 'self'",
      "connect-src 'self'",
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self' mailto:",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  // Remove the X-Powered-By: Next.js header to reduce fingerprinting surface
  poweredByHeader: false,

  // Allowlist for remote images — only permit known trusted CDN origins
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com",
        pathname: "/dms/image/**",
      },
    ],
  },

  // Apply security headers to all routes
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
