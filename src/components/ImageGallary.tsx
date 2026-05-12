import {motion, useReducedMotion} from "framer-motion";
import {useMemo} from "react";

type propType = {
  imageArray: string[];
};

type GalleryCardData = {
  image: string;
  title: string;
  spanClassName: string;
  accentClassName: string;
};

const gridSpans = [
  "col-span-2 row-span-2 md:col-span-3 lg:col-span-5 lg:row-span-2 ",
  "col-span-3 row-span-1 sm:col-span-1 lg:col-span-3",
  "col-span-2 row-span-1 sm:col-span-2 lg:col-span-4",
  "col-span-1 row-span-1 sm:col-span-1 lg:col-span-3",
  "col-span-1 row-span-2 sm:col-span-1 lg:col-span-4 ",
  "col-span-2 row-span-1 sm:col-span-2 lg:col-span-4 ",
  "col-span-2 row-span-1 sm:col-span-2 lg:col-span-4 ",
];

const accentColors = [
  "from-amber-300/75 via-black/35 to-black/90",
  "from-slate-200/75 via-black/35 to-black/90",
  "from-orange-300/75 via-black/35 to-black/90",
  "from-zinc-300/75 via-black/35 to-black/90",
  "from-yellow-200/75 via-black/35 to-black/90",
  "from-stone-200/75 via-black/35 to-black/90",
];

const GalleryCard = ({
  image,
  title,
  spanClassName,
  accentClassName,
}: GalleryCardData) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className={`group relative overflow-hidden rounded-[1.35rem]  border border-white/30 bg-black/25 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ${spanClassName}`}
      initial={{opacity: 0, y: 36}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.25}}
      transition={{duration: 0.7, ease: [0.22, 1, 0.36, 1]}}
      whileHover={reduceMotion ? undefined : {scale: 1.015}}
    >
      <div className="relative h-full min-h-56 overflow-hidden sm:min-h-64 lg:min-h-72">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      

        <motion.div
          className={`absolute inset-0 bg-linear-to-t ${accentClassName}`}
          initial={reduceMotion ? {y: 0} : {y: "100%"}}
          whileInView={reduceMotion ? {y: 0} : {y: "-100%"}}
          viewport={{once: true, amount: 0.4}}
          transition={{duration: 1, ease: [0.76, 0, 0.24, 1]}}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_42%)] opacity-90" />

        <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5">
          <p className="max-w-[16rem] text-xs font-semibold uppercase tracking-[0.28em] text-white/75">
            {title}
          </p>
        </div>
      </div>
    </motion.article>
  );
};

const GalleryGrid = ({imageArray}: propType) => {
  const cards = useMemo<GalleryCardData[]>(() => {
    return imageArray.map((image, index) => ({
      image,
      title: `Gallery image ${index + 1}`,
      spanClassName: gridSpans[index % gridSpans.length],
      accentClassName: accentColors[index % accentColors.length],
    }));
  }, [imageArray]);

  if (cards.length === 0) {
    return (
      <div className="mx-auto flex min-h-72 w-full max-w-7xl items-center justify-center rounded-3xl    border-white/10 bg-black/30 px-6 text-center text-sm uppercase tracking-[0.3em] text-white/45">
        No images to display
      </div>
    );
  }

  return (
    <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
      <div className="p-2 gap-2 grid auto-rows-[160px] lg:auto-rows-[190px] lg:grid-cols-12 lg:gap-4">
        {cards.map((card) => (
          <GalleryCard
            key={card.title}
            image={card.image}
            title={card.title}
            spanClassName={card.spanClassName}
            accentClassName={card.accentClassName}
          />
        ))}
      </div>
    </div>
  );
};

export const ImageGallary = ({imageArray}: propType) => {
  return <GalleryGrid imageArray={imageArray} />;
};
