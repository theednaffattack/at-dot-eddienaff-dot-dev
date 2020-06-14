import { FlexMinHeightBordersProps } from "./primitives/styled-rebass";

export interface PathKeyArgsType {
  fill?: string;
}

export interface TabKeyArgs extends PathKeyArgsType {
  active?: boolean;
  activeColor?: string;
}

export interface NewIconProps extends FlexMinHeightBordersProps {
  active?: IconProps["active"];
  fill: IconProps["fill"];
  name: IconProps["name"];
  size: IconProps["size"];
}

export interface IconProps {
  active?: boolean;
  fill: string;
  size?: string | number;
  height?: number;
  width?: number;
  name:
    | "account_circle"
    | "activity"
    | "activities"
    | "advance"
    | "bar"
    | "bookings"
    | "bookmarkOutline"
    | "call_button"
    | "chat"
    | "check_mark"
    | "chevronDown"
    | "close"
    | "comment"
    | "conversation"
    | "discover"
    | "dot"
    | "email"
    | "emoji"
    | "explore"
    | "favorite"
    | "image_attached"
    | "logout"
    | "love"
    | "mapDot"
    | "mapPin"
    | "mapPinToo"
    | "menu"
    | "minus"
    | "more_horizontal"
    | "more_vertical"
    | "nearMe"
    | "nightClub"
    | "parking"
    | "plus"
    | "plus_skinny"
    | "profile"
    | "profile_icon"
    | "restaurant"
    | "reverse"
    | "saved"
    | "search"
    | "send"
    | "settings"
    | "share_arrow"
    | "sidelist"
    | "star"
    | "subscription"
    | "sun"
    | "swimming"
    | "traveling"
    | "wifi";
}
