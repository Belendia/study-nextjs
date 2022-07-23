// catch all routes
import { useRouter } from "next/router";

function Doc() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);

  // http://localhost:3000/docs/[...params]
  // http://localhost:3000/docs/param1/param2/param3/...
  if (params.length === 2) {
    return (
      <h1>
        Viewing docs for feature {params[0]} and concept {params[1]}
      </h1>
    );
  } else if (params.length === 1) {
    return <h1>Viewing docs for feature {params[0]}</h1>;
  }

  return <h1>Docs Home Page</h1>;
}

export default Doc;
