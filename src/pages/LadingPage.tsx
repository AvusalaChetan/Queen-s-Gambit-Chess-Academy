const LadingPage = () => {
  return (
    <main className="min-h-[calc(100vh-70px)] overflow-hidden bg-(--surface) text-(--on_surface)">
      <div className="relative isolate">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
            style={{backgroundImage: "url('/images/hero.png')"}}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(0,0,0,0.15),rgba(0,0,0,0.7)_58%,rgba(0,0,0,0.88))]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black/70 to-transparent" />
        </div>

        <section className="relative z-10 flex min-h-[calc(100vh-70px)] items-center px-6 py-14 sm:px-10 lg:px-14">
          <div className="grid w-full gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-end">
            <section className="max-w-2xl">
              <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white/70 backdrop-blur-md">
                Queen&apos;s Gambit Chess Academy
              </p>

              <h1 className="max-w-xl text-5xl font-serif  leading-[0.9] tracking-tighter text-white sm:text-6xl lg:text-[5.25rem]">
                Master the
                <span className="mt-2 block font-serif italic text-(--primary) tracking-[-0.3rem]">
                  Game of Chess
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
                Elite strategy, computational precision, and the weight of
                tradition. Elevate your tactical awareness with world-class
                grandmaster coaching.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <button className="btn-queen min-w-55 px-7 py-4 text-sm font-bold shadow-[0_18px_50px_rgba(242,202,80,0.18)] transition-transform duration-300 hover:-translate-y-0.5">
                  Book a Free Trial Class
                </button>
                <button className="btn-knight min-w-55 px-7 py-4 text-sm font-semibold text-white/88 transition-colors duration-300 hover:bg-white/10">
                  Explore Philosophy
                </button>
              </div>
            </section>

            <aside className="absolute bottom-0 right-0 h-fit w-80 py-2 pr-8 hidden lg:block">
              <div className="glass max-w-sm rounded-md bg-black/40 p-6 text-white shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-tight text-blue-200/65">
                    Engine Evaluation
                  </p>
                  <p className="text-sm font-semibold text-[#9fbaff]">+2.4</p>
                </div>

                <div className="mt-5 h-1.5 rounded-full bg-white/10">
                  <div className="h-1.5 w-[78%] rounded-full bg-[#b7cbff]" />
                </div>

                <blockquote className="mt-6 text-sm leading-7 italic text-white/68">
                  “The position favors White due to superior control of the
                  central files and a better-coordinated knight pair.”
                </blockquote>
              </div>
            </aside>
          </div>
        </section>
      </div>

      <section className="bg-(--surface) px-6 py-20 sm:px-10 lg:px-14">
        <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute left-0 top-0 z-10 h-16 w-16 border-l-3 border-t-3 border-(--primary)/85 lg:h-50 lg:w-50" />
            <div className="absolute bottom-0 right-0 z-10 h-16 w-22 border-b-22 border-r-22 rounded-xl border-(--primary)/85 lg:h-25 lg:w-30" />

            <div className="relative aspect-3/4 overflow-hidden bg-transparent p-6">
              <img
                src="/images/founder.png"
                alt="Grandmaster Julian Vance"
                className="h-full w-full object-cover object-center grayscale hover:grayscale-0 contrast-125 transition-all duration-300"
              />
            </div>
          </div>

          <aside className="flex flex-col gap-8">
            <div>
              <p className="mb-2 text-sm uppercase tracking-widest text-white/60">
                Founded by
              </p>
              <h2 className="font-serif text-5xl font-normal tracking-tight lg:text-6xl">
                <span className="block text-white">Grandmaster</span>
                <span className="block text-(--primary)">Dhinush Kumar</span>
              </h2>
            </div>

            {/* Description paragraphs */}
            <div className="space-y-4 text-base leading-relaxed text-white/75 sm:text-lg">
              <p>
                With over 10 years of experience competing at the highest levels
                of professional play, Coach Vance has dedicated his career to
                demystifying the complexities of the mid-game and endgame
                transition.
              </p>
              <p>
                His methodology combines the rigorous computational analysis of
                modern engines with the intuitive, psychological depth of
                classical grandmaster theory. Every student receives a bespoke
                training regimen designed to sharpen tactical vision and
                long-term strategic planning.
              </p>
            </div>

            {/* Stats section */}
            <div className="flex gap-12 border-t border-white/10 pt-8">
              <div>
                <p className="text-4xl font-serif font-normal text-(--primary) sm:text-5xl">
                  10<span className="text-3xl">+</span>
                </p>
                <p className="mt-2 text-xs uppercase tracking-widest text-white/45">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-4xl font-serif font-normal text-(--primary) sm:text-5xl">
                  500<span className="text-3xl">+</span>
                </p>
                <p className="mt-2 text-xs uppercase tracking-widest text-white/45">
                  Students Mentored
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section></section>
    </main>
  );
};

export default LadingPage;
