import { ReactNode } from "react";

import { IconBox } from "./styles";

interface IconProps {
  bgColor: 'orange' | 'yellow' | 'gray' | 'pink';
  children: ReactNode;
}

export function Icon({ bgColor, children }: IconProps) {
  return (
    <IconBox iconColor={bgColor}>
      {children}
    </IconBox>
  )
}