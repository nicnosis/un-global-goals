// Populate nav
function populateSelect(path) {
    d3.csv(path, function(error, data) {
        var select = d3.select("#select-country").append("select").attr("id","dropdown");

        select.on("change", function() {
            deactivate(d3.selectAll(".scatterdot"));
            deactivate(d3.selectAll(".scatterdot2"));

            var element = d3.select(this).property("value");
            activate(d3.selectAll(element));
        });

        $('#dropdown').html("<option>Select a country</option>");

        // Add a select option for each country
        select.selectAll("option")
            .data(data)
            .enter()
            .append("option")
            .attr("value", function (d) { return ".c" + d.hash; })
            .text(function (d) { return d.CountryName; });
    });
};