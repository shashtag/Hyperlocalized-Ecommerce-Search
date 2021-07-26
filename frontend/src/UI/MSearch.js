import React from "react";
import { components } from "react-select";
import AsyncSelect from "react-select/async";

import makeAnimated from "react-select/animated";
import "./UI.css";
import Locations from "../Data/Locations";
import { post } from "../APIs/Post";

const MSelect = ({ location }) => {
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

  const Control = ({ children, ...props }) => {
    console.log(children);
    return (
      <components.Control {...props}>
        <i class='fas fa-search'></i>

        {children}
      </components.Control>
    );
  };

  // const handleInputChange = (val) => {
  //   setInput(val);
  //   // const { result } = await post("product/search", {
  //   //   search: val,
  //   //   location: location,
  //   // });
  //   //
  //   return val;
  // };
  const promiseOptions = async (val) => {
    console.log(val);
    const { result } = await post("product/search", {
      search: val,
      location: location,
    });
    return result;
  };
  const Option = ({ ...props }) => {
    console.log(props);

    return (
      <components.Option {...props}>
        <div className='option'>{props.data.name}</div>
        <div className='subOption'>
          {props.data.name} Available in {props.data.storeNos} store nearby at
          avg cost of ${props.data.avgPrice}
        </div>
      </components.Option>
    );
  };

  return (
    <AsyncSelect
      options={Locations}
      // cacheOptions
      styles={customStyles}
      captureMenuScroll={true}
      components={{
        Option,
        animatedComponents,
        Control,
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
      }}
      loadOptions={promiseOptions}
      theme={ctheme}
      placeholder='Search'
      className='search'
      isSearchable={true}
    />
  );
};

export default MSelect;
