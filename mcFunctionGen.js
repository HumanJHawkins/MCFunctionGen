let wallType, wallMaterial;
let preserveMinerals;

let bottomLeftX, bottomLeftY, bottomLeftZ;
let topRightX, topRightY, topRightZ;
let spacing;

let centerX, floorY, centerZ;
let lengthX, heightY, widthZ;

// Directions
let directions = ["north", "east", "south", "west"];

let minX, maxX;
let minY, maxY;
let minZ, maxZ;

let codeOutput;

function initValues() {
    wallType = document.getElementById("wallType").value;
    wallMaterial = document.getElementById("wallMaterial").value;

    preserveMinerals = document.getElementById("preserveMinerals").checked;

    bottomLeftX = parseInt(document.getElementById("bottomLeftX").value);
    bottomLeftY = parseInt(document.getElementById("bottomLeftY").value);
    bottomLeftZ = parseInt(document.getElementById("bottomLeftZ").value);

    topRightX = parseInt(document.getElementById("topRightX").value);
    topRightY = parseInt(document.getElementById("topRightY").value);
    topRightZ = parseInt(document.getElementById("topRightZ").value);

    spacing = parseInt(document.getElementById("spacing").value);

    centerX = parseInt(document.getElementById("centerX").value);
    floorY = parseInt(document.getElementById("floorY").value);
    centerZ = parseInt(document.getElementById("centerZ").value);

    lengthX = parseInt(document.getElementById("lengthX").value);
    heightY = parseInt(document.getElementById("heightY").value);
    widthZ = parseInt(document.getElementById("widthZ").value);

    codeOutput = "";
}

// fill -48 9 -48 48 9 48 minecraft:stone

function torchPlain() {
    initValues();
    // alert('In torchPLain)\nNums: ' +
    //     bottomLeftX + '\n' +
    //     bottomLeftY + '\n' +
    //     bottomLeftZ + '\n' +
    //     topRightX + '\n' +
    //     topRightY + '\n' +
    //     topRightZ + '\n' +
    //     spacing + '\n');
    let code = '';

    for(let i = bottomLeftX; i<= topRightX; i+= spacing) {
        for(let j = bottomLeftY; j <= topRightY; j += spacing) {
            for(let k = bottomLeftZ; k <= topRightZ; k += spacing) {
                code += 'setblock ' + i + ' ' + j + ' ' + k + ' minecraft:torch keep\n';
            }
        }
    }

     document.getElementById("codeOutput").value = code;
}



function dwarvenStairs() {
    initValues();

    codeOutput = dwarvenFourSquare(centerX, floorY, centerZ);
    document.getElementById("codeOutput").value = codeOutput;
}

function dwarvenFourSquare() {
    let code = "";

    // North
    code += '##############################################################################################\n';
    code += '# North at ' + centerX + ' by ' + centerZ + '\n';
    for (let i = centerX; i <= 37; i += 8) {
        code += singleDwarvenStair(i, floorY, centerZ, directions[0]);
    }
    for (let i = centerX + 4; i <= 33; i += 8) {
        code += singleDwarvenStair(i, floorY - 4, centerZ + 4, directions[0]);
    }

    code += '##############################################################################################\n';
    code += '# East at ' + -centerX + ' by ' + centerZ + '\n';
    // East
    for (let i = -centerX; i >= -37; i -= 8) {
        code += singleDwarvenStair(i, floorY, centerZ, directions[1]);
    }
    for (let i = -centerX - 4; i >= -33; i -= 8) {
        code += singleDwarvenStair(i, floorY - 4, centerZ + 4, directions[1]);
    }

    code += '##############################################################################################\n';
    code += '# South at ' + -centerX + ' by ' + -centerZ + '\n';
    // South
    for (let i = -centerX; i >= -37; i -= 8) {
        code += singleDwarvenStair(i, floorY, -centerZ, directions[2]);
    }
    for (let i = -centerX - 4; i >= -33; i -= 8) {
        code += singleDwarvenStair(i, floorY - 4, -centerZ - 4, directions[2]);
    }

    code += '##############################################################################################\n';
    code += '# West at ' + centerX + ' by ' + -centerZ + '\n';
    // West
    for (let i = centerX; i <= 37; i += 8) {
        code += singleDwarvenStair(i, floorY, -centerZ, directions[3]);
    }
    for (let i = centerX + 4; i <= 33; i += 8) {
        code += singleDwarvenStair(i, floorY - 4, -centerZ - 4, directions[3]);
    }

    return code;
}

function arrayRotate(array, count, modifyOriginal = false) {
    if (!modifyOriginal) array = array.concat();

    count -= array.length * Math.floor(count / array.length);
    array.push.apply(array, array.splice(0, count));
    return array;
}

function singleDwarvenStair(x, y, z, direction) {
    // Function originally written for stairs rising toward north. So morphing coords for other directions.

    // Handle block rotation based on input direction... Here, just defining north as south if rotated for example.
    let rotDir = arrayRotate(directions, -directions.indexOf(direction));

    //  Handle north/south or east/west reversal of relative positions
    let xMod = 1;
    let zMod = 1;
    let temp = 0;

    if (direction === "south" || direction === "east") {
        xMod = -xMod;
        zMod = -zMod;
    }

    if (direction === "west" || direction === "east") {
        temp = x;
        x = z;
        z = temp;
    }

    let code = "\n\n";

    if (direction === "north" || direction === "south")
    {

        code += 'fill ' + (x + 0 * xMod) + ' ' + (y - 0) + ' ' + (z + 0 * zMod) + ' ' + (x + 6 * xMod) + ' ' + (y - 0) + ' ' + (z + 0 * zMod) + ' minecraft:air replace minecraft:stone_bricks\n';
        code += 'fill ' + (x + 1 * xMod) + ' ' + (y - 1) + ' ' + (z + 0 * zMod) + ' ' + (x + 5 * xMod) + ' ' + (y - 1) + ' ' + (z + 0 * zMod) + ' minecraft:air replace minecraft:stone_bricks\n';
        code += 'fill ' + (x + 2 * xMod) + ' ' + (y - 2) + ' ' + (z + 0 * zMod) + ' ' + (x + 4 * xMod) + ' ' + (y - 2) + ' ' + (z + 0 * zMod) + ' minecraft:air replace minecraft:stone_bricks\n';
        code += 'fill ' + (x + 1 * xMod) + ' ' + (y - 0) + ' ' + (z - 1 * zMod) + ' ' + (x + 5 * xMod) + ' ' + (y - 0) + ' ' + (z - 1 * zMod) + ' minecraft:air replace minecraft:stone_bricks\n';
        code += 'fill ' + (x + 2 * xMod) + ' ' + (y - 0) + ' ' + (z - 2 * zMod) + ' ' + (x + 4 * xMod) + ' ' + (y - 0) + ' ' + (z - 2 * zMod) + ' minecraft:air replace minecraft:stone_bricks\n';
        code += 'fill ' + (x + 2 * xMod) + ' ' + (y - 1) + ' ' + (z - 1 * zMod) + ' ' + (x + 4 * xMod) + ' ' + (y - 1) + ' ' + (z - 1 * zMod) + ' minecraft:air replace minecraft:stone_bricks\n';
        code += "\n";

        code += 'setblock ' + (x - 1 * xMod) + ' ' + (y + 1) + ' ' + (z + 0 * zMod) + ' minecraft:torch keep\n';
        code += 'setblock ' + (x - 1 * xMod) + ' ' + (y - 1) + ' ' + (z + 1 * zMod) + ' minecraft:wall_torch[facing=' + rotDir[2] + '] keep\n';
        code += "\n";

        code += 'setblock ' + (x + 0 * xMod) + ' ' + (y - 0) + ' ' + (z + 0 * zMod) + ' minecraft:stone_brick_stairs[facing=' + rotDir[3] + '] keep\n';
        code += 'setblock ' + (x + 1 * xMod) + ' ' + (y - 1) + ' ' + (z + 0 * zMod) + ' minecraft:stone_brick_stairs[facing=' + rotDir[3] + '] keep\n';
        code += 'setblock ' + (x + 1 * xMod) + ' ' + (y - 0) + ' ' + (z - 1 * zMod) + ' minecraft:stone_brick_stairs[facing=' + rotDir[3] + '] keep\n';
        code += 'setblock ' + (x + 1 * xMod) + ' ' + (y - 3) + ' ' + (z + 1 * zMod) + ' minecraft:stone_brick_stairs[facing=' + rotDir[1] + '] keep\n';

        code += 'setblock ' + (x + 6 * xMod) + ' ' + (y - 0) + ' ' + (z + 0 * zMod) + ' minecraft:stone_brick_stairs[facing=' + rotDir[1] + '] keep\n';
        code += 'setblock ' + (x + 5 * xMod) + ' ' + (y - 1) + ' ' + (z + 0 * zMod) + ' minecraft:stone_brick_stairs[facing=' + rotDir[1] + '] keep\n';
        code += 'setblock ' + (x + 5 * xMod) + ' ' + (y - 0) + ' ' + (z - 1 * zMod) + ' minecraft:stone_brick_stairs[facing=' + rotDir[1] + '] keep\n';
        code += 'setblock ' + (x + 5 * xMod) + ' ' + (y - 3) + ' ' + (z + 1 * zMod) + ' minecraft:stone_brick_stairs[facing=' + rotDir[3] + '] keep\n';

        code += "\n";
        code += 'setblock ' + (x + 2 * xMod) + ' ' + (y - 3) + ' ' + (z + 1 * zMod) + ' minecraft:stone_brick_stairs[facing=' + rotDir[0] + '] keep\n';
        code += 'setblock ' + (x + 3 * xMod) + ' ' + (y - 3) + ' ' + (z + 1 * zMod) + ' minecraft:stone_brick_stairs[facing=' + rotDir[0] + '] keep\n';
        code += 'setblock ' + (x + 4 * xMod) + ' ' + (y - 3) + ' ' + (z + 1 * zMod) + ' minecraft:stone_brick_stairs[facing=' + rotDir[0] + '] keep\n';

        code += 'setblock ' + (x + 2 * xMod) + ' ' + (y - 2) + ' ' + (z + 0 * zMod) + ' minecraft:stone_brick_stairs[facing=' + rotDir[0] + '] keep\n';
        code += 'setblock ' + (x + 3 * xMod) + ' ' + (y - 2) + ' ' + (z + 0 * zMod) + ' minecraft:stone_brick_stairs[facing=' + rotDir[0] + '] keep\n';
        code += 'setblock ' + (x + 4 * xMod) + ' ' + (y - 2) + ' ' + (z + 0 * zMod) + ' minecraft:stone_brick_stairs[facing=' + rotDir[0] + '] keep\n';

        code += 'setblock ' + (x + 2 * xMod) + ' ' + (y - 1) + ' ' + (z - 1 * zMod) + ' minecraft:stone_brick_stairs[facing=' + rotDir[0] + '] keep\n';
        code += 'setblock ' + (x + 3 * xMod) + ' ' + (y - 1) + ' ' + (z - 1 * zMod) + ' minecraft:stone_brick_stairs[facing=' + rotDir[0] + '] keep\n';
        code += 'setblock ' + (x + 4 * xMod) + ' ' + (y - 1) + ' ' + (z - 1 * zMod) + ' minecraft:stone_brick_stairs[facing=' + rotDir[0] + '] keep\n';

        code += 'setblock ' + (x + 2 * xMod) + ' ' + (y - 0) + ' ' + (z - 2 * zMod) + ' minecraft:stone_brick_stairs[facing=' + rotDir[0] + '] keep\n';
        code += 'setblock ' + (x + 3 * xMod) + ' ' + (y - 0) + ' ' + (z - 2 * zMod) + ' minecraft:stone_brick_stairs[facing=' + rotDir[0] + '] keep\n';
        code += 'setblock ' + (x + 4 * xMod) + ' ' + (y - 0) + ' ' + (z - 2 * zMod) + ' minecraft:stone_brick_stairs[facing=' + rotDir[0] + '] keep\n';
    }
else
    {
        code += 'fill ' + (x + 0 * xMod) + ' ' + (y - 0) + ' ' + (z + 0 * zMod) + ' ' + (x + 0 * xMod) + ' ' + (y - 0) + ' ' + (z + 6 * zMod) + ' minecraft:air replace minecraft:stone_bricks\n';
        code += 'fill ' + (x + 0 * xMod) + ' ' + (y - 1) + ' ' + (z + 1 * zMod) + ' ' + (x + 0 * xMod) + ' ' + (y - 1) + ' ' + (z + 5 * zMod) + ' minecraft:air replace minecraft:stone_bricks\n';
        code += 'fill ' + (x + 0 * xMod) + ' ' + (y - 2) + ' ' + (z + 2 * zMod) + ' ' + (x + 0 * xMod) + ' ' + (y - 2) + ' ' + (z + 4 * zMod) + ' minecraft:air replace minecraft:stone_bricks\n';
        code += 'fill ' + (x + 1 * xMod) + ' ' + (y - 0) + ' ' + (z + 1 * zMod) + ' ' + (x + 1 * xMod) + ' ' + (y - 0) + ' ' + (z + 5 * zMod) + ' minecraft:air replace minecraft:stone_bricks\n';
        code += 'fill ' + (x + 2 * xMod) + ' ' + (y - 0) + ' ' + (z + 2 * zMod) + ' ' + (x + 2 * xMod) + ' ' + (y - 0) + ' ' + (z + 4 * zMod) + ' minecraft:air replace minecraft:stone_bricks\n';
        code += 'fill ' + (x + 1 * xMod) + ' ' + (y - 1) + ' ' + (z + 2 * zMod) + ' ' + (x + 1 * xMod) + ' ' + (y - 1) + ' ' + (z + 4 * zMod) + ' minecraft:air replace minecraft:stone_bricks\n';
        code += "\n";

        code += 'setblock ' + (x + 0 * xMod) + ' ' + (y + 1) + ' ' + (z - 1 * zMod) + ' minecraft:torch keep\n';
        code += 'setblock ' + (x - 1 * xMod) + ' ' + (y - 1) + ' ' + (z - 1 * zMod) + ' minecraft:wall_torch[facing=' + rotDir[2] + '] keep\n';
        code += "\n";

        code += 'setblock ' + (x + 0 * xMod) + ' ' + (y - 0) + ' ' + (z + 0 * zMod) + ' minecraft:stone_brick_stairs[facing=' + rotDir[3] + '] keep\n';
        code += 'setblock ' + (x + 0 * xMod) + ' ' + (y - 1) + ' ' + (z + 1 * zMod) + ' minecraft:stone_brick_stairs[facing=' + rotDir[3] + '] keep\n';
        code += 'setblock ' + (x + 1 * xMod) + ' ' + (y - 0) + ' ' + (z + 1 * zMod) + ' minecraft:stone_brick_stairs[facing=' + rotDir[3] + '] keep\n';
        code += 'setblock ' + (x - 1 * xMod) + ' ' + (y - 3) + ' ' + (z + 1 * zMod) + ' minecraft:stone_brick_stairs[facing=' + rotDir[1] + '] keep\n';

        code += 'setblock ' + (x + 0 * xMod) + ' ' + (y - 0) + ' ' + (z + 6 * zMod) + ' minecraft:stone_brick_stairs[facing=' + rotDir[1] + '] keep\n';
        code += 'setblock ' + (x + 0 * xMod) + ' ' + (y - 1) + ' ' + (z + 5 * zMod) + ' minecraft:stone_brick_stairs[facing=' + rotDir[1] + '] keep\n';
        code += 'setblock ' + (x + 1 * xMod) + ' ' + (y - 0) + ' ' + (z + 5 * zMod) + ' minecraft:stone_brick_stairs[facing=' + rotDir[1] + '] keep\n';
        code += 'setblock ' + (x - 1 * xMod) + ' ' + (y - 3) + ' ' + (z + 5 * zMod) + ' minecraft:stone_brick_stairs[facing=' + rotDir[3] + '] keep\n';

        code += "\n";
        code += 'setblock ' + (x - 1 * xMod) + ' ' + (y - 3) + ' ' + (z + 2 * zMod) + ' minecraft:stone_brick_stairs[facing=' + rotDir[0] + '] keep\n';
        code += 'setblock ' + (x - 1 * xMod) + ' ' + (y - 3) + ' ' + (z + 3 * zMod) + ' minecraft:stone_brick_stairs[facing=' + rotDir[0] + '] keep\n';
        code += 'setblock ' + (x - 1 * xMod) + ' ' + (y - 3) + ' ' + (z + 4 * zMod) + ' minecraft:stone_brick_stairs[facing=' + rotDir[0] + '] keep\n';

        code += 'setblock ' + (x + 0 * xMod) + ' ' + (y - 2) + ' ' + (z + 2 * zMod) + ' minecraft:stone_brick_stairs[facing=' + rotDir[0] + '] keep\n';
        code += 'setblock ' + (x + 0 * xMod) + ' ' + (y - 2) + ' ' + (z + 3 * zMod) + ' minecraft:stone_brick_stairs[facing=' + rotDir[0] + '] keep\n';
        code += 'setblock ' + (x + 0 * xMod) + ' ' + (y - 2) + ' ' + (z + 4 * zMod) + ' minecraft:stone_brick_stairs[facing=' + rotDir[0] + '] keep\n';

        code += 'setblock ' + (x + 1 * xMod) + ' ' + (y - 1) + ' ' + (z + 2 * zMod) + ' minecraft:stone_brick_stairs[facing=' + rotDir[0] + '] keep\n';
        code += 'setblock ' + (x + 1 * xMod) + ' ' + (y - 1) + ' ' + (z + 3 * zMod) + ' minecraft:stone_brick_stairs[facing=' + rotDir[0] + '] keep\n';
        code += 'setblock ' + (x + 1 * xMod) + ' ' + (y - 1) + ' ' + (z + 4 * zMod) + ' minecraft:stone_brick_stairs[facing=' + rotDir[0] + '] keep\n';

        code += 'setblock ' + (x + 2 * xMod) + ' ' + (y - 0) + ' ' + (z + 2 * zMod) + ' minecraft:stone_brick_stairs[facing=' + rotDir[0] + '] keep\n';
        code += 'setblock ' + (x + 2 * xMod) + ' ' + (y - 0) + ' ' + (z + 3 * zMod) + ' minecraft:stone_brick_stairs[facing=' + rotDir[0] + '] keep\n';
        code += 'setblock ' + (x + 2 * xMod) + ' ' + (y - 0) + ' ' + (z + 4 * zMod) + ' minecraft:stone_brick_stairs[facing=' + rotDir[0] + '] keep\n';
    }
    return code;
}

function boxRoom() {
    initValues();

    if ((lengthX * widthZ) > 32767) {
        codeOutput = "Length times width must be less than 32767. Please adjust values and try again.";
    } else {
        // Because width/2 is stored as a double, Math.ceil produces unexpected results. So handle even widths manually.
        if (lengthX % 2 === 1) {
            minX = centerX - Math.floor(lengthX / 2);
            maxX = centerX + Math.floor(lengthX / 2);
        } else {
            minX = (centerX - (lengthX / 2)) + 1;  // Add 1 to min to account for (off)center square on even length.
            maxX = centerX + (lengthX / 2);
        }

        minY = floorY;
        maxY = minY + heightY;

        if (widthZ % 2 === 1) {
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

