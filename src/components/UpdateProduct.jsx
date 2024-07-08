import React from "react";
import { useUpdateProductMutation } from "../app/services/dummyData";

const UpdateProduct = () => {
  const [updateProduct, { data, isError, isLoading }] =
    useUpdateProductMutation();

  const handleUpdateProduct = async () => {
    const updatedProduct = {
      title: "Updated title",
      description: "Updated description",
    };
    const id = "1"; // replace with actual product ID

    try {
      await updateProduct({ id, updatedProduct })
        .unwrap()
        .then((payload) => console.log("fulfilled", payload))
        .catch((error) => console.error("rejected", error));
    } catch (error) {
      console.error("Error updating product", error);
    }
  };

  if (isError) return <h1>Oops, something went wrong</h1>;

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>{data?.title}</h1>
          <p>{data?.description}</p>
          <button onClick={handleUpdateProduct} disabled={isLoading}>
            Update Product
          </button>
        </>
      )}
    </div>
  );
};

export default UpdateProduct;
