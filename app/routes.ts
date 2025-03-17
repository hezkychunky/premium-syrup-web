import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about-us", "routes/about-us.tsx"),
  route("product-knowledge", "routes/product-knowledge.tsx"),
  // route("products", "routes/products.tsx", [
  //   route(":category", "routes/products-by-category.tsx", [
  //     route(":product", "routes/product.tsx"),
  //   ]),
  // ]),
  route("faq", "routes/faq.tsx"),
  route("contact-us", "routes/contact-us.tsx"),
  route("news", "routes/news.tsx"),
  route("*", "routes/not-found-page.tsx"),
  ...prefix("products", [
    index("./routes/products.tsx"),
    route(":category", "./routes/products-by-category.tsx"),
    route(":category/:product", "./routes/product.tsx"),
  ]),
] satisfies RouteConfig;
