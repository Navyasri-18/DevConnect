export async function executeCode(req, res) {
  try {
    const PISTON_API_URL = process.env.PISTON_API_URL || "http://localhost:2000/api/v2";
    const { language, version, files } = req.body;

    if (!language || !files) {
      return res.status(400).json({ message: "language and files are required" });
    }

    const response = await fetch(`${PISTON_API_URL}/execute`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ language, version, files }),
    });

    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (error) {
    console.log("Error in executeCode controller:", error.message);
    return res.status(500).json({ message: "Code execution failed" });
  }
}
