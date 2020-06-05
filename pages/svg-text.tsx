import React from "react";
import { CSSProperties } from "styled-components";

export interface SvgTextProps {
  capHeight: number;
  fontSize: string;
  leftPad: number;
  lineHeight: number;
  setSvgHeight: React.Dispatch<React.SetStateAction<number | null>>;
  topPad: number;
  width: number;
  x: number;
  y: number;
}

// const DEFAULT = {
//   lineHeight: 1,
//   capHeight: 0.71,
// };

// interface CalculatedWordLinesState {
//   word: string;
// }

interface WordsWithComputedWidthInterface {
  word: string;
  width: number;
}

// const someWords: CalculatedWordLinesState[] = [
//   { word: "lerem ipsem blerg whatever lerem ipsem blerg whatever" },
//   { word: "where is mcqueen? they're all asking the same question" },
// ];

export const SvgText: React.FC<SvgTextProps> = ({
  // capHeight,
  children,
  fontSize,
  leftPad,
  lineHeight,
  setSvgHeight,
  topPad,
  width,
  // x,
  // y,
}) => {
  const [hasMounted, setHasMounted] = React.useState<
    "isMounted" | "isNotMounted"
  >("isNotMounted");

  const [calculatedWordLines, setCalculatedWordLines] = React.useState<
    string[] | null
  >(null);

  React.useEffect(() => {
    setHasMounted("isMounted");
    if (typeof children === "string") {
      const { spaceWidth, wordsWithComputedWidth } = calculateWordWidths({
        style: { fontSize: "15px" },
        wordsBase: children,
      });

      const lines = calculateLines(
        wordsWithComputedWidth,
        spaceWidth,
        width - leftPad
      );
      setCalculatedWordLines(lines);
      setSvgHeight(lines.length * lineHeight + 110);
    }
  }, []);

  if (hasMounted === "isNotMounted") {
    return null;
  }

  // const dy = capHeight ? capHeight : DEFAULT.lineHeight;

  if (calculatedWordLines) {
    return (
      <>
        {calculatedWordLines.map((word, index) => (
          <tspan
            fontSize={fontSize}
            fontFamily="Montserrat"
            fill="#FFFFFF"
            key={index + "-" + word}
            x={leftPad}
            y={topPad}
            dy={`${index * lineHeight}px`}
          >
            {word}
          </tspan>
        ))}
      </>
    );
  }
  return <tspan>whoops</tspan>;
};

// ================================================

function calculateWordWidths({
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

function calculateLines(
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
// =========================================================
