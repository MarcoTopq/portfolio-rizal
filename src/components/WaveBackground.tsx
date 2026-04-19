export default function WaveBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-30"
      viewBox="0 0 1512 906"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      {Array.from({ length: 18 }).map((_, i) => (
        <path
          key={i}
          d={`M-100,${300 + i * 18} C200,${200 + i * 18 + Math.sin(i) * 60} 400,${500 + i * 18 - Math.cos(i) * 80} 700,${350 + i * 18} C1000,${200 + i * 18 + Math.sin(i + 2) * 70} 1200,${450 + i * 18} 1612,${300 + i * 18}`}
          stroke="#c0c0c0"
          strokeWidth="1.2"
          fill="none"
        />
      ))}
    </svg>
  );
}
