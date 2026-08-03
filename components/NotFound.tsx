import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main 
    className="flex min-h-screen items-center justify-center bg-[#faf7f3]">
      <div className="text-center">
        <p className="font-body"
         style={{
            fontSize: "16px",
            lineHeight: "1.4",
            margin: 0,
        }}
        >
          I walk this earth,
          <br />
          but not this path,
          <br />
          we're lost :)),
          <br/>
          back to{" "}
            <Link to="/experiment" className="underline">
            work
            </Link>
        </p>

         <img
          src="/images/Frame 7.svg"
          alt="404 illustration"
          className="mx-auto mt-32 w-48"
        />
    
      </div>
    </main>
  );
}