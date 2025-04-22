import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useResataurantMenu";
import RestCategory from "./RestCategory";
import { useState } from "react";
const RestauMenu = () => {

    const {resId} = useParams();

    const restInfo =  useRestaurantMenu(resId); //custom hook to fetch data and give it restMenu 
    const [showIndex, setShowIndex]  = useState(0);
 
    // useEffect(()=>{
    //     fetchMenu();
    // },[]);
    // const fetchMenu = async () => {
    //     const data = await fetch(
    //         MENU_API_URL+ 
    //         resId
    //         +"&catalog_qa=undefined&submitAction=ENTER"
    //     );
    //     const json = await data.json();
    //     console.log(json);
    //     setRestInfo(json.data);
    // }
    const info = restInfo?.cards?.[2]?.card?.card?.info;
    
    if (!info) return <Shimmer />;
    
    const { name, cuisines, costForTwoMessage } = info;
    const regularCards = restInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const categories = regularCards.filter(c => c.card?.card?.
        ["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(regularCards, categories);
    const itemCards = regularCards?.[2]?.card?.card?.itemCards;
    return (
        <div className="text-center">
            <h1 className="font-bold my-5 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {/* <h2>Menu</h2>
            <ul>
                {Array.isArray(itemCards) ? (
                    itemCards.map((item, index) => (
                    <li key={item?.card?.info?.id || index}>
                        {item?.card?.info?.name} - {item?.card?.info?.defaultPrice/100}
                    </li>
                    ))
                ) : (
                    <li>Loading menu...</li> 
        
                )}
            </ul> */}

            {categories.map((category,index)=>(
                <RestCategory key={index} 
                    data={category?.card?.card}
                    showItems={index===showIndex?true:false}
                    setShowIndex={() => setShowIndex(index)}
                />
                ))}
        </div>
    );
};
export default RestauMenu;