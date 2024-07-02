export const offensive_quotes = [
    49, 50, 85, 94, 95, 122, 155, 169, 174, 239, 248, 269
]

export function isOffensiveQuote(quoteId){
    return offensive_quotes.includes(quoteId);
}