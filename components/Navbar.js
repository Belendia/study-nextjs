import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

// useSession hook is used to check if the user is signed in or not.

function Navbar() {
  const { data: session, status } = useSession();
  return (
    <nav className="header">
      <h1 className="logo">
        <a href="#">NextJSTut</a>
      </h1>
      {/* ${!session && loading ? "loading" : "loaded"} */}
      <ul className={`main-nav`}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>

        {!session && status === "unauthenticated" && (
          <li>
            <Link href="/api/auth/signin">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  // we inserted the parameter "github" because we only have one
                  // provider and we don't want to see the default signin page.
                  signIn("github");
                }}
              >
                Sign In
              </a>
            </Link>
          </li>
        )}

        {session && status === "authenticated" && (
          <li>
            <Link href="/api/auth/signout">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign Out
              </a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
