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
        marginTop: "-1px",
        marginBottom: "-1px",
        transform: flip ? "scaleY(-1)" : undefined,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", width: "100%", height: "clamp(24px, 3.5vw, 48px)" }}
      >
        <path
          d="M0,24 C360,48 720,0 1080,24 C1260,36 1380,20 1440,24 L1440,48 L0,48 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
