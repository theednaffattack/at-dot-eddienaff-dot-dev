import React from "react";

import Icon from "./icon";

interface AvatarPlacehoderProps {
  size?: string | number;
}

export const AvatarPlaceholder: React.FunctionComponent<AvatarPlacehoderProps> = ({
  size,
}) => {
  return (
    <Icon
      active={false}
      name="account_circle"
      fill="orange"
      size={size || "120px"}
    />
  );
};

export default AvatarPlaceholder;
