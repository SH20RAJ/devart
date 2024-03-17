import Nav from "../components/Nav"
export default async ({params}) => {
    const api = `https://dev.to/api/articles/${params.slug[0]}/${params.slug[1]}`;
    const res = await fetch(api);
    const data = await res.json();
  

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
  <footer>
    <b>
      @Blog<span style={{ color: "tomato" }}>X</span>{" "}
    </b>{" "}
    | Created with ❤️ by <a href="http://github.com/sh20raj">@sh20raj</a>
  </footer>
</>)
}