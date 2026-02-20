import { ProgressiveBlur } from "@/components/ui/progressive-blur";

const FooterBlur = () => {
  return (
    <ProgressiveBlur
      className="fixed! inset-x-0 bottom-0 z-10"
      height="60px"
      position="bottom"
    />
  );
};

export default FooterBlur;
