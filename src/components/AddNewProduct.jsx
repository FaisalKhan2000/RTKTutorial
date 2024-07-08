import React from "react";
import { useAddNewProductMutation } from "../app/services/dummyData";

const AddNewProduct = () => {
  const [addNewProduct, { data, error, isLoading }] =
    useAddNewProductMutation();

  const handleAddProduct = async () => {
    try {
      const newProduct = {
        id: "1",
        title: "test",
        description: "test",
      };

      await addNewProduct(newProduct)
        .unwrap()
        .then((payload) => console.log("fulfilled", payload))
        .catch((error) => console.error("rejected", error));
    } catch (error) {
      console.error("Error adding new product", error);
    }
  };

  if (error) return <h1>Oops, something went wrong</h1>;

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>{data?.id}</h1>
          <h1>{data?.title}</h1>
          <p>{data?.description}</p>
          <button onClick={handleAddProduct} disabled={isLoading}>
            Add New Product
          </button>
        </>
      )}
    </div>
  );
};

export default AddNewProduct;
