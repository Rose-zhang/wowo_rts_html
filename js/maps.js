var maps = {
	"multiplayer":[
	    {
	        /* Map Details */
	        "mapImage":["images/maps/map0.png",
                "images/maps/map1.png",
                "images/maps/map2.png",
                "images/maps/map3.png"
            ],
	        /* Map coordinates that are obstructed by terrain*/
	        "mapGridWidth":60,
	        "mapGridHeight":40,
	        "mapObstructedTerrain0":[
	            [49,8], [50,8], [51,8], [51,9], [52,9], [53,9], [53,10], [53,11], [53,12], [53,13], [53,14], [53,15], [53,16], [52,16], [52,17], [52,18], [52,19], [51,19], [50,19], [50,18], [50,17], [49,17], [49,18], [48,18], [47,18], [47,17], [47,16], [48,16], [49,16], [49,15], [49,14], [48,14], [48,13], [48,12], [49,12], [49,11], [50,11], [50,10], [49,10], [49,9], [44,0], [45,0], [45,1], [45,2], [46,2], [47,2], [47,3], [48,3], [48,4], [48,5], [49,5], [49,6], [49,7], [50,7], [51,7], [51,6], [51,5], [51,4], [52,4], [53,4], [53,3], [54,3], [55,3], [55,2], [56,2], [56,1], [56,0], [55,0], [43,19], [44,19], [45,19], [46,19], [47,19], [48,19], [48,20], [48,21], [47,21], [46,21], [45,21], [44,21], [43,21], [43,20], [41,22], [42,22], [43,22], [44,22], [45,22], [46,22], [47,22], [48,22], [49,22], [50,22], [50,23], [50,24], [49,24], [48,24], [47,24], [47,25], [47,26], [47,27], [47,28], [47,29], [47,30], [46,30], [45,30], [44,30], [43,30], [43,29], [43,28], [43,27], [43,26], [43,25], [43,24], [42,24], [41,24], [41,23], [48,39], [49,39], [50,39], [51,39], [52,39], [53,39], [54,39], [55,39], [56,39], [57,39], [58,39], [59,39], [59,38], [59,37], [59,36], [59,35], [59,34], [59,33], [59,32], [59,31], [59,30], [59,29], [0,0], [1,0], [2,0], [1,1], [2,1], [10,3], [11,3], [12,3], [12,2], [13,2], [14,2], [14,3], [14,4], [15,4], [15,5], [15,6], [14,6], [13,6], [13,5], [12,5], [11,5], [10,5], [10,4], [3,9], [4,9], [5,9], [5,10], [6,10], [7,10], [8,10], [9,10], [9,11], [10,11], [11,11], [11,10], [12,10], [13,10], [13,11], [13,12], [12,12], [11,12], [10,12], [9,12], [8,12], [7,12], [7,13], [7,14], [6,14], [5,14], [5,13], [5,12], [5,11], [4,11], [3,11], [3,10], [33,33], [34,33], [35,33], [35,34], [35,35], [34,35], [33,35], [33,34], [27,39], [27,38], [27,37], [28,37], [28,36], [28,35], [28,34], [28,33], [28,32], [28,31], [28,30], [28,29], [29,29], [29,28], [29,27], [29,26], [29,25], [29,24], [29,23], [30,23], [31,23], [32,23], [32,22], [32,21], [31,21], [30,21], [30,22], [29,22], [28,22], [27,22], [26,22], [26,21], [25,21], [24,21], [24,22], [24,23], [25,23], [26,23], [26,24], [25,24], [25,25], [24,25], [24,26], [24,27], [25,27], [25,28], [25,29], [24,29], [23,29], [23,30], [23,31], [24,31], [25,31], [25,32], [25,33], [24,33], [23,33], [23,34], [23,35], [24,35], [24,36], [24,37], [23,37], [22,37], [22,38], [22,39], [23,39], [24,39], [25,39], [26,0], [26,1], [25,1], [25,2], [25,3], [26,3], [27,3], [27,2], [28,2], [29,2], [29,3], [30,3], [31,3], [31,2], [31,1], [32,1], [32,0], [33,0], [32,8], [33,8], [34,8], [34,9], [34,10], [33,10], [32,10], [32,9], [8,29], [9,29], [9,30], [17,32], [18,32], [19,32], [19,33], [18,33], [17,33], [18,34], [19,34], [3,27], [4,27], [4,26], [3,26], [2,26], [3,25], [4,25], [9,20], [10,20], [11,20], [11,21], [10,21], [10,19], [19,7], [15,7], [29,12], [30,13], [20,14], [21,14], [34,13], [35,13], [36,13], [36,14], [35,14], [34,14], [35,15], [36,15], [16,18], [17,18], [18,18], [16,19], [17,19], [18,19], [17,20], [18,20], [11,19], [58,0], [59,0], [58,1], [59,1], [59,2], [58,3], [59,3], [58,4], [59,4], [59,5], [58,6], [59,6], [58,7], [59,7], [59,8], [58,9], [59,9], [58,10], [59,10], [59,11], [52,6], [53,6], [54,6], [52,7], [53,7], [54,7], [53,8], [54,8], [44,17], [46,32], [55,32], [54,28], [26,34], [34,34], [4,10], [6,11], [6,12], [6,13], [7,11], [8,11], [12,11], [27,0], [27,1], [26,2], [28,1], [28,0], [29,0], [29,1], [30,2], [30,1], [30,0], [31,0], [33,9], [46,0], [47,0], [48,0], [49,0], [50,0], [51,0], [52,0], [53,0], [54,0], [55,1], [54,1], [53,1], [52,1], [51,1], [50,1], [49,1], [48,1], [47,1], [46,1], [48,2], [49,2], [50,2], [51,2], [52,2], [53,2], [54,2], [52,3], [51,3], [50,3], [49,3], [49,4], [50,4], [50,5], [50,6], [50,9], [51,10], [52,10], [51,11], [52,11], [50,12], [51,12], [52,12], [49,13], [50,13], [51,13], [52,13], [50,14], [51,14], [52,14], [50,15], [51,15], [52,15], [50,16], [51,16], [51,17], [48,17], [51,18], [44,20], [45,20], [46,20], [47,20], [42,23], [43,23], [44,23], [45,23], [46,23], [47,23], [48,23], [49,23], [44,24], [45,24], [46,24], [44,25], [45,25], [46,25], [44,26], [45,26], [46,26], [44,27], [45,27], [46,27], [44,28], [45,28], [46,28], [44,29], [45,29], [46,29], [11,4], [12,4], [13,4], [13,3], [14,5], [25,22], [31,22], [27,23], [28,23], [27,24], [28,24], [26,25], [27,25], [28,25], [25,26], [26,26], [27,26], [28,26], [26,27], [27,27], [28,27], [26,28], [27,28], [28,28], [26,29], [27,29], [24,30], [25,30], [26,30], [27,30], [26,31], [27,31], [26,32], [27,32], [26,33], [27,33], [24,34], [25,34], [27,34], [25,35], [26,35], [27,35], [25,36], [26,36], [27,36], [25,37], [26,37], [23,38], [24,38], [25,38], [26,38], [26,39], [2,25], [9,19], [36,31]
	        ],
            "mapObstructedTerrain1":[
                [50,2], [51,2], [52,2], [56,2], [57,2], [58,2], [50,3], [51,3], [52,3], [53,3], [54,3], [55,3], [56,3], [57,3], [58,3], [50,4], [51,4], [52,4], [53,4], [54,4], [55,4], [56,4], [57,4], [58,4], [22,5], [23,5], [24,5], [51,5], [52,5], [53,5], [54,5], [55,5], [20,6], [21,6], [22,6], [23,6], [24,6], [50,6], [51,6], [52,6], [53,6], [54,6], [55,6], [20,7], [21,7], [22,7], [23,7], [24,7], [25,7], [50,7], [51,7], [52,7], [53,7], [54,7], [55,7], [20,8], [21,8], [22,8], [23,8], [24,8], [25,8], [50,8], [51,8], [52,8], [53,8], [54,8], [55,8], [23,9], [24,9], [25,9], [51,9], [52,9], [53,9], [54,9], [55,9], [8,10], [9,10], [10,10], [25,10], [51,10], [52,10], [53,10], [54,10], [55,10], [8,11], [9,11], [10,11], [11,11], [12,11], [13,11], [14,11], [15,11], [16,11], [17,11], [18,11], [19,11], [20,11], [51,11], [52,11], [53,11], [54,11], [55,11], [8,12], [9,12], [10,12], [11,12], [12,12], [13,12], [14,12], [15,12], [16,12], [17,12], [18,12], [19,12], [20,12], [10,13], [11,13], [12,13], [13,13], [14,13], [15,13], [16,13], [17,13], [18,13], [19,13], [20,13], [51,13], [52,13], [10,14], [11,14], [12,14], [52,14], [10,15], [11,15], [12,15], [22,16], [23,16], [24,16], [20,17], [21,17], [22,17], [23,17], [24,17], [20,18], [21,18], [22,18], [23,18], [24,18], [25,18], [3,19], [4,19], [5,19], [20,19], [21,19], [22,19], [23,19], [24,19], [25,19], [3,20], [4,20], [5,20], [23,20], [24,20], [25,20], [37,20], [38,20], [49,20], [50,20], [4,21], [5,21], [26,21], [38,21], [50,21], [8,22], [9,22], [10,22], [8,23], [9,23], [10,23], [11,23], [12,23], [13,23], [14,23], [16,23], [17,23], [18,23], [8,24], [9,24], [10,24], [11,24], [12,24], [13,24], [14,24], [15,24], [16,24], [17,24], [18,24], [49,24], [10,25], [11,25], [12,25], [13,25], [14,25], [15,25], [16,25], [17,25], [18,25], [42,25], [43,25], [10,26], [11,26], [12,26], [10,27], [11,27], [12,27], [25,27], [26,27], [27,27], [25,28], [26,28], [27,28], [25,29], [26,29], [27,29], [35,29], [36,29], [37,29], [42,29], [43,29], [35,30], [36,30], [37,30], [42,30], [43,30], [51,30], [52,30], [35,31], [36,31], [37,31], [52,31], [9,33], [10,33], [11,33], [31,33], [32,33], [33,33], [9,34], [10,34], [11,34], [31,34], [32,34], [33,34], [9,35], [10,35], [11,35], [31,35], [32,35], [33,35]
            ],

            "mapObstructedTerrain2":[
                [24,0], [25,0], [26,0], [27,0], [28,0], [29,0], [30,0], [31,0], [23,1], [24,1], [25,1], [26,1], [27,1], [28,1], [29,1], [30,1], [56,1], [57,1], [58,1], [23,2], [24,2], [25,2], [26,2], [27,2], [28,2], [29,2], [56,2], [57,2], [58,2], [23,3], [24,3], [25,3], [27,3], [28,3], [29,3], [56,3], [57,3], [58,3], [50,6], [51,6], [52,6], [56,6], [57,6], [58,6], [50,7], [51,7], [52,7], [56,7], [57,7], [58,7], [17,8], [18,8], [19,8], [50,8], [51,8], [52,8], [56,8], [57,8], [58,8], [15,9], [16,9], [17,9], [18,9], [19,9], [35,9], [36,9], [15,10], [16,10], [17,10], [18,10], [19,10], [20,10], [15,11], [16,11], [17,11], [18,11], [19,11], [20,11], [18,12], [19,12], [20,12], [20,13], [4,14], [5,14], [6,14], [4,15], [5,15], [6,15], [7,15], [8,15], [9,15], [10,15], [12,15], [13,15], [14,15], [40,15], [41,15], [4,16], [5,16], [6,16], [7,16], [8,16], [9,16], [10,16], [11,16], [12,16], [13,16], [14,16], [6,17], [7,17], [8,17], [9,17], [10,17], [11,17], [12,17], [13,17], [14,17], [6,18], [7,18], [8,18], [25,18], [26,18], [27,18], [6,19], [7,19], [8,19], [23,19], [24,19], [25,19], [26,19], [27,19], [36,19], [37,19], [38,19], [39,19], [40,19], [41,19], [23,20], [24,20], [25,20], [26,20], [27,20], [28,20], [36,20], [37,20], [38,20], [39,20], [40,20], [41,20], [11,21], [12,21], [13,21], [23,21], [24,21], [25,21], [26,21], [27,21], [28,21], [36,21], [37,21], [38,21], [39,21], [40,21], [41,21], [57,21], [58,21], [59,21], [11,22], [12,22], [13,22], [26,22], [27,22], [28,22], [57,22], [58,22], [59,22], [11,23], [12,23], [13,23], [28,23], [57,23], [58,23], [59,23], [44,24], [45,24], [57,24], [58,24], [59,24], [57,25], [58,25], [59,25], [59,26], [32,27], [33,27], [34,27], [59,27], [32,28], [33,28], [34,28], [59,28], [32,29], [33,29], [34,29], [59,29], [59,30], [40,31], [41,31], [59,31], [41,32], [59,32], [59,33], [30,34], [31,34], [59,34], [31,35], [59,35], [59,36], [59,37], [59,38], [59,39]
            ],

            "mapObstructedTerrain3":[
                [21,4], [22,4], [23,4], [21,5], [22,5], [23,5], [21,6], [22,6], [23,6], [18,10], [19,10], [20,10], [21,10], [22,10], [23,10], [24,10], [25,10], [26,10], [27,10], [18,11], [20,11], [21,11], [22,11], [23,11], [24,11], [25,11], [27,11], [18,12], [19,12], [20,12], [21,12], [22,12], [23,12], [24,12], [25,12], [26,12], [27,12], [20,13], [21,13], [22,13], [23,13], [24,13], [20,14], [21,14], [22,14], [23,14], [24,14], [20,15], [21,15], [22,15], [23,15], [24,15], [20,16], [21,16], [22,16], [23,16], [24,16], [20,17], [21,17], [22,17], [24,17], [20,18], [21,18], [22,18], [23,18], [24,18], [18,25], [19,25], [20,25], [21,25], [22,25], [23,25], [24,25], [25,25], [26,25], [27,25], [18,26], [20,26], [21,26], [22,26], [23,26], [24,26], [25,26], [27,26], [18,27], [19,27], [20,27], [21,27], [22,27], [23,27], [24,27], [25,27], [26,27], [27,27], [20,28], [21,28], [22,28], [23,28], [24,28], [20,29], [21,29], [22,29], [23,29], [24,29], [20,30], [21,30], [22,30], [23,30], [24,30], [20,31], [21,31], [22,31], [23,31], [24,31], [20,32], [21,32], [22,32], [24,32], [20,33], [21,33], [22,33], [23,33], [24,33]
            ],
	        /* Entities to be loaded */
	        "requirements":{
	            "buildings":["base","harvester","starport","ground-turret"],
	            "vehicles":["transport","scout-tank","heavy-tank","harvester"],
	            "aircraft":["wraith","chopper"],
	            "terrain":["oilfield"]
	        },

	        /* Economy Related*/
	        "cash":{
	            "blue":1000,
	            "green":1000
	        },    

	        /* Entities to be added */
	        "items":[
	            {"type":"terrain","name":"oilfield","x":16,"y":4,"action":"hint"},
	            {"type":"terrain","name":"oilfield","x":34,"y":12,"action":"hint"},
	            {"type":"terrain","name":"oilfield","x":1,"y":30,"action":"hint"},
	            {"type":"terrain","name":"oilfield","x":38,"y":38,"action":"hint"},
	        ],    

	        /* Entities for each starting team */
	        "teamStartingItems":[    
	            {"type":"buildings","name":"base","x":0,"y":0},
	            {"type":"vehicles","name":"harvester","x":2,"y":0},
	            {"type":"vehicles","name":"heavy-tank","x":2,"y":1},
	            {"type":"vehicles","name":"scout-tank","x":3,"y":0},
	            {"type":"vehicles","name":"scout-tank","x":3,"y":1},    
	        ],
	        "spawnLocations":[
	            { "x":48, "y":36,"startX":22,"startY":16},
	            { "x":3, "y":36,"startX":0,"startY":16},    
	            { "x":36, "y":3,"startX":18,"startY":0},
	            { "x":3, "y":3,"startX":0,"startY":0},                    
	        ],
			/* Conditional and Timed Trigger Events */
			"triggers":[                
			    /* Lose if not even one item is left */
			    {"type":"conditional",
			        "condition":function(){                                
			            for (var i=0; i < game.items.length; i++) {
			                if(game.items[i].team == game.team){
			                    return false;
			                }
			            };
			            return true;
			        },
			        "action":function(){
			            multiplayer.loseGame();
			        }
			    },    
			]    

	    }
	]
	
}