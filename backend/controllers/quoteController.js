import { getRandomQuoteFromDB } from "../services/quoteService.js";
export const getRandomQuote = async (req, res) => {
  try {
    const quote = await getRandomQuoteFromDB();
    if (!quote) {
      return res.status(404).json({ message: "No quotes found" });
    }
    res.status(200).json(quote);
  } catch (error) {
    console.error(`Error fetching quote from DB: ${error.message}`);
    res.status(500).json({ message: "Error fetching quote from DB" });
  }
};
