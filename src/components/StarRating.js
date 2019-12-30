import React, { Component } from "react";
import Star from "./Star";
import PropTypes from "prop-types";

class StarRating extends Component {
  state = {
    starsSelected: 0
  };

  change = starsSelected => {
    this.setState({ starsSelected });
  };

  render() {
    const { totalStars } = this.props;
    const { starsSelected } = this.state;
    return (
      <div className="star-rating">
        {[...Array(totalStars)].map((n, i) => (
          <Star
            key={i}
            selected={i < starsSelected}
            onClick={() => this.change(i + 1)}
          />
        ))}
        <p>
          {starsSelected} of {totalStars} stars
        </p>
      </div>
    );
  }
}
StarRating.propTypes = {
  totalStars: PropTypes.number
};
StarRating.defaultProps = {
  totalStars: 5
};

export default StarRating;
