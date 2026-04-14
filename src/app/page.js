import Image from "next/image";

export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="">
          <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
          <p className="py-6">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the <br/>
            relationships that matter most.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
