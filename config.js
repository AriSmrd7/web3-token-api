const EnumChainId = require("./enum/chain.id");
const { toCheckSum } = require("./utils/addresses");
let scraperConfig = {
    [EnumChainId.BSC]: {
        "save_price": true, // do you want the scraper to save the price records of the tokens ?
        "save_transactions": true, // do you want the scraper to save every swap transaction ?
        "calculate_pair_fees": true, // do you want the scraper to save the fees of all the pairs ?
        "whitelist_enabled": false,// do you want the scraper to scrape only specific given tokens ?
        "whitelist": [ // pass here the tokens to whitelist as the example one 
            toCheckSum("0xc748673057861a797275CD8A068AbB95A902e8de") // example whitelisted token
        ], 
        "use_checkpoint_when_restart": false, // if the scraper crashes, it has to scrape all the block since the latest one scraped?
        "http_provider": "https://nd-191-453-533.p2pify.com/5b395dfdb49f89e29a2b45d7f0cba7d3", // to fill
        "ws_provider": "wss://ws-nd-191-453-533.p2pify.com/5b395dfdb49f89e29a2b45d7f0cba7d3", // to fill
    }
}
module.exports = scraperConfig;