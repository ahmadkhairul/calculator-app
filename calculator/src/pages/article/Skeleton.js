import React from "react";

const style = {
  skeleton: {
    width: "400px",
    height: "80px",
    border: "1px solid rgb(133, 147, 163)",
    borderRadius: "3px",
    display: "flex",
    backgroundColor: "#e6dfdf"
  },
  skeleton__detail: {
    backgroundColor: "#e6dfdf"
  },
  skeleton__avatar: {
    margin: "10px",
    width: "60px",
    height: "60px",
    backgroundColor: "#ffffff",
    border: "1px solid rgb(133, 147, 163)",
    borderRadius: "3px"
  },
  skeleton__title: {
    margin: "10px",
    height: "15px",
    width: "286px",
    backgroundColor: "#ffffff",
    border: "1px solid rgb(133, 147, 163)",
    borderRadius: "3px"
  },
  skeleton__description: {
    margin: "10px",
    height: "10px",
    width: "286px",
    backgroundColor: "#ffffff",
    border: "1px solid rgb(133, 147, 163)",
    borderRadius: "3px"
  },
  skeleton__readmore: {
    margin: "10px",
    height: "10px",
    width: "70px",
    backgroundColor: "#ffffff",
    border: "1px solid rgb(133, 147, 163)",
    borderRadius: "3px"
  }
};

const Skeleton = () => {
  return (
    <section style={style.skeleton}>
      <div>
        <div style={style.skeleton__avatar} />
      </div>

      <div style={style.skeleton__detail}>
        <div style={style.skeleton__title} />
        <div style={style.skeleton__description} />
        <div style={style.skeleton__readmore} />
      </div>
    </section>
  );
};

export default Skeleton;
