import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ search, setSearch }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-[#1e1e1c]">
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        
        {/* Logo */}
        <h1
          onClick={() => navigate("/")}
          className="text-2xl font-bold text-[#f0ede6] cursor-pointer"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Velvora
        </h1>

        {/* Search - Desktop */}
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-80
              bg-[#161614]
              border border-[#2a2a28]
              text-[#f0ede6]
              px-4 py-2
              rounded-full
              outline-none
              focus:border-[#c59e55]
              transition-all duration-200
            "
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-[#c8c4bc]">
          <Link
            to="/"
            className="hover:text-[#c8b89a] transition-colors"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="hover:text-[#c8b89a] transition-colors"
          >
            Products
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-[#f0ede6]"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#111110] border-t border-[#1e1e1c]">
          
          {/* Mobile Search */}
          <div className="p-4">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full
                bg-[#161614]
                border border-[#2a2a28]
                text-[#f0ede6]
                px-4 py-2
                rounded-xl
                outline-none
              "
            />
          </div>

          {/* Mobile Links */}
          <div className="flex flex-col">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="px-4 py-4 text-[#c8c4bc] border-t border-[#1e1e1c]"
            >
              Home
            </Link>

            <Link
              to="/products"
              onClick={() => setIsOpen(false)}
              className="px-4 py-4 text-[#c8c4bc] border-t border-[#1e1e1c]"
            >
              Products
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;