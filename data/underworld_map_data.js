underworld_map_data = {
    "border_info_as_tile_indexes" : [ //currently using overworld tile indexs, change to underworld tiles
        // compressed as drawing pathes, cave : 14(61), 8(61), 13(61), 7(61), 11(61), 7(61), 10(61), 6(61)
        // [61,61,61,61,61,61,61,61,61,61,61,61,61,61, //top left to top right
        //     61,61,61,61,61,61,61,61, //top right to bottom right
        //     61,61,61,61,61,61,61,61,61,61,61,61,61, //bottom right to bottom left
        //     61,61,61,61,61,61,61, //bottom left to top left
        //     61,61,61,61,61,61,61,61,61,61,61, //top left to top right with offset
        //     61,61,61,61,61,61,61, //top right to bottom right with offset
        //     61,61,61,61,61,61,61,61,61,61,  //bottom right to bottom left with offset
        //     61,61,61,61,61,61,], //bottom left to top left with offset
        [
            [61,61,61,61,61,61,61,61,61,61,61,],
            [61,61,61,61,61,61,61,61,61,61,61,],
            [61,61,61,61],
            [61,61,61,61],
            [61,61,61,61],
            [61,61,61,61],
            [61,61,61,61],
            [61,61,61,61],
            [61,61,61,61],
            [61,61,61,61],
            [61,61,61,61],
            [61,61,61,61],
            [61,61,61,61],
            [61,61,61,61],
            [61,61,61,61],
            [61,61,61,61],
            [61,61,61,61,61,61,61,61,61,61,61,],
            [61,61,61,61,61,61,61,61,61,61,61,],
        ],
    ],

    "underworld_column_data" : [
        [24,24,24,24,24,24,24,], // blank (black) tiles (from overworld)
    ],
    "underworld_collision_column_data" : [
        [0,0,0,0,0,0,0,], // blank (black) tiles (from overworld)
    ],
    "doorways_as_tiles": [
        [
            /* doorway_info[0] : east */  [ /* 0:solid wall*/[61,61,61,61,1,], /*1:open door*/[24,24,24,24,0,], /*2:locked door w/ keyhole*/[,,,,,], /*3:closed door*/[,,,,,], /*4:enterable broken wall*/[,,,,,],],
            /* doorway_info[1] : north */ [ /* 0:solid wall*/[61,61,61,61,1,], /*1:open door*/[24,24,24,24,0,], /*2:locked door w/ keyhole*/[,,,,,], /*3:closed door*/[,,,,,], /*4:enterable broken wall*/[,,,,,],],
            /* doorway_info[2] : west */  [ /* 0:solid wall*/[61,61,61,61,1,], /*1:open door*/[24,24,24,24,0,], /*2:locked door w/ keyhole*/[,,,,,], /*3:closed door*/[,,,,,], /*4:enterable broken wall*/[,,,,,],],
            /* doorway_info[3] : south */ [ /* 0:solid wall*/[61,61,61,61,1,], /*1:open door*/[24,24,24,24,0,], /*2:locked door w/ keyhole*/[,,,,,], /*3:closed door*/[,,,,,], /*4:enterable broken wall*/[,,,,,],], 
        ]
    ],

    //DATA PERTAINING TO SPECIFIC ROOMS
    "underworld_rooms_as_doorway_info" : [
        [0,0,0,1,], // #underworld_room00
        [0,0,0,1,], // #underworld_room01
        [0,0,0,1,], // #underworld_room02
        [0,0,0,1,], // #underworld_room03
        [0,0,0,1,], // #underworld_room04
        [0,0,0,1,], // #underworld_room05
        [0,0,0,1,], // #underworld_room06
        [0,0,0,1,], // #underworld_room07
    ],
    "underworld_rooms_as_columns" : [
        [0,0,0,0,0,0,0,], // #underworld_room00
        [0,0,0,0,0,0,0,], // #underworld_room01
        [0,0,0,0,0,0,0,], // #underworld_room02
        [0,0,0,0,0,0,0,], // #underworld_room03
        [0,0,0,0,0,0,0,], // #underworld_room04
        [0,0,0,0,0,0,0,], // #underworld_room05
        [0,0,0,0,0,0,0,], // #underworld_room06
        [0,0,0,0,0,0,0,], // #underworld_room07
    ],
    "underworld_rooms_as_collision_columns" : [
        [0,0,0,0,0,0,0,], // #underworld_room00
        [0,0,0,0,0,0,0,], // #underworld_room01
        [0,0,0,0,0,0,0,], // #underworld_room02
        [0,0,0,0,0,0,0,], // #underworld_room03
        [0,0,0,0,0,0,0,], // #underworld_room04
        [0,0,0,0,0,0,0,], // #underworld_room05
        [0,0,0,0,0,0,0,], // #underworld_room06
        [0,0,0,0,0,0,0,], // #underworld_room07
    ],
    "underworld_rooms_as_color_schemes" : [
        [0,], // #underworld_room00
        [0,], // #underworld_room01
        [0,], // #underworld_room02
        [0,], // #underworld_room03
        [0,], // #underworld_room04
        [0,], // #underworld_room05
        [0,], // #underworld_room06
        [0,], // #underworld_room07
    ],
    "underworld_rooms_as_borders" : [
        [0,], // #underworld_room00
        [0,], // #underworld_room01
        [0,], // #underworld_room02
        [0,], // #underworld_room03
        [0,], // #underworld_room04
        [0,], // #underworld_room05
        [0,], // #underworld_room06
        [0,], // #underworld_room07
    ],
    "underworld_rooms_as_exit_data" : [
        [[0],[0],[0],[2],], // #underworld_room00
        [[0],[0],[0],[2],], // #underworld_room01
        [[0],[0],[0],[2],], // #underworld_room02
        [[0],[0],[0],[2],], // #underworld_room03
        [[0],[0],[0],[2],], // #underworld_room04
        [[0],[0],[0],[2],], // #underworld_room05
        [[0],[0],[0],[2],], // #underworld_room06
        [[0],[0],[0],[2],], // #underworld_room07
    ],
    "underworld_rooms_as_secrets" : [
        [], // #underworld_room00
        [], // #underworld_room01
        [], // #underworld_room02
        [], // #underworld_room03
        [], // #underworld_room04
        [], // #underworld_room05
        [], // #underworld_room06
        [], // #underworld_room07
    ]
}