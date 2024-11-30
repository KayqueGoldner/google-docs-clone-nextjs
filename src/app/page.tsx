import Link from "next/link";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      Click
      <Link href="/documents/123" className="px-1 text-blue-500 underline">
        here
      </Link>
      to go to document id
    </div>
  );
};

export default Home;
