const objet01 = {
    fName:"a",
    lName:"b",
    isAdmin:false,
    tools:["js","ts","java"],
    address:{
        street: "as",
        number: 5445
    }
}

//desectructuracion 
const {fName,lName,isAdmin,tools,address} = objet01
console.log(fName)