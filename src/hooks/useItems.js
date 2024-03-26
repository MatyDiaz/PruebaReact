import { useState } from "react";


export const useItems = () => {
    const [items, setItems] = useState([]);

    const addItem = (text) => {
        const newItem = {
            id: crypto.randomUUID(),
            timestamp: Date.now(),
            text,
        }
    
        setItems((prevItems)=>{
            return [...prevItems, newItem]
        })
    }
 

    const removeItem = (id)=>{
        setItems(prevItems=>{
          return prevItems.filter(currentItem=>currentItem.id !== id)
        })
    }

    return {
        items,
        addItem,
        removeItem
    }

}