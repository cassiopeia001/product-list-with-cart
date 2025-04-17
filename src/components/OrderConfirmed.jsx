import desserts from "../data.json"

export default function OrderConfirmed({dessertList, startOrder}){
    
    let total= 0 ;

    return(
        <div className="fixed inset-0 bg-black bg-opacity-60 w-full h-full overflow-y-auto">
            <div className="min-h-full flex flex-col justify-end md:justify-center items-center">
                <div className="w-full bg-Rose-50 rounded-t-2xl py-7 px-5 md:w-1/2 lg:w-1/3 md:rounded-2xl  overflow-y-auto">
                <img className="mb-5" src="/product-list-with-cart/assets/images/icon-order-confirmed.svg" alt="order confirmed icon" />
                <h1 className="text-4xl font-bold mb-1">Order Confirmed</h1>
                <p className="text-Rose-500 mb-6">We hope you enjoy your food!</p>
                <div className="bg-Rose-100 rounded-lg p-6 mb-7">
                    {
                    dessertList.map(element=>{

                        total= total+ (element.price*element.quantity)
                        let d= desserts.find(d=> d.name===element.name);
                        const imgSrc= d.image.thumbnail;
                        return(
                            <div>
                                <div className="flex justify-between items-center mb-3">
                                    <div className="flex gap-5">
                                        <img className="w-12 rounded-md" src={imgSrc} alt="dessert image" />
                                        <div className="flex flex-col justify-between">
                                            <p className="font-semibold text-sm text-Rose-900">{element.name}</p>
                                            <div className="flex gap-5 text-sm items-center">
                                                <p className="text-Red text-base font-semibold">{element.quantity}x</p>
                                                <p className="text-Rose-500 font-medium">@ ${element.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="font-semibold">${(element.price* element.quantity).toFixed(2)}</p>
                                </div>
                                <hr className="mb-3"/>
                            </div> )
                        
                    })
                    }
                    
                    <div className="flex justify-between mt-5 text-Rose-900">
                        <p >Order Total</p>
                        <p className="text-2xl font-bold">${total.toFixed(2)}</p>
                    </div>
                </div>
                <button className="w-full text-center bg-Red rounded-3xl py-3 text-Rose-50 font-medium" onClick={startOrder}>Start New Order</button>
            </div>
        </div>
        </div>
    )
}