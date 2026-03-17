import Image from "next/image";

import ProfileAvatar from "./avatar-standard-4";
import GetInTouch from "./GetInTouch";
import Intro from "./Intro";
import SocialLinks from "./SocialLinks";
import SongActivity from "./SongActivity";
import { PersonalInfo, Stats } from "./Stats";
import TechStack from "./TechStack";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="relative mt-12 mb-8 h-72 w-full overflow-hidden rounded-[2rem] border border-black/10 bg-neutral-100 shadow-[0_24px_60px_rgba(0,0,0,0.12)] sm:h-80 dark:border-white/10 dark:bg-neutral-900">
        <Image
          src="/light_hero.png"
          alt="Light hero background"
          fill
          unoptimized
          className="object-cover opacity-90 dark:hidden"
          priority
          sizes="(max-width: 768px) 100vw, 720px"
        />
        <Image
          src="/dark_hero.png"
          alt="Dark hero background"
          fill
          unoptimized
          className="hidden object-cover opacity-90 dark:block"
          priority
          sizes="(max-width: 768px) 100vw, 720px"
        />
        <div className="absolute inset-0 bg-linear-to-b from-white/8 via-transparent to-black/20 dark:from-black/10 dark:via-transparent dark:to-black/45" />
        <div className="from-background via-background/70 absolute inset-x-0 bottom-0 h-28 bg-linear-to-t to-transparent sm:h-32" />
      </div>

      <div className="relative z-10 -mt-26 sm:-mt-30">
        <ProfileAvatar />
      </div>

      <Intro />

      <GetInTouch />

      <SocialLinks />

      <SongActivity />

      <Stats />

      <PersonalInfo />

      <hr className="mt-15" />

      <TechStack />
    </section>
  );
};

export default Hero;
