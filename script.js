  mapboxgl.accessToken = `Your api key`;

 navigator.geolocation.getCurrentPosition(sucessLocation,errorLocation,{
     enableHighAccuracy:true
 })

 function sucessLocation(position){
     console.log(position);
     setUpMap([position.coords.longitude,position.coords.latitude])
 }

 function errorLocation(){
     setUpMap([-2.24,53.48])
 }
 function setUpMap(center){
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center:center,
        zoom:14
      });
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);
    const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
      });
      
      map.addControl(directions, 'top-left');
}

