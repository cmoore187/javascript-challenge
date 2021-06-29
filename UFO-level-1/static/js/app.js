// from data.js
var tableData = data;

// create a reference to the table body using d3
var tbody = d3.select("tbody");

// function that builds the html table
function buildTable(data)
{
    // clear out the existing data
    tbody.html("");

    // take the data and build the html table
    // loop through each object in the array
    // each object is going to be a row in the table
    data.forEach((dataRow) => {
        // add a row to the html table
        var row = tbody.append("tr");

        // use the Objext.values in order to get the table data
        // then add a table cell (td) for each value in the object
        Object.values(dataRow).forEach((value) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

// function that will handle the filtering
function filterData()
{
    // get the date time value from the form
    var date = d3.select("#datetime").property("value");
    // variable that will be filtered data
    var filtered  = tableData;

    //check to see if the date was entered
    if(date)
    {
        // if the date is non-null / non-empty value, apply the filter to the dataset
        // to create the subset - filter out the rows where the datetime matches the filter
        filtered = filtered.filter(row => row.datetime == date);
    }

    //rebuild the html table
    buildTable(filtered);
}

//attach an event to listen for the button click and pass in the date for the form
d3.selectAll("#filter-btn").on("click", filterData);




//call function buildTable
buildTable(tableData);
