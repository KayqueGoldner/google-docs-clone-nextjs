import Link from "next/link";

import { Navbar } from "./navbar";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="fixed left-0 right-0 top-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-16">
        Click
        <Link href="/documents/123" className="px-1 text-blue-500 underline">
          here
        </Link>
        to go to document id
      </div>
    </div>
  );
};

export default Home;
