import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

function ProductInfo() 
{
     const {id} = useParams();
     const navigation = useNavigate()

     const {productData} = useSelector(store => store.products);

     const findData = productData.find((item)=>{
          return item.id == id;
     })
     
     return (
  <div
    className="min-h-screen bg-[#111110] px-4 sm:px-8 lg:px-16 py-10"
    style={{ fontFamily: "'DM Sans', sans-serif" }}
  >
    <div className="max-w-6xl mx-auto bg-[#161614] border border-[#1e1e1c] rounded-3xl overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8 p-6 md:p-10">
        
        {/* Image Section */}
        <div className="bg-[#1a1a18] rounded-2xl flex items-center justify-center p-8">
          <img
            src={findData.image}
            alt={findData.title}
            className="w-full max-w-sm h-[400px] object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#c8b89a] mb-3">
            {findData.category}
          </p>

          <h1
            className="text-3xl md:text-4xl text-[#f0ede6] font-semibold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {findData.title}
          </h1>

          <div className="flex items-center gap-2 mb-6">
            <span className="text-[#c8b89a]">⭐</span>
            <span className="text-[#888880]">
              {findData.rating.rate}
            </span>
            <span className="text-[#444440]">•</span>
            <span className="text-[#888880]">
              {findData.rating.count} Reviews
            </span>
          </div>

          <p className="text-[#b8b5ae] leading-relaxed mb-8">
            {findData.description}
          </p>

          <div className="flex items-center justify-between border-t border-[#1e1e1c] pt-6">
            <h2
              className="text-3xl text-[#f0ede6] font-semibold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              ₹{Number(findData.price).toFixed(2)}
            </h2>

            <button 
            onClick={()=>{
              navigation("/products")
            }}
            className="px-8 py-3 rounded-xl bg-[#c8b89a] text-[#111110] font-semibold hover:opacity-90 transition-all duration-200">
              Browse all category
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
);
}

export default ProductInfo