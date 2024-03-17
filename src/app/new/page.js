import Head from 'next/head';

export default function MyPage() {
  return (
    <>
      <Head>
        <title>My Page Title</title>
        <meta name="description" content="My page description" />
        {/* Add other meta tags here */}
      </Head>
      {/* Rest of your page content */}
    </>
  );
}