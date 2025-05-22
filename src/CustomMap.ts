//what this file does is create a new google maps object
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

}