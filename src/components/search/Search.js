import React from "react";
import { Select } from "antd";
import "antd/dist/antd.css";

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val) {
  console.log("search:", val);
}
function Search() {
  return (
    <Select
      showSearch
      style={{ width: "100%" }}
      placeholder="Выберите город"
      optionFilterProp="children"
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onSearch={onSearch}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      size="large"
      allowClear={true}
      autoFocus={true}
    >
      <Option value="Moscow">Москва</Option>
      <Option value="St. Petersburg">Санкт-Петербург</Option>
      <Option value="Khabarovsk">Хабаровск</Option>
    </Select>
  );
}

export default Search;
