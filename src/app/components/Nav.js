import Link from "next/link";
export default () => {
    return (
        <nav>
    <Link href="../">
      <div className="logo animated-border">
        Blog<span style={{ color: "tomato" }}>X</span>
      </div>
    </Link>
    <ul>
      <li>
        <Link href="/devart">About</Link>
      </li>
      <li>
        <a href="/api/sitemap">Sitemap</a>
      </li>
      {/* <li>
        <a href="/sh20raj">SH20RAJ</a>
      </li> */}
      {/* <li>
        <a href="#">Account</a>
      </li> */}
    </ul>

  </nav>
    );
}