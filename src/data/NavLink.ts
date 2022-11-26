import homeIcon from "@/assets/images/home.svg";
import MessageIcon from "@/assets/images/message.svg";
import PurchaseIcon from "@/assets/images/buy.svg";
import WalletIcon from "@/assets/images/wallet.svg";
import TimeIcon from "@/assets/images/time.svg";
import SettingsIcon from "@/assets/images/settings.svg";
import FriendsIcon from "@/assets/images/friends.svg";
import ActivityIcon from "@/assets/images/activity.svg";

export type NavItemTypes = {
  id: number;
  label: string;
  icon?: string;
  link: string;
};

export const NAV_LINKS: NavItemTypes[] = [
  {
    id: 1,
    label: "Home",
    icon: homeIcon,
    link: "/",
  },
  {
    id: 2,
    label: "Message",
    icon: MessageIcon,
    link: "/",
  },
  {
    id: 3,
    label: "Buy",
    icon: PurchaseIcon,
    link: "/",
  },

  {
    id: 4,
    label: "Activity",
    icon: ActivityIcon,
    link: "/",
  },
  {
    id: 5,
    label: "Time",
    icon: TimeIcon,
    link: "/",
  },
];

export const SUB_NAV_LINKS: NavItemTypes[] = [
  {
    id: 6,
    label: "Wallet",
    icon: WalletIcon,
    link: "/",
  },
  {
    id: 7,
    label: "Friends",
    icon: FriendsIcon,
    link: "/",
  },
  {
    id: 8,
    label: "Settings",
    icon: SettingsIcon,
    link: "/",
  },
];
