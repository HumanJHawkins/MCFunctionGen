let wallType, wallMaterial;
let preserveMinerals;

let centerX, floorY, centerZ;
let lengthX, heightY, widthZ;

let minX, maxX;
let minY, maxY;
let minZ, maxZ;

let boxRoomOutput = "";

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

    boxRoomOutput = "";
}

function boxRoom() {
    initValues();

    if ((lengthX * widthZ) > 32767) {
        boxRoomOutput = "Length times width must be less than 32767. Please adjust values and try again.";
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
            boxRoomOutput = boxRoomOutput + "# Generating complete / clean walls.\n";
            boxRoomOutput = boxRoomOutput + getRoomWalls(wallMaterial);
        } else if (wallType === "Preserve Minerals") {
            boxRoomOutput = boxRoomOutput + "# Generating walls, leaving most minerals intact. Unfortunately flowing \n" +
                "# water does not replace well, so this may produce walls with holes.\n";
            boxRoomOutput = boxRoomOutput + getRoomWalls(wallMaterial + " replace minecraft:water");
            boxRoomOutput = boxRoomOutput + getRoomWalls(wallMaterial + " replace minecraft:dirt");
            boxRoomOutput = boxRoomOutput + getRoomWalls(wallMaterial + " replace minecraft:gravel");
            boxRoomOutput = boxRoomOutput + getRoomWalls(wallMaterial + " replace minecraft:sand");
        } else if (wallType === "Preserve and Seal") {
            boxRoomOutput = boxRoomOutput + "# Generating walls, leaving most minerals intact. Attempting to also \n" +
                "# seal holes and lava or water flows. This does not work well. Run the \n" +
                "# function multiple times quickly for best results.\n";
            boxRoomOutput = boxRoomOutput + getRoomWalls(wallMaterial + " replace minecraft:water");
            boxRoomOutput = boxRoomOutput + getRoomWalls(wallMaterial + " replace minecraft:dirt");
            boxRoomOutput = boxRoomOutput + getRoomWalls(wallMaterial + " replace minecraft:gravel");
            boxRoomOutput = boxRoomOutput + getRoomWalls(wallMaterial + " replace minecraft:sand");
            boxRoomOutput = boxRoomOutput + getRoomWalls("minecraft:glass replace minecraft:air");
            boxRoomOutput = boxRoomOutput + getRoomWalls("minecraft:glass replace minecraft:water");
            boxRoomOutput = boxRoomOutput + getRoomWalls("minecraft:obsidian replace minecraft:lava");
        }

        boxRoomOutput = boxRoomOutput + "\n";

        // Need message to not be in the loop, so splitting into two loops.
        if (!preserveMinerals) {
            boxRoomOutput = boxRoomOutput + "# Clearing room interior\n";
            for (let i = minY; i < maxY; i++) {
                boxRoomOutput = boxRoomOutput +
                    "fill " + minX + " " + i + " " + minZ + " " + maxX + " " + i + " " + maxZ + " minecraft:air\n";
            }
        } else {
            boxRoomOutput = boxRoomOutput + "# Clearing room interior. Leaving most minerals intact. Run this \n" +
                "# function multiple times quickly to remove buggy water flows.\n";
            for (let i = minY; i < maxY; i++) {
                boxRoomOutput = boxRoomOutput + clearRoomInterior("minecraft:water", i);
                boxRoomOutput = boxRoomOutput + clearRoomInterior("minecraft:dirt", i);
                boxRoomOutput = boxRoomOutput + clearRoomInterior("minecraft:gravel", i);
                boxRoomOutput = boxRoomOutput + clearRoomInterior("minecraft:sand", i);
                boxRoomOutput = boxRoomOutput + clearRoomInterior("minecraft:lava", i);
            }
        }

        document.getElementById("boxRoomOutput").value = boxRoomOutput;
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

