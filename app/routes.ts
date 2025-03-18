import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  // route("about-us", "routes/about-us.tsx"),
  // route("product-knowledge", "routes/product-knowledge.tsx"),
  route("faq", "routes/faq.tsx"),
  route("contact-us", "routes/contact-us.tsx"),
  route("*", "routes/not-found-page.tsx"),
  //OUR STORY nested dynamic route
  ...prefix("our-story", [
    route("about-us", "./routes/about-us.tsx"),
    route("product-knowledge", "./routes/product-knowledge.tsx"),
  ]),
  //PRODUCTS nested dynamic route
  ...prefix("products", [
    index("./routes/products.tsx"),
    route(":category", "./routes/products-by-category.tsx"),
    route(":category/:product", "./routes/product.tsx"),
  ]),
  //RECIPES nested dynamic route
  ...prefix("recipes", [
    index("./routes/recipes.tsx"),
    route(":category", "./routes/recipes-by-category.tsx"),
    route(":category/:recipe", "./routes/recipe.tsx"),
  ]),
  //NEWS nested dynamic route
  ...prefix("news", [
    index("./routes/news.tsx"),
    route(":article", "./routes/news-article.tsx"),
  ]),
] satisfies RouteConfig;
