import React from "react";

function Mapdemo() {
  var mydata = [
    { pname: "iphone", pprice: 9990 },
    { pname: "Oppo", pprice: 499 },
    { pname: "Samsung", pprice: 899 },
    { pname: "Vivo", pprice: 599 },
  ];

  return (
    <>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>PName</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {mydata.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.pname}</td>
                <td>{value.pprice}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Mapdemo;
