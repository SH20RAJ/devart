import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Link from "next/link";
// import { metadata } from "../layout";

let metadata2 = {
  title: "Article",
  description: "Article Description",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Article Title",
    description: "Article Description",
    images: [
      {
        url: "https://example.com/cover-image.jpg",
        width: 800,
        height: 600,
        alt: "Article Cover Image",
      },
    ],
    type: "article",
    article: {
      publishedTime: "2023-04-01T00:00:00Z",
      modifiedTime: "2023-04-02T00:00:00Z",
      authors: ["https://example.com/authors/john-doe"],
      tags: ["tag1", "tag2", "tag3"],
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Article Title",
    description: "Article Description",
    images: ["https://example.com/cover-image.jpg"],
  },
  jsonLd: [
    {
      type: "Article",
      headline: "Article Title",
      description: "Article Description",
      datePublished: "2023-04-01T00:00:00Z",
      dateModified: "2023-04-02T00:00:00Z",
      author: {
        type: "Person",
        name: "John Doe",
        url: "https://example.com/authors/john-doe",
      },
      publisher: {
        type: "Organization",
        name: "Acme",
        url: "https://example.com",
        logo: {
          url: "https://example.com/logo.jpg",
          width: 60,
          height: 60,
        },
      },
      image: {
        url: "https://example.com/cover-image.jpg",
        width: 800,
        height: 600,
      },
      keywords: ["tag1", "tag2", "tag3"],
    },
  ],
};

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
  const {
    title,
    description,
    cover_image,
    social_image,
    user,
    tag_list,
    reading_time_minutes,
    readable_publish_date,
    public_reactions_count,
  } = data;
  metadata2.title = title;
  metadata2.description = description;
  metadata2.openGraph.title = title;
  metadata2.openGraph.description = description;
  metadata2.openGraph.images[0].url = cover_image || social_image;
  // metadata2.article.publishedTime = description;
  // metadata2.article.modifiedTime = description;
  metadata2.description = description;
  metadata2.twitter.title = title;
  metadata2.twitter.description = description;
  metadata2.twitter.images[0] = cover_image || social_image;
  metadata2.description = description;
  metadata2.description = description;

  const response = await fetch(
    `https://dev.to/api/articles/latest/?per_page=11&page=${generateRandomNumber(
      1,
      1000
    )}`
  );

  const data2 = await response.json();
  let filteredArticles = await data2;
  // console.log(data)

  const response2 = await fetch(
    `https://dev.to/api/articles/latest/?per_page=111&page=${generateRandomNumber(
      1,
      1000
    )}`
  );

  const data22 = await response2.json();
  let filteredArticles2 = await data22;
  // console.log(data2)

  return (
    <>
      <Nav />
      {/* <link rel="stylesheet" href="https://dev.to/assets/crayons-132fd5353a6887f948f908fecf2c183d4019983fae2c184971fb9deb4e930bfb.css" /> */}
      <main>
        <div className="postcontainer">
          <h2 id="title">{data.title}</h2>
          <span class="post-data">
            <Link href={"../" + data.user.username}>
              {" "}
              <img
                width={40}
                class="author-img"
                src={user.profile_image_90}
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
            </a>
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
              <Link href={`../..${article.path}`}>.</Link>
            </span>
          ))}
        </div>

      <Footer />
    </>
  );
};
let metadata = metadata2;
export { metadata };

function ArticleCard({ article }) {
  return (
    <div className="card">
      <Link href={`../..${article.path}`}>
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
