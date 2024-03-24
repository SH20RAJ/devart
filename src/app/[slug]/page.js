"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export function generateRandomNumber(min, max) {
  // Math.random() generates a random number between 0 and 1
  // We multiply it by (max - min + 1) to include the max value,
  // then add min to ensure the number falls within the desired range.
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let startdata = "";

export default function ArticlesPage({ params }) {

    

  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredArticles, setFilteredArticles] = useState([]);
  console.log(params.slug);
  useEffect(() => {
    async function fetchArticles() {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://dev.to/api/articles/latest/?username=${params.slug}&per_page=110&page=${page}`,{ cache: 'no-store' }
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
  // let profile_image  = filteredArticles.user.profile_image;

  return (
    <>
      <Nav />
      <title>{params.slug + " - DevArt "}</title>
      <main className="postscontainer">
        <h2>Latest Posts from {params.slug}</h2>
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              {/* <img class="object-cover object-center rounded" alt="hero" src={filteredArticles && articles[0].user.profile_image}/> */}
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{params.slug}
                {/* <br class="hidden lg:inline-block"/>readymade gluten */}
              </h1>
              {/* <p class="mb-8 leading-relaxed">{filteredArticles && articles[0].user.name} </p> */}
              <div class="flex justify-center">
              <a href={"https://dev.to/"+params.slug}><button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">GitHub</button></a>
                <a href={"https://dev.to/"+params.slug}><button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Dev.to</button></a>
              </div>
            </div>
          </div>
        </section>
        
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
        <p className="text-gray-500 mb-4">{article.tag_list.join(", ")}</p>
      </Link>{" "}
    </div>
  );
}
