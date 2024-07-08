import { useState } from "react";
import { useGetProductByIdQuery } from "../app/services/dummyData";
import debounce from "lodash.debounce";

const ProductsById = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState(1);
  const { data, isError, isLoading, isSuccess } =
    useGetProductByIdQuery(searchQuery);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = parseInt(inputValue, 10);
    if (!isNaN(query) && query > 0) {
      setSearchQuery(query);
    }
    setInputValue(""); // Reset input after search
  };

  const debouncedHandleChange = debounce((value) => {
    const numericValue = Number(value);
    if (!isNaN(numericValue) && numericValue > 0) {
      setInputValue(numericValue);
    } else {
      setInputValue("");
    }
  }, 100);

  const handleChange = (e) => {
    const value = e.target.value;
    debouncedHandleChange(value);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Oops something went wrong</h1>}
      {isSuccess && data && (
        <div key={data.id}>
          <img
            style={{ width: "250px" }}
            src={data.images[0]}
            alt={data.title}
            srcset=""
          />
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </div>
      )}
    </div>
  );
};

export default ProductsById;
