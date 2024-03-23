import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Link from "next/link";
// import { metadata } from "../layout";



export function generateRandomNumber(min, max) {
  // Math.random() generates a random number between 0 and 1
  // We multiply it by (max - min + 1) to include the max value,
  // then add min to ensure the number falls within the desired range.
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default async ({ params }) => {
  const api = `https://dev.to/api/articles/${params.slug[0]}/${params.slug[1]}`;
  const res = await fetch(api);
  const data = await res.json();

  const response = await fetch(
    `https://dev.to/api/articles/latest/?per_page=19&page=${generateRandomNumber(1,1000)}`
  );

  const data2 = await response.json();
  let filteredArticles = await data2;
  // console.log(data)

  const response2 = await fetch(
    `https://dev.to/api/articles?username=${params.slug[0]}&per_page=900`
  );

  const data22 = await response2.json();
  let filteredArticles2 = await data22;
  // console.log(data2)

  return (
    <>
      <Nav />
      {/* <link rel="stylesheet" href="https://dev.to/assets/crayons-132fd5353a6887f948f908fecf2c183d4019983fae2c184971fb9deb4e930bfb.css" /> */}
      <main>
        <div className="shadow1 postcontainer subpixel-antialiased  postcon"  >
          <img class="glassload shadow2 postheadimage" src={data.cover_image} alt="" srcset="" />
          <h2 id="title">{data.title}</h2>
          <span class="post-data">
            <Link href={"../" + data.user.username}>
              {" "}
              <img
                width={40}
                class="author-img"
                src={data.user.profile_image_90}
                alt=""
              />{" "}
              {data.user.name}
            </Link>{" "}
            - {data.readable_publish_date} -{"   "}
            <a href={"https://visitorbadge.io/status?path=" + data.path}>
              <img
                loading="lazy"
                className="inline-block"
                src={
                  "https://api.visitorbadge.io/api/visitors?path=" + data.path
                }
              />
            </a>{" - "}
            <a class="devlink" href={"/redirect?url="+data.url} target="_blank">Dev Community</a>
          </span>
          <hr />
          <article
            dangerouslySetInnerHTML={{ __html: data.body_html }}
          ></article>
          <div className="comments"></div>
        </div>
        <div className="sidebar">
          {await filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}

          <button className="btn" id="load_more" onclick="getMorePosts()">
            Load More Posts
          </button>
        </div>

      </main>
      <div class="dots flex justify-between overflow-hidden">
          {await filteredArticles2.map((article) => (
            <span>
              {" "}
              <Link href={`${article.path}`}>.</Link>
            </span>
          ))}
        </div>

      <Footer />
    </>
  );
};

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
        <p className="text-gray-200 small mb-4">{article.tag_list.join(", ")}</p>
      </Link>{" "}
    </div>
  );
}
