data1 = [{
    "id":1,
    "name":"Mackbook Pro",
    "ram": "16GB",
    "ssd": "512GB",
    "cpu": "4.5 Ghz"
}
]

function item(a)
{
    for(var i=0; i< data1.length ; i++)
    {
    if(a == i)
    {
        document.getElementById("id").innerHTML = data1.id;
        document.getElementById("name").innerHTML = data1.name;
        document.getElementById("ram").innerHTML = data1.
        document.getElementById("ssd").innerHTML
        document.getElementById("cpu").innerHTML
    }
}

var counter = 0;
function added()
{
   document.getElementById("showcounter").innerHTML = counter++; 
}
}