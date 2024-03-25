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
  const [type, setType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [filteredArticles, setFilteredArticles] = useState([]);
  

  useEffect(() => {
    async function fetchArticles() {
      setIsLoading(true);
      try {
        
        const response = await fetch(
          `https://dev.to/api/articles/${type}?per_page=22&page=${page}`
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
  let settype = (a) => {
    setType("latest");
    alert(type)
  }

  return (
    <>
      <Nav />
      <title>DevArt - Programming Related Articles</title>
      <main className="postscontainer">
        <h1 className="rounded-[12px] m-10 text-xl shadow-2xl p-5">
          Latest Posts || <button onClick={()=>settype("latest")}>Top Articles</button>
        </h1>
        <div className="container">
          <div className="latestposts">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          <div class="post">
            
            <Card2/>
            
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
