// ========================================
// BEYOND ENGLISH — VEGA-LITE VISUALISATIONS
// ========================================

// Load Charts 1–15
for (let i = 1; i <= 15; i++) {

    const chartId = `#chart${i}`;
    const chartPath = `charts/chart${i}.json`;

    vegaEmbed(chartId, chartPath, {
        actions: false
    })
    .then(function(result) {

        console.log(`Chart ${i} loaded successfully`);

    })
    .catch(function(error) {

        console.error(`Error loading Chart ${i}:`, error);

    });

}

// Load Chart 16
vegaEmbed("#chart16", "charts/chart16.json", {
    actions: false,
    renderer: "svg"
})
.then(function(result) {

    console.log("Chart 16 loaded successfully");

})
.catch(function(error) {

    console.error("Error loading Chart 16:", error);

});