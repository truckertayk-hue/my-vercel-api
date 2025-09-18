import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        // Fetch from the secure API route
        const response = await fetch("/api/fourthwall");
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Our Products</h1>
      <p style={{ marginBottom: "2rem" }}>Browse our products below. Powered by Fourthwall.</p>

      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: "1rem" }}>
            <strong>{product.name}</strong> - ${product.price}
          </li>
        ))}
      </ul>

      <p style={{ marginTop: "2rem", fontSize: "0.9rem", color: "#555" }}>
        All transactions are processed securely by Fourthwall.
      </p>
    </div>
  );
}


