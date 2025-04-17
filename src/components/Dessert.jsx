import { useState } from "react";

export default function Dessert ({dessert, handleClick, dessertList}){

    function findQuantity(list){

        let d = list.find(d=> dessert.name=== d.name)
        return d ? d.quantity : 0
    }
    let quantity= findQuantity(dessertList);

    console.log(quantity)

    function addItem(action){
        
        if (action =="decrement"){
            quantity--;
        }
        else {
            quantity++;
        }

        handleClick(dessert, action);
    }
    
    return (
        <div className="">
            <div className={`mb-10 relative w-fit flex justify-center rounded-lg ${quantity>0? 'outline outline-2 outline-Red':''}`}>
                <picture>
                    
                    <source media="(max-width: 768px)" srcSet={dessert.image.mobile} />
                    <source media="(max-width: 1024px)" srcSet={dessert.image.tablet} />
                    <source media="(min-width: 768px)" srcSet={dessert.image.desktop} />
                    <img className="rounded-lg md:w-auto md:h-auto" src={dessert.image.desktop} alt={dessert.name} />
                </picture>
                {
                    quantity===0 ?  (

                        
                        <button className="border-Rose-400 border-[1px] bg-Rose-50 flex items-center justify-center gap-2 rounded-3xl py-2 px-1 text-Rose-900 font-medium absolute -bottom-6 hover:text-Red hover:border-Red w-2/3" onClick={ ()=>{addItem("add")}}>
                            <img className="w-5" src="/product-list-with-cart/assets/images/icon-add-to-cart.svg" alt="add to cart" />
                            Add To Cart
                        </button>
                    ) : (
                        <div className="bg-Red flex justify-between items-center rounded-3xl py-2 px-3   text-Rose-50 font-medium absolute -bottom-6 w-2/3">
                            <button className="group rounded-full border-[1px] border-Rose-50 w-6 h-6 flex items-center justify-center hover:bg-Rose-50" onClick={ ()=> {addItem("decrement")}}>
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                     className="w-3 h-3 fill-Rose-50 group-hover:fill-Red" 
                                     viewBox="0 0 10 2">
                                    <path d="M0 .375h10v1.25H0V.375Z"/>
                                </svg>
                            </button>
                            {quantity}
                            <button className="group rounded-full border-[1px] border-Rose-50 w-6 h-6 flex items-center justify-center hover:bg-Rose-50"  onClick={ ()=> {addItem("increment")}}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="w-3 h-3 fill-Rose-50 group-hover:fill-[hsl(14,86%,42%)]" 
                                     viewBox="0 0 10 10">
                                     <path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/>
                                </svg>
                            </button>
                        </div>
                    )
                }
            </div>
            <div>
                <p className="text-Rose-400">{dessert.category}</p>
                <h3 className="text-lg font-semibold">{dessert.name}</h3>
                <h3 className="text-lg font-semibold text-Red">${dessert.price.toFixed(2)}</h3>
            </div>
        </div>
        
    )
}
