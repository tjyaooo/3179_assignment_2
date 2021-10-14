var vg_1 = "mobile_os.vg.json";
var vg_2 = "desktop_browser.vg.json";
var vg_3 = "search_engine_share.vg.json";
vegaEmbed("#world_map", vg_1).then(function(result) {
 // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#desktop_market_share", vg_2).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#search_engine_share", vg_3).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);