import React from "react";
import { Menu } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import "./Menu.css";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

function MenuMain() {
  return (
    <Menu
      mode="horizontal"
      style={{  "border-bottom": "0px"}}
      theme='dark'
    >
      <SubMenu icon={<AppstoreOutlined />} title='Меню'>
        <Menu.Item>
          <Link to="/about">О нас</Link>
        </Menu.Item>
          <Menu.Item> <Link to="/help">Помощь</Link></Menu.Item>
      </SubMenu>
    </Menu>
  );
}

export default MenuMain;
