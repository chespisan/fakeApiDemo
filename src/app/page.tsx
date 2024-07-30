export default async function Home() {
  const api = process.env.API_LOCAL;
  const response = await fetch(`${api}/api`);
  const { products } = await response.json();
  console.log("Products: ", products);

  return (
    <div>
      <ul>
        {products.map((product: any) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}
