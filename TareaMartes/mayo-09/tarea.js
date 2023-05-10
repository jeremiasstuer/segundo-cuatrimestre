import  data from "./data.js";

const user = JSON.parse(data)

const divGeneral = document.createElement("div")
divGeneral.classList="contenedor-general"

console.log(user
    )

for(const{name :{first: nf,last:nl},location:{street:{name:ln,number:lNum}}, picture:{large : pl}} of user){
  //  console.log(`nombre: `+nf+ nl+`email:` +e + `picture:` + pl)
    const contentNAme = document.createTextNode(`${nf} ${nl}`)
    const contentLocation = document.createTextNode(`${ln} ${lNum}`)

    const newDiv = document.createElement("div");
    const newp = document.createElement("p");
    const newp2 = document.createElement("p");
    const newImg = document.createElement("img")
    newImg.src=`${pl}`
    newDiv.classList=`contenedor`
    newp.appendChild(contentNAme)
    newp2.appendChild(contentLocation)

    newDiv.appendChild(newp)
    newDiv.appendChild(newImg)
    newDiv.appendChild(newp2)
    divGeneral.appendChild(newDiv)
    document.body.appendChild(divGeneral)
   
}