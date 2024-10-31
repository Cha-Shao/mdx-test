import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Link href="/my-mdx-page" className="underline">
        Navigating to the
        <code className="border rounded bg-gray-100">
          /my-mdx-page
        </code>
      </Link>
      <br />
      <Link href={'https://nextjs.org/docs/14/app/building-your-application/configuring/mdx'} className="underline">
        Doc
      </Link>
    </div>
  );
}
