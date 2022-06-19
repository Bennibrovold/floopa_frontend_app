import { forwardRef } from "react";
import styled from "styled-components";
import Select from "react-select";
import { Controller } from "react-hook-form";
import { color } from "../../libs/color";

export const SelectForm: any = forwardRef<any, any>(
  ({ name, options, control }, ref) => {
    const styles = {
      control: (provided: any, state: any) => ({
        ...provided,
        border: state.isHover ? `1px solid #e4e4e4` : `1px solid #e4e4e4`,
        boxShadow:
          state.isHover || state.isFocused
            ? `0px 0px 0px 2px ${color("primary-05")}`
            : "none",
        borderRadius: "8px",
      }),
    };

    return (
      <Wrapper>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              styles={styles}
              options={options}
              isMulti
            ></Select>
          )}
        />
      </Wrapper>
    );
  }
);

const Wrapper = styled.div``;
