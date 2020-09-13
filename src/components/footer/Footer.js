import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  WomanOutlined,
  ManOutlined,
  QuestionOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { Button, Switch } from "antd";
import clothesStore from "stores/clothes";
import "components/footer/Footer.css";



class Footer extends Component {
    onChange=(checked)=>{
        clothesStore.setSex(checked)
    }
  render() {
    return (
      <>
        <Switch
          checkedChildren={<WomanOutlined />}
          unCheckedChildren={<ManOutlined />}
          onChange={this.onChange}

          defaultChecked
        />
        <br />
        <Link to="/help">
          <Button shape="circle" icon={<QuestionOutlined />} />
        </Link>

      </>
    );
  }
}

export default Footer;
