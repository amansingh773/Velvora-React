import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {setCategory} from "../Redux/ProductsSlice";

function Category() {

  const dispatch = useDispatch();
  const category = useSelector(store=>store.products.category);
  

  const links = [
  { label: "All Categories", value: "all" },
  { label: "Mens Clothing", value: "men's clothing" },
  { label: "Women's Clothing", value: "women's clothing" },
  { label: "Electronics", value: "electronics" },
  { label: "Jewelery", value: "jewelery" },
];

  return (
     <div className="flex flex-wrap gap-2 px-4 sm:px-8 lg:px-16 py-4 border-b border-[#1e1e1c]">
    {links.map((link, idx) => (
          <button
            key={idx}
            onClick={() => dispatch(setCategory(link.value))}
            className={`
              text-[11px] uppercase tracking-[0.18em] font-medium px-4 py-2 rounded-full
              border transition-all duration-200 whitespace-nowrap
              ${
                category === link.value
                  ? "bg-[#c8b89a] text-[#111110] border-[#c8b89a]"
                  : "bg-transparent text-[#666660] border-[#2a2a28] hover:text-[#f0ede6] hover:border-[#3a3a36]"
              }
            `}
          >
            {link.label}
          </button>
     ))}
</div>
  );
}

export default Category;