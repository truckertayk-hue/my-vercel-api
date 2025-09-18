// pages/products.js
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Our Products</h1>
      <p>Browse our products below. Powered by Fourthwall.</p>
      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              width: "200px",
              textAlign: "center",
            }}
          >
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <a
              href={`https://checkout.fourthwall.com/products/${product.id}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "1rem",
                padding: "0.5rem 1rem",
                backgroundColor: "#0070f3",
                color: "#fff",
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              Buy Now
            </a>
          </div>
        ))}
      </div>
      <p style={{ marginTop: "2rem" }}>
        All transactions are processed securely by Fourthwall.
      </p>
    </div>
  );
}
