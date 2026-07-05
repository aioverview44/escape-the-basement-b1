// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010303030303030303030303010303010103010202030103010301030103030101030103030302030203010301030301010101030203010201030103010303010103030301030303030301030103030101030103010203020103010301030301010301030303030301030101010303010103010101010101010303030303030101030303030303030303010101030101010301010101010101010103030303010103030303030303030303030303030101030101010101010101010101010101010303030303030303030303030303010403010303030303030303030303030101010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . 2 . . 2 
2 . 2 2 2 . 2 . 2 . 2 . 2 . . 2 
2 . 2 . . . 2 . 2 . 2 . 2 . . 2 
2 2 2 . 2 . 2 2 2 . 2 . 2 . . 2 
2 . . . 2 . . . . . 2 . 2 . . 2 
2 . 2 . 2 2 . 2 2 . 2 . 2 . . 2 
2 . 2 . . . . . 2 . 2 2 2 . . 2 
2 . 2 2 2 2 2 2 2 . . . . . . 2 
2 . . . . . . . . . 2 2 2 . 2 2 
2 . 2 2 2 2 2 2 2 2 2 . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
. . 2 . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.floorLight1,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.chestClosed], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
