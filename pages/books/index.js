// Preview data is useful when you have a CMS as part of your website/application.

function Books({ data }) {
  return <h1 className="content">{data}</h1>;
}

export default Books;

export async function getStaticProps(context) {
  // If preview mode is enabled, getStaticProps will run every time there is a request
  // instead of running build time only even after the application is built and deployed.
  // To understand more refer to: https://www.youtube.com/watch?v=BYvH0G02uuI&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=62

  // If preview mode is enabled, the context.preview variable will be set to true.
  // To enable the preivew mode access the following API:
  // http://localhost:3000/api/preview?redirect=/books
  // The API will enable the preivew mode and redirect the user to the URL specified in the query string. i.e. /books
  // To disable the preview mode access the following API:
  // http://localhost:3000/api/disable-preview
  console.log("Running getStaticProps", context.previewData);
  return {
    props: {
      data: context.preview ? "List of draft books" : "List of published books",
    },
  };
}
