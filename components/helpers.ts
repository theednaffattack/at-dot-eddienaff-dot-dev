import { CSSProperties, ReactChild } from "react";

import { IconProps } from "./icon-types";

interface IconsInterface {
  name: IconProps["name"];
  label?: string;
  fill: string;
  size: string;
  route: string;
  active: boolean;
}

// ================================================
// nav icons - BEG
// ================================================

export const icons: IconsInterface[] = [
  {
    active: false,
    fill: "#aaa",
    name: "traveling",
    label: "Traveling",
    route: "/traveling",
    size: "20px",
  },
  {
    active: false,
    fill: "#aaa",
    label: "Explore",
    name: "explore",
    route: "/explore",
    size: "20px",
  },
  {
    active: false,
    fill: "#aaa",
    name: "saved",
    label: "Saved",
    size: "20px",
    route: "/saved",
  },
  {
    active: false,
    fill: "#aaa",
    label: "Chat",
    name: "chat",
    route: "/messages",
    size: "20px",
  },
  {
    active: false,
    fill: "#aaa",
    label: "Profile",
    name: "profile",
    route: "/profile",
    size: "20px",
  },
];

// ================================================
// nav icons - END
// ================================================

// ================================================
//  /messages route, word bubbles - BEG
// ================================================

// functions to just-in-time measure words entered
// to generate svg created word bubbles of varying
// heights

interface WordsWithComputedWidthInterface {
  word: string;
  width: number;
}

export function calculateWordWidths({
  style,
  wordsBase,
}: {
  style: CSSProperties;
  wordsBase: string;
}): {
  wordsWithComputedWidth: WordsWithComputedWidthInterface[];
  spaceWidth: number;
} {
  // Calculate length of each word to be used to determine number of words per line
  const words = wordsBase.split(/\s+/);
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  Object.assign(text.style, style);
  text.setAttributeNS("style", "font-family", "Montserrat");
  svg.appendChild(text);
  document.body.appendChild(svg);

  const wordsWithComputedWidth = words.map((word) => {
    text.textContent = word;
    return { word, width: text.getComputedTextLength() };
  });

  text.textContent = "\u00A0"; // Unicode space
  const spaceWidth = text.getComputedTextLength();

  document.body.removeChild(svg);

  return { wordsWithComputedWidth, spaceWidth };
}

export function calculateNumberOfLines(
  wordsWithComputedWidth: WordsWithComputedWidthInterface[],
  spaceWidth: number,
  lineWidth: number
) {
  // The challenge to figuring out the width management if to
  // figure out how these values are derived.
  // Currently the lineWidth is too wide 271 vs 247
  // For some reason the x shift does not reset either but continues from the current position

  const wordsByLines = wordsWithComputedWidth.reduce<
    {
      words: string[];
      width: number;
    }[]
  >((result, { word, width }) => {
    const lastLine = result[result.length - 1] || { words: [], width: 0 };

    if (lastLine.words.length === 0) {
      // First word on line
      const newLine = { words: [word], width };

      result.push(newLine);
    } else if (
      lastLine.width + width + lastLine.words.length * spaceWidth <
      lineWidth
    ) {
      // Word can be added to an existing line
      lastLine.words.push(word);
      lastLine.width += width;
    } else {
      // Word too long to fit on existing line
      const newLine = { words: [word], width };
      result.push(newLine);
    }

    return result;
  }, []);

  return wordsByLines.map((line) => line.words.join(" "));
}

// ================================================
//  /messages route, word bubbles - END
// ================================================

// ================================================
//  message bubble, children checking - BEG
// ================================================

interface NamedChildrenSlots {
  timestamp: ReactChild;
  text: string;
}

export const isString = (word: any) => typeof word === "string";

export const isObject = <T extends object>(value: any): value is T =>
  typeof value === "object" &&
  typeof value !== "function" &&
  value != undefined;

export const isNamedChildrenSlot = (
  children: any
  // matcher: string
): children is NamedChildrenSlots => isObject(children); // && matcher in children;
// ================================================
//  message bubble, children checking - END
// ================================================
