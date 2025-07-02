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
    <td>${e.Passengers * e.price }</td>
    <td onclick="Del('${e.id}')"> Delete </td>
    <td onclick="upd('${e.id}')"> Update </td>
    
    </tr>`
 })

 }

let Del=(id)=>{

  let url=`http://localhost:3000/Flynow/${id}`

  fetch(url,{method:"DELETE"})
}

fetchdata()


let Ins=()=>{

  let tt=document.querySelector("#tripType").value
  let p=document.querySelector("#passengers").value
  let c=document.querySelector("#cabinClass").value
  let f=document.querySelector("#departureAirport").value
  let to=document.querySelector("#arrivalAirport").value
  let DD=document.querySelector("#departureDate").value
  let RD=document.querySelector("#returnDate").value
 
  
  let url='http://localhost:3000/Flynow'

  fetch(url , {

    method:"POST" ,
    headers:{

      "Content-type":"application/json"
    },
    body: JSON.stringify( {

      TripType:tt,
      Passengers:p,
      CabinClass:c,
      From:f,
      To:to,
      DepartureDate:DD,
      ReturnDate:RD,
      price:1000







    })


  })

  location,href="booking.html"
  return false


}

let upd=async(id)=>{

   let url='http://localhost:3000/Flynow'

  
  
 let res= await (url,{method:"GET"})

 let data = await res.json()


}