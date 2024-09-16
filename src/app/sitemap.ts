import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [articlesRes, servicesRes, portfoliosRes] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/articles`),
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/services`),
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/portfolios`),
  ]);

  const [{ data: articles }, { data: services }, { data: portfolios }] =
    await Promise.all([
      articlesRes.json(),
      servicesRes.json(),
      portfoliosRes.json(),
    ]);

  const articleEntries = articles.map((article: any) => ({
    url: `${process.env.NEXT_PUBLIC_URL}/artikel/${article.id}`,
  }));

  const servicesEntries = services.map((service: any) => ({
    url: `${process.env.NEXT_PUBLIC_URL}/services/${service.id}`,
  }));

  const portfoliosEntries = portfolios.map((portfolio: any) => ({
    url: `${process.env.NEXT_PUBLIC_URL}/portfolios/${portfolio.id}`,
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_URL}/`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/artikel`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/layanan`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/portofolio`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/tentang-kami`,
    },
    ...portfoliosEntries,
    ...servicesEntries,
    ...articleEntries,
  ];
}
