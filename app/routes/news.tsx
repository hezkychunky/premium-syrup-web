import NewsCard from "~/components/news-card";
import type { Route } from "./+types/news";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const lorem = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam alias, natus, sequi velit rerum soluta neque impedit cum at eaque officia blanditiis deserunt labore ipsa distinctio ipsam doloribus veniam unde
Et quaerat perspiciatis eum quam temporibus sapiente, sequi quidem aspernatur quis? Labore vero corrupti fugiat deleniti, sint temporibus ipsa? Incidunt nulla natus animi reiciendis magnam voluptates adipisci officia blanditiis dolorem.
Sequi omnis quod at voluptates, eius qui ex debitis. Consequuntur ullam iure vitae sit doloremque totam quos, explicabo quo eius ad enim recusandae voluptatibus magni modi voluptates, obcaecati laborum laudantium?
Ratione ea reiciendis maxime ex, odio tempore mollitia necessitatibus impedit eum error suscipit consequatur expedita quidem aliquam. Iusto esse dolore nihil voluptate magnam maiores temporibus! Corrupti alias aliquam architecto veritatis?
Labore animi rerum quisquam eius`;

export default function News() {
  return (
    <div className="flex flex-grow flex-col items-center lg:gap-4 lg:items-start lg:px-28 px-12 pt-48 text-3xl font-light">
      <NewsCard
        image={"/samples/other-content.jpg"}
        title="IFBEC NTB Gandeng Premium Syrup sebagai Sponsor Utama, Gelar Barista Competition 2024 di Mataram
"
        content={lorem}
      />
      <NewsCard
        image={"/samples/other-content.jpg"}
        title="Royal Malioboro by Aston Gelar Kompetisi Seni Memahat Buah dan Coffee Mixology Dalam Rangka Ulang Tahun Ke-4

"
        content={lorem}
      />
    </div>
  );
}
