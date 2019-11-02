let wallType, wallMaterial;
let preserveMinerals;

let centerX, floorY, centerZ;
let lengthX, heightY, widthZ;

let minX, maxX;
let minY, maxY;
let minZ, maxZ;

// Directions to match minecraft
let south = 0;
let west = 1;
let north = 2;
let east = 3;

let codeOutput = "";

function initValues() {
    wallType = document.getElementById("wallType").value;
    wallMaterial = document.getElementById("wallMaterial").value;

    preserveMinerals = document.getElementById("preserveMinerals").checked;
    centerX = parseInt(document.getElementById("centerX").value);
    floorY = parseInt(document.getElementById("floorY").value);
    centerZ = parseInt(document.getElementById("centerZ").value);
    lengthX = parseInt(document.getElementById("lengthX").value);
    heightY = parseInt(document.getElementById("heightY").value);
    widthZ = parseInt(document.getElementById("widthZ").value);

    codeOutput = "";
}
// fill -48 9 -48 48 9 48 minecraft:stone

function dwarvenStairs() {
    initValues();

    for(let i = centerX - 4; i<=41; i+=8) {
        codeOutput += singleDwarvenStair(i, floorY + 4, centerZ - 4, north);
    }

    for(let i = centerX; i<=37; i+=8) {
        codeOutput += singleDwarvenStair(i, floorY, centerZ, north);
    }

    for(let i = centerX + 4; i<=33; i+=8) {
        codeOutput += singleDwarvenStair(i, floorY -4, centerZ + 4, north);
    }

    document.getElementById("codeOutput").value = codeOutput;
}

function singleDwarvenStair(x, y, z, direction) {

    code  = 'fill ' + x + ' ' + y + ' ' + z + ' ' + (x+6) + ' ' + y + ' ' + z + ' minecraft:air replace minecraft:stone_bricks\n';
    code += 'fill ' + (x+1) + ' ' + (y-1) + ' ' + z + ' ' + (x+5) + ' ' + (y-1) + ' ' + z + ' minecraft:air replace minecraft:stone_bricks\n';
    code += 'fill ' + (x+2) + ' ' + (y-2) + ' ' + z + ' ' + (x+4) + ' ' + (y-2) + ' ' + z + ' minecraft:air replace minecraft:stone_bricks\n';
    code += 'fill ' + (x+1) + ' ' + y + ' ' + (z-1) + ' ' + (x+5) + ' ' + y + ' ' + (z-1) + ' minecraft:air replace minecraft:stone_bricks\n';
    code += 'fill ' + (x+2) + ' ' + y + ' ' + (z-2) + ' ' + (x+4) + ' ' + y + ' ' + (z-2) + ' minecraft:air replace minecraft:stone_bricks\n';
    code += 'fill ' + (x+2) + ' ' + (y-1) + ' ' + (z-1) + ' ' + (x+4) + ' ' + (y-1) + ' ' + (z-1) + ' minecraft:air replace minecraft:stone_bricks\n';

    code += 'setblock ' + (x) + ' ' + (y+1) + ' ' + (z) + ' minecraft:torch keep\n';
    code += 'setblock ' + (x-4) + ' ' + (y-1) + ' ' + (z+1) + ' minecraft:torch[facing=south] keep\n';

    code += 'setblock ' + (x) + ' ' + (y) + ' ' + (z) + ' minecraft:stone_brick_stairs[facing=west] keep\n';
    code += 'setblock ' + (x+1) + ' ' + (y-1) + ' ' + (z) + ' minecraft:stone_brick_stairs[facing=west] keep\n';
    code += 'setblock ' + (x+1) + ' ' + (y) + ' ' + (z-1) + ' minecraft:stone_brick_stairs[facing=west] keep\n';
    code += 'setblock ' + (x+1) + ' ' + (y-3) + ' ' + (z+1) + ' minecraft:stone_brick_stairs[facing=east] keep\n';

    code += 'setblock ' + (x+6) + ' ' + (y) + ' ' + (z) + ' minecraft:stone_brick_stairs[facing=east] keep\n';
    code += 'setblock ' + (x+5) + ' ' + (y-1) + ' ' + (z) + ' minecraft:stone_brick_stairs[facing=east] keep\n';
    code += 'setblock ' + (x+5) + ' ' + (y) + ' ' + (z-1) + ' minecraft:stone_brick_stairs[facing=east] keep\n';
    code += 'setblock ' + (x+5) + ' ' + (y-3) + ' ' + (z+1) + ' minecraft:stone_brick_stairs[facing=west] keep\n';

    code += 'setblock ' + (x+2) + ' ' + (y-3) + ' ' + (z+1) + ' minecraft:stone_brick_stairs[facing=north] keep\n';
    code += 'setblock ' + (x+3) + ' ' + (y-3) + ' ' + (z+1) + ' minecraft:stone_brick_stairs[facing=north] keep\n';
    code += 'setblock ' + (x+4) + ' ' + (y-3) + ' ' + (z+1) + ' minecraft:stone_brick_stairs[facing=north] keep\n';

    code += 'setblock ' + (x+2) + ' ' + (y-2) + ' ' + (z) + ' minecraft:stone_brick_stairs[facing=north] keep\n';
    code += 'setblock ' + (x+3) + ' ' + (y-2) + ' ' + (z) + ' minecraft:stone_brick_stairs[facing=north] keep\n';
    code += 'setblock ' + (x+4) + ' ' + (y-2) + ' ' + (z) + ' minecraft:stone_brick_stairs[facing=north] keep\n';

    code += 'setblock ' + (x+2) + ' ' + (y-1) + ' ' + (z-1) + ' minecraft:stone_brick_stairs[facing=north] keep\n';
    code += 'setblock ' + (x+3) + ' ' + (y-1) + ' ' + (z-1) + ' minecraft:stone_brick_stairs[facing=north] keep\n';
    code += 'setblock ' + (x+4) + ' ' + (y-1) + ' ' + (z-1) + ' minecraft:stone_brick_stairs[facing=north] keep\n';

    code += 'setblock ' + (x+2) + ' ' + (y) + ' ' + (z-2) + ' minecraft:stone_brick_stairs[facing=north] keep\n';
    code += 'setblock ' + (x+3) + ' ' + (y) + ' ' + (z-2) + ' minecraft:stone_brick_stairs[facing=north] keep\n';
    code += 'setblock ' + (x+4) + ' ' + (y) + ' ' + (z-2) + ' minecraft:stone_brick_stairs[facing=north] keep\n';

    return code;
}

function boxRoom() {
    initValues();

    if ((lengthX * widthZ) > 32767) {
        codeOutput = "Length times width must be less than 32767. Please adjust values and try again.";
    } else {
        // Because width/2 is stored as a double, Math.ceil produces unexpected results. So handle even widths manually.
        if (lengthX % 2 == 1) {
            minX = centerX - Math.floor(lengthX / 2);
            maxX = centerX + Math.floor(lengthX / 2);
        } else {
            minX = (centerX - (lengthX / 2)) + 1;  // Add 1 to min to account for (off)center square on even length.
            maxX = centerX + (lengthX / 2);
        }

        minY = floorY;
        maxY = minY + heightY;

        if (widthZ % 2 == 1) {
            minZ = centerZ - Math.floor(widthZ / 2);
            maxZ = centerZ + Math.floor(widthZ / 2);
        } else {
            minZ = (centerZ - (widthZ / 2)) + 1;  // Add 1 to min to account for (off)center square on even width.
            maxZ = centerZ + (widthZ / 2);
        }

        if (wallType === "Clean") {
            codeOutput = codeOutput + "# Generating complete / clean walls.\n";
            codeOutput = codeOutput + getRoomWalls(wallMaterial);
        } else if (wallType === "Preserve Minerals") {
            codeOutput = codeOutput + "# Generating walls, leaving most minerals intact. Unfortunately flowing \n" +
                "# water does not replace well, so this may produce walls with holes.\n";
            codeOutput = codeOutput + getRoomWalls(wallMaterial + " replace minecraft:water");
            codeOutput = codeOutput + getRoomWalls(wallMaterial + " replace minecraft:dirt");
            codeOutput = codeOutput + getRoomWalls(wallMaterial + " replace minecraft:gravel");
            codeOutput = codeOutput + getRoomWalls(wallMaterial + " replace minecraft:sand");
        } else if (wallType === "Preserve and Seal") {
            codeOutput = codeOutput + "# Generating walls, leaving most minerals intact. Attempting to also \n" +
                "# seal holes and lava or water flows. This does not work well. Run the \n" +
                "# function multiple times quickly for best results.\n";
            codeOutput = codeOutput + getRoomWalls(wallMaterial + " replace minecraft:water");
            codeOutput = codeOutput + getRoomWalls(wallMaterial + " replace minecraft:dirt");
            codeOutput = codeOutput + getRoomWalls(wallMaterial + " replace minecraft:gravel");
            codeOutput = codeOutput + getRoomWalls(wallMaterial + " replace minecraft:sand");
            codeOutput = codeOutput + getRoomWalls("minecraft:glass replace minecraft:air");
            codeOutput = codeOutput + getRoomWalls("minecraft:glass replace minecraft:water");
            codeOutput = codeOutput + getRoomWalls("minecraft:obsidian replace minecraft:lava");
        }

        codeOutput = codeOutput + "\n";

        // Need message to not be in the loop, so splitting into two loops.
        if (!preserveMinerals) {
            codeOutput = codeOutput + "# Clearing room interior\n";
            for (let i = minY; i < maxY; i++) {
                codeOutput = codeOutput +
                    "fill " + minX + " " + i + " " + minZ + " " + maxX + " " + i + " " + maxZ + " minecraft:air\n";
            }
        } else {
            codeOutput = codeOutput + "# Clearing room interior. Leaving most minerals intact. Run this \n" +
                "# function multiple times quickly to remove buggy water flows.\n";
            for (let i = minY; i < maxY; i++) {
                codeOutput = codeOutput + clearRoomInterior("minecraft:water", i);
                codeOutput = codeOutput + clearRoomInterior("minecraft:dirt", i);
                codeOutput = codeOutput + clearRoomInterior("minecraft:gravel", i);
                codeOutput = codeOutput + clearRoomInterior("minecraft:sand", i);
                codeOutput = codeOutput + clearRoomInterior("minecraft:lava", i);
            }
        }

        document.getElementById("codeOutput").value = codeOutput;
    }
}

function getRoomWalls(replaceCode) {
    let output = "fill " + (minX - 1) + " " + (minY - 1) + " " + (minZ - 1) + " " + (maxX + 1) + " " + (minY - 1) + " " + (maxZ + 1) + " " + replaceCode + "\n"; // Floor
    output = output + "fill " + (minX - 1) + " " + (maxY + 1) + " " + (minZ - 1) + " " + (maxX + 1) + " " + (maxY + 1) + " " + (maxZ + 1) + " " + replaceCode + "\n"; // Ceiling
    output = output + "fill " + (minX - 1) + " " + (minY - 1) + " " + (minZ - 1) + " " + (minX - 1) + " " + (maxY + 1) + " " + (maxZ + 1) + " " + replaceCode + "\n";
    output = output + "fill " + (minX - 1) + " " + (minY - 1) + " " + (minZ - 1) + " " + (maxX + 1) + " " + (maxY + 1) + " " + (minZ - 1) + " " + replaceCode + "\n";
    output = output + "fill " + (maxX + 1) + " " + (maxY + 1) + " " + (maxZ + 1) + " " + (maxX + 1) + " " + (minY - 1) + " " + (minZ - 1) + " " + replaceCode + "\n";
    output = output + "fill " + (maxX + 1) + " " + (maxY + 1) + " " + (maxZ + 1) + " " + (minX - 1) + " " + (minY - 1) + " " + (maxZ + 1) + " " + replaceCode + "\n";
    return output;
}

function clearRoomInterior(replaceCode, level) {
    return "fill " + minX + " " + level + " " + minZ + " " + maxX + " " + level + " " + maxZ + " minecraft:air replace " + replaceCode + "\n";
}

function updateWallMaterial() {
    document.getElementById("wallMaterial").disabled =
        (document.getElementById("wallType").value === "None");
}

