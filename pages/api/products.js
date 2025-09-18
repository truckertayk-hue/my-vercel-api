// pages/products.js

export default function Products() {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        padding: '2rem',
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Our Products</h1>
      <p style={{ marginBottom: '2rem' }}>
        Browse our products below. Powered by Fourthwall.
      </p>

      {/* Fourthwall embed container */}
      <div id="fourthwall-store"></div>

      {/* Embed script */}
      <script
        src="https://cdn.fourthwall.com/embed.js"
        data-store-token={process.env.NEXT_PUBLIC_FOURTHWALL_TOKEN}
        async
      ></script>

      <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#555' }}>
        All transactions are processed securely by Fourthwall.
      </p>
    </div>
  );
}

