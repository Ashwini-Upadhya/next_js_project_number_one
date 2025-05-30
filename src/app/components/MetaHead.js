import Head from "next/head";

const MetaHead = ({ meta }) => (
  <Head>
    <title>{meta?.title}</title>
    <meta name="description" content={meta?.description} />
    {/* Add more tags if needed */}
  </Head>
);

export default MetaHead;
