 async function hacerRequest() {
   try {
    var url = ' https://pokeapi.co/api/v2/pokemon/ditto'; 

    var response = await fetch(url);
     var data = await response.json();

     document.getElementById("contenedor").innerHTML=`
     <h1>${data.name}</h1>
     <p>Habilidades</p>
     <ul>
        <li>${data.abilities[0].ability.name}</li>
        <li>${data.abilities[1].ability.name}</li>
    </ul>
     `
    console.log(data);
   } catch (error) {
     console.log(error);
  }
 }

 hacerRequest();