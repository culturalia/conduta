interface WaveDividerProps {
  /** Color of the NEXT section (fills the wave shape) */
  color?: string;
  /** Background color of the PREVIOUS section (fills above the wave) */
  bgColor?: string;
  flip?: boolean;
}

export default function WaveDivider({
  color = "#FFFFFF",
  bgColor = "transparent",
  flip = false,
}: WaveDividerProps) {
  return (
    <div
      style={{
        background: bgColor,
        lineHeight: 0,
        transform: flip ? "scaleY(-1)" : undefined,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", width: "100%", height: "clamp(32px, 4vw, 56px)" }}
      >
        <path
          d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,56 L0,56 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
