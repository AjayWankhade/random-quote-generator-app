import prisma from "../prismaClient.js";

export const getRandomQuoteFromDB = async () => {
  try {
    const randomQuote = await prisma.quote.findFirst({
      orderBy: { createDate: "desc" },
    });
    return randomQuote;
  } catch (error) {
    throw new Error(`Error fetching random quote: ${error.message}`);
  }
};
