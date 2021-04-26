import React from "react";

const Job = (props) => {
  return (
    <div className="box-content" style={{ border: "solid 5px " + props.Color }}>
      <h3>{props.Title}</h3>

      <p>
        {props.ContractType}- {props.Country} - {props.City}
      </p>
    </div>
  );
};

export default Job;
