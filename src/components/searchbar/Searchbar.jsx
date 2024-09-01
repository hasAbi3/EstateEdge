import "./searchbar.scss";
import {useState} from 'react';

const types=["buy", "rent"];

function Searchbar(){
    const [query, setquery] = useState({
        type:"buy",
        location: "",
        minPrice: 0,
        maxPrice: 0
    })

    const switchType = (val) =>{
        setquery((prev) => ({...prev, type: val}));
    }
    return(
        <div className="searchBar">
            <div className="type">
                {types.map((type) => (
                    <button 
                        key={type} 
                        onClick = {()=> switchType(type)}
                        className = {query.type === type ? "active" : ""}
                    >
                    {type}
                    </button>))}
            </div>
            <form>
                <input type="text" name ="location" placeholder="City Location"/>
                <input type = "number" min={0} max={10000000} name ="minPrice" placeholder ="Min Price"/>
                <input type = "number" min={0} max={10000000} name= "maxPrice" placeholder="Max Price"/>

                <button>
                    <img src="search.png"/>
                </button>
            </form>
        </div>
    )
}

export default Searchbar;