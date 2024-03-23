export function generateRandomNumber(min, max) {
  // Math.random() generates a random number between 0 and 1
  // We multiply it by (max - min + 1) to include the max value,
  // then add min to ensure the number falls within the desired range.
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

 const Sitemap = async() => {

  const response2 = await fetch(
    `https://dev.to/api/articles?per_page=10000`
  );

  const data22 = await response2.json();
  let filteredArticles2 = await data22;
  // console.log(data2)

  return (
    <>
      <main>
        <div className="sidebar">
          {await filteredArticles2.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

      </main>
      {/* <div class="dots flex justify-between overflow-hidden">
          {await filteredArticles2.map((article) => (
            <span>
              {" "}
              <a href={`../..${article.path}`}>.</a>
            </span>
          ))}
        </div> */}

    </>
  );
};

function ArticleCard({ article }) {
  return (
      <a href={`${article.path}`}>
        {/* <img
          src={
            article.social_image ||
            "https://samples-files.com/samples/Images/jpg/1920-1080-sample.jpg"
          }
          alt="Image"
        /> */}
        <div className="card-title">{article.title}</div>
        <div className="line"></div>
        <p className="text-gray-500 mb-4">{article.tag_list.join(", ")}</p>
      </a>
  );
}
export default  Sitemap;
