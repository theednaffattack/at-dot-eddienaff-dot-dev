import React, { DetailedHTMLProps, OlHTMLAttributes } from "react";
import Link from "next/link";
import {
  Box as BoxBase,
  Button as ButtonBase,
  Flex as FlexBase,
  Card as CardBase,
  Heading,
  Image,
  Text,
  BoxProps,
  FlexProps,
  ButtonProps,
} from "rebass/styled-components";
import {
  background,
  borders,
  boxShadow,
  borderRadius,
  color,
  flexbox,
  maxWidth,
  minHeight,
  height,
  space,
  width,
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  minWidth,
  maxHeight,
  bottom,
  position,
  left,
  right,
  top,
  overflow,
  BackgroundProps,
  BoxShadowProps,
  SpaceProps,
  WidthProps,
  FontSizeProps,
  BordersProps,
  FlexboxProps,
  FontFamilyProps,
  FontWeightProps,
  LetterSpacingProps,
  BorderRadiusProps,
  HeightProps,
  BackgroundColorProps,
  ColorProps,
  MinHeightProps,
  PositionProps,
  BottomProps,
  TopProps,
  RightProps,
  LeftProps,
  OverflowProps,
  LayoutProps,
  layout,
} from "styled-system";
import styled, { StyledComponent } from "styled-components";
import { device } from "../styles/theme";

// import IconBase from "../icon/icon";
// import MaterialIconBase from "../icon/m-icon";
// import { TMaxFlexProps, TLogoFlexProps, ICardProps } from "./types";
// import { User } from "modules/gql-gen/generated/apollo-graphql";

interface IisPartiallyActiveProps {
  isPartiallyCurrent: boolean;
}

interface UnstyledListProps extends SpaceProps, WidthProps {}

interface StyledListProps extends SpaceProps {
  setBackgroundColor?: string;
  highlight?: boolean;
}

interface StyledHrProps extends SpaceProps {}

export const Form = styled.form``;

export const StyledHr = styled.hr<StyledHrProps & { width: string | number }>`
  border: 0;
  height: 1;
  width: ${({ width }) => width};
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  ${space}
`;

export const UnstyledList = styled.ul<UnstyledListProps>`
  list-style: none;
  ${width}
  ${space}
`;

export const StyledListItem = styled.li<StyledListProps>`
  ${space}
  /* height: 100%; */
  list-style: none;
  background-color: ${(props) =>
    props.highlight ? "rgba(0,0,0,0.3)" : "transparent"};
  :hover {
    background-color: ${(props) =>
      props.setBackgroundColor
        ? props.setBackgroundColor
        : "rgba(0, 0, 0, 0.3)"};
  }

  transition: 0.2s;
`;

interface StyledLinkV1Props {
  hoverColor?: string;
}

const StyledLinkV1 = styled.a<StyledLinkV1Props>`
  ${color}
  width: 100%;
  display: block;
  text-decoration: none;

  :hover {
    color: ${(props) => (props.hoverColor ? props.hoverColor : "inherit")};
    cursor: pointer;
  }
`;

const SidebarLinkAnchor = styled.a<StyledLinkV1Props>`
  ${color}
  width: 100%;
  display: block;
  text-decoration: none;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  :hover {
    color: ${(props) => (props.hoverColor ? props.hoverColor : "inherit")};
    cursor: pointer;
  }
`;

interface ITabListProps
  extends SpaceProps,
    WidthProps,
    DetailedHTMLProps<OlHTMLAttributes<HTMLOListElement>, HTMLOListElement> {}

export const TabList = styled.ol<ITabListProps>`
  ${space}
  ${width}
`;

export interface ITabListItemProps {
  label: string;
  onClick: any;
  activeTab: string;
  active?: boolean;
}

interface IAvatarProps {
  src?: string;
  width?: number | string;
  height?: number | string;
}

export const Avatar: React.FunctionComponent<IAvatarProps> = ({
  height,
  src,
  width,
}) => {
  let checkWidth = width ? width : 0;
  let checkHeight = height ? height : 0;

  if (src) {
    return (
      <Image
        src={src}
        sx={{
          width: checkWidth,
          height: checkHeight,
          borderRadius: 9999,
        }}
      />
    );
  }

  return <span>replace with icon</span>;
};

export const TabListItem: React.FC<ITabListItemProps> = styled.li`
  display: inline-block;
  list-style: none;
  margin-bottom: -1px;
  padding: 0.5rem 0.75rem;
  border-bottom: ${(props: any) =>
    props.active ? "2px rebeccapurple solid" : "none"};
`;

export const TabListActive = styled.div`
  background-color: white;
  border: solid #ccc;
  border-width: 1px 1px 0 1px;
`;

export const StyledLinkV3 = styled(Link)`
  width: 100%;
  /* height: 20px; */
  flex: 1;
  padding: 8px;
`;

export const StyledLinkV2 = (props: any) => {
  let itemBorderColor = props.itemBorderColor;
  let TempLink = styled(Link)`
    ${color}
    ${itemBorderColor}

  /* padding: 10px 20px; */
  /* font-size: 1.1em;
  display: block;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); */

  border-radius: 5px;
    width: 100%;
    /* height: 20px; */
    flex: 1;
    padding: 8px;

    /* :hover {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s;
  } */
  `;
  return <TempLink href={props.href} />;
};

const isPartiallyActive = ({ isPartiallyCurrent }: IisPartiallyActiveProps) => {
  return isPartiallyCurrent
    ? { style: { color: "crimson" } }
    : { style: { color: "white" } };
};

export const PartialNavLink = ({ children, style, ...props }: any) => (
  <Link getProps={isPartiallyActive} style={style} {...props}>
    {children}
  </Link>
);

export const NavLink = ({ children, href }: any) => (
  <Link href={href}>
    <a>{children}</a>
  </Link>
);

interface LinkLinkProps {
  as: string;
  href: string;
  color?: string;
  hoverColor?: string;
  setOnClick?: React.Dispatch<React.SetStateAction<string>>;
  setOnClickValue?: string;
}

// interface AlternateLinkLinkProps {
//   as: string;
//   href: string;
//   color?: string;
//   hoverColor?: string;
//   setOnClick: React.Dispatch<
//     React.SetStateAction<
//       ({
//         __typename?: "User" | undefined;
//       } & Pick<User, "id" | "name">)[]
//     >
//   >;
//   setOnClickValue: ({
//     __typename?: "User" | undefined;
//   } & Pick<User, "id" | "name">)[];
// }

export const LinkLink: React.FC<LinkLinkProps> = ({
  as,
  children,
  color,
  hoverColor,
  href,
  setOnClick,
  setOnClickValue,
  ...props
}) => (
  <Link href={href} as={as}>
    <StyledLinkV1
      hoverColor={hoverColor}
      color={color ? color : "white"}
      onClick={() => {
        if (setOnClick && setOnClickValue) {
          setOnClick(
            setOnClickValue
            // typeof setOnClickValue === "string" ? setOnClickValue : ""
          );
        } else {
          console.log("onClick is not set");
        }
      }}
      {...props}
    >
      {children}
    </StyledLinkV1>
  </Link>
);

export const SidebarLink: React.FC<LinkLinkProps> = ({
  as,
  children,
  color,
  hoverColor,
  href,
  // setOnClick,
  // setOnClickValue,
  ...props
}) => (
  <Link href={href} as={as} passHref={true}>
    <SidebarLinkAnchor
      hoverColor={hoverColor}
      color={color ? color : "white"}
      // onClick={() => {
      //   if (setOnClick && setOnClickValue) {
      //     setOnClick(setOnClickValue);
      //   } else {
      //     console.log("onClick is not set");
      //   }
      // }}
      {...props}
    >
      {children}
    </SidebarLinkAnchor>
  </Link>
);

// export const AltSidebarLink: React.FC<AlternateLinkLinkProps> = ({
//   as,
//   children,
//   color,
//   hoverColor,
//   href,
//   setOnClick,
//   setOnClickValue,
//   ...props
// }) => (
//   <Link href={href} as={as}>
//     <SidebarLinkAnchor
//       hoverColor={hoverColor}
//       color={color ? color : "white"}
//       onClick={() => {
//         if (setOnClick && setOnClickValue) {
//           setOnClick(setOnClickValue);
//         } else {
//           console.log("onClick is not set");
//         }
//       }}
//       {...props}
//     >
//       {children}
//     </SidebarLinkAnchor>
//   </Link>
// );

// interface IIconBaseProps extends SpaceProps {
//   size: string;
//   name: string;
//   fill: string;
// }

// // interface MIconBaseProps extends SpaceProps {
// //   size: MaterialIconProps["size"];
// //   name: MaterialIconProps["name"];
// //   fill: MaterialIconProps["fill"];
// // }

// // interface MaterialBaseProps extends MaterialIconProps, SpaceProps {}

// export const Icon: React.FC<IIconBaseProps> = styled(IconBase)`
//   ${space}
// `;

// export const Material_Icon = styled(MaterialIconBase)`
//   ${space}
// `;

// export const FlexShadow = styled<BoxShadowProps>(FlexBase)`
//   ${boxShadow}
// `;

export const FlexUserProfileWrap = styled(FlexBase)`
${borderRadius}
${boxShadow}
${overflow}
${maxHeight}
${maxWidth}
${borders}
`;

export const MinButton = styled(ButtonBase)<
  ButtonProps & BorderRadiusProps & MinHeightProps
>`
  ${borderRadius}
  ${minHeight}
`;

export const Card = styled(CardBase)`
  ${maxWidth}
`;

export interface FlexMinHeightBordersProps
  extends BordersProps,
    FlexProps,
    FlexboxProps,
    SpaceProps,
    LayoutProps,
    MinHeightProps {}

//     : StyledComponent<
//   React.FunctionComponent<FlexMinHeightBordersProps>,
//   any,
//   {},
//   never
// >

export const Flex = styled(FlexBase)<FlexMinHeightBordersProps>`
  ${layout}
  ${minHeight}
  ${borders}
`;

export const PositionFlex = styled(FlexBase)<
  PositionProps & FlexProps & BordersProps
>`
  ${position}
  ${borders}
`;

export const Box = styled(BoxBase)<BoxProps & BordersProps>`
  ${borders}
`;

interface AbFlexProps
  extends MinHeightProps,
    BordersProps,
    FlexProps,
    PositionProps,
    BottomProps,
    TopProps,
    RightProps,
    LeftProps,
    OverflowProps {}

export const AbFlex = styled(FlexBase)<AbFlexProps>`
  ${position}
  ${top}
  ${right}
  ${left}
  ${bottom}
  ${overflow}
  ${borders}
`;

export const MaxFlex = styled(FlexBase)`
  ${maxHeight}
  ${maxWidth}
  ${minHeight}
  ${borders}
  ${minWidth}
`;

export const LogoFlex = styled(FlexBase)`
  ${boxShadow}
  ${borderRadius}
  ${height}
`;

export interface StylingProps
  extends ColorProps,
    BordersProps,
    SpaceProps,
    WidthProps,
    HeightProps,
    BorderRadiusProps,
    FontFamilyProps,
    FontSizeProps,
    FontWeightProps,
    LetterSpacingProps,
    BackgroundColorProps {}

export const InputB: StyledComponent<
  "input",
  any,
  StylingProps,
  never
> = styled.input`
${color}
${borders}
${space}
${width}
${height}
${borderRadius}
${fontFamily}
${fontSize}
${fontWeight}
${letterSpacing}
outline: none;
box-sizing:border-box;
transition: all 0.30s ease-in-out;
:focus {
  border-bottom: 2.5px rgba(244, 50, 127, 1) solid;
  // box-shadow: 0 1px 1px rgba(229, 103, 23, 0.075) inset, 0 0 8px rgba(229, 103, 23, 0.6);
  
}
  ::placeholder {
    color: palevioletred;
  }
`;

export const FlexGradient = styled(Flex)`
  background-image: linear-gradient(
    0deg,
    rgba(210, 48, 120, 1) 6%,
    rgba(254, 97, 97, 1) 74%,
    rgba(255, 121, 85, 1) 100%
  );
`;

export const StyledUl_v1 = styled.ul`
  ${color}
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  /* position: absolute;
  top: 0; */
`;

export const StyledUl_v2 = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

interface AdditionalLabelProps {
  bg: string;
}

export const Label = styled.label<
  SpaceProps & BackgroundColorProps & AdditionalLabelProps
>`
  border: none;
  display: inline-block;
  cursor: pointer;
  ${space}

  box-sizing: border-box;

  font-size: inherit;
  color: white;
  background-color: ${(props) => (props.bg ? props.bg : "#eee")};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: inline-block;
  text-align: center;
  line-height: inherit;
  -webkit-text-decoration: none;
  text-decoration: none;
  border: 0;
  border-radius: 4px;
  border-radius: 4px;
`;

export const Button = styled(ButtonBase)<ButtonProps & BorderRadiusProps>`
  ${borderRadius}
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }
`;

export const TeamWrapper = styled.div`
  grid-column: 1;
  grid-row: 1 / 4;
  background-color: #362234;
  color: #958993;
`;

const channelTextColor = "#958993";

export const ChannelWrapper = styled.div`
  grid-column: 2;
  grid-row: 1 / 4;
  background-color: #4e3a4c;
  color: ${channelTextColor};
  overflow-x: hidden;
  overflow-y: auto;
`;

export const HeaderWrapper = styled.div`
  grid-column: 3;
  grid-row: 1;
  min-height: 65px;
  background-color: #eee;
`;

export const MessageWrapper = styled.div`
  grid-column: 3;
  grid-row: 2;
  overflow-y: auto;
  /* border: 2px pink solid; */
`;

export const GridPageContainer = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 100px 250px 1fr;
  grid-template-rows: auto 1fr auto;
  width: 100%;
`;

export const InputContainer = styled.div`
  grid-column: 3;
  grid-row: 3;
  min-height: 65px;
  /* background-color: pink; */
  padding: 20px;
  border-top: 2px #eee solid;
`;

interface ListItemProps
  extends ColorProps,
    BordersProps,
    SpaceProps,
    FlexboxProps,
    HeightProps,
    WidthProps {
  highlight?: boolean;
}

// interface StyledLinkProps extends ColorProps, FontSizeProps, LineHeightProps {}

export const ListItem = styled.li<ListItemProps>`
${color}
  ${borders}
  ${flexbox}
  ${height}
  ${space}
  ${width}
  
  border-style: solid;
    border-width: thick;
    border-color: ${(props) => (props.highlight ? "#767676" : "transparent")};
  :hover{
    border-style: solid;
    border-width: thick;
    border-color: #767676;
  }

  transition: 0.3s;
`;

export const ChannelMessageListItem = styled.li<ListItemProps>`
${color}
  ${borders}
  ${flexbox}
  ${height}
  ${space}
  ${width}
  
  /* border-style: solid;
    border-width: thick;
    border-color: ${(props) =>
      props.highlight ? "#767676" : "transparent"}; */
  :hover{
    background-color: #eee;
  }

  transition: 0.3s;
`;

export const CustomButton = styled(Button)<
  ButtonProps & BorderRadiusProps & BackgroundProps & BoxShadowProps
>`
  ${borderRadius}
  ${background}
  ${boxShadow}
`;

// START GRID LAYOUT COMPONENT - STANDARD
// from: https://rebassjs.org/guides/css-grid/

export function GridLayout(props: BoxProps & { gridGap: number }) {
  return (
    <Box
      {...props}
      sx={{
        display: "grid",
        gridGap: props.gridGap, // theme.space[3]
      }}
    />
  );
}

// END GRID LAYOUT COMPONENT - STANDARD

// START GRID LAYOUT COMPONENT - AUTO COLUMNS

export function GridAuto(props: BoxProps & { gridGap: number }) {
  return (
    <Box
      {...props}
      sx={{
        display: "grid",
        gridGap: props.gridGap, // theme.space[3]
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      }}
    />
  );
}
// END GRID LAYOUT COMPONENT - AUTO COLUMNS

export const Anchor = styled.a<ColorProps & LayoutProps & SpaceProps>`
  ${color}
  ${layout}
  ${space}
  text-decoration: none;
  position: relative;
  /* overflow: hidden; */
  /* display: inline-block; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AnimatedAnchor = styled.a<{
  active: boolean;
  reduceBottom: boolean;
}>`
  text-decoration: none;
  position: relative;
  width: 100%;
  /* overflow: hidden; */
  /* display: inline-block; */
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px red solid;

  &::after {
    position: absolute;
    display: block;

    content: "";
    width: 100%;

    bottom: ${({ reduceBottom }) => (reduceBottom ? "-18px" : "-22px")};
    height: 2px;

    background: #e9486d;

    transform: ${({ active }) =>
      active === true ? undefined : "translate(-100%)"};
    transition: transform 0.3s;
  }

  &:hover::after {
    transform: translateX(0);
  }
`;

// START FLEX HOVER

export const FlexHover = styled(Flex)<
  { active: boolean; reduceBottom: boolean } & FlexMinHeightBordersProps
>`
  transform: translateY(2px);
  overflow: hidden;
  &::after {
    position: absolute;
    display: block;

    content: "";
    width: 100%;

    bottom: 0;
    height: 2px;

    background: #e9486d;

    transform: ${({ active }) =>
      active === true ? undefined : "translate(-100%, 2px)"};
    transition: transform 0.3s;
  }

  &:hover::after {
    transform: translate(0);
  }
`;

// START DEVICE HIDDEN STUFF

export const FlexMain = styled(Flex)`
  @media ${device.tabletMax} {
    display: none;
  }

  @media ${device.laptop} {
    display: flex;
  }
`;

export const FlexMenuButton = styled(Flex)`
  @media ${device.tabletMax} {
    margin-right: auto;
  }
`;

export { Heading, Image, Text };

export const UnAuthenticatedAnchor = styled.a`
  color: #fff;
  text-decoration: none;
  position: relative;
  :after {
    content: "";

    width: 100%;
    position: absolute;
    left: 0;
    bottom: -4px;

    border-color: rgba(255, 255, 255, 0.4);
    border-width: 0 0 2px;
    border-style: solid;
  }
`;
