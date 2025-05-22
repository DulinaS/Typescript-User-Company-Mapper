//what this file does is create a new google maps object
import { User } from "./user";
import { Company } from "./Company";

//This tells the input parameeter type of the addMarker method
interface Mappable {
  location: {
    lat: number; // latitude
    lng: number; // longitude
  };
}
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    //Initialize the googleMap object
    //This will create a new google maps object
    this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
      zoom: 1, //This will set the zoom level of the map

      //This will set the center of the map
      center: {
        lat: 0,
        lng: 0
      } 
    });
  }

  //This method will add a marker to the map
  addMarker(obj: Mappable ): void {
    //This will create a new google maps marker
    const marker = new google.maps.Marker({
      map: this.googleMap, //Attr
      position: {
        lat: obj.location.lat,
        lng: obj.location.lng
      }
    });

    //This will open the info window when the marker is clicked
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div>
        <p>Latitude: ${obj.location.lat}</p>
        <p>Longitude: ${obj.location.lng}</p>
          </div>
        `
      });
      infoWindow.open(this.googleMap, marker); //infoWindow will open when the marker is clicked
    });

  }
}