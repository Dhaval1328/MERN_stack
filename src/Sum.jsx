import React from "react";
function Sum() {
  const [no1, setNo1] = React.useState(0);
  const [no2, setNo2] = React.useState(0);
  const [msg, setMsg] = React.useState("");
  const doSum = () => {
    var c = parseInt(no1) + parseInt(no2);
    setMsg("Sum is: " + c);
    localStorage.setItem("lastans", "Sum is " + c);
  };
  return (
    <>
      <h1>Sum</h1>
      No1 : <input type="text" onChange={(e) => setNo1(e.target.value)} />
      No2 : <input type="text" onChange={(e) => setNo2(e.target.value)} />
      <input type="button" value="+" onClick={doSum} />
      {msg}
    </>
  );
}
export default Sum;
