import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { filterItems } from "../redux/shopAction";

const HomePage = ({ foodItem, filterItems }) => {
  const [input, setInput] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    // console.log(filter);
    filterItems(filter);
  }, [filter]);
  const handleChange = (e) => {
    const temp = [...e.target.selectedOptions];
    setInput(temp.map((res) => res.value));
  };

  const handleClick = () => {
    var tempD = [];
    input.map((res) => {
      foodItem.cuisineData.map(
        (res1) =>
          res === res1.name ? (tempD = [...tempD, ...res1.restaurants]) : null
        // setFilter([...filter, ...res1.restaurants])
      );
    });
    var tempSet = new Set(tempD);
    console.log(...tempSet);
    setFilter(tempSet);
  };

  return (
    <div>
      <center>
        <h1>Restaurants</h1>
      </center>
      <select multiple={true} onChange={(e) => handleChange(e)}>
        <option value="Chinese">Chinese</option>
        <option value="Indian">Indian</option>
        <option value="Thai">Thai</option>
        <option value="Greek">Greek</option>
        <option value="Vietnamese">Vietnamese</option>
        <option value="French">French</option>
      </select>
      &nbsp;
      <button onClick={handleClick}>Filter</button>
      <div className="row">
        {/* {console.log(foodItem.restData)} */}
        {foodItem.filterData.length === 0
          ? foodItem.restData.map((res, ind) => (
              <div key={res.id} className="col-md-3 p-4">
                <img src="logo192.png" alt="img1" />
                <p>{res.name}</p>
                <p>{res.description}</p>
              </div>
            ))
          : foodItem.filterData.map((res, ind) => (
              <div className="col-md-3 p-4">
                <img src="logo192.png" alt="img1" />
                <p>{res.name}</p>
                <p>{res.description}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    foodItem: state.shop,
  };
};
const mapDispatchStatetoProps = (dispatch) => {
  return {
    filterItems: (filterArr) => dispatch(filterItems(filterArr)),
  };
};

export default connect(mapStatetoProps, mapDispatchStatetoProps)(HomePage);
