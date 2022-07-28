import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

function Home() {
  const router = useRouter();
  const { data: session } = useSession();

  const handleClick = () => {
    console.log("Placeing your order");
    router.push("/product");
    // or
    // router.replace("/product");
  };

  return (
    <div>
      <h1>Home Page</h1>
      {session ? <h5>Welcome {session.user.name}</h5> : ""}
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <br />
      <Link href="/product">
        <a>Products</a>
      </Link>
      <br />
      <Link href="/posts">
        <a>Posts</a>
      </Link>
      <br />
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}

export default Home;
