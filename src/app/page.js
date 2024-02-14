'use client'
import { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import Link from 'next/link';

export default function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      setIsLoading(true);
      try {
        const response = await fetch(`https://dev.to/api/articles?per_page=12&page=${page}`);
        const data = await response.json();
        setArticles(prevArticles => [...prevArticles, ...data]);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setIsLoading(false);
      }
    }

    fetchArticles();
  }, [page]);

  useEffect(() => {
    setFilteredArticles(articles);
  }, [articles]);

  useEffect(() => {
    async function loadMore() {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        setPage(prevPage => prevPage + 1);
      }
    }

    window.addEventListener('scroll', debounce(loadMore, 200));

    return () => window.removeEventListener('scroll', loadMore);
  }, []);

  function handleSearch(event) {
    const query = event.target.value;

    const filtered = articles.filter(article =>
      article.title.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredArticles(filtered);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Articles</h1>

      <input
        type="text"
        placeholder="Search articles..."
        onChange={handleSearch}
        className="border p-2 rounded w-full mb-4"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredArticles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {isLoading && (
        <div className="text-center mt-8">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}

// Child component to display article card
function ArticleCard({ article }) {
  return (
    <div className="border p-4 rounded shadow">
      <img src={article.cover_image} alt="" className="w-full rounded mb-4" />
      <h2 className="text-xl font-bold mb-2">{article.title}</h2>

      <p className="text-gray-500 mb-4">{article.tag_list.join(', ')}</p>

      <Link href={`/articles/${article.id}`}>
        <div className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Read more
        </div>
      </Link>
    </div>
  );
}
