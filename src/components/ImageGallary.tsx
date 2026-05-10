import {useState} from "react";

type propType = {
  imageArray: string[];
};

type HexagonType = {
  id: number;
  x: number;
  y: number;
};

type HexagonCellProps = {
  hex: HexagonType;
  image: string;
};

type HexagonGalleryProps = {
  imageArray: string[];
};
const ImageGallary = ({imageArray}: propType) => {
  console.log(imageArray);
  return <div className="w-full h-full mx-auto "></div>;
};

const HEX_SIZE = 230;
const HEX_GAP_X = 20;
const HEX_GAP_Y = 4;
const HEX_ROW_OFFSET = HEX_SIZE * 0.5 + HEX_GAP_X * 0.5;

const hexagons = [
  {id: 0, x: 0, y: 0},
  {id: 1, x: HEX_SIZE + HEX_GAP_X, y: 0},
  {id: 2, x: (HEX_SIZE + HEX_GAP_X) * 2, y: 0},
  {id: 3, x: HEX_ROW_OFFSET, y: HEX_SIZE * 0.82 + HEX_GAP_Y},
  {id: 4, x: -HEX_ROW_OFFSET, y: HEX_SIZE * 0.82 + HEX_GAP_Y},
  {
    id: 5,
    x: HEX_ROW_OFFSET + HEX_SIZE + HEX_GAP_X,
    y: HEX_SIZE * 0.82 + HEX_GAP_Y,
  },
  {id: 6, x: 0, y: (HEX_SIZE * 0.82 + HEX_GAP_Y) * 2},
  {id: 7, x: HEX_SIZE + HEX_GAP_X, y: (HEX_SIZE * 0.82 + HEX_GAP_Y) * 2},
  {id: 8, x: 2.1 * HEX_SIZE + HEX_GAP_X, y: (HEX_SIZE * 0.82 + HEX_GAP_Y) * 2},
  {id: 9, x: 2.2 * HEX_SIZE + HEX_ROW_OFFSET, y: HEX_SIZE * 0.83 + HEX_GAP_Y},
] satisfies HexagonType[];

const HexagonCell = ({hex, image}: HexagonCellProps) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const [onTap, setOnTap] = useState<boolean>(false);

  const size = HEX_SIZE;
  const hw = size / 2;
  const hh = size / 2;
  const clipId = `hex-clip-${hex.id}`;

  const clipPoints = [
    `${hw},0`,
    `${size},${hh * 0.5}`,
    `${size},${hh * 1.5}`,
    `${hw},${size}`,
    `0,${hh * 1.5}`,
    `0,${hh * 0.5}`,
  ].join(" ");

  const outlinePoints = [
    `${hw},2`,
    `${size - 2},${hh * 0.5}`,
    `${size - 2},${hh * 1.5}`,
    `${hw},${size - 2}`,
    `2,${hh * 1.5}`,
    `2,${hh * 0.5}`,
  ].join(" ");

  const baseStyle = {
    position: "absolute" as const,
    left: hex.x,
    top: hex.y,
    width: size,
    height: size,
    transition: "transform 0.3s ease, filter 0.3s ease, all 0.35s ease",
    transform: hovered ? "scale(1.06)" : "scale(1)",
    filter: hovered ? "brightness(1.12)" : "brightness(1)",
    zIndex: hovered ? 10 : 1,
    cursor: "pointer",
  };

  const expandedStyle = {
    position: "absolute" as const,
    left: "50%",
    top: "50%",
    transform: "translate(-60%,-50%)",
    width: "min(92vw, 980px)",
    height: "min(82vh, 720px)",
    zIndex: 30,
    borderRadius: 28,
    overflow: "hidden",
    background:
      "linear-gradient(180deg, rgba(18,18,18,0.88), rgba(10,10,10,0.96))",
    boxShadow: "0 30px 90px rgba(0, 0, 0, 0.58)",
    backdropFilter: "blur(22px)",
    WebkitBackdropFilter: "blur(22px)",
    margin: "auto",
  };

  return (
    <>
      <div
        style={onTap ? expandedStyle : baseStyle}
        className={onTap ? "z-30" : ""}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {onTap ? (
          <div className="relative h-full w-full overflow-hidden">
            <button
              type="button"
              aria-label="Close image preview"
              onClick={() => setOnTap(false)}
              className="absolute right-5 top-5 z-50 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/45 text-white shadow-[0_12px_32px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[#f2ca50]/70 hover:bg-black/70"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </svg>
            </button>
            <div className="absolute inset-x-0 top-0 z-10 h-24 bg-linear-to-b from-black/35 to-transparent" />
            <img
              src={image}
              alt={`Gallery ${hex.id}`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 z-10 h-28 bg-linear-to-t from-black/55 to-transparent" />
          </div>
        ) : (
          <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            onClick={() => setOnTap((current) => !current)}
          >
            <defs>
              <clipPath id={clipId}>
                <polygon points={clipPoints} />
              </clipPath>
            </defs>

            <image
              href={image}
              x="0"
              y="0"
              width={size}
              height={size}
              clipPath={`url(#${clipId})`}
              preserveAspectRatio="xMidYMid slice"
            />

            {/* Black outline */}
            <polygon
              points={outlinePoints}
              fill="none"
              stroke={hovered ? "#f2ca50" : "#404040"}
              strokeWidth="2.5"
              style={{transition: "stroke 0.3s ease"}}
            />
          </svg>
        )}
      </div>
    </>
  );
};

export const HexagonGallery = ({imageArray}: HexagonGalleryProps) => {
  const frameWidth = HEX_SIZE * 3 + HEX_GAP_X * 2 + HEX_ROW_OFFSET;
  //   const frameHeight:number = HEX_SIZE * 3 + HEX_GAP_Y * 2 * 0.82;

  const positionedHexagons = hexagons.map((hex) => ({
    ...hex,
    x: hex.x,
    y: hex.y,
  }));

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
      className="  "
    >
      <div
        style={{
          position: "relative",
          left: "10%",
          width: frameWidth,
          filter: "drop-shadow(0 20px 60px rgba(0, 0, 0, 0.8))",
        }}
        className=" h-[105%] "
      >
        {positionedHexagons.map((hex) => (
          <HexagonCell key={hex.id} hex={hex} image={imageArray[hex.id]} />
        ))}
      </div>
    </div>
  );
};

export default ImageGallary;
