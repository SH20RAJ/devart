"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Card2 from "./components/Card2";

export function generateRandomNumber(min, max) {
  // Math.random() generates a random number between 0 and 1
  // We multiply it by (max - min + 1) to include the max value,
  // then add min to ensure the number falls within the desired range.
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [topArticles, setToprticles] = useState([]);



  useEffect(() => {
    async function fetchArticles() {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://dev.to/api/articles/latest/?per_page=80&page=${page}`
        );
        const data = await response.json();
        setArticles((prevArticles) => [...prevArticles, ...data]);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setIsLoading(false);
      }
      
      (async () => {
    var topArticles = await (await fetch('https://dev.to/api/articles/?per_page=40&page=1')).json()
    setToprticles(topArticles);
  })();



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
      <title>DevArt - Programming Related Articles</title>
      <main className="postscontainer">
      <h1 className="sm:hidden rounded-[12px] m-10 text-xl shadow-2xl p-5">
          <div class="relative">
            <form action="/search">
            <input name="q" class="w-full h-12 text-sm outline-none border mt-3 rounded-lg transition-all pl-7 pr-20 focus:border-blue-600" type="text" placeholder="Search Article, Users etc."/>
            <i class="absolute top-7 text-[#bfc6cd] left-2 fa fa-search"></i>
            <button class="absolute right-2 rounded-lg cursor-pointer transition-all hover:bg-blue-900 top-4 h-10 w-16 bg-blue-500 text-white text-sm">Search</button>
            </form>
        </div>


        </h1>
        <h1 className="rounded-[12px] m-10 text-xl shadow-2xl p-5">
          Latest Posts 
        </h1>
        <div className="container">
          <div className="latestposts">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          <div class="post">
            <h2>Top Articles</h2>
            {topArticles.map((article) => (
              <TopArticleCard key={article.id} article={article} />
            ))}

          </div>
        </div>
      </main>
      {isLoading && (
        <div className="text-center mt-8">
          <button class="btn" id="load_more" onclick="getMorePosts()">
            Loading...
          </button>
        </div>
      )}
      <Footer />
    </>
  );
}

// Child component to display article card
function ArticleCard({ article }) {
  return (
    <div className="card rounded-[12px] m-10 text-xl shadow-2xl p-5">
      <Link href={`${article.path}`}>
        <img
          src={
            article.social_image ||
            "https://samples-files.com/samples/Images/jpg/1920-1080-sample.jpg"
          }
          alt="Image"
        />
        <div className="card-title">{article.title}</div>
        <div className="line"></div>
        <p className="text-gray-500 small mb-4">
          {article.tag_list.join(", ")}
        </p>
      </Link>{" "}
    </div>
  );
}
// Child component to display article card
function TopArticleCard({ article }) {
  return (
    <div className="w-full rounded-[12px] m-0 text-xl shadow-2xl p-5">
      <Link href={`${article.path}`}>
        <div className="card-title">{article.title}</div>
        <div className="line"></div>
        <p className="text-gray-500 small mb-4">
          {article.tag_list.join(", ")}
        </p>
      </Link>{" "}
    </div>
  );
}
