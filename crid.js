//fetch return promis
// promis pending,resolve,reject
//fetch method are asyncronus
// fetch method are convert method are syncronus=(1) async,(2) await



let  fetchdata=async()=>{

  let url='http://localhost:3000/Flynow'

  
  
 let res= await fetch(url,{method:"GET"})

 let data = await res.json()

 console.log(data);
 let show=document.querySelector("#datashow")

data.map((e)=>{

    show.innerHTML+=`
 
    <tr> 
    <td>${e.TripType}</td>
    <td>${e.Passengers}</td>
    <td>${e.CabinClass}</td>
    <td>${e.From}</td>
    <td>${e.To}</td>
    <td>${e.DepartureDate}</td>
    <td>${e.ReturnDate}</td>
    <td>${e.Total}</td>
    <td onclick="Del('${e.id}')"> Delete </td>
    
    </tr>
 
 `
 

})

 


}





let Del=(id)=>{

  let url=`http://localhost:3000/Flynow/${id}`

  fetch(url,{method:"DELETE"})
}

fetchdata()