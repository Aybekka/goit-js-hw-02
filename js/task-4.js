function getShippingCost(country) {
    let price = 0;
    switch (country.toLowerCase()) {
        case "china":
            price = 100;
            return `Shipping to ${country.charAt(0).toUpperCase() + country.slice(1).toLowerCase()} will cost ${price} credits`;
        case "chile":
            price = 250;
            return `Shipping to ${country.charAt(0).toUpperCase() + country.slice(1).toLowerCase()} will cost ${price} credits`;
        case "australia":
            price = 170;
            return `Shipping to ${country.charAt(0).toUpperCase() + country.slice(1).toLowerCase()} will cost ${price} credits`;
        case "jamaica":
            price = 120;
            return `Shipping to ${country.charAt(0).toUpperCase() + country.slice(1).toLowerCase()} will cost ${price} credits`;
        default:
            return `Sorry, there is no delivery to your country`;
    }
}
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
