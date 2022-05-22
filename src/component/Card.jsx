import React from "react";

const Card = (props) => {
  console.log({ props });
  const cards = props.data.map((el) => {
    return (
      <div
        style={{
          backgroundColor: el.color,
          width: "50%",
          margin: "auto",
          marginTop:"20px",
          padding: "20px",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "space-between",
            }}
          >
            <h3>{el.date}</h3>
            <img
              style={{ width: "80px" }}
              alt="Logo of element"
              src={el.logo}
            />
          </div>
          <div>
            <button
              style={{
                backgroundColor: "black",
                height: "40px",
                color: "white",
                fontSize: "120%",
                padding: "0px 5px",
              }}
            >
              Case Study
            </button>
            <h1>{el.heading}</h1>
            <h1>{el.subheading}</h1>
            <div style={{display:"flex",textAlign:"center", justifyContent:"space-between"}}>
              <p style={{ fontWeight: "600", fontSize: "120%" }}>
                {el.devices} - Mobile
              </p>
              <h2>{"-->"}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <div>{cards}</div>;
};

export default Card