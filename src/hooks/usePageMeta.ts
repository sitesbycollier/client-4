import { useEffect } from "react";

interface PageMetaOptions {
  title: string;
  description: string;
}

const SITE_NAME = "Hot Springs Music Connection";

export function usePageMeta({ title, description }: PageMetaOptions) {
  useEffect(() => {
    // Title
    document.title = `${title} | ${SITE_NAME}`;

    // Description
    let metaDesc = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // OG title
    let ogTitle = document.querySelector<HTMLMetaElement>(
      'meta[property="og:title"]',
    );
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = `${title} | ${SITE_NAME}`;

    // OG description
    let ogDesc = document.querySelector<HTMLMetaElement>(
      'meta[property="og:description"]',
    );
    if (!ogDesc) {
      ogDesc = document.createElement("meta");
      ogDesc.setAttribute("property", "og:description");
      document.head.appendChild(ogDesc);
    }
    ogDesc.content = description;

    // OG site name
    let ogSite = document.querySelector<HTMLMetaElement>(
      'meta[property="og:site_name"]',
    );
    if (!ogSite) {
      ogSite = document.createElement("meta");
      ogSite.setAttribute("property", "og:site_name");
      document.head.appendChild(ogSite);
    }
    ogSite.content = SITE_NAME;
  }, [title, description]);
}
