import { useEffect, useMemo, useState } from 'react';
import productsData from '../products.json';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const categories = useMemo(() => {
    const set = new Set(products.map((product) => product.category || 'General'));
    return ['All', ...Array.from(set)];
  }, [products]);

  const filteredProducts = useMemo(() => {
    const lowerSearch = searchText.toLowerCase();
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(lowerSearch) ||
        product.description.toLowerCase().includes(lowerSearch);
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchText, selectedCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1);
  };

  return (
    <section className="products-page">
      <div className="products-header">
        <h2>Shop the Latest Trends</h2>
        <p>Explore our curated collection with easy search and filters.</p>
      </div>

      <div className="products-controls">
        <div className="search-box">
          <label htmlFor="product-search">Search products</label>
          <input
            id="product-search"
            type="search"
            value={searchText}
            onChange={handleSearchChange}
            placeholder="Search by name or description"
          />
        </div>
        <div className="filter-box">
          <label htmlFor="category-filter">Filter by category</label>
          <select id="category-filter" value={selectedCategory} onChange={handleCategoryChange}>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="products-grid">
        {currentProducts.map((product) => (
          <article key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} className="product-image" />
            <p>{product.description}</p>
            <p className="product-price">Price: ₹{product.price.toFixed(2)}</p>
          </article>
        ))}
      </div>

      <div className="pagination">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            className={page === currentPage ? 'page-button active' : 'page-button'}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </section>
  );
};

export default Products;