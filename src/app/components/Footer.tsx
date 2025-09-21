'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--color-darth-vader-2)',
      borderTop: `1px solid var(--color-carbon)`,
      marginTop: 'var(--vspace-11)'
    }}>
      <div style={{
        maxWidth: '80rem',
        margin: '0 auto',
        paddingLeft: 'var(--hspace-8)',
        paddingRight: 'var(--hspace-8)',
        paddingTop: 'var(--vspace-12)',
        paddingBottom: 'var(--vspace-12)'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 'var(--hspace-8)'
        }} className="grid-cols-1 md:grid-cols-4">
          {/* Logo */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{
              width: '2rem',
              height: '2rem',
              backgroundColor: 'var(--color-white-2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 'var(--vspace-6)'
            }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="var(--color-black)">
                <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z"/>
              </svg>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-mastra-small-bold" style={{
              color: 'var(--color-desired-dawn)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: 'var(--vspace-6)'
            }}>Products</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--vspace-6)' }}>
              <li>
                <Link href="/cloud" style={{
                  color: 'var(--color-desired-dawn)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }} className="font-mastra-small footer-link">
                  Cloud
                </Link>
              </li>
              <li>
                <Link href="/agents" style={{
                  color: 'var(--color-desired-dawn)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }} className="font-mastra-small footer-link">
                  Agents
                </Link>
              </li>
              <li>
                <Link href="/workflows" style={{
                  color: 'var(--color-desired-dawn)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }} className="font-mastra-small footer-link">
                  Workflows
                </Link>
              </li>
              <li>
                <Link href="/observability" style={{
                  color: 'var(--color-desired-dawn)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }} className="font-mastra-small footer-link">
                  Observability
                </Link>
              </li>
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h3 className="font-mastra-small-bold" style={{
              color: 'var(--color-desired-dawn)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: 'var(--vspace-6)'
            }}>Developers</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--vspace-6)' }}>
              <li>
                <Link href="/docs" style={{
                  color: 'var(--color-desired-dawn)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }} className="font-mastra-small footer-link">
                  Docs
                </Link>
              </li>
              <li>
                <Link href="/templates" style={{
                  color: 'var(--color-desired-dawn)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }} className="font-mastra-small footer-link">
                  Templates
                </Link>
              </li>
              <li>
                <Link href="/book" style={{
                  color: 'var(--color-desired-dawn)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }} className="font-mastra-small footer-link">
                  Principles of Building AI Agents
                </Link>
              </li>
              <li>
                <Link href="/llms.txt" style={{
                  color: 'var(--color-desired-dawn)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }} className="font-mastra-small footer-link">
                  llms.txt
                </Link>
              </li>
              <li>
                <Link href="/llms-full.txt" style={{
                  color: 'var(--color-desired-dawn)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }} className="font-mastra-small footer-link">
                  llms-full.txt
                </Link>
              </li>
              <li>
                <Link href="https://statuspage.incident.io/mastra-cloud" style={{
                  color: 'var(--color-desired-dawn)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }} className="font-mastra-small footer-link">
                  Mastra Cloud Status
                </Link>
              </li>
              <li>
                <Link href="/mcp-registry-registry" style={{
                  color: 'var(--color-desired-dawn)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }} className="font-mastra-small footer-link">
                  MCP Registry Registry
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-mastra-small-bold" style={{
              color: 'var(--color-desired-dawn)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: 'var(--vspace-6)'
            }}>Company</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--vspace-6)' }}>
              <li>
                <Link href="/about" style={{
                  color: 'var(--color-desired-dawn)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }} className="font-mastra-small footer-link">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" style={{
                  color: 'var(--color-desired-dawn)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }} className="font-mastra-small footer-link">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact-us" style={{
                  color: 'var(--color-desired-dawn)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }} className="font-mastra-small footer-link">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="https://github.com/mastra-ai/mastra" style={{
                  color: 'var(--color-desired-dawn)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }} className="font-mastra-small footer-link">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="https://discord.gg/BTYqqHKUrf" style={{
                  color: 'var(--color-desired-dawn)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }} className="font-mastra-small footer-link">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="https://x.com/mastra_ai" style={{
                  color: 'var(--color-desired-dawn)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }} className="font-mastra-small footer-link">
                  X
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/@mastra-ai" style={{
                  color: 'var(--color-desired-dawn)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }} className="font-mastra-small footer-link">
                  YouTube
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter and Legal */}
        <div style={{
          marginTop: 'var(--vspace-12)',
          paddingTop: 'var(--vspace-8)',
          borderTop: `1px solid var(--color-carbon)`
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--vspace-6)'
          }} className="md:flex-row md:justify-between md:items-center md:space-y-0">
            {/* Newsletter */}
            <div style={{ flex: 1, maxWidth: '28rem' }}>
              <h3 className="font-mastra-small-bold" style={{
                color: 'var(--color-desired-dawn)',
                marginBottom: 'var(--vspace-5)'
              }}>Mastra Newsletter</h3>
              <div style={{ display: 'flex' }}>
                <input
                  type="email"
                  placeholder="you@company.com"
                  style={{
                    flex: 1,
                    paddingLeft: 'var(--hspace-6)',
                    paddingRight: 'var(--hspace-6)',
                    paddingTop: 'var(--vspace-5)',
                    paddingBottom: 'var(--vspace-5)',
                    border: `1px solid var(--color-carbon)`,
                    borderTopLeftRadius: 'var(--border-radius-4)',
                    borderBottomLeftRadius: 'var(--border-radius-4)',
                    backgroundColor: 'var(--color-darth-vader-2)',
                    color: 'var(--color-desired-dawn)',
                    outline: 'none',
                    fontSize: '0.875rem'
                  }}
                  className="font-mastra-small newsletter-input"
                />
                <button style={{
                  backgroundColor: 'var(--color-white-2)',
                  color: 'var(--color-black)',
                  paddingLeft: 'var(--hspace-6)',
                  paddingRight: 'var(--hspace-6)',
                  paddingTop: 'var(--vspace-5)',
                  paddingBottom: 'var(--vspace-5)',
                  borderTopRightRadius: 'var(--border-radius-4)',
                  borderBottomRightRadius: 'var(--border-radius-4)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease'
                }} className="newsletter-button">
                  <svg style={{ height: '1.25rem', width: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Legal */}
            <div style={{ display: 'flex', gap: 'var(--hspace-7)' }}>
              <Link href="/privacy-policy" style={{
                color: 'var(--color-desired-dawn)',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }} className="font-mastra-small footer-link">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}