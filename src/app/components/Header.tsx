'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header style={{
      backgroundColor: 'var(--color-darth-vader-2)',
      borderBottom: `1px solid var(--color-carbon)`
    }}>
      <div style={{
        maxWidth: '80rem',
        margin: '0 auto',
        paddingLeft: 'var(--hspace-8)',
        paddingRight: 'var(--hspace-8)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '4rem'
        }}>
          {/* Logo */}
          <div style={{ flexShrink: 0 }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{
                width: '2rem',
                height: '2rem',
                backgroundColor: 'var(--color-white-2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 'var(--hspace-3)',
                position: 'relative'
              }}>
                {/* Star-like logo design */}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="var(--color-black)">
                  <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z"/>
                </svg>
              </div>
              <div className="font-mastra-small-bold" style={{ color: 'var(--color-desired-dawn)' }}>mastra</div>
            </Link>
          </div>

          {/* Main Navigation */}
          <nav style={{ display: 'flex', gap: 'var(--hspace-8)' }} className="hidden md:flex">
            <div style={{ position: 'relative' }}>
              <button style={{
                display: 'flex',
                alignItems: 'center',
                color: 'var(--color-desired-dawn)',
                padding: `var(--vspace-5) var(--hspace-6)`,
                border: 'none',
                background: 'none',
                cursor: 'pointer'
              }} className="font-mastra-small nav-button">
                Product
                <svg style={{ marginLeft: 'var(--hspace-2)', height: '1rem', width: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div style={{ position: 'relative' }}>
              <button style={{
                display: 'flex',
                alignItems: 'center',
                color: 'var(--color-desired-dawn)',
                padding: `var(--vspace-5) var(--hspace-6)`,
                border: 'none',
                background: 'none',
                cursor: 'pointer'
              }} className="font-mastra-small nav-button">
                Resources
                <svg style={{ marginLeft: 'var(--hspace-2)', height: '1rem', width: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <Link href="/book" style={{
              color: 'var(--color-white-2)',
              padding: `var(--vspace-5) var(--hspace-6)`,
              textDecoration: 'none'
            }} className="font-mastra-small nav-link">
              Book
            </Link>
            <Link href="/blog" style={{
              color: 'var(--color-white-2)',
              padding: `var(--vspace-5) var(--hspace-6)`,
              textDecoration: 'none',
              borderBottom: `2px solid var(--color-white-2)`
            }} className="font-mastra-small">
              Blog
            </Link>
            <Link href="/docs" style={{
              color: 'var(--color-white-2)',
              padding: `var(--vspace-5) var(--hspace-6)`,
              textDecoration: 'none'
            }} className="font-mastra-small nav-link">
              Docs
            </Link>
          </nav>

          {/* Right side - GitHub stars and Auth buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--hspace-6)' }}>
            <Link
              href="https://github.com/mastra-ai/mastra"
              style={{
                display: 'flex',
                alignItems: 'center',
                color: 'var(--color-desired-dawn)',
                textDecoration: 'none'
              }}
              className="nav-link"
            >
              <svg style={{ height: '1.25rem', width: '1.25rem', marginRight: 'var(--hspace-2)' }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              <span className="font-mastra-small-medium">16.7k</span>
            </Link>

            <Link
              href="https://cloud.mastra.ai"
              style={{
                color: 'var(--color-desired-dawn)',
                padding: `var(--vspace-5) var(--hspace-6)`,
                textDecoration: 'none'
              }}
              className="font-mastra-small nav-link"
            >
              Login
            </Link>
            <Link
              href="https://cloud.mastra.ai"
              style={{
                backgroundColor: 'var(--color-white-2)',
                color: 'var(--color-black)',
                padding: `var(--vspace-5) var(--hspace-6)`,
                borderRadius: 'var(--border-radius-4)',
                textDecoration: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
              className="font-mastra-small signup-button"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button style={{
              color: 'var(--color-white-2)',
              border: 'none',
              background: 'none',
              cursor: 'pointer'
            }} className="mobile-menu-button">
              <svg style={{ height: '1.5rem', width: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}