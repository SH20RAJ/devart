export default function sitemap() {
    return [
      {
        url: 'https://dev-art.vercel.app/',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://dev-art.vercel.app/sh20raj',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://dev-art.vercel.app/benharper',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
    ]
  }