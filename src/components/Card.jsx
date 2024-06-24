import React from 'react'

const Card = ({product , addToCart}) => {
  return (
    <div className="w-72  mt-5 p-3 bg-[#b1dae3] rounded-lg shadow-2xl" >
            <img src= {product.imageUrl}
                alt="Mascara"
                className="w-full h-72 rounded-lg" 
            />
            <div>
                <div className="flex items-center justify-between my-4">
                    <span className="font-bold text-lg">{product.name}</span>
                    <span className="text-red-600 font-bold">{product.price}</span>
                </div>
                <div>
                    <p>
                        {product.description}
                    </p>
                </div>
            </div>

            <button
                onClick={() => addToCart(product)}
                className="w-full mt-4 bg-[#4bb1f0] py-2 rounded-lg text-white font-semibold"
            >
                Add to Cart
            </button>  
        </div>
  )
}

export default Card