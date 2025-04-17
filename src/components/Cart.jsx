import { useState } from "react"
import CartElement from "./CartElement";

export default function Cart({list, deleteFunction, confirmFunction}){

   let numElements= list.length;

    let total= 0;

    list.forEach(element => {

        total= total + (element.quantity* element.price);
    });
    return(
        
        <div className="bg-Rose-50 rounded-lg p-6 flex flex-col gap-7 w-full md:w-1/3">
            <h1 className="text-2xl font-bold text-Red">Your Cart ({numElements})</h1>
            {
            numElements === 0 ? (
                
                <div className="flex flex-col items-center justify-center gap-3">
                    <img src="/assets/images/illustration-empty-cart.svg" alt="empty cart" />
                    <p className="text-Rose-500 font-semibold">Your added items will appear here</p>
                </div> ) : 
                (
                <div>
                    {list.map((element) => (
                    <>
                        <CartElement item={element} remove={(item)=>{deleteFunction(item)}} />
                        <hr className="mb-3" />
                    </>
                    ))}
                    <div className="flex justify-between gap-1 mt-7 mb-5">
                        <p className="text-Rose-900 text-sm">Order Total</p>
                        <h1 className="text-2xl font-bold text-Rose-900">${total.toFixed(2)}</h1>
                    </div>
                    <div className="bg-rose-50 rounded-md py-4 flex items-center justify-center gap-2 mb-5">
                        <img src="/assets/images/icon-carbon-neutral.svg" alt="carbon neutral icon" />
                        <p className="text-Rose-900 text-sm">This is a <span className="font-semibold">carbon-neutral</span> delivery</p>
                    </div>
                    <button className="w-full text-center bg-Red rounded-3xl py-3 text-Rose-50 font-medium" onClick={confirmFunction}>Confirm Order</button>
               </div>
            )}
        </div>) 

}