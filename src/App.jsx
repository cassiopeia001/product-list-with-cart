
import './App.css';
import Dessert from './components/Dessert';
import List from './components/List';
import Cart from './components/Cart';
import desserts from "./data.json"
import { useState } from 'react';
import OrderConfirmed from './components/OrderConfirmed';

function App() {

  const [dessertList, setdessertList]= useState([]);
  const [orderConfirmed, setOrderConfirmed]= useState(false);

  function updateDessertList (item, action){

    switch (action) {

      case "add": 
        const newItem= {
          name: item.name,
          price: item.price.toFixed(2),
          quantity: 1
        }
        const newList= [...dessertList, newItem];
        setdessertList(newList); break;

        case "decrement":
          
          decrementQuantity(item); break;
        
        case "increment":
          incrementQuantity(item); break;
    }
    
  }
   function decrementQuantity(item){
      
      const newList= dessertList.map( (dessert)=>{

        if(dessert.name===item.name){
          if(dessert.quantity ===1){
            return null;
          }
          return{...dessert, quantity: dessert.quantity-1}
          }
        
        return dessert
      }).filter( (item)=> item !==null && item!==undefined && item!=="")

      setdessertList(newList);
   }
   function incrementQuantity(item){
    
    const newList= dessertList.map( (dessert)=>{
      if(dessert.name===item.name){
        return{...dessert, quantity: dessert.quantity+1}
      }
      return dessert
    })
    setdessertList(newList);
   }
   function deleteItem(item){
      const newList= dessertList.map((element)=>{

        if(item.name===element.name){
          return null;
        }
        return element
      }).filter((element)=> element!==null && element!==undefined && item!=="");

      setdessertList(newList)
   }
  console.log(dessertList)

  return(
    <div className='font-redHatText h-full w-full bg-Rose-100 flex flex-col items-center p-4 gap-6 md:flex-row md:items-start md:p-10 md:justify-center'>
      <div className='md:w-2/3'>
        <h1 className='text-4xl font-bold mb-5 text-Rose-900'>Desserts</h1>
        <List> 
          <Dessert dessert={desserts[0]} handleClick={(dessert, action) => updateDessertList(dessert, action)} dessertList={dessertList}/>
          <Dessert dessert={desserts[1]} handleClick={(dessert, action) => updateDessertList(dessert, action)} dessertList={dessertList}/>
          <Dessert dessert={desserts[2]} handleClick={(dessert, action) => updateDessertList(dessert, action)} dessertList={dessertList}/>
          <Dessert dessert={desserts[3]} handleClick={(dessert, action) => updateDessertList(dessert, action)} dessertList={dessertList}/>
          <Dessert dessert={desserts[4]} handleClick={(dessert, action) => updateDessertList(dessert, action)} dessertList={dessertList}/>
          <Dessert dessert={desserts[5]} handleClick={(dessert, action) => updateDessertList(dessert, action)} dessertList={dessertList}/>
          <Dessert dessert={desserts[6]} handleClick={(dessert, action) => updateDessertList(dessert, action)} dessertList={dessertList}/>
          <Dessert dessert={desserts[7]} handleClick={(dessert, action) => updateDessertList(dessert, action)} dessertList={dessertList}/>
          <Dessert dessert={desserts[8]} handleClick={(dessert, action) => updateDessertList(dessert, action)} dessertList={dessertList}/>
        </List> 
      </div>
      <Cart list={dessertList} deleteFunction = {(item)=>{deleteItem(item)}} confirmFunction={()=>{setOrderConfirmed(true)}}/>
        {orderConfirmed &&
          <OrderConfirmed dessertList={dessertList} startOrder= {()=>{setdessertList([]); setOrderConfirmed(false)}}/>
        }
    </div>
  )
}

export default App;
