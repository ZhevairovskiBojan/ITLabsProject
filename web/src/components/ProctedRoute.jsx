import React, { useEffect, useState } from "react";

function ProtectedRoute() {

    const [category, setCategory] = useState([]);

    const fetchCategory = async () => {
        try{
            const res = await fetch('/api/v1/category', {
                headers: {
                    Authorization: `Bearer ${localStorage.getCategory('token')}` ,
                },
            });
            const data = await res.json();
            if(res.ok) {
                setCategory(data.data.category);
            }   else {
                    console.log('Error', data.message);
                }
            } catch (err) {
            console.log(err);
        }
};

    useEffect(()=> {
        fetchCategory();

    },[]);


    return <div>

        <h3>Category:</h3>
        {category.map((category)=> (
            <div key={category_id}>
        <h4>{category.title}</h4>
        <p>{category.icon}</p>
        </div>
        ))}
    </div>
}

export default ProtectedRoute;