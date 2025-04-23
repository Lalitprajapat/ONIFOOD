import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";
const ItemList = ({items}) => {
    const dispatch = useDispatch();
    const handleAddItem = (item) =>{
        dispatch(addItems(item));
    }
    return (
        <div>
           
                {items.map((item,index) => (
                    <div key={index} className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between" >
                        <div className="9/12">
                        <div className="py-2">
                            <span>{item?.card?.info?.name}</span>
                            <span> - ₹ {item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</span>
                        </div>
                        <p className="text-xs">{item?.card?.info?.description}</p>
                        </div>
                        <div className="3/12">
                            <div className="absolute">
                                <button className="text-green-400  px-5 bg-white shadow-lg rounded-lg mx-5 mt-20 hover:cursor-pointer"
                                    onClick={()=>handleAddItem(item)}
                                >add+</button>
                            </div>
                            {item?.card?.info?.imageId ? (
                                <img src={CDN_URL + item.card.info.imageId} className="w-30 h-30 " />
                                ) : (
                                <div className="w-30 h-30 bg-gray-200" />  
                                )
                            }
                        
                        </div>
                    </div>
                ))}
            
        </div>
    )
}
export default ItemList;