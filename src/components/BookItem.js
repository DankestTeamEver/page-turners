import React from "react";
// import ReadMoreReact from 'read-more-react';
import ReactReadMoreReadLess from "react-read-more-less";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as solidBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as outlineBookmark } from "@fortawesome/free-regular-svg-icons";

const BookItem = (props) => {
  let bookMarkIcon = <FontAwesomeIcon icon={solidBookmark} size="2x" className="bookmark"/>;
  let outlinedBookmark = <FontAwesomeIcon icon={outlineBookmark} size="2x" />;

  return (
    <div className="book">
      <h3 className="title">{props.title}</h3>
      <div className="imageContainer bookImage">
        <img src={props.thumbnail} alt={props.title} />
      </div>
      <div className="writtenInfo info">
        {props.isAdded ? (
          <span className="bookmark">{bookMarkIcon}</span>
        ) : (
          <span className="bookmark">{outlinedBookmark}</span>
        )}
        <p className="author">{props.authors}</p>
        <p>Genre: {props.genre}</p>
        <p>Rating: {props.rating}/5</p>
      </div>
      {props.description ? (
        <div className="bookDescription blurb">
          <ReactReadMoreReadLess
            charLimit={200}
            readMoreText={<p className="moreOrLess">Read more ▼</p>}
            readLessText={<p className="moreOrLess">Read less ▲</p>}
            readMoreClassName="read-more-less--more"
            readLessClassName="read-more-less--less"
          >
            {props.description}
          </ReactReadMoreReadLess>
        </div>
      ) : null}
    </div>
  );
};

export default BookItem;
