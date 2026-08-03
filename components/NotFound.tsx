import { Link } from "react-router-dom";
import "./NotFound.css";
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
          we're lost,
          <br/>
          back to{" "}
            <Link to="/experiment" className="underline">
            work
            </Link>
            <br/>
            :))
        </p>

         <div className="relative mx-auto mt-12 w-[230px] aspect-[230/190]">
            <img
                src="/images/body.svg"
                alt=""
                className="absolute inset-0 w-full h-full"
            />

            <img
                src="/images/tail.svg"
                alt=""
                className="absolute inset-0 w-full h-full tail"
            />
            </div>
    
      </div>
    </main>
  );
}