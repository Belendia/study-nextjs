// catch all for api requests
// By default catch all roughts i.e. [...params].js will not handle any requests with out parameters.
// If you delete index.js in api and navigate to http://localhost:3000/api you will get a 404.
// But if you rename [...params].js to [[...params]].js you will get a 200. However, req.query.params is undefined.
// Depending on your requirements, you many have catchall [[...params]].js or [...params].js or optional catch all [...params].js routes.

export default function handler(req, res) {
  const params = req.query.params;
  console.log(params);
  // http://localhost:3000/api/1/2/3
  // returns
  // {"params":["1","2","3"]}
  res.status(200).json({
    params,
  });
}
