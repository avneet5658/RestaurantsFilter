import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { filterItems } from "../redux/shopAction";
import parse from "html-react-parser";

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
    var tempData;
    input.map((res) => {
      foodItem.cuisineData.map(
        (res1) =>
          res === res1.name ? (tempD = [...tempD, ...res1.restaurants]) : null
        // setFilter([...filter, ...res1.restaurants])
      );
    });
    tempData = tempD.map((resTempD) => {
      return [resTempD.id, resTempD];
    });
    var mymap = new Map(tempData);
    let result = [...mymap.values()];
    console.log(result);
    // let jsonObject = tempD.map(JSON.stringify);
    // let tempSet = new Set(jsonObject);
    // let tempArray = Array.from(tempSet).map(JSON.parse);
    // console.log(tempArray);

    // setFilter(tempD);
    // setFilter(temArray);
    setFilter(result);
  };

  return (
    <div>
      <center>
        <h1>Restaurants</h1>
      </center>
      <select multiple={true} onChange={(e) => handleChange(e)}>
        {foodItem.cuisineData.map((res, id) => (
          <option value={res.name}>{res.name}</option>
        ))}
      </select>
      &nbsp;
      <button onClick={handleClick}>Filter</button>
      <button onClick={() => setFilter([])}>Reset</button>
      <div className="row">
        {/* {console.log(foodItem.restData)} */}
        {foodItem.filterData.length === 0
          ? foodItem.restData.map((res, ind) => (
              <div key={res.id} className="col-md-3 p-4">
                <img src="logo192.png" alt="img1" />
                <p>{res.name}</p>
                {}
                <p>{parse(res.description)}</p>
              </div>
            ))
          : foodItem.filterData.map((res, ind) => (
              <div className="col-md-3 p-4">
                <img src="logo192.png" alt="img1" />
                <p>{res.name}</p>
                <p>{res.description}</p>
              </div>
            ))}
        {/* Hello React */}
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
