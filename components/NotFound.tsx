import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main 
    className="flex min-h-screen items-center justify-center bg-[#faf7f3]">
      <div className="text-center">
        <p className="font-body"
         style={{
            fontSize: "18px",
            lineHeight: "1.4",
            margin: 0,
        }}
        >
          I walk this earth,
          <br />
          but not this path,
        </p>

        <Link
          to="/experiment"
          className="mt-8 inline-block font-body hover:opacity-60 transition"
          style={{
            fontSize: "18px",
            }}
        >
        back to work.
        </Link>
      </div>
    </main>
  );
}