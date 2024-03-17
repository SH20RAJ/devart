"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://dev.to/api/articles/latest/?per_page=12&page=${page}`
        );
        const data = await response.json();
        setArticles((prevArticles) => [...prevArticles, ...data]);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setIsLoading(false);
      }
    }

    fetchArticles();
  }, [page]);

  useEffect(() => {
    setFilteredArticles(articles);
  }, [articles]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleSearch(event) {
    const query = event.target.value;

    const filtered = articles.filter((article) =>
      article.title.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredArticles(filtered);
  }

  return (
    <>
      <Nav />

      <main className="postscontainer">
        <h2>Latest Posts</h2>
        <div className="container">
          <div className="latestposts">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </main>
      {isLoading && (
        <div className="text-center mt-8">
          <p>Loading...</p>
        </div>
      )}
      <Footer />
    </>
  );
}

// Child component to display article card
function ArticleCard({ article }) {
  return (
    <div className="card">
      <Link href={`./${article.path}`}>
        <img src={article.cover_image || "https://samples-files.com/samples/Images/jpg/1920-1080-sample.jpg"} alt="Image" />
        <div className="card-title">{article.title}</div>
        <div className="line"></div>
        <p className="text-gray-500 mb-4">{article.tag_list.join(", ")}</p>
      </Link>{" "}
    </div>
  );
}