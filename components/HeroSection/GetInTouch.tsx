import Link from "next/link";

import { FileText, Send } from "lucide-react";

const GetInTouch = () => {
  return (
    <div className="mt-6 flex gap-4">
      <Link
        href="https://drive.google.com/file/d/1MiYa338p-Kd1vRRG6Aqa3G5FNEpI79Hb/view?usp=sharing"
        target="_blank"
        className="flex items-center gap-2 rounded-md border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-sm text-white transition-all duration-300 hover:bg-neutral-800"
      >
        <FileText size={16} /> Resume / CV
      </Link>
      <Link
        href="mailto:armanthakur200814@gmail.com"
        className="flex items-center gap-2 rounded-md border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-sm text-black transition-all duration-300 hover:bg-neutral-200"
      >
        <Send size={16} /> Get in touch
      </Link>
    </div>
  );
};

export default GetInTouch;
