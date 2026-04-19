import WaveBackground from "./WaveBackground";
import CharacterIllustration from "./CharacterIllustration";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#f5f5f5]"
    >
      <WaveBackground />
      <div className="relative z-10 flex flex-col items-center justify-center">
        <CharacterIllustration />
      </div>
    </section>
  );
}
