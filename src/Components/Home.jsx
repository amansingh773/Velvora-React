// Home.jsx
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductData } from '../Redux/ProductsSlice'
import Navbar from './Navbar'
import Category from './Category';
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';
import SortByPrice from './SortByPrice';

function Home() 
{
  const [apiData, setApiData] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedPrice,setSelectedPrice] = useState("")
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loading, productData, error, category } = useSelector(store => store.products);

  useEffect(() => {
    if(productData.length == 0)
    {
      dispatch(getProductData())
    }
  }, [])

  useEffect(() => {
    setApiData(productData)
  }, [productData])

  useEffect(() => {

  let filteredData = productData;
  // Search
  filteredData = filteredData.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  );

  // Category
  if (category !== "all") {
    filteredData = filteredData.filter(
      (item) => item.category === category
    );
  }

  // Sort
  if (selectedPrice === "lowToHigh") {
    filteredData = [...filteredData].sort(
      (a, b) => a.price - b.price
    );
  }

  if (selectedPrice === "highToLow") {
    filteredData = [...filteredData].sort(
      (a, b) => b.price - a.price
    );
  }

  setApiData(filteredData);
}, [search, category, selectedPrice, productData]);


  const isFiltering = search.trim() !== "" || category !== "all";
  const noResults = !loading && !error && productData.length > 0 && apiData.length === 0 && isFiltering;

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentProducts = apiData.slice(firstIndex, lastIndex);

  return (
    <>
      <Navbar search={search} setSearch={setSearch} />

      <div
        className="min-h-screen pt-24 bg-[#111110]"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <Category />

          <SortByPrice selectedPrice={selectedPrice} setSelectedPrice={setSelectedPrice}/>
        </div>

        {/* No results banner — shown right below Category */}
        {noResults && (
          <div className="mx-4 sm:mx-8 lg:mx-16 mt-6 flex items-start gap-3 px-4 py-3.5 rounded-xl border border-[#3a2a1a] bg-[#1e1510]">
            {/* Icon */}
            <div className="w-7 h-7 shrink-0 rounded-full border border-[#6b3f1a] flex items-center justify-center mt-0.5">
              <span className="text-[#c8822a] text-xs font-bold">!</span>
            </div>
            {/* Text */}
            <div>
              <p className="text-[12px] text-[#e8a96a] font-medium mb-0.5">
                No results found
                {search.trim() !== "" && (
                  <span className="text-[#c8822a]"> "{search}"</span>
                )}
              </p>
              <p className="text-[11px] text-[#7a5535] font-light">
                Try a different keyword or{" "}
                <button
                  onClick={() => {
                    navigate("/")
                  }}
                  className="text-[#c8b89a] underline underline-offset-2 hover:text-[#f0ede6] transition-colors duration-150 cursor-pointer bg-transparent border-none p-0"
                >
                  browse all categories
                </button>
              </p>
            </div>
          </div>
        )}

        <div className="px-4 sm:px-8 lg:px-16 pb-16">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end border-b border-[#2a2a28] pb-6 mb-12 gap-2 mt-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#666660] mb-2 font-medium">
                Curated Selection
              </p>
              <h1
                className="text-3xl sm:text-4xl font-semibold text-[#f0ede6] m-0"
                style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.5px' }}
              >
                Our Collection
              </h1>
            </div>
            {productData.length > 0 && (
              <span className="text-xs text-[#444440] font-light tracking-widest uppercase">
                {apiData.length} / {productData.length} Items
              </span>
            )}
          </div>

          {/* Loading skeletons */}
          {loading && (
            <div className="grid gap-4 sm:gap-5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="rounded-2xl border border-[#1e1e1c] overflow-hidden animate-pulse">
                  <div className="bg-[#1a1a18]" style={{ aspectRatio: '4/3' }} />
                  <div className="p-4">
                    <div className="h-2 bg-[#1e1e1c] rounded-full mb-2 w-2/5" />
                    <div className="h-2 bg-[#1e1e1c] rounded-full mb-2 w-11/12" />
                    <div className="h-2 bg-[#1e1e1c] rounded-full w-1/3" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* API Error */}
          {error && (
            <div className="text-center py-20 text-[#444440]">
              <div className="w-10 h-10 border border-[#2a2a28] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#555550] text-lg">!</span>
              </div>
              <p className="text-xs tracking-widest uppercase">Could not load products. Please try again.</p>
            </div>
          )}

          {/* Product Grid */}
          {!loading && productData.length > 0 && (
            <div className="grid gap-4 sm:gap-5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
              {currentProducts.map((item, i) => (
                <article
                onClick={()=>{
                  navigate(`/productsinfo/${item.id}`)
                }}
                  key={item.id}
                  className="group bg-[#161614] border border-[#1e1e1c] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-[#3a3a36] hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col"
                >
                  <div className="bg-[#1a1a18] flex items-center justify-center relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161614]/40 to-transparent z-10 pointer-events-none" />
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain p-5 transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {i < 3 && (
                      <span className="absolute top-3 left-3 z-20 text-[9px] bg-[#c8b89a] text-[#111110] px-2.5 py-1 rounded-full font-semibold tracking-[0.15em] uppercase">
                        New
                      </span>
                    )}
                  </div>

                  <div className="px-4 pt-3 pb-4 flex flex-col flex-1">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-[#444440] font-medium mb-1.5">
                      {item.category}
                    </p>
                    <p className="text-[12.5px] text-[#c8c4bc] mb-3 leading-snug line-clamp-2 font-light">
                      {item.title}
                    </p>

                    <div className="flex items-center gap-2 mt-auto pt-1 border-t border-[#1e1e1c]">
                      <span
                        className="text-sm font-semibold text-[#f0ede6] w-20 shrink-0 truncate"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        ₹{Number(item.price).toFixed(2)}
                      </span>
                      <div className="flex items-center gap-1 flex-1 min-w-0">
                        <span className="text-[10px] text-[#c8b89a] shrink-0">⭐</span>
                        <span className="text-[10px] text-[#888880] font-light truncate">
                          {item.rating.rate}
                          <span className="text-[#444440] mx-0.5">·</span>
                          {item.rating.count}
                        </span>
                      </div>
                      <button className="w-14 h-8 shrink-0 border border-[#2a2a28] bg-transparent cursor-pointer text-[10px] text-[#888880] tracking-[0.15em] uppercase font-medium flex items-center justify-center rounded-lg hover:bg-[#f0ede6] hover:text-[#111110] hover:border-[#f0ede6] transition-all duration-200">
                        Add
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Empty state — no products at all */}
          {!loading && !error && productData.length === 0 && (
            <div className="text-center py-20 text-[#333330]">
              <p className="text-xs tracking-widest uppercase">No products found.</p>
            </div>
          )}
          <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalItems={apiData.length}
                 itemsPerPage={itemsPerPage}
          />
        </div>
      </div>
    </>
  )
}

export default Home