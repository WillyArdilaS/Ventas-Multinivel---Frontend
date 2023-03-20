import { useCartContext } from '../../context/CartContext'
import ShoppingCartItem from './ShoppingCartItem';

const ShoppingCartContainer = () => {

  const {cart, total, confirmPurchase, cancelPurchase} = useCartContext();

  if(cart.length !== 0){
   return(
      <article className="fixed w-10/12 h-screen top-0 right-0 px-12 overflow-y-auto">
      <table className="max-w-screen-2xl overflow-x-auto mt-8 ml-5 mr-5">
               <thead>
                  <tr className="bg-yellow text-white text-lg font-title text-center">
                     <th className="w-1/6 min-w-[160px]"></th>

                     <th className="w-1/6 min-w-[160px] px-3 py-4">
                        Nombre
                     </th>

                     <th className="w-1/6 min-w-[160px] px-3 py-4">
                        Precio unitario
                     </th>

                     <th className="w-1/6 min-w-[160px] px-3 py-4">
                        Cantidad
                     </th>

                     <th className="w-1/6 min-w-[160px] px-3 py-4">
                        Precio total
                     </th>

                     <th ></th>
                  </tr>
               </thead>

               <tbody>
                  {
                     cart.map(product => <ShoppingCartItem key={product.id} product={product} />)
                  }

                  <tr className="border-b-2 border-yellow text-right">
                     <td colSpan="4">
                        <section className="flex justify-between px-6 py-5">
                           <div className="flex flex-col justify-center items-center ">
                              <button type="button" className="inline-flex items-center px-4 py-3 bg-darkGreen border-darkGreen border-x-2 border-y-2 rounded-lg shadow-md 
                              text-white font-semibold text-base font-title text-center hover:bg-transparent hover:text-darkGreen transition-colors" onClick={confirmPurchase}>
                                    <img className="mr-3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAATtJREFUSEvFle1RwzAQRN9WQAnQAVABpAKgg5QQKsCpAEpIB6QDTAfQAekgHSxzjOzBxh9CJIP+eEaS9+n2pDtx5KEj6zMLsF0BN8AF8AZsJa1zDzYJsF0DVwNitaRFDmQUYHsFPAI7YCmptn0NbIBT4F7S0xxkChB2nAOLEG+EEuQl7JJ0mQ2YsGNOo1kftK2NwLZzlcb2SfrhyL8COt6XRjcawVC4JZBZQGHy24TnAIqS3ziQDWh+sL0HTnp27SSdxVxzG38NaB5cqk0PPcBaUmX7FniOtRJAFLm7dMoogMsE2YR4mm9rVwkgNKqxStqPrBQQkDhlgF7TqaMAhmXxbccQ4CNVya9N35J6sFsUCQovo4IeHjD2Sm13Ist8ze+SogNmtcxOZBmAaFArSdssQIbg5JbZpv9XwCecbbIZmgwnPAAAAABJRU5ErkJggg==" />
                              Pagar con PSE </button>
                           </div>

                           <div className="flex flex-col justify-center items-center ">
                              <button type="button" className="inline-flex items-center px-4 py-3 bg-darkGreen border-darkGreen border-x-2 border-y-2 rounded-lg shadow-md 
                              text-white font-semibold text-base font-title text-center hover:bg-transparent hover:text-darkGreen transition-colors" onClick={confirmPurchase}>
                                    <img className="mr-3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAATtJREFUSEvFle1RwzAQRN9WQAnQAVABpAKgg5QQKsCpAEpIB6QDTAfQAekgHSxzjOzBxh9CJIP+eEaS9+n2pDtx5KEj6zMLsF0BN8AF8AZsJa1zDzYJsF0DVwNitaRFDmQUYHsFPAI7YCmptn0NbIBT4F7S0xxkChB2nAOLEG+EEuQl7JJ0mQ2YsGNOo1kftK2NwLZzlcb2SfrhyL8COt6XRjcawVC4JZBZQGHy24TnAIqS3ziQDWh+sL0HTnp27SSdxVxzG38NaB5cqk0PPcBaUmX7FniOtRJAFLm7dMoogMsE2YR4mm9rVwkgNKqxStqPrBQQkDhlgF7TqaMAhmXxbccQ4CNVya9N35J6sFsUCQovo4IeHjD2Sm13Ist8ze+SogNmtcxOZBmAaFArSdssQIbg5JbZpv9XwCecbbIZmgwnPAAAAABJRU5ErkJggg==" />
                              Pagar con  Tarjeta </button>
                           </div>

                           <div className="flex flex-col justify-center items-center ">
                              <button type="button" className="inline-flex items-center px-4 py-3 bg-red border-red border-x-2 border-y-2 rounded-lg shadow-md 
                              text-white font-semibold text-base font-title text-center hover:bg-transparent hover:text-red transition-colors" onClick={cancelPurchase}>
                                    <img className="mr-3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAATtJREFUSEvFle1RwzAQRN9WQAnQAVABpAKgg5QQKsCpAEpIB6QDTAfQAekgHSxzjOzBxh9CJIP+eEaS9+n2pDtx5KEj6zMLsF0BN8AF8AZsJa1zDzYJsF0DVwNitaRFDmQUYHsFPAI7YCmptn0NbIBT4F7S0xxkChB2nAOLEG+EEuQl7JJ0mQ2YsGNOo1kftK2NwLZzlcb2SfrhyL8COt6XRjcawVC4JZBZQGHy24TnAIqS3ziQDWh+sL0HTnp27SSdxVxzG38NaB5cqk0PPcBaUmX7FniOtRJAFLm7dMoogMsE2YR4mm9rVwkgNKqxStqPrBQQkDhlgF7TqaMAhmXxbccQ4CNVya9N35J6sFsUCQovo4IeHjD2Sm13Ist8ze+SogNmtcxOZBmAaFArSdssQIbg5JbZpv9XwCecbbIZmgwnPAAAAABJRU5ErkJggg==" />
                              Cancelar compra </button>
                           </div>
                        </section>
                     </td>

                     <td className="px-3 py-4 text-base font-semibold font-paragraph text-black text-center">
                        ${total}
                     </td>

                     <td className=""></td>
                  </tr>
               </tbody>
            </table>
      </article>
   )
  }

  return (
   <>
      <article className="fixed w-10/12 h-screen top-0 right-0 px-12 overflow-y-auto">
         <div className="flex items-center justify-center mt-12 px-10 py-5 bg-yellow text-white text-lg font-medium font-subtitle rounded-md shadow-md" role="alert">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 
            2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 
            0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 
            2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
            <p> No has agregado ningún producto a tu carrito </p>
         </div>
      </article>
   </>
  )
}

export default ShoppingCartContainer