import logo from "./logo.svg";
import "./App.css";
import { fechtItem } from "./redux/shopAction";
import { connect } from "react-redux";
import { useEffect } from "react";
import HomePage from "./component/HomePage";

function App({ fetchItem }) {
  useEffect(() => {
    fetchItem();
  }, []);
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}
const mapDispatchStatetoProps = (dispatch) => {
  return {
    fetchItem: () => dispatch(fechtItem()),
  };
};

export default connect(null, mapDispatchStatetoProps)(App);
