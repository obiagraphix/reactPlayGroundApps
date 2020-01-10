import React from "react";

const Member = ({ email, picture, name, location }) => {
  return (
    <div className="col-md-4 mr-auto m1">
      <div className="member card">
        <div className="card-body">
          <img src={picture.thumbnail} alt="" />
          <h1>
            {name.first} {name.last}
          </h1>
          <p>
            <a href={"mailto:" + email}>{email}</a>
          </p>
          <p>
            {location.city}, {location.state}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Member;
