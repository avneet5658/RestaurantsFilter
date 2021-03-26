import { FetchShopSuccess, FilterData } from "./shopType";

const initialState = {
  restData: [],
  cuisineData: [],
  filterData: [],
};

const shopReducer = (state = initialState, action) => {
  console.log("AAy");
  switch (action.type) {
    case FetchShopSuccess:
      return {
        ...state,
        restData: [...action.payload1],
        cuisineData: [...action.payload2],
      };
    case FilterData:
      return {
        ...state,
        filterData: [...action.payload],
      };

    default:
      return state;
  }
};

export default shopReducer;
