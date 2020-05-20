import React from "react";

import { Col } from "reactstrap";

import { Card, Avatar } from "antd";
import {
  ShareAltOutlined,
  MessageOutlined,
  HeartTwoTone,
} from "@ant-design/icons";

const { Meta } = Card;
class ProductCard extends React.Component {
  render() {
    return (
      <Col xs="12" sm="3" md="3" lg="2">
        <Card
          //style={{ width: 300 }}
          cover={<img alt={this.props.name} src={this.props.image} />}
          actions={[
            <HeartTwoTone key="favourite" />,
            <MessageOutlined key="message" />,
            <ShareAltOutlined key="share" />,
          ]}
        >
          <Meta
            avatar={<Avatar src={this.props.profilepic} />}
            title={this.props.name}
            description={"Rs." + this.props.price}
          />
        </Card>
      </Col>
    );
  }
}

export default ProductCard;
