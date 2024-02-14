export default async function ArticlePage({ params }) {
    const api = `https://dev.to/api/articles/${params.slug[0]}/${params.slug[1]}`;
    const res = await fetch(api);
    const data = await res.json();
  
    return (
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
  
        <div className="prose max-w-none">
          <div dangerouslySetInnerHTML={{ __html: data.body_html }} />
        </div>
      </div>
    );
  }