import axios from "axios";

declare var google: any;
const GOOGLE_API_KEY = 'xxx';
// Define custom type that will describe reponse from Google's API.
// N.B. Response is actually more complex, refer to docs!
type GoogleGeocodingResponse = {
  results: {geometry: {location: {lat: number, lng: number}}} [];
  status: 'OK' | 'ZERO_RESULTS'   
};

// Get the user input.
const form = document.querySelector('form')!; // Because there is only 1 form tag in the dom it will fetch that.
const addressInput = document.getElementById('address')! as HTMLInputElement;

function searchAddressHandle(event: Event){
  event.preventDefault();
  const enteredAddress = addressInput.value;

  // Convert the user string to URL compatible string.
  let encodedAddress = encodeURI(enteredAddress);

  // Send request to the Google's API.
  axios.get<GoogleGeocodingResponse>(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${GOOGLE_API_KEY}`)
  .then(response => {
    console.log(response);
    // Handle possible errors.
    if (response.data.status != 'OK') {
      throw new Error('Could not fetch location!')
    }
    // Extract coordinates.
    const coordinates = response.data.results[0].geometry.location;


  // Render a map.
  const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: coordinates,
    zoom: 16,
  });

  // Add a marker.
  const marker = new google.maps.Marker({
    map: map,
    position: coordinates,
    title: 'GOOD PLACE TO PEE! :)'
  });

  })
  .catch(err => {
    alert(err.message);
    console.log(err);
  });

}

form.addEventListener('submit', searchAddressHandle);