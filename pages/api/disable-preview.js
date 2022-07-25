// Preview data is useful when you have a CMS as part of your website/application.
export default function handler(req, res) {
  // This will disable the preview mode and removes the two cookies that were created by Next.js.
  // The name of those cookies that are cleared from the broswer are "__next_preview_data" and "__prerender_bypass".

  // Access this API in the following way.
  // http://localhost:3000/api/disable-preview

  // To understand more refer to: https://www.youtube.com/watch?v=BYvH0G02uuI&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=62

  res.clearPreviewData();
  res.end("Preview mode disabled");
}
