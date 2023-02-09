import Head from "next/head";

const CONFIG = {
  title: "Angeline Vozza (angeline_illustrations)",
  tagline: "Présentation",
  description: "Angeline illustrations, réalisation de logo, carte de visite, flyer, et tout support de communication pour votre entreprise",
  image: "/home-illustration.svg",
};

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  noindex?: boolean;
  ogTitle?: string;
}

const SEO = ({ title, description, image, noindex, ogTitle }: SEOProps) => {
  const pageTitle = title ? `${CONFIG.title} | ${title}` : `${CONFIG.title} | ${CONFIG.tagline}`;
  const pageDesc = description || CONFIG.description;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle || pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:site_name" content={CONFIG.title} />
      <meta property="og:image" content={image || CONFIG.image} />
      {noindex && <meta name="robots" content="noindex, follow" />}
    </Head>
  );
};

export default SEO;
