import { useState } from "react";
import "./styles.css";
const button = ["Indian", "Continental", "Chineese"];
const dishes = {
  Indian: {
    dishList: ["Chole-Bhature", "Pani-puri", "Samosa"],
    rating: ["5/5", "4.5/5", "4/5"]
  },

  Continental: {
    dishList: ["Pudding", "Taco", "Waffles"],
    rating: ["4/5", "3/5", "4/5"]
  },

  Chineese: {
    dishList: ["Paneer-chilli", "Chow-Mein", "Spring-roll"],
    rating: ["5/5", "4.5/5", "4/5"]
  }
};

export default function App() {
  const [FoodName, setFoodName] = useState("Indian");
  function buttonhandler(item) {
    setFoodName(item);
  }
  return (
    <div className="App">
      <h1>
        Yummy <span style={{ color: "purple" }}>Food</span>
      </h1>
      <h2 style={{ fontSize: "15px", margin: "auto" }}>
        Checkout my favorite foods with rating. Select a genre to get started.
      </h2>
      <hr />
      <div>
        {button.map((item, index) => {
          return (
            <button
              className="btn"
              onClick={() => buttonhandler(item)}
              style={{
                border: "1px solid purple",
                padding: "0.5rem",
                marginRight: "20px"
              }}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div>
        <ul style={{ listStyle: "none" }}>
          {dishes[FoodName].dishList.map((item, index) => {
            return (
              <li style={{ paddingTop: "10px" }}>
                {item}
                <span style={{ paddingLeft: "10px" }}>
                  {dishes[FoodName].rating[index]}
                </span>
                <hr style={{ width: "50%" }} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
