const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  const { country = "us", category = "business" } =
    event.queryStringParameters || {};
  const apiKey =  process.env.VITE_NEWS_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "API key is missing" }),
    };
  }

  const baseUrl = "https://newsapi.org/v2/top-headlines";
  const url = `${baseUrl}?country=${encodeURIComponent(
    country
  )}&category=${encodeURIComponent(category)}&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if (data.status === "error") {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: data.message }),
      };
    }

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("Error fetching news:", error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch news: " + error.message }),
    };
  }
};
