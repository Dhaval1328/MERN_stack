// import React from "react";
// function Counter() {
//   const [data, setdata] = React.useState(0);

//   return (
//     <div>
//       <h1>Value is {data}</h1>
//       <input type="button" onClick={() => setdata(data + 1)} value="+" />
//       <input type="button" onClick={() => setdata(data - 1)} value="-" />
//       <input type="button" onClick={() => setdata(0)} value="X" />
//     </div>
//   );
// }
// export default Counter;

import React from "react";
function Counter() {
  const [data, setdata] = React.useState(0);
  const [msg, setMsg] = React.useState("");

  const incrementData = () => {
    if (data >= 5) {
      setMsg("Sorry>5");
    } else {
      setMsg(data + 1);
      setMsg("");
    }
  };
  const decrementData = () => {
    if (data <= 0) {
      setMsg("Sorry<0");
    } else {
      setMsg(data - 1);
      setMsg("");
    }
  };

  return (
    <div>
      <h1>Value is {data}</h1>
      <input type="button" onClick={incrementData} value="+" />
      <input type="button" onClick={decrementData} value="-" />
      <input type="button" onClick={() => setdata(0)} value="X" />
      <p style={{ color: "red" }}>{msg}</p>
    </div>
  );
}
export default Counter;
