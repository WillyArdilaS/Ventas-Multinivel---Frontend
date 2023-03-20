import { useCartContext } from '../../context/CartContext';

const ShoppingCartItem = ({ product }) => {
    const {removeProduct} = useCartContext();

    return (
        <tr className="border-b-2 border-yellow text-black text-center text-base font-semibold font-paragraph">
            <td className="px-6 py-4">
                <img src={product.ruta_imagen} alt=""  className='rounded-2xl object-cover h-25 w-80'/>
            </td>
            <td>
                {product.nombre}
            </td>
            <td>
                 ${product.precio}
            </td>
            <td>
                {product.quantity}
            </td>
            <td>
                {product.quantity*product.precio}
               
            </td>
            <td>
                <button className="w-3/5 px-4 py-3 bg-yellow border-yellow border-x-2 border-y-2 rounded-lg shadow-md text-base font-title hover:bg-transparent transition-colors"
                onClick={()=>removeProduct(product.id)}> Remover </button>
            </td>
        </tr>
    )
}

export default ShoppingCartItem;