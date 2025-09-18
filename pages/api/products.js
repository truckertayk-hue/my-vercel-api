export default async function handler(req, res) {
  try {
    const STORE_TOKEN = process.env.FOURTHWALL_STORE_TOKEN;

    if (!STORE_TOKEN) {
      return res.status(500).json({ error: "Store token not configured" });
    }

    const response = await fetch("https://api.fourthwall.com/v1/products", {
      headers: {
        Authorization: `Bearer ${STORE_TOKEN}`,
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      const text = await response.text();
      return res.status(response.status).json({ error: text });
    }

    const products = await response.json();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}


