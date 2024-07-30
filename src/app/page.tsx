export default async function Home() {
  const api = process.env.NEXT_PUBLIC_API_LOCAL;
  const api2 = process.env.API_LOCAL;
  console.log("api: ", api);
  console.log("api2: ", api2);

  // const response = await fetch(`${api}/api`);
  // const { products } = await response.json();
  // console.log("Products: ", products);

  return (
    <div>
      <h1>Hola</h1>
      {/* <ul>
        {products.map((product: any) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul> */}
    </div>
  );
}
