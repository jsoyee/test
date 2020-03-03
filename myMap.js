var map;
function loadMapScenario() {
    map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
    credentials: 'Ai0nViiVccSpZIM0V3l98alsJ2GHp4q00npdZ4rz-cwLWGsJQRPqPY3rm0PDl9rV'
    });
    add_pokemon_layer();
}
    
// 1. Define pokemon data format, create mock pokemon dat
map_items = [
  {
      "pokenmon_id" : 12,
      "expire" : 123456,
      "longitute" : -74.0392717,
      "latitude" : 40.759170,
   }
]
    
// 2. Create pokenmon image on map
function get_pokemon_layer_from_map_items(map_items) {
  var layer = new Microsoft.Maps.Layer();
    
    var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), {
    icon: 'https://www.bingmapsportal.com/Content/images/poi_custom.png',
    anchor: new Microsoft.Maps.Point(12, 39)
});
map.entities.push(pushpin);
//   var pushpins = []
//   for (var i in map_items) {
//       var map_item = map_items[i];
//       var pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(map_item["latitude"], map_item["longitute"]), 
//                                                {icon: 'https://www.bingmapsportal.com/Content/images/poi_custom.png'});
//       map.entities.push(pushpin);
//       pushpins.push(pushpin)      
//   }
//   layer.add(pushpins);
  return layer;

}

function add_pokemon_layer() {
    var pokenmon_layer = get_pokemon_layer_from_map_items(map_items)
    map.layers.insert(pokenmon_layer);

}

 
    
    
    
// 3. Add pokenmon count down refresh
    
// 4. Connect with REST API
