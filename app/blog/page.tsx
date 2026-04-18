import Link from 'next/link';

const articles = [
  {
    href: '/blog/discord-nitro-generator-scam',
    title: 'The Truth About Discord Nitro Generators',
    subtitle: 'Why free Nitro promises are usually malware in disguise.',
    meta: 'August 2025 · 12 min read',
  },
  {
    href: '/blog/mrbeast-casino-scam',
    title: 'The Massive MrBeast Casino Scam Exposed',
    subtitle: 'How fake platforms weaponize trust, celebrity influence, and stolen accounts at scale.',
    meta: 'November 2025 · 8 min read',
  },
  {
    href: '/blog/minecraft-verification-scam',
    title: 'The Minecraft Verification Scam',
    subtitle: 'How fake Discord servers are stealing player accounts.',
    meta: 'January 2026 · 10 min read',
  },
];

export default function BlogIndexPage() {
  return (
    <main className="editorial-index">
      <div className="editorial-index-shell">
        <p className="editorial-kicker">Cybersecurity Journal</p>
        <h1>Investigations</h1>
        <p className="editorial-index-intro">
          Long-form investigative reports on modern social-engineering campaigns, malware delivery pipelines, and
          account-takeover operations.
        </p>

        <div className="editorial-index-list">
          {articles.map((article) => (
            <article key={article.href} className="editorial-index-item">
              <p>{article.meta}</p>
              <h2>{article.title}</h2>
              <p>{article.subtitle}</p>
              <Link href={article.href}>Read investigation</Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
