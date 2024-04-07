export const clampDescription = (description) => {
  const words = description.split(" "); // Split the description into words
  if (words.length > 20) {
    return words.slice(0, 25).join(" ") + "..."; // Take the first 20 words and append '...'
  } else {
    return description; // Return the original description if it's 20 words or less
  }
};

// Define an object with currency codes as keys and exchange rates as values
const exchangeRates = {
  NGN: 1250, // USD to NGN
  EUR: 0.95, // USD to EUR, example rate
  GBP: 0.82, // USD to GBP, example rate
  KES: 110, // USD to KES, example rate
  GHS: 6, // USD to GHS, example rate
};

function formatCurrency(amount, currency = "USD") {
  let convertedAmount = amount;

  // Check if the currency is in the exchangeRates object and apply the conversion
  if (currency in exchangeRates && currency !== "USD") {
    convertedAmount = amount * exchangeRates[currency];
  }

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(convertedAmount);

  return formatter;
}
export { formatCurrency };
