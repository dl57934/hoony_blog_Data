import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../reducer";
import Timer from "./presenter";

const mapStateToProps = state => {
  console.log(state);
  return {
    ...state
  };
};

export default connect(mapStateToProps)(Timer);

//mapDispatchToProps
//dispatch action을 리듀서로 보내는 function이다.

// function mapDispatchToProps(dispatch) {
//   return {
//     startTimer: bindActionCreators(actionCreators.startTimer, dispatch),
//     restartTimer: bindActionCreators(actionCreators.restartTimer, dispatch),
//     addTimer: bindActionCreators(actionCreators.addTimer, dispatch)
//   };
// }
