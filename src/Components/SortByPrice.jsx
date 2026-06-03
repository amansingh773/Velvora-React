import React from "react";

function SortByPrice({ selectedPrice, setSelectedPrice }) {
  return (
    <div className="px-4 sm:px-8 lg:px-16 mt-6 flex justify-end">
      <div className="bg-[#161614] border border-[#2a2a28] rounded-2xl px-5 py-3 flex items-center gap-4 shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
        
        <div>
          <p className="text-[9px] uppercase tracking-[0.25em] text-[#666660]">
            Products
          </p>
          <p className="text-[#f0ede6] text-sm font-medium">
            Sort Collection
          </p>
        </div>

        <div className="w-px h-8 bg-[#2a2a28]" />

        <select
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
          className="
            bg-[#111110]
            text-[#c8b89a]
            border border-[#2a2a28]
            rounded-xl
            px-4 py-2.5
            outline-none
            cursor-pointer
            min-w-[200px]
            hover:border-[#c8b89a]
            focus:border-[#c8b89a]
            transition-all duration-300
          "
        >
          <option value="default">Featured</option>
          <option value="lowToHigh">Price: Low → High</option>
          <option value="highToLow">Price: High → Low</option>
        </select>
      </div>
    </div>
  );
}

export default SortByPrice;