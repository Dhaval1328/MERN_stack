import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Product from "./Product.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {
      /* <Product
      name="Samsung"
      Price="50000"
      imagepath="https://images.samsung.com/is/image/samsung/assets/in/home/HOME_Feature-Card_Galaxy-Z-Fold7_560x560_260303.jpg?$560_560_JPG$"
    />
    <Product
      name="Vivo"
      Price="50000"
      imagepath="https://images.samsung.com/is/image/samsung/assets/in/home/HOME_Feature-Card_Galaxy-Z-Fold7_560x560_260303.jpg?$560_560_JPG$"
    />
    <Product
      name="Apple"
      Price="50000"
      imagepath="https://images.samsung.com/is/image/samsung/assets/in/home/HOME_Feature-Card_Galaxy-Z-Fold7_560x560_260303.jpg?$560_560_JPG$"
    /> */
      <App />
    }
  </StrictMode>,
);
