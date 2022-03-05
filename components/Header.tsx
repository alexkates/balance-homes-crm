import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Header: React.FC = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return null;
  }

  return (
    <nav>
      {!session && (
        <div>
          <Link href="/api/auth/signin">
            <a>Log in</a>
          </Link>
        </div>
      )}
      {session && (
        <div>
          <Link href="/customer">
            <a>Customers</a>
          </Link>
          <span>{session.user.name}</span>
          <button onClick={() => signOut()}>
            <a>Log out</a>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
