//fetch return promis
// promis pending,resolve,reject
//fetch method are asyncronus
// fetch method are convert method are syncronus=(1) async,(2) await



let  fetchdata=async()=>{

  let url='http://localhost:3000/Flynow'

  
  
 let res=await fetch(url)

 let data=await res.json()

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
    <td onclick="formopen('${e.id}')"> Update </td>
    
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

  fetch( url , {

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

let formopen=async(id)=>{

   let url=`http://localhost:3000/Flynow/${id}`

  
  
 let res= await fetch(url,{method:"GET"})

 let data = await res.json()

 console.log(data)

 let FormData= `
       


<div id="BookingS">

  <div class="flight-booking-section">
    <h2>Book Your Flight</h2>
    <form id="flightSearchForm">
      <div class="form-row">
        <div class="form-group">
          <label for="tripType">Trip Type</label>
          <select id="uptripType" value="${data.TripType}"  name="tripType">
            <option value="roundtrip">Round Trip</option>
            <option value="oneway">One Way</option>
            <option value="multi">Multi-City</option>
          </select>
        </div>
        
        <div class="form-group">
          <label for="passengers">Passengers</label>
          <select id="uppassengers" value="${data.Passengers}" name="passengers">
            <option value="1">1 Adult</option>
            <option value="2">2 Adults</option>
            <option value="3">3 Adults</option>
            <option value="4">4 Adults</option>
            <option value="family">Family (2 Adults + 2 Children)</option>
          </select>
        </div>
        
        <div class="form-group">
          <label for="cabinClass">Cabin Class</label>
          <select id="upcabinClass"value="${data.CabinClass}" name="cabinClass">
            <option value="economy">Economy</option>
            <option value="premium">Premium Economy</option>
            <option value="business">Business</option>
            <option value="first">First Class</option>
          </select>
        </div>
      </div>
      
      <div class="form-row">
        <div class="form-group">
          <label for="departureAirport">From</label>
          <input type="text" id="updepartureAirport" value="${data.From}" name="departureAirport" placeholder="City or Airport">
        </div>
        
        <div class="form-group">
          <label for="arrivalAirport">To</label>
          <input type="text" id="uparrivalAirport" value="${data.To}" name="arrivalAirport" placeholder="City or Airport">
        </div>
      </div>
      
      <div class="form-row">
        <div class="form-group">
          <label for="departureDate">Departure Date</label>
          <input type="date" id="updepartureDate" value="${data.DepartureDate}" name="departureDate">
        </div>
        
        <div class="form-group return-date-group">
          <label for="returnDate">Return Date</label>
          <input type="date" id="upreturnDate" value="${data.ReturnDate}" name="returnDate">
        </div>
      </div>
      
      <div class="form-row">
        <input type="Submit" value="Update Now" class="search-flights-btn" onclick="return UpdateData('${data.id}')"></button>
      </div>
    </form>
  </div>
  
 
 

</div>
</section>

`

document.querySelector("#formshow").innerHTML=FormData


}

let UpdateData=(id)=>{

  let tripType=document.querySelector("#uptripType").value
  let passengers=document.querySelector("#uppassengers").value 
  let cabinClass=document.querySelector("#upcabinClass").value
  let form=document.querySelector("#updepartureAirport").value
  let to=document.querySelector("#uparrivalAirport").value
  let departureDate=document.querySelector("#updepartureDate").value
  let returnDate=document.querySelector("#upreturnDate").value

  let url=`http://localhost:3000/Flynow/${id}`

  fetch(url,{

    method:"PUT" ,
    headers:{

      "Content-type":"application/json"
    },
    body: JSON.stringify( {

      TripType:tripType,
      Passengers:passengers,
      CabinClass:cabinClass,
      From:form,
      To:to,
      DepartureDate:departureDate,
      ReturnDate:returnDate,
      price:1000







    })


  })

  location,href="booking.html"
  return false


}





