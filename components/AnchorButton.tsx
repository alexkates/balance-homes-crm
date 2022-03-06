import Link from "next/link";

export type AnchorButtonProps = {
  href: string;
  children: React.ReactNode;
};

export default function ({ href, children }: AnchorButtonProps) {
  return (
    <Link href={href}>
      <a className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
        {children}
      </a>
    </Link>
  );
}
