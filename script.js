     
 async function fetchDataAsync(url){
  
  try{
   let response = await fetch(url);
    var data = await response.json();
    for ( var i = 0; i < data.length; i++)
    {
        
        console.log(`Brewery name : ${data[i].name}`);
        console.log(`Brewery type : ${data[i].brewery_type}`);
        console.log(`Address : ${data[i].address_1}`);
        console.log(`Website url : ${data[i].website_url}`);
        console.log(`Phone no : ${data[i].phone}`);

    }
   }catch(err) {
     console.log(err);
   }
 }
 fetchDataAsync("https://api.openbrewerydb.org/v1/breweries");
 