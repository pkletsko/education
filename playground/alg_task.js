function findMaxProfit(stocks) {
    let bestBuy = Number.MAX_SAFE_INTEGER;
    let bestSell = 0;
    let profit = 0;

    for (let i = 0; i < stocks.length; i++) {
        if (stocks[i] < bestBuy) {
            bestBuy = stocks[i];
        } else if (stocks[i] > bestSell) {
            bestSell = stocks[i]
        }
    }

    console.log(bestBuy);
    console.log(bestSell);

    if (bestSell > bestBuy) {
        profit = bestSell - bestBuy
    }

    return profit;
}

console.log(findMaxProfit([2,4,1]));

var maxProfit = function(prices) {
    let profit = 0;
    if (prices.length === 1) {
        profit;
    }


    let minPrice = 9999999999;
    let maxprofit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if((prices[i] - minPrice) > maxprofit) {
            maxprofit = prices[i] - minPrice;
        }
    }
    return maxprofit;
};
