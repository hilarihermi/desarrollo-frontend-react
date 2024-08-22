import { useState } from "react";
import SearchBar from './SearchBar.jsx';
import ProductTable from './ProductTable.jsx';

const FilterableProductTable = ({ products }) => {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    const handleFilterTextChange = (text) => {
        setFilterText(text);
    };

    const handleInStockOnlyChange = (inStock) => {
        setInStockOnly(inStock);
    };

    return (
        <div>
            <SearchBar 
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={handleFilterTextChange}
                onInStockOnlyChange={handleInStockOnlyChange}
            />
            <ProductTable 
                products={products} 
                filterText={filterText}
                inStockOnly={inStockOnly}
            />
        </div>
    );
};

export default FilterableProductTable;