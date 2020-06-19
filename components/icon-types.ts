import { FlexMinHeightBordersProps } from "./primitives/styled-rebass";

export interface PathKeyArgsType {
  fill?: string;
}

export interface BookingsKeyArgsType {
  fillForeground?: string;
  fillBackground?: string;
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
    | "arrow_right"
    | "arrow_right_stick"
    | "bar"
    | "bookings"
    | "bookmarkOutline"
    | "bus"
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
    | "follow"
    | "horizontal_line"
    | "image_attached"
    | "location"
    | "logout"
    | "love"
    | "mapDot"
    | "mapDotEndpoint"
    | "mapPin"
    | "mapPinToo"
    | "menu"
    | "minus"
    | "more_horizontal"
    | "more_vertical"
    | "nearMe"
    | "nightClub"
    | "parking"
    | "plane"
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
    | "ship"
    | "sidelist"
    | "star"
    | "subscription"
    | "sun"
    | "swimming"
    | "train"
    | "traveling"
    | "user_map_pointer"
    | "weather_rainy"
    | "weather_sunny"
    | "wifi";
}
