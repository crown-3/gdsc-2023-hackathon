import { StarSvg } from "../assets/Svgs";

export default function ThreeStars() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "center",

        marginBottom: "40px",
        marginTop: "80px",
      }}
    >
      <div
        style={{
          width: "18px",
          height: "18px",
        }}
      >
        <StarSvg />
      </div>
      <div
        style={{
          width: "35px",
          height: "35px",
        }}
      >
        <StarSvg />
      </div>
      <div
        style={{
          width: "18px",
          height: "18px",
        }}
      >
        <StarSvg />
      </div>
    </div>
  );
}
