import React from "react";
import { Avatar, Comment } from "antd";
import Title from "antd/es/typography/Title";
import ava1 from 'public/ava1.jpg'
import ava2 from 'public/ava2.png'
import ava3 from 'public/ava3.png'
import ava4 from 'public/ava4.png'
import ava5 from 'public/ava5.jpeg'
import './Comment.css'


function Comments(props) {
    const avatars=[ava1,ava2,ava3,ava4,ava5]
  return (
    <Comment
      avatar={
        <Avatar
          src={avatars[Math.floor(Math.random() * Math.floor(avatars.length))]}
          alt="Han Solo"
        />
      }
      content={
        <Title level={5}>
            {props.comment}
        </Title>
      }
    />
  );
}

export default Comments;
