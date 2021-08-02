import Head from "next/head";
import { blogPosts } from "../lib/data";
import Link from "next/link";
import { format, parseISO } from "date-fns";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="space-y-4">
        {blogPosts.map((item) => (
          <BlogListItem key={item.slug} {...item} />
        ))}
      </div>
    </div>
  );
}

function BlogListItem({ slug, title, date, content }) {
  const sanitizeDate = format(parseISO(date), "MMMM do, uuu");

  return (
    <div
      className="border border-grey-100 shadow hover:shadow-md 
    hover:border-black-300 rounded-md p-4 transition duration-200 ease-in"
    >
      <div>
        <div>
          <Link href={`/blog/${slug}`}>
            <a className="font-bold">{title}</a>
          </Link>
        </div>
        <div className="text-gray-600 text-xs">{sanitizeDate}</div>
        <div>{content}</div>
      </div>
    </div>
  );
}
