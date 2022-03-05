import Link from "next/link";
import { useRouter } from "next/router";

export type NavItemProps = {
  path: string;
  text: string;
};

export default function ({ text, path }: NavItemProps) {
  const router = useRouter();

  const isActive = path === router.pathname;

  const isActiveClasses = isActive
    ? "bg-blue-600 text-white"
    : "bg-white text-black";
  return (
    <div
      className={`flex flex-row items-center space-x-2 ${isActiveClasses} transition duration-200 hover:cursor-pointer px-5 rounded-md py-2 hover:bg-blue-600 hover:shadow-lg hover:text-white`}
    >
      <Link href={path}>
        <a className="w-full flex justify-center">{text}</a>
      </Link>
    </div>
  );
}
