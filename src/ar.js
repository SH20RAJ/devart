export default async function getServerSideProps() {
    try {
      const response = await fetch('https://dev.to/api/articles');
      const articles = await response.json();
      return {
        props: {
          articles,
        },
      };
    } catch (error) {
      console.error('Error fetching articles:', error);
      return {
        props: {
          articles: [],
        },
      };
    }
  }