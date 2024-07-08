import { useGetAllProductsQuery } from "../app/services/dummyData";

const AllProducts = () => {
  const { data, isError, isLoading } = useGetAllProductsQuery();

  if (isError) return <h1>Oops something went wrong</h1>;

  if (isLoading) return <h1>Loading...</h1>;

  // console.log(data);

  return (
    <div>
      {data?.products.map((product) => (
        <div key={product.id}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
