import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import './Home.css'
import Button from "./Button";


function Home() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products').then(
            response => response.json()
        ).then(json => setData(json.products))
        console.log(data) //returns empty because sync nature
    }, [])

    return (
        <>
            <div className="heading">
                <h1>All Items</h1>
            </div>
            <div className="items">
                {data.map(item => <div key={item.id} className="item">
                    
                    <div className="image"><img src={item.thumbnail} alt={item.description} width='340px' height='453px'></img></div>
                    <div className="title">Title: {item.title}</div>
                    <div className="price">Price: ${item.price}</div>
                    
                    <Button />
                    
                </div>)}

            </div>
        </>

    )
}

export default Home;