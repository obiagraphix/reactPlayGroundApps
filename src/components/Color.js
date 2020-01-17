import React from "react";
import StarRating from "./StarRating";
import { addColor, removeColor, rateColor } from "../Redux/Actions";
import { MdDelete } from "react-icons/md";
import PropTypes from "prop-types";

const Color = ({ store }, props) => {
  const { id, title, color, rating, timestamp } = props;

  return (
    <section className="color" style={{ background: color, color: "red" }}>
      <h1 ref={title}>{title}</h1>
      <div className="color" style={{ background: color }}></div>
      <br />
      <button onClick={() => store.dispatch(removeColor(id))}>
        <MdDelete size="2em" />
      </button>{" "}
      <br />
      <div>
        <br />
        <br />
        <StarRating
          starsSelected={rating}
          onRate={(rating) => store.dispatch(rateColor(id, rating))}
        />
      </div>
    </section>
  );
};

Color.contextTypes = {
  store: PropTypes.object
};
Color.propTypes = {
  title: PropTypes.string,
  rating: PropTypes.number,
  color: PropTypes.string,
  onRate: PropTypes.func
};

Color.defaultProps = {
  rating: 0
};

export default Color;
