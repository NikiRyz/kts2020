import React from "react";
import { Avatar, Comment } from "antd";

function Comments() {
  return (
    <Comment
      avatar={
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
      }
      content={
        <p>
          Сегодня жарко. Рекомендую надеть спортивный лук: шорты, майку и
          кроссовки из ткани
        </p>
      }
    />
  );
}

export default Comments;
