import { FieldProps } from "formik";
import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";

import { IInputFieldProps } from "./types";
import { InputB, Text } from "../primitives/styled-rebass";
import styled from "styled-components";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Errors = styled.span`
  margin: 0.5rem 0 0;
  color: brown;
`;

export const InputField = ({
  field,
  form: { errors, touched },
  ...props
}: FieldProps & InputProps & IInputFieldProps) => {
  const errorMessage = touched[field.name] && errors[field.name];
  const { type } = props;
  return (
    <>
      <Text fontFamily="main">
        <label htmlFor={field.name}>{props.label}</label>
      </Text>
      <InputB
        id={field && props.id ? props.id : field.name}
        type={type}
        name={field.name}
        {...field}
        fontSize={1}
        width={1}
        bg="rgba(0,0,0,0.1)"
        color="text"
        borderRadius={0}
        p={2}
        mt={2}
        mb={3}
        letterSpacing=".1em"
        border="0"
        borderBottom="2.5px rgba(244, 50, 127, 1) solid"
      />

      {errorMessage ? <Errors>{errorMessage}</Errors> : null}
    </>
  );
};
