import styles from "./styles.module.css";

type HairProps = {
  isHat: boolean;
  color: string;
};

const Hair = ({ isHat, color }: HairProps) => {
  return (
    <div
      style={{
        width: "100%",
        height: "30%",
        background: isHat
          ? `linear-gradient(to bottom, ${color} 80%, black 80%)`
          : color,
      }}
    />
  );
};

type EyesProps = {
  isGlasses: boolean;
  rotate: [number, number];
};

const Eyes = ({ isGlasses, rotate }: EyesProps) => {
  return (
    <div
      style={{
        position: "relative",
        height: "40%",
        width: "100%",
      }}
    >
      {/* GLASSES */}
      {isGlasses && (
        <div
          style={{
            position: "absolute",
            top: "40%",
            height: "20%",
            width: "100%",
            background: "black",
            borderTop: "1px solid grey",
            borderBottom: "1px solid grey",
          }}
        />
      )}

      {/* LEFT EYE */}
      <div
        style={{
          position: "absolute",
          left: "20%",
          top: "15%",
          height: "70%",
          background: isGlasses
            ? "black"
            : "radial-gradient(circle at 50% 60%, black 25%, white 25%)",
          borderRadius: "9999px",
          border: "1px solid grey",
          aspectRatio: "1/1",
          transform: isGlasses ? "scale(1.2)" : `rotate(${rotate[0]}deg)`,
        }}
      />

      {/* RIGHT EYE */}
      <div
        style={{
          position: "absolute",
          right: "20%",
          top: "15%",
          height: "70%",
          background: isGlasses
            ? "black"
            : "radial-gradient(circle at 50% 60%, black 25%, white 25%)",
          borderRadius: "9999px",
          border: "1px solid grey",
          aspectRatio: "1/1",
          transform: isGlasses ? "scale(1.2)" : `rotate(${rotate[1]}deg)`,
        }}
      />
    </div>
  );
};

type MouthProps = {
  variant: 1 | 2 | 3;
};

const Mouth = ({ variant }: MouthProps) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "30%",
      }}
    >
      <div
        style={{
          position: "absolute",
          height: "50%",
          width: "100%",
          top: "25%",
          background: `radial-gradient(circle at 50% ${
            (variant - 2) * 100 + 50
          }%, darkred 30%, transparent 30%)`,
        }}
      />
    </div>
  );
};

type CharacterProps = {
  name: string;
  colours?: string[];
};

const defaultColours = [
  "#ef476f",
  "#ffd166",
  "#06d6a0",
  "#118ab2",
  "#073b4c",
  "#000",
];

const Character = ({ name, colours = defaultColours }: CharacterProps) => {
  const randomBool = () => {
    return Math.random() > 0.5;
  };

  const randomDegree = () => {
    return Math.random() * 360;
  };

  const randomColour = () => {
    return colours[Math.floor(Math.random() * colours.length)];
  };

  return (
    <div className={styles.character}>
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          background: randomColour(),
        }}
      >
        <Hair isHat={randomBool()} color={randomColour()} />
        <Eyes
          isGlasses={randomBool()}
          rotate={[randomDegree(), randomDegree()]}
        />
        <Mouth variant={Math.ceil(Math.random() * 3) as 1 | 2 | 3} />
      </div>
      <p
        style={{
          textAlign: "center",
          padding: "0.25rem",
          background: randomColour(),
        }}
      >
        {name}
      </p>
    </div>
  );
};

export default Character;
