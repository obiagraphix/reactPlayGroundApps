import React, { Component } from "react";
import StarRating from "./StarRating";
import Star from "./Star";
import PropTypes from "prop-types";

class Color extends Component {
  componentWillMount() {
    this.style = { background: "#CCC" };
  }
  shouldComponentUpdate(nextProps) {
    return this.props.rating !== nextProps.rating;
  }
  componentWillUpdate(nextProps) {
    const { title, rating } = this.props;
    this.style = null;
    this.refs.title.style.backgroundColor = "red";
    this.refs.title.style.color = "white";
    alert(`${title}: rating ${rating} -> ${nextProps.rating}`);
  }
  componentDidUpdate(prevProps) {
    const { title, rating } = this.props;
    const status = rating > prevProps.rating ? "better" : "worse";
    this.refs.title.style.background = "";
    this.refs.title.style.color = "black";
  }
  render() {
    const { title, rating, color, onRate } = this.props;
    return (
      <section className="color" style={this.style}>
        <h1 style={this.style} ref="title">
          {title}
        </h1>
        <div className="color" style={{ background: color }}></div>
        <div>
          <br />
          <br />
          <StarRating starsSelected={rating} onRate={onRate} />
        </div>
      </section>
    );
  }
}
Color.propTypes = {
  title: PropTypes.string,
  rating: PropTypes.number,
  color: PropTypes.string,
  onRate: PropTypes.func
};

Color.defaultProps = {
  title: undefined,
  rating: 0,
  color: "#000",
  onRate: f => f
};

export default Color;
