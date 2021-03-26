import { FetchShopSuccess, FilterData } from "./shopType";
import RestData from "../restaurants.json";
import CusineData from "../cuisines.json";
const fetchShopSuccess = (foodData, cusData) => {
  return {
    type: FetchShopSuccess,
    payload1: foodData,
    payload2: cusData,
  };
};

export const filterItems = (arrData) => {
  return {
    type: FilterData,
    payload: arrData,
  };
};

export const fechtItem = () => {
  return (dispatch) => {
    console.log(RestData[0].data);
    dispatch(fetchShopSuccess(RestData[0].data, CusineData[0].data));
  };
};
