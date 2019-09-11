import React, { Fragment } from "react";
import Content from "../Components/Courses/Content";

function home(props) {
  const { courseList, limit, page } = props;
  return (
    <Fragment>
      <Content courseList={courseList} limi={limit} page={page} />
    </Fragment>
  );
}

// class home extends Component {
//   render() {
//     return (
//       <div>
//         <Content />
//       </div>
//     );
//   }
// }

export default home;
