 async function hacerRequest() {
   try {
    var url = ' https://digimon-api.vercel.app/api/digimon'; 

    var response = await fetch(url);
    var data = await response.json();
    for(let dat of data){
      document.getElementById("contenedor").innerHTML+=`
      <div class="cont-datos">
        <div class="cont-img">
          <img src="${dat.img}" alt="">
        </div>
        <div class="cont-names">
        <h1>${dat.name}</h1>
        </div> 
      </div>
      `
    }

    console.log(data);
   } catch (error) {
     console.log(error);
  }
 }

 hacerRequest();

