import React from "react";
import Color from "./Color";

const ColorList = ({ colors = [], onRate = f => f, onRemove = f => f }) => {
  return (
    <div className="col-md-6">
      <div className="card c1">
        <div className="card-body">
          <div className="color-list">
            {colors.length === 0 ? (
              <p>No Colors Listed. (Add a color)</p>
            ) : (
              colors.map(color => (
                <Color
                  key={color.id}
                  {...color}
                  onRate={rating => onRate(color.id, rating)}
                  onRemove={() => onRemove(color.id)}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorList;
