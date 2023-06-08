
const contenedor = document.getElementById("contenedor")
const btnNew = document.getElementById("btnNew")

fetch("https://647686d29233e82dd53a1ac3.mockapi.io/api/users/alumnos")
.then(res => res.json())
.then(date => 
    date.forEach(data => {
        crearCartas(data)
    })
    )
.catch(err =>console.log(err))

btnNew.addEventListener("click",()=>{
    let newName = document.getElementById("inpFname").value
    let newJob =  document.getElementById("inpJob").value
    let newImg =  document.getElementById("inpImg").value

    if(newName === ""  || newJob=== "" || newImg === ""){
        btnNew.style.backgroundColor="red"
    }else{
        
        let newUs = {
            name: newName,
            avatar: newImg,
            job: newJob
          }
          btnNew.style.backgroundColor="green"
          fetch(`https://647686d29233e82dd53a1ac3.mockapi.io/api/users/alumnos`,{
            method:"POST",
            headers: {"content-Type" : "application/json"},
            body: JSON.stringify(newUs)
          })
        .then(res => res.json())
        .then(date => setTimeout(()=>{location.reload();},1))
        .catch(err =>console.log(err))
        }
})

function crearCartas(dato) {
    contenedor.innerHTML +=
        `
<div id="${dato.id}" class="card m-1 " style="width: 18rem;">
    <img src="${dato.avatar}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">"${dato.name}"</h5>
        <p class="card-text">"${dato.job}"</p>
        <div>
         <button  type="button" class="btn btn-lg btn-danger" onclick="borrar(${dato.id})" >Delete</button>
         <button  type="button" class="btn btn-lg btn-primary" onclick="edit(${dato.id})" >Edit</button>
         </div>  
    </div>
</div>
`;
}

function borrar (id){
    fetch(`https://647686d29233e82dd53a1ac3.mockapi.io/api/users/alumnos/${id}`,{
        method:"DELETE",
        })
        .then(res => res.json())
        .then(data =>setTimeout(()=>{location.reload();},1))
        .catch(err =>console.log(err))
        
}

function edit(id,){
    let editCont = document.getElementById(id)
    editCont.innerHTML=`
    
        <input id="imgUrl" class="card-img-top" placeholder="New link image " >
        <div class="card-body">
        <input id="inpName" type="text" placeholder="New full name">
        <input id="inpJobs" type="text" placeholder="New job">
        </div>
        <div>
        <button id="btn${id}" type="button" class="btn btn-lg btn-success mt-1" onclick="upgrade(${id})" >Update</button>
        </div>
    
    `
}

function upgrade(id){
    let name = document.getElementById("inpName").value
    let url = document.getElementById("imgUrl").value
    let job = document.getElementById("inpJobs").value
    if(!name == " "  || !url == " " || !job == " "){
        let newUs = {
            name: name,
            avatar: url,
            job: job
          }
          document.getElementById(`btn${id}`).style.backgroundColor="green"
          fetch(`https://647686d29233e82dd53a1ac3.mockapi.io/api/users/alumnos/${id}`,{
            method:"PUT",
            headers: {"content-Type" : "application/json"},
            body: JSON.stringify(newUs)
          })
        .then(res => res.json())
        .then(date => setTimeout(()=>{location.reload();},1))
        .catch(err =>console.log(err))
        
    }else{
        document.getElementById(`btn${id}`).style.backgroundColor="red"
        }

}

