import prisma from "../prismaClient.js";

export const getRandomQuoteFromDB = async () => {
  try {
    const count = await prisma.quote.count();
    const randomIndex = Math.floor(Math.random() * count);
    const randomQuote = await prisma.quote.findMany({
      skip: randomIndex,
      take: 1,
      include: { user: true },
    });
    // console.log(randomQuote);
    return randomQuote[0];
  } catch (error) {
    throw new Error(`Error fetching random quote: ${error.message}`);
  }
};
