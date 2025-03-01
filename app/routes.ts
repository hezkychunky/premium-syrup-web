import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("faq", "routes/faq.tsx"),
  route("contact-us", "routes/contact-us.tsx"),
  route("news", "routes/news.tsx"),
] satisfies RouteConfig;
