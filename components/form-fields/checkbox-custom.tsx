import React from "react";
import styled from "styled-components";
import { FieldProps } from "formik";

import { InputProps } from "./types";

const CustomLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 14px;
`;

const HiddenInput = styled.input.attrs<{
  type: string;
  checked: boolean;
}>({
  type: "checkbox",
})`
  opacity: 0;
  width: 0;
  height: 0;
`;

const SlideRail = styled.span<{ checked: boolean }>`
  position: absolute;
  cursor: pointer;
  z-index: 4;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ checked }) => (checked ? "#f4327f" : "#ccc")};
  box-shadow: ${({ checked }) => (checked ? "0 0 1px #f4327f" : null)};
  transition: 0.4s;

  border-radius: 34px;
  &:before {
    position: absolute;
    z-index: 5;
    content: "";
    height: 26px;
    width: 26px;
    border-radius: 50%;
    left: -4px;
    bottom: -6px;
    background-color: white;
    -webkit-transition: 0.4s;
    transform: ${({ checked }) => (checked ? "translateX(22px)" : null)};
    transition: 0.4s;
    box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.15);
    border: 1px #ccc solid;
  }
`;

export const ToggleCheckbox = ({ field, form }: FieldProps & InputProps) => {
  return (
    <CustomLabel>
      <HiddenInput
        checked={form.values.keepMeSignedIn}
        name={field.name}
        value={form.values.keepMeSignedIn}
        onChange={() => {
          const nextValue = !form.values.keepMeSignedIn;

          form.setFieldValue("keepMeSignedIn", nextValue);
        }}
        // {...props}
        type="checkbox"
      />
      <SlideRail checked={form.values.keepMeSignedIn} />
    </CustomLabel>
  );
};
