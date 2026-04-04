import "./Style.css";
function About() {
  var a = 10;
  var b = 20;
  var msg = "";
  if (a > 1) {
    msg = "A is >1";
  } else {
    msg = "A is <1";
  }
  var mycolor = {
    backgroundColor: "blue",
    color: "white",
  };
  return (
    <div>
      <h1>About Component</h1>
      {10 + 10}
      <br />A Value is{a}
      <br />B Value is{b}
      <br />
      Sum is {a + b}
      <br />
      {msg}
      <p style={{ background: "red", color: "white" }}>I am Inline Css</p>
      <p style={mycolor}>I am Internal Css</p>
      <p className="myclass">I am Class Demo</p>
    </div>
  );
}
export default About;
