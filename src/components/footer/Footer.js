import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  WomanOutlined,
  ManOutlined,
  QuestionOutlined,
} from "@ant-design/icons";
import { Button, Col, Row, Switch } from "antd";
import clothesStore from "stores/clothes";
import "components/footer/Footer.css";

class Footer extends Component {
  onChange = (checked) => {
    clothesStore.setSex(checked);
  };
  render() {
    return (
      <Row className="footerRow">
        <Col offset={6} span={6} className="footerColl">
          <Switch
            checkedChildren={<WomanOutlined />}
            unCheckedChildren={<ManOutlined />}
            onChange={this.onChange}
            defaultChecked
          />
        </Col>
        <Col offset={6} span={6} className="footerColl">
          <Link to="/help">
            <Button shape="circle" icon={<QuestionOutlined />} />
          </Link>
        </Col>
      </Row>
    );
  }
}

export default Footer;
