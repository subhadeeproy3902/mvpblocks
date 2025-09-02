"use client"

import { useMemo } from "react"

const POACHING_EMAIL_HTML = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Poaching Alert Email</title>
    <style>
      *{box-sizing:border-box}
      body{font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; background:#0b0b0b; color:#111;}
      .frame{max-width:900px; margin:40px auto; background:#f6f7f8; padding:24px; border-radius:14px}
      .banner{background:#dc2626;color:white;border-radius:12px 12px 0 0;padding:20px;text-align:center}
      .card{background:white;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,.08);overflow:hidden}
      .section{padding:20px}
      .muted{background:#fff1f1;border:1px solid #ffd5d5;color:#991b1b;padding:16px;border-radius:12px}
    </style>
  </head>
  <body>
    <div class="frame">
      <div class="card">
        <div class="banner"><strong>POACHING ALERT</strong><div>Wildlife Protection System</div></div>
        <div class="section">
          <div class="muted"><strong>Poaching Activity Detected</strong><div>Suspicious activity detected in the protected area. Immediate response required.</div></div>
        </div>
      </div>
    </div>
  </body>
</html>`

export default function V0PanePreview() {
  const srcDoc = useMemo(() => POACHING_EMAIL_HTML, [])
  return (
    <div className="bg-background h-full overflow-auto">
      <iframe
        title="Live Preview"
        className="w-full h-full"
        srcDoc={srcDoc}
        sandbox="allow-same-origin"
      />
    </div>
  )
}
