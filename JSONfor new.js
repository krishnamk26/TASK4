var Details = [{
    "name" : "KRISHNA MK",
    "email" : "krissurya1@gmail.com",
    "phone" : 9578675765,
    "address" : {
        DoorNo : '1/1',
        Area : 'Krishnapuram colony',
        City : 'madurai',
        Pincode : '625014',
    },
},
{
    "name" : "KRISH",
    "email" : "krissurya2@gmail.com",
    "phone" : 9578675766,
    "address" : {
        DoorNo : '1/2',
        Area : 'Krishnapuram colony',
        City : 'madurai',
        Pincode : '625014',
    },
}];
// for loop
for(var i = 0; i < Details.length; i++) {
    var obj = Details[i];
    console.log(obj.name);
    console.log(obj.email);
    console.log(obj.phone);
    console.log(obj.address);
}

//for in loop

for(var key in Details){
    console.log(Details);
}

// for each loop

Details.forEach(function(obj){console.log(obj.address)});

// for of loop

for(var value of Details){

    console.log(value.email);
}

for(var key of Details){
    console.log(key.phone);
}