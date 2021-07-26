import React from "react";
import Select, { components } from "react-select";
import makeAnimated from "react-select/animated";
import "./UI.css";
import Locations from "../Data/Locations";

const MSelect = ({ setLocation }) => {
  const ctheme = (theme) => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary: "#1c1d21",
        primary75: "rgba(28, 29, 33, 0.75)",
        primary50: "rgba(28, 29, 33, 0.5)",
        primary25: "rgba(28, 29, 33, 0.25)",
        danger: "#C1292E",
        neutral0: "#F7F7FF",
      },
    };
  };

  const animatedComponents = makeAnimated();

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1.5px solid rgba(0, 0, 0, 0.14)",
      padding: "1rem",
      fontFamily: "Gilroy-Medium",
      fontSize: "1rem",
      lineHeight: "1.25rem",
    }),
    control: (provided, state) => ({
      ...provided,
      border: state.isFocused ? 0 : 0,
      boxShadow: state.isFocused ? 0 : 0,
      "&:hover": {
        border: state.isFocused ? 0 : 0,
      },
      padding: "0.75rem",
    }),
  };

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator
        style={{ position: "relative", border: "none" }}
        {...props}>
        <i
          class='fas fa-sort-down'
          style={{
            color: "#000",
            fontSize: "1.4rem",
            marginTop: "-0.5rem",
          }}></i>
        <div
          style={{
            right: 0,
            top: "0.6rem",
            position: "absolute",
            width: "1px",
            height: "2rem",
            background: "black",
          }}></div>
      </components.DropdownIndicator>
    );
  };

  const Control = ({ children, ...props }) => {
    return (
      <components.Control {...props}>
        <i class='fas fa-map-marker-alt' style={{ color: "#FA4A4B" }}></i>

        {children}
      </components.Control>
    );
  };

  return (
    <Select
      styles={customStyles}
      captureMenuScroll={true}
      components={{
        animatedComponents,
        Control,
        DropdownIndicator,
        IndicatorSeparator: () => null,
      }}
      defaultValue={{ value: "Ahmedabad", label: "Ahmedabad" }}
      onChange={(val) => setLocation(val.value)}
      theme={ctheme}
      options={Locations}
      placeholder='Select Location'
      className='select'
      // isSearchable={true}
    />
  );
};

export default MSelect;
