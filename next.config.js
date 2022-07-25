/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => {
    return [
      {
        // This is a permanent redirect from /about page to / i.e. home page.
        // This is useful when you change the url of the about page like about-x-company and make users to
        // redirect permanently to the new url if they bookmark the old URL. In this case destination will be /about-x-company.
        // Since the redirection will take place in the server, users will not know about it, except that you will see
        // a status of 308 (permanent redirect) in the network tab of the google chrome developer tools for advanced users.
        // The status code doesn't matter for the user. But it matters for the crowllers like google.
        source: "/about",
        destination: "/",
        // If we make permanent to false, we will see a status of 307 (temporary redirect) in the network tab of the google chrome developer tools.
        permanent: true,
      },
      {
        source: "/old-blog/:id",
        destination: "new-blog/:id",
        permanent: true,
      },
      // There is also a wildcard and regex path matching for redirects.
      // We can also extract cookies, query params, etc. from the headers and recirect accordingly.
    ];
  },
};

module.exports = nextConfig;
