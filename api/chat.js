export default async function handler(req, res) {
  try {
    const userMessage = req.body;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userMessage),
      }
    );

    const data = await response.json();

    console.log(data);

    res.status(200).json(data);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: error.message,
    });
  }
}