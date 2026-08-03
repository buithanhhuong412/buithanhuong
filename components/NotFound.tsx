import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main 
    className="flex min-h-screen items-center justify-center bg-[#faf7f3]">
      <div className="text-center">
        <p className="font-body text-2xl">
          I walk this earth,
          <br />
          but not this path,
        </p>

        <Link
          to="/experiment"
          className="mt-8 inline-block font-body uppercase tracking-widest hover:opacity-60 transition"
        >
        back to work.
        </Link>
      </div>
    </main>
  );
}