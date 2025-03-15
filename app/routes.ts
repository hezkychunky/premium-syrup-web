import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about-us", "routes/about-us.tsx"),
  route("product-knowledge", "routes/product-knowledge.tsx"),
  route("faq", "routes/faq.tsx"),
  route("contact-us", "routes/contact-us.tsx"),
  route("news", "routes/news.tsx"),
  route("*", "routes/not-found-page.tsx"),
] satisfies RouteConfig;
