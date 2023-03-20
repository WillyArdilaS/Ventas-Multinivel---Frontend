import { useCartContext } from '../../context/CartContext'
import { useState } from 'react'


const ProductCard = ({info}) => {

    const { addProduct } = useCartContext();
    const [quantity, setQuantity] = useState(0)
    
    const onAdd = () =>{
        addProduct(info,quantity)
    }
    

    return (
        <article id="productCard" className="w-2/3 flex flex-col items-center mx-auto mb-36 px-6 bg-white shadow-md rounded-md">
            <img src={info.ruta_imagen} alt="Imagen del producto" id="productImage" width="200" 
            height="100" className="-mt-14"/>
            <h2 className="mt-2 text-yellow text-xl font-title font-bold"> {info.nombre} </h2>

            <div id="productCard-details" className="flex justify-between items-center mt-6">
                <div id="details-quantity" className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 
                    20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"/></svg>
                    
                    <input type="number" name="" id="" value={quantity} placeholder="Cantidad" min={0} className="w-4/6 ml-1 px-2 py-2 rounded-md bg-white shadow-md text-black 
                    font-medium font-paragraph text-xs placeholder-slate-400 border-black border-x-2 border-y-2" onChange={(e) => setQuantity(Number(e.target.value))} required/>
                </div>

                <div id="details-price" className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-yellow">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 
                    12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    <h3 className="ml-1 text-sm text-center text-black font-paragraph"> {info.precio} </h3>
                </div> 
            </div>  

            <button type="button" id="button-addProduct" className="w-48 inline-flex justify-center items-center -mb-6 mt-6 px-5 py-3 bg-yellow shadow-md text-white 
            font-subtitle font-medium text-sm text-center border-yellow border-x-2 border-y-2 rounded-lg hover:bg-white hover:text-yellow transition-colors" onClick={onAdd}>
                <svg aria-hidden="true" className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 
                11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 
                16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
            Agregar al carrito </button>   
        </article>
    )
}

export default ProductCard