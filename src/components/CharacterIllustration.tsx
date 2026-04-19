export default function CharacterIllustration() {
  return (
    <svg width="320" height="420" viewBox="0 0 320 420" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Head */}
      <ellipse cx="160" cy="120" rx="65" ry="72" fill="#E8A88A" />

      {/* Hair */}
      <path d="M95 100 C95 55, 160 30, 200 50 C230 65, 235 95, 225 110 C220 80, 190 55, 160 55 C130 55, 105 70, 95 100Z" fill="#2D2D2D" />
      <path d="M155 48 C160 40, 170 42, 168 52" fill="#2D2D2D" />

      {/* Glasses */}
      <circle cx="140" cy="115" r="18" stroke="#8B6F47" strokeWidth="3" fill="none" />
      <circle cx="180" cy="115" r="18" stroke="#8B6F47" strokeWidth="3" fill="none" />
      <path d="M158 115 L162 115" stroke="#8B6F47" strokeWidth="2.5" />
      <path d="M122 110 L108 105" stroke="#8B6F47" strokeWidth="2.5" />
      <path d="M198 110 L210 107" stroke="#8B6F47" strokeWidth="2.5" />

      {/* Eyes */}
      <circle cx="140" cy="117" r="4" fill="#2D2D2D" />
      <circle cx="180" cy="117" r="4" fill="#2D2D2D" />
      <circle cx="141" cy="115" r="1.5" fill="white" />
      <circle cx="181" cy="115" r="1.5" fill="white" />

      {/* Eyebrows */}
      <path d="M128 100 C135 95, 148 95, 155 100" stroke="#2D2D2D" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M168 100 C175 95, 188 95, 195 100" stroke="#2D2D2D" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Nose */}
      <path d="M158 125 C158 132, 162 135, 165 132" stroke="#D4917A" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Smile */}
      <path d="M145 145 C152 155, 170 155, 178 145" stroke="#C4806A" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Ears */}
      <ellipse cx="93" cy="118" rx="10" ry="15" fill="#E8A88A" />
      <ellipse cx="227" cy="118" rx="10" ry="15" fill="#E8A88A" />

      {/* Neck */}
      <rect x="145" y="180" width="30" height="25" rx="5" fill="#E8A88A" />

      {/* Body / Sweater */}
      <path d="M90 210 C90 200, 140 195, 160 195 C180 195, 230 200, 230 210 L240 340 C240 355, 200 365, 160 365 C120 365, 80 355, 80 340 Z" fill="#4A6B5A" />

      {/* Sweater texture lines */}
      <path d="M100 240 C140 235, 180 235, 220 240" stroke="#3D5C4C" strokeWidth="1" opacity="0.4" fill="none" />
      <path d="M95 270 C140 265, 180 265, 225 270" stroke="#3D5C4C" strokeWidth="1" opacity="0.4" fill="none" />
      <path d="M90 300 C140 295, 180 295, 230 300" stroke="#3D5C4C" strokeWidth="1" opacity="0.4" fill="none" />
      <path d="M85 330 C140 325, 180 325, 235 330" stroke="#3D5C4C" strokeWidth="1" opacity="0.4" fill="none" />

      {/* Collar */}
      <path d="M130 200 C145 215, 155 215, 160 205 C165 215, 175 215, 190 200" stroke="#3D5C4C" strokeWidth="2" fill="none" />

      {/* Arms (hidden behind back) */}
      <path d="M90 220 C70 240, 65 280, 80 310" stroke="#4A6B5A" strokeWidth="25" fill="none" strokeLinecap="round" />
      <path d="M230 220 C250 240, 255 280, 240 310" stroke="#4A6B5A" strokeWidth="25" fill="none" strokeLinecap="round" />

      {/* Pants */}
      <path d="M95 350 L90 420 L140 420 L145 365" fill="#6B5B4F" />
      <path d="M175 365 L180 420 L230 420 L225 350" fill="#6B5B4F" />
    </svg>
  );
}
