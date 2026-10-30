import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Estime Vangu",
    short_name: "Estime Vangu",
    description: "Portfolio · Estime Vangu — développeur frontend & produit à Bruxelles.",
    start_url: "/home",
    display: "standalone",
    background_color: "#f5f6f8",
    theme_color: "#2a3342",
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
