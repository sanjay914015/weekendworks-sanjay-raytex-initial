data1 = [{
    "id":1,
    "name":"Mackbook Pro",
    "ram": "16GB",
    "ssd": "512GB",
    "cpu": "4.5 Ghz"
}
]

// function item(a)
// {
//     for(var i=0; i< data1.length ; i++)
//     {
//     if(a == i)
//     {
//         document.getElementById("id").innerHTML = data1.id;
//         document.getElementById("name").innerHTML = data1.name;
//         document.getElementById("ram").innerHTML = data1.
//         document.getElementById("ssd").innerHTML
//         document.getElementById("cpu").innerHTML
//     }
// }
addedcart(itemid, itemname, price,ram, ssd, cpu)
{
    document.getElementById("itemid").innerHTML = itemid;
    document.getElementById("name").innerHTML = itemname;
    document.getElementById("price").innerHTML = price;
    document.getElementById("ram").innerHTML = ram;
    document.getElementById("ssd").innerHTML = ssd;
    document.getElementById("cpu").innerHTML = cpu;



}

function myfunction0()
{
    location.replace("C:/frontend/Extra/weekendworks-sanjay-raytex-initial/html/main.html");
}
function myfunction1()
{
    location.replace("C:/frontend/Extra/weekendworks-sanjay-raytex-initial/html/addedcart.html");
}
function myfunction2()
{
    location.replace("C:/frontend/Extra/weekendworks-sanjay-raytex-initial/html/devices.html");
}
function myfunction3()
{
    location.replace("C:/frontend/Extra/weekendworks-sanjay-raytex-initial/html/login .html");   
}


// var counter = 0;
// function added()
// {
//    document.getElementById("showcounter").innerHTML = counter++; 
// }
// }