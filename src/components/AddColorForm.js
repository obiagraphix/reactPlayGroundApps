import React from "react";
import PropTypes from "prop-types";

const AddColorForm = ({ onNewColor = f => f }) => {
  let _title, _color;
  const submit = e => {
    e.preventDefault();
    onNewColor(_title.value, _color.value);
    _title.value = "";
    _color.value = "#000000";
    _title.focus();
  };

  return (
    <form onSubmit={submit}>
      <input
        ref={input => (_title = input)}
        type="text"
        placeholder="color title..."
        required
      />
      <br></br>
      <br></br>
      <input ref={input => (_color = input)} type="color" required />
      <br></br>
      <br></br>
      <button>ADD</button>
    </form>
  );
};

AddColorForm.propTypes = {
  onNewColor: PropTypes.func
};

AddColorForm.defaultProps = {
  onNewColor: f => f
};
export default AddColorForm;
