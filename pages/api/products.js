export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.fourthwall.com/v1/products", {
      headers: {
        Authorization: `Bearer ${process.env.FW_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch products" });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
}




