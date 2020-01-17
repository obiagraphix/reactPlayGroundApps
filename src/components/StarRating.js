import React, { Component } from "react";
import Star from "./Star";
import PropTypes from "prop-types";
import { rateColor } from "../Redux/Actions";

const StarRating = (
  { store },
  { rating = 0, id, totalStars = 5, onRate = (f) => f }
) => {
  //const { id } = props;

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((n, i) => (
        <Star key={i} selected={i < rating} onClick={() => onRate(i + 1)} />
      ))}
      <p>
        <br />
        {rating} of {totalStars} stars
        {/* {store.dispatch(rateColor(id, rating))} */}
      </p>
    </div>
  );
};

StarRating.propTypes = {
  totalStars: PropTypes.number
};
StarRating.defaultProps = {
  totalStars: 5
};

export default StarRating;
