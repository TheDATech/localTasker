import Link from "next/dist/client/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function Custom404() {
  return (
      <main className="text-center">
        <h1 className="mt-5 mb-3">Page not Found</h1>
        <p className="m-3"><Link href="/"><a><AiOutlineArrowLeft/>Back to Home page</a></Link></p>
      </main>
  );
}