import React, { Component } from "react";
import StarRating from "./StarRating";
import TimeAgo from "../components/TimeAgo";
import { MdDelete } from "react-icons/md";
import PropTypes from "prop-types";

class Color extends Component {
  render() {
    const { title, color, rating, timestamp, onRemove, onRate } = this.props;
    return (
      <section className="color" style={this.style}>
        <h1 ref="title">{title}</h1>

        <div className="color cl1" style={{ backgroundColor: color }}></div>
        <br></br>
        <TimeAgo timestamp={timestamp} />
        <div>
          <StarRating starsSelected={rating} onRate={onRate} />
        </div>
        <br></br>
        <button onClick={onRemove}>
          <MdDelete size="1em" className="md-delete" />
        </button>
      </section>
    );
  }
}

Color.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  rating: PropTypes.number,
  onRemove: PropTypes.func,
  onRate: PropTypes.func
};

Color.defaultProps = {
  rating: 0,
  onRemove: (f) => f,
  onRate: (f) => f
};

export default Color;
