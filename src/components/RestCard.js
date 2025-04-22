import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    
    return(
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"  >
            <img className="rounded-lg h-[250px] " alt="logo" 
            src={CDN_URL+resData?.info?.cloudinaryImageId} 
            />
            
            <h3 className="font-bold py-4 text-lg">{resData?.info?.name}</h3>
            <p>{resData?.info?.cuisines.join(", ")}</p>
            <h4>rating {resData?.info?.avgRating}</h4>
            <h4>{resData?.info?.costForTwo}</h4>
            <h5>{resData?.info?.sla.slaString}</h5>
        </div>
    );
};

export const withLabel = (RestaurantCard) => {
    return (props) => {
        return(
            <div>
               <label className="absolute text-white bg-black m-2 p-2 rounded-l">Food</label>
               <RestaurantCard {...props}/> 
            </div>
        );
    };
};


export default RestaurantCard;