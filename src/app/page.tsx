import Header from './components/Header';
import BlogContent from './components/BlogContent';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'var(--color-darth-vader-2)'
    }}>
      <Header />
      <main>
        <BlogContent />
      </main>
      <Footer />
    </div>
  );
}