import { useCartContext } from '../../context/CartContext';

const ShoppingCartItem = ({ product }) => {
    const {removeProduct} = useCartContext();

    return (
        <tr className="border-b text-center rounded-2xl">
            <td
                className="text-lg font-medium text-white px-3 py-4"
            >
                <img src={product.ruta_imagen} alt=""  className='rounded-2xl object-cover h-35 w-90 '/>
            </td>
            <td
                className="text-lg font-medium text-white px-3 py-4"
            >
                {product.nombre}
            </td>
            <td
                className="text-lg font-medium text-white px-3 py-4"
            >
                 ${product.precio}
            </td>
            <td
                className="text-lg font-medium text-white px-3 py-4"
            >
                {product.quantity}
            </td>
            <td
                className="text-lg font-medium text-white px-3 py-4"
            >
                {product.quantity*product.precio}
               
            </td>
            <td
                className="text-lg font-medium text-white px-3 py-4"
            >
                <button className="bg-red-500 hover:bg-red-700 hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                onClick={()=>removeProduct(product.id)}>
                    Remover
                </button>
                
            </td>
        </tr>
    )
}

export default ShoppingCartItem;