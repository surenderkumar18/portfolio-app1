/**
 * To enable ISR in Next.js, you can use the getStaticProps function in
 * your page components and specify the revalidate option to indicate
 * the revalidation interval. Here's an example:
 */

/**
 * Incremental Static Regeneration (ISR) is a feature in Next.js that allows
 * you to update static content on your site without needing to rebuild the 
 * entire site. It enables you to revalidate specific pages at a specified 
 * interval, ensuring that the content remains up-to-date while minimizing 
 * build times and server load.

Here's how ISR works in Next.js:

Static Generation (SSG): Initially, Next.js generates static HTML pages for 
your site at build time using data fetched from APIs, databases, or other 
sources. These static pages are then served to users.
Revalidation: With ISR, Next.js allows you to specify how frequently you 
want to revalidate (update) the static pages. When a user requests a page 
that needs to be revalidated, Next.js serves the existing static page while 
simultaneously fetching new data in the background.
 */

export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();

  // Return data as props
  return {
    props: {
      data,
    },
    // Revalidate the page every 10 seconds
    revalidate: 10, // seconds
  };
}
