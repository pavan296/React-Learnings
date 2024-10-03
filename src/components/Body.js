import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react"; //named import

const Body = () => {
  const [topList, setTopList] = useState(resObj);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = topList.filter(
              (res) => res.card.card.info.avgRating > 4.5
            );

            setTopList(filterList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {topList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            resData={restaurant.card.card.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
