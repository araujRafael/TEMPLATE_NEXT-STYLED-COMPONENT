
// import { Container } from './styles';

import { HTMLAttributes } from "react";
import { HiHome } from "react-icons/hi";
import { navLinksNames } from "../../Constants/NavLinks";

interface UseIconsProps extends HTMLAttributes<HTMLDivElement> {
  IconName: navLinksNames
  color: string
  size?: number
}

const UseIcons: React.FC<UseIconsProps> = ({
  IconName,
  color,
  size
}) => {
  switch (IconName) {
    case "home":
      return <HiHome color={color} size={size} />
    default:
      return <HiHome color={color} size={size} />
  }
}

export default UseIcons;