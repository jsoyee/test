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
      "expire" : 1583206378,
      "longitute" : -74.0392717,
      "latitude" : 40.759170,
   },
    {
      "pokenmon_id" : 13,
      "expire" : 1583206314,
      "longitute" : -75.0392717,
      "latitude" : 41.759170,
   }
]

function get_counter_down_time_from_expire_epoch(epoch) {
    var now_time = new Date().getTime() / 1000;
    var time_left = epoch - now_time; //unit: second
    var second = Math.floor(time_left % 60);
    var minute = Math.floor(time_left / 60);
    return minutes + ":" + second;
    
}
    
// 2. Create pokenmon image on map
function get_pokemon_layer_from_map_items(map_items) {
  var layer = new Microsoft.Maps.Layer();
  for (var i in map_items) {
      var map_item = map_items[i];
      var pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(map_item["latitude"], map_item["longitute"]), 
                                               {icon: 'images/pushpin_images/pokemon/' + map_item['pokenmon_id'] + '.png', 
                                               title: get_counter_down_time_from_expire_epoch(map_item['expire'])});
       map.entities.push(pushpin);
  }

  return layer;

}



function add_pokemon_layer() {
    var pokenmon_layer = get_pokemon_layer_from_map_items(map_items)
    map.layers.insert(pokenmon_layer);

}

 
    
    
    
// 3. Add pokenmon count down refresh
    
// 4. Connect with REST API
