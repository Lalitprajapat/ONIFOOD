import { useEffect, useState } from "react";
import RestaurantCard, {withLabel} from "./RestCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
const Body = () => {
  const [restList, setRestList] = useState([]); // use clear names
  
  const[searchText, setsearchText] = useState("");
  const onlineStatus = useOnline();
  const[filteredRest, setfilteredRest] = useState([]);
  const RestCardLabeled = withLabel(RestaurantCard);

  const fetchData = async () => {
    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.730231845869277&lng=76.77189049002534&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json); 
    setRestList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setfilteredRest(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    console.log("body rendered", filteredRest);
  }
  
  useEffect(()=>{
    fetchData();
  }, []);  
  if(restList.length === 0){
    return <Shimmer/>
  }

  
  if (!onlineStatus) {
    return <h1>Looks Like Your Internet Connection is not working</h1>;
  }
  
  return restList.length === 0 ? <Shimmer/> : (
    <div className="body">
      <div className="filter">
        <div className="search m-4 p-4">
          <input type="text" className="border border-solid border-black m-2" value={searchText} 
          onChange={(e)=>{
            setsearchText(e.target.value);
          }}/>
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
          onClick={()=>{
            const searchedRest = restList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setfilteredRest(searchedRest);
          }}>
            Search</button>
        </div>
        <div className="search m-4 p-4 flex items-center rounded-lg"> 
          <button
            className="px-4 py-2 bg-gray-100"
            onClick={() => {
              const filteredList = restList.filter(
                (res) => res.avgRating > 4.4
              );
              console.log("Filtered:", filteredList);
              setRestList(filteredList);
            }}
          >
            Top-Rated
          </button>
        </div>
       
      </div>

      <div
        className="flex flex-wrap gap-{2px}"
      >
        {filteredRest.map((restaurant, index) => (
          <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
           {
            restaurant.info.type === "F" ?
             (<RestCardLabeled resData={restaurant}/>) : (
             <RestaurantCard  resData={restaurant} />
             )
           }
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
