import Head from "next/head";
import Footer from "../components/Footer";
import Nav from "../components/Nav"

let metadata = {
    title: "Article",
    description: 'Article Description',
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: 'Article Title',
      description: 'Article Description',
      images: [
        {
          url: 'https://example.com/cover-image.jpg',
          width: 800,
          height: 600,
          alt: 'Article Cover Image',
        },
      ],
      type: 'article',
      article: {
        publishedTime: '2023-04-01T00:00:00Z',
        modifiedTime: '2023-04-02T00:00:00Z',
        authors: ['https://example.com/authors/john-doe'],
        tags: ['tag1', 'tag2', 'tag3'],
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Article Title',
      description: 'Article Description',
      images: ['https://example.com/cover-image.jpg'],
    },
    jsonLd: [
      {
        type: 'Article',
        headline: 'Article Title',
        description: 'Article Description',
        datePublished: '2023-04-01T00:00:00Z',
        dateModified: '2023-04-02T00:00:00Z',
        author: {
          type: 'Person',
          name: 'John Doe',
          url: 'https://example.com/authors/john-doe',
        },
        publisher: {
          type: 'Organization',
          name: 'Acme',
          url: 'https://example.com',
          logo: {
            url: 'https://example.com/logo.jpg',
            width: 60,
            height: 60,
          },
        },
        image: {
          url: 'https://example.com/cover-image.jpg',
          width: 800,
          height: 600,
        },
        keywords: ['tag1', 'tag2', 'tag3'],
      },
    ],
  };
  

  


export default async ({params}) => {
    const api = `https://dev.to/api/articles/${params.slug[0]}/${params.slug[1]}`;
    const res = await fetch(api);
    const data = await res.json();
    const { title, description, cover_image, tag_list, reading_time_minutes, public_reactions_count } = data;
    metadata.title = title;
    metadata.description = description;
    metadata.openGraph.title = title;
    metadata.openGraph.description = description;
    metadata.openGraph.images[0].url = cover_image;
    // metadata.article.publishedTime = description;
    // metadata.article.modifiedTime = description;
    metadata.description = description;
    metadata.twitter.title = title;
    metadata.twitter.description = description;
    metadata.twitter.images[0] = cover_image;
    metadata.description = description;
    metadata.description = description;



    
    return (
    <>
  <Nav/>
  {/* <link rel="stylesheet" href="https://dev.to/assets/crayons-132fd5353a6887f948f908fecf2c183d4019983fae2c184971fb9deb4e930bfb.css" /> */}
  <main>
    <div className="postcontainer">
        <h2 id="title">{data.title}</h2>
        <article dangerouslySetInnerHTML={{ __html: data.body_html }} >
        </article>
      <div className="comments"></div>
    </div>
    <div className="sidebar">
      <div className="toc">
        <h1>Table of contents</h1>
        <ul>
          <li>Practices that contribute to unused CSS</li>
          <li>Frameworks and libraries</li>
          <li>Continuous changes</li>
          <li>How to manually remove unused CSS</li>
          <li>PurifyCSS</li>
          <li>UnCSS</li>
          <li>CleanCSS</li>
          <li>Tabifier</li>
          <li>PurgeCSS</li>
          <li>Conclusion</li>
          <li>LogRocket Galileo logo</li>
          <li>Introducing Galileo AI</li>
          <li>
            LogRocket’s Galileo AI watches every session, surfacing impactful
            user struggle and key behavior patterns.
          </li>
          <li>READ THEBLOG POST</li>
        </ul>
      </div>
      <div className="card">
        <a href="#">
          <img
            src="https://cdn.discordapp.com/attachments/1209460718370553896/1213471682380169266/logo.png?ex=65f59892&is=65e32392&hm=8c77f629a48345775c03ef2eb99270968528bf42f5a1388fffea38213b69482f&"
            alt="Image"
            srcSet=""
          />
          <div className="card-title">
            Sample POST 1 - Title of the post from BlogX
          </div>
        </a>
      </div>
      <div className="card">
        <a href="#">
          <img src="https://placehold.co/600x400" alt="Image" srcSet="" />
          <div className="card-title">
            Sample POST 2 - Title of the post from BlogX
          </div>
        </a>
      </div>
      <div className="card">
        <a href="#">
          <img src="https://placehold.co/600x400" alt="Image" srcSet="" />
          <div className="card-title">
            Sample POST 3 - Title of the post from BlogX
          </div>
        </a>
      </div>
      <div className="card">
        <a href="#">
          <img src="https://placehold.co/600x400" alt="Image" srcSet="" />
          <div className="card-title">
            Sample POST 4 - Title of the post from BlogX
          </div>
        </a>
      </div>
      <div className="card">
        <a href="#">
          <img src="https://placehold.co/600x400" alt="Image" srcSet="" />
          <div className="card-title">
            Sample POST 5 - Title of the post from BlogX
          </div>
        </a>
      </div>
      <div className="card">
        <a href="#">
          <img src="https://placehold.co/600x400" alt="Image" srcSet="" />
          <div className="card-title">
            Sample POST 6 - Title of the post from BlogX
          </div>
        </a>
      </div>
      <button className="btn" id="load_more" onclick="getMorePosts()">
        Load More Posts
      </button>
    </div>
  </main>
  <Footer/>
</>)
}

export {metadata};