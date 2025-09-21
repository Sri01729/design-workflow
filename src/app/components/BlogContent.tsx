'use client';

import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: "Mastra Changelog 2025-09-18",
    description: "Resumable streams, structured output API change, bundling overhaul, and more.",
    date: "Sep 18, 2025",
    author: "Shane Thomas",
    category: "changelogs",
    url: "/blog/changelog-2025-09-18"
  },
  {
    id: 2,
    title: "Building agentic copilots with CopilotKit and Mastra",
    description: "Learn how to build interactive, real-time agentic apps using CopilotKit as a frontend for Mastra agents.",
    date: "Sep 18, 2025",
    author: "Sam Bhagwat",
    category: "announcements",
    url: "/blog/copilotkitmastra"
  },
  {
    id: 3,
    title: "Introducing Output Processors",
    description: "Introducing output processors: the gatekeepers that sit between your language model's response and your users.",
    date: "Sep 16, 2025",
    author: "Sam Bhagwat",
    category: "announcements",
    url: "/blog/announcing-output-processors"
  },
  {
    id: 4,
    title: "Mastra Changelog 2025-09-08",
    description: "Zod v4 support with v3 compatibility and more.",
    date: "Sep 8, 2025",
    author: "Shane Thomas",
    category: "changelogs",
    url: "/blog/changelog-2025-09-08"
  },
  {
    id: 5,
    title: "Introducing Cloneable Scorers",
    description: "Cloneable scorers let you copy, customize, and extend Mastra's evals into your project.",
    date: "Sep 5, 2025",
    author: "Sam Bhagwat",
    category: "announcements",
    url: "/blog/introducing-cloneable-scorers"
  },
  {
    id: 6,
    title: "Announcing Mastra's improved agent orchestration with AI SDK v5 support",
    description: "Mastra now controls the agent loop and tool calling with increased orchestration capabilities—while maintaining backward compatibility with AI SDK v4 and v5.",
    date: "Aug 26, 2025",
    author: "Sam Bhagwat",
    categories: ["announcements", "foundations"],
    url: "/blog/announcing-mastra-improved-agent-orchestration-ai-sdk-v5-support"
  }
];

const categories = [
  { name: "all posts", href: "/blog", active: true },
  { name: "announcements", href: "/blog/category/announcements", active: false },
  { name: "changelogs", href: "/blog/category/changelogs", active: false },
  { name: "examples", href: "/blog/category/examples", active: false },
  { name: "case studies", href: "/blog/category/case-studies", active: false },
  { name: "foundations", href: "/blog/category/foundations", active: false }
];

export default function BlogContent() {
  return (
    <div style={{
      maxWidth: '80rem',
      margin: '0 auto',
      paddingLeft: 'var(--hspace-8)',
      paddingRight: 'var(--hspace-8)',
      paddingTop: 'var(--vspace-12)',
      paddingBottom: 'var(--vspace-12)'
    }}>
      {/* Header */}
      <div style={{ marginBottom: 'var(--vspace-12)' }}>
        <h1 className="font-mastra-h1" style={{
          color: 'var(--color-desired-dawn)',
          marginBottom: 'var(--vspace-8)'
        }}>Blog</h1>

        {/* Category filters */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'var(--hspace-6)',
          marginBottom: 'var(--vspace-7)'
        }}>
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              style={{
                padding: `var(--vspace-6) var(--hspace-6)`,
                borderRadius: 'var(--border-radius-4)',
                textDecoration: 'none',
                backgroundColor: category.active ? 'var(--color-white-2)' : 'transparent',
                color: category.active ? 'var(--color-black)' : 'var(--color-desired-dawn)',
                transition: 'all 0.2s ease'
              }}
              className={`font-mastra-small category-link ${category.active ? 'active' : ''}`}
            >
              {category.name}
            </Link>
          ))}
        </div>

        {/* Search */}
        <div style={{ position: 'relative', maxWidth: '28rem' }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: 'var(--hspace-6)',
            transform: 'translateY(-50%)',
            pointerEvents: 'none'
          }}>
            <svg style={{ height: '1.25rem', width: '1.25rem', color: 'var(--color-desired-dawn)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search posts"
            style={{
              display: 'block',
              width: '100%',
              paddingLeft: '2.5rem',
              paddingRight: 'var(--hspace-6)',
              paddingTop: 'var(--vspace-5)',
              paddingBottom: 'var(--vspace-5)',
              border: `1px solid var(--color-carbon)`,
              borderRadius: 'var(--border-radius-4)',
              backgroundColor: 'var(--color-darth-vader-2)',
              color: 'var(--color-desired-dawn)',
              outline: 'none',
              fontSize: '0.875rem',
              lineHeight: '1.25rem'
            }}
            className="font-mastra-small search-input"
          />
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(28rem, 1fr))',
        gap: 'var(--vspace-8)'
      }}>
        {blogPosts.map((post) => (
          <article key={post.id} style={{
            backgroundColor: 'var(--color-black-metal)',
            borderRadius: 'var(--border-radius-2)',
            padding: 'var(--vspace-8)',
            border: `1px solid var(--color-jet-black)`
          }}>
            <Link href={post.url} style={{
              display: 'block',
              textDecoration: 'none',
              color: 'inherit'
            }}>
              <h2 className="font-mastra-h2-bold post-title" style={{
                color: 'var(--color-desired-dawn)',
                marginBottom: 'var(--vspace-5)',
                transition: 'color 0.2s ease'
              }}>
                {post.title}
              </h2>
              <p className="font-mastra-body" style={{
                color: 'var(--color-desired-dawn)',
                marginBottom: 'var(--vspace-6)',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}>
                {post.description}
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--hspace-6)'
                }}>
                  <span className="font-mastra-small" style={{ color: 'var(--color-white-2)' }}>
                    {post.date}
                  </span>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--hspace-3)'
                  }}>
                    <div style={{
                      width: '1.5rem',
                      height: '1.5rem',
                      backgroundColor: 'var(--color-white-2)',
                      borderRadius: '50%'
                    }}></div>
                    <span className="font-mastra-small" style={{ color: 'var(--color-white-2)' }}>
                      {post.author}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 'var(--hspace-3)' }}>
                  {(Array.isArray(post.categories) ? post.categories : [post.category]).map((cat) => (
                    <span
                      key={cat}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: `var(--vspace-2) var(--hspace-4)`,
                        borderRadius: 'var(--border-radius-3)',
                        backgroundColor: 'var(--color-jet-black)',
                        color: 'var(--color-desired-dawn)',
                        fontSize: '0.75rem',
                        fontWeight: 500
                      }}
                      className="font-mastra-caption"
                    >
                      # {cat}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {/* Show more button */}
      <div style={{
        marginTop: 'var(--vspace-12)',
        textAlign: 'center'
      }}>
        <button style={{
          backgroundColor: 'var(--color-white-2)',
          color: 'var(--color-black)',
          padding: `var(--vspace-6) var(--hspace-7)`,
          borderRadius: 'var(--border-radius-4)',
          border: 'none',
          cursor: 'pointer',
          transition: 'background-color 0.2s ease'
        }} className="font-mastra-small-medium show-more-button">
          Show more posts
        </button>
      </div>
    </div>
  );
}