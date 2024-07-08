import React from "react";
import { useDeleteProductMutation } from "../app/services/dummyData";

const DeleteProduct = () => {
  const [deleteProduct, { isLoading }] = useDeleteProductMutation();

  const handleDelete = async () => {
    try {
      const id = "1";
      const result = await deleteProduct(id).unwrap();
      console.log("Product deleted successfully:", result);
      // Handle success (e.g., show a message to the user)
    } catch (error) {
      console.error("Failed to delete product:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <button onClick={handleDelete} disabled={isLoading}>
      {isLoading ? "Deleting..." : "Delete Product"}
    </button>
  );
};

export default DeleteProduct;
