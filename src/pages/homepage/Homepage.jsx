
import Searchbar from "../../components/searchbar/Searchbar";
import "./homepage.scss";

function Homepage(){
    return(
        <div className="homepage">

            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">Find Real Estate & Get your Dream Place </h1>
                <p>
                    hey, this is abisha.
                </p>
                <Searchbar/>
                <div className="boxes">
                    <div className ="box">
                        <h1>16+</h1>
                        <h2>Years of Experience</h2> 
                    </div>
                    <div className ="box">
                        <h1>200</h1>
                        <h2>Award Gained</h2> 
                    </div>
                    <div className ="box">
                        <h1>1200+</h1>
                        <h2>Property Ready</h2> 
                    </div>
                </div>
                </div>
                
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt=""></img>
            </div>
        </div>
    )
}

export default Homepage;