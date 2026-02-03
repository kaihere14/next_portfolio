import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import ActiveStatus from "./ActiveStatus";

export const title = "Avatar with Online Indicator";

const ProfileAvatar = () => (
  <div className="relative w-fit">
    <Avatar>
      <AvatarImage alt="@haydenbleasel" src="/logo.webp" />
      <AvatarFallback>HB</AvatarFallback>
    </Avatar>
    <ActiveStatus />
  </div>
);

export default ProfileAvatar;
