import React from "react";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { DateTime } from "luxon";
import "./ListPostItem.scss";

const BASE_PATH = process.env.REACT_APP_BASE_PATH;

export const ListPostItem = (props) => {
  const { post } = props;
  const date = new Date(post.created_at);
  return (
    <Link className="list-post-item" to={`/blog/${post.path}`}>
      <Image src={`${BASE_PATH}/${post.miniature}`} fluid />
      <h2>{post.title}</h2>
      <span>
        {DateTime.fromISO(date.toISOString())
          .setLocale("es")
          .toFormat("dd 'de' LLLL 'del' yyyy")}
      </span>
    </Link>
  );
};
