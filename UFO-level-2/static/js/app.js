// from data.js
var tableData = data;

// create a reference to the table body using d3
var tbody = d3.select("tbody");

// UFO Sighting values for each column
tableData.forEach(function(ufoSighting) {
    
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");

    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(ufoSighting).forEach(function([key, value]) {
      
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Select the button
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    // Select the input date, state, shape, city, or country
    var input = d3.select("#input");
    // Get the value property of the input date, state, shape, city, or country
    var inputValue = input.property("value");
    
    // Filter Data
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue ||
                                                    sighting.city === inputValue ||
                                                    sighting.state === inputValue ||
                                                    sighting.country === inputValue ||
                                                    sighting.shape === inputValue);
    
    filteredData.forEach(function(selections) {
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");
    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(selections).forEach(function([key, value]) {
        
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});
});