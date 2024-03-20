export default () => {
    return (
        <nav>
    <a href="../">
      <div className="logo">
        Blog<span style={{ color: "tomato" }}>X</span>
      </div>
    </a>
    <ul>
      <li>
        <Link href="/devart">About</Link>
      </li>
      <li>
        <a href="/api/sitemap">Sitemap</a>
      </li>
      <li>
        <a href="/sh20raj">SH20RAJ</a>
      </li>
      {/* <li>
        <a href="#">Account</a>
      </li> */}
    </ul>

  </nav>
    );
}