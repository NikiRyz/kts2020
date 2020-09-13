import React, { useState } from "react";
import { AutoComplete } from "antd";
import weatherStore from "stores/weather";
import "antd/dist/antd.css";
import {city} from 'public/city'

const find = (str) => {
  const arrCity = city
    .filter(
      (elem) =>
        elem.toLowerCase().includes(str.toLowerCase()) &&
        elem.toLowerCase().indexOf(str.toLowerCase()) === 0
    )
    .sort();
  const result = [];
  arrCity.forEach((elem) => result.push({ value: elem }));
  if (result.length > 5) {
    result.splice(5, result.length - 1);
  }
  return result;
};
const getStartArr = () => {
  const startArr = [];
  city.sort().forEach((elem) => startArr.push({ value: elem }));
  if (startArr.length > 5) {
    startArr.splice(5, startArr.length - 1);
  }
  return startArr;
};
function Search() {
  const [options, setOptions] = useState(getStartArr());
  const [value, setValue] = useState("");

  const onSearch = (searchText) => {
    setOptions(!searchText ? getStartArr() : find(searchText));
  };
  const onSelect = (data) => {
    setOptions(find(data));
    setValue(data);
    weatherStore.setCity(data);
    weatherStore.weatherDate()
  };

  const onChange = (data) => {
    setValue(data);
  };
  return (
    <AutoComplete
      value={value}
      options={options}
      style={{
        width: 400,
      }}
      onSelect={onSelect}
      onSearch={onSearch}
      onChange={onChange}
      notFoundContent="Я не знаю такого города :("
      placeholder="Выберите город..."
    />
  );
}

export default Search;
