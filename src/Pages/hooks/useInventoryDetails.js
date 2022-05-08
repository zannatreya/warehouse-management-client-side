import { useEffect, useState } from "react";


const useInventoryDetails = (inventoryId) => {
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        const url = `https://guarded-wildwood-20406.herokuapp.com/product/${inventoryId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [inventoryId]);
    return [inventory];
};

export default useInventoryDetails;



