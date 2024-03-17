import Head from 'next/head';

export default async function ArticlePage({ params }) {
  const api = `https://dev.to/api/articles/${params.slug[0]}/${params.slug[1]}`;
  const res = await fetch(api);
  const data = await res.json();

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        title={data.title}
        description={data.description}
      </Head>
      <link rel="stylesheet" href="https://unpkg.com/@highlightjs/cdn-assets@11.4.0/styles/default.min.css"/>

      {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.9.1/highlight.min.js"></script>
      <script>hljs.initHighlightingOnLoad();</script> */}
      <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto">
          {/* Your navigation bar content here */}
          <nav>
            <ul className="flex items-center justify-between">
              <li>Logo</li>
              <li>Links</li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <article className="prose lg:prose-xl">
            <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
            <p className="text-gray-600 mb-4">Published on {new Date(data.published_at).toLocaleDateString()}</p>
            <div dangerouslySetInnerHTML={{ __html: data.body_html }} />
          </article>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto">
          {/* Your footer content here */}
          <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
