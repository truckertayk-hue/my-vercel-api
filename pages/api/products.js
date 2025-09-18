export default function handler(req, res) {
  res.status(200).json([
    { id: 1, name: "Product A", price: 20 },
    { id: 2, name: "Product B", price: 35 }
  ]);
}
