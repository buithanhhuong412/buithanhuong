import { Link } from "react-router-dom";
import "./NotFound.css";

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

         <div className="relative mx-auto mt-48 w-[360px] h-[240px]">

            {/* Background */}
            <div className="absolute inset-0 flex items-center justify-center">
                <img
                src="/images/coca_bg.svg"
                alt=""
                className="w-full h-auto scale-[2]"
                />
            </div>

            {/* Dog */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[184px] aspect-[230/190] dog cursor-grab">
                <img
                    src="/images/coca_body.svg"
                    alt=""
                    className="absolute inset-0 w-full h-full"
                />

                <img
                    src="/images/coca_tail.svg"
                    alt=""
                    className="absolute inset-0 w-full h-full tail"
                />
                </div>
            </div>

            </div>
      </div>
    </main>
  );
}