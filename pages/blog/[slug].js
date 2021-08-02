import Head from "next/head";
import { blogPosts } from "../../lib/data";
import { format, parseISO } from "date-fns";

export default function BlogPage({ title, date, content }) {
  const sanitizeDate = format(parseISO(date), "MMMM do, uuu");

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="border-b-2 border-gray-200 mb-4">
          <h2 className="text-3xl font-bold">{title}</h2>
          <div className="text-gray-600 text-md">{sanitizeDate}</div>
        </div>
        <div className="">{content}</div>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  console.log("Hi!", context);
  const { params } = context;
  return {
    props: blogPosts.find((item) => item.slug === params.slug), // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  return {
    paths: blogPosts.map((item) => ({
      params: {
        slug: item.slug,
      },
    })),
    fallback: false,
  };
}
