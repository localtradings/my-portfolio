import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-slate-950 text-white"
      id="home"
    >
      <video
        aria-hidden="true"
        autoPlay
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="/landing-background.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(2,6,23,0.95)_0%,_rgba(2,6,23,0.82)_42%,_rgba(2,6,23,0.38)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />

      <div className="relative mx-auto grid min-h-screen max-w-6xl items-center px-5 pb-16 pt-28">
        <div className="max-w-3xl animate-rise">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-300">
            Bachelor of Science in Computer Science
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] sm:text-7xl lg:text-8xl">
            Lance Ian Leanillo
          </h1>
          <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-slate-200 sm:text-xl">
            Third-year Computer Science student at Central Philippine University
            building practical web apps, digital tools, and game experiments.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#projects" variant="secondary">
              View Projects
            </Button>
            <Button href="#contact" variant="outline">
              Contact Me
            </Button>
          </div>
          <div className="mt-12 grid max-w-2xl grid-cols-3 border-y border-white/15 ">
          </div>
        </div>
      </div>
    </section>
  );
}
