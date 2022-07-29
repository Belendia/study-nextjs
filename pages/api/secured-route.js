import { getSession } from "next-auth/react";

// this is a secured route.
// if you are not logged in, you will get a 401 response.

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    res.status(401).json({ error: "Unauthenticated user" });
  } else {
    res.status(200).json({ message: "Hello from a secure route!", session });
  }
};

export default handler;
