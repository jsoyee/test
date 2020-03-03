var map;
function loadMapScenario() {
    map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
    credentials: 'Ai0nViiVccSpZIM0V3l98alsJ2GHp4q00npdZ4rz-cwLWGsJQRPqPY3rm0PDl9rV'
    });
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
  var pushpins = Microsoft.Maps.TestDataGenerator.getPushpins(10, map.getBounds());
  layer.add(pushpins);
  return layer;

}
var pokenmon_layer = get_pokemon_layer_from_map_items(map_items)
map.layers.insert(layer);

 
    
    
    
// 3. Add pokenmon count down refresh
    
// 4. Connect with REST API
