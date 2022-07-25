// Preview data is useful when you have a CMS as part of your website/application.
export default function handler(req, res) {
  // Access this API using the following URL so that you will make the getStaticProps in pages/books/index.js
  // run every time there is a request instead of running build time only even after the application is built and deployed.
  // We are running the getStaticProps in the pages/books/index.js because we specified /books as part of the query string as shown below.

  // http://localhost:3000/api/preview?redirect=/books
  // Next.js will create a cookies by the name "__next_preview_data" and "__prerender_bypass" and send them to the browser.

  // To understand more refer to: https://www.youtube.com/watch?v=BYvH0G02uuI&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=62

  res.setPreviewData({ user: "Belendia" });
  res.redirect(req.query.redirect);
}
