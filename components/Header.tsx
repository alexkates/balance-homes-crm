import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Header: React.FC = () => {
  const { data: session } = useSession();

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
          <Link href="/todo">
            <a>Todos</a>
          </Link>
          <Link href="/todo/create">
            <button>
              <a>Create</a>
            </button>
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
