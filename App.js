import React from "react";
import ReactDOM from "react-dom/client";








const Header = () => {
   return (
      <div className="header"> 
           <div className="logo-container">
                <img className="logo" src="https://assets.materialup.com/uploads/61d86780-be13-47fa-81a6-226aac22db27/preview.jpg"></img>
           </div>
           <div className="nav-items">
            <ul>
               <li> Home </li>
               <li> About us </li>
               <li> Address </li>
               <li> Contact us </li>
               <li> Cart </li>
            </ul>

           </div>

      </div>
   )
}

// const styleCard = {
//    backgroundColor: "#f0f0f0"
// }

const RestaurantCard = ({resName, cuisine, ratings, deliveryTime}) => {
   return (
      <div className="res-card" style={{backgroundColor: "#f0f0f0"}} >
         <img src="https://static.toiimg.com/thumb/54308405.cms?width=200&height=200"></img>
         <h3> {resName} </h3>
         <h3> {cuisine}</h3>
         <h4> {ratings}</h4>
         <h4> {deliveryTime} </h4>

            
      </div>
   )
}
// when we have to dynamically pass the data to components that can be done using props.
const Body = () => {
   return (
      <div className="body">
         <div className="search">Search</div>
         <div className="res-container">
                  <RestaurantCard 
                  resName = "Meghana Foods"
                  cuisine = "Biryani, North Indian" 
                  ratings = "4.4 stars" 
                  deliveryTime = "40 minutes"/>

                  <RestaurantCard
                  resName = "Dominoz"
                  cuisine = "Pizza, Burgers & Coke" 
                  ratings = "4.8 stars" 
                  deliveryTime = "15 minutes"/>
         </div>

      </div>
   )
}



const AppLayout = () => {
   return (
      <div className="app">
          <Header/>
          <Body />
      </div>
   )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <AppLayout />);
