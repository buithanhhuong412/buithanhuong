import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main 
    className="flex h-screen w-screen items-center justify-center bg-[#faf7f3]">
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
          <br />
          we're lost :))
          <br/>
          back to{" "}
            <Link
            to="/experiment"
            className="underline underline-offset-2 hover:opacity-60 transition"
            >
            work
            </Link>
            .
        </p>
    
      </div>
    </main>
  );
}