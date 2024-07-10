import {
  BiAward,
  BiBookContent,
  BiBriefcaseAlt2,
  BiChalkboard,
  BiHomeAlt,
  BiSolidGraduation,
} from "react-icons/bi";

export const Routes = [
  { name: "Home", url: "/", icon: BiHomeAlt },
  { name: "Experience", url: "/experience", icon: BiBriefcaseAlt2 },
  { name: "Education", url: "/education", icon: BiSolidGraduation },
  { name: "Trainings", url: "/trainings", icon: BiChalkboard },
  { name: "Achievements", url: "/achievements", icon: BiAward },
  { name: "Publications", url: "/publications", icon: BiBookContent },
];
