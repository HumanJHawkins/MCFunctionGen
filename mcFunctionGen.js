let hardCrunchyShell, shellType, wallType;
let preserveMinerals;

let centerX, floorY, centerZ;
let lengthX, heightY, widthZ;

let minX, maxX;
let minY, maxY;
let minZ, maxZ;

let boxRoomOutput = "";

function initValues() {
    hardCrunchyShell = document.getElementById("hardCrunchyShell").checked;
    shellType = document.getElementById("shellType").value;
    wallType = document.getElementById("wallType").value;

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
        if (lengthX % 2 === 1) {
            minX = centerX - ((lengthX - 1) / 2);
            maxX = centerX + ((lengthX - 1) / 2);
        } else {
            minX = centerX - Math.floor(lengthX / 2);
            maxX = centerX + Math.ceil(lengthX / 2);
        }

        minY = floorY + 1;
        maxY = minY + heightY;

        if (widthZ % 2 === 1) {
            minZ = centerZ - ((widthZ - 1) / 2);
            maxZ = centerZ + ((widthZ - 1) / 2);
        } else {
            minZ = centerZ - Math.floor(widthZ / 2);
            maxZ = centerZ + Math.ceil(widthZ / 2);
        }

        if (hardCrunchyShell) {
            if (!preserveMinerals) {
                boxRoomOutput = boxRoomOutput + getRoomWalls(wallType);
            } else if (shellType === "Natural") {
                boxRoomOutput = boxRoomOutput + getRoomWalls("minecraft:stone replace minecraft:water");
                boxRoomOutput = boxRoomOutput + getRoomWalls("minecraft:stone replace minecraft:dirt");
                boxRoomOutput = boxRoomOutput + getRoomWalls("minecraft:stone replace minecraft:gravel");
                boxRoomOutput = boxRoomOutput + getRoomWalls("minecraft:stone replace minecraft:sand");
                boxRoomOutput = boxRoomOutput + getRoomWalls("minecraft:stone replace minecraft:air");
                boxRoomOutput = boxRoomOutput + getRoomWalls("minecraft:obsidian replace minecraft:lava");
                boxRoomOutput = boxRoomOutput + getRoomWalls("minecraft:stone replace minecraft:water");
            } else {
                boxRoomOutput = boxRoomOutput + getRoomWalls(wallType + " replace minecraft:water");
                boxRoomOutput = boxRoomOutput + getRoomWalls(wallType + " replace minecraft:dirt");
                boxRoomOutput = boxRoomOutput + getRoomWalls(wallType + " replace minecraft:gravel");
                boxRoomOutput = boxRoomOutput + getRoomWalls(wallType + " replace minecraft:sand");
                boxRoomOutput = boxRoomOutput + getRoomWalls(wallType + " replace minecraft:air");
                boxRoomOutput = boxRoomOutput + getRoomWalls(wallType + " replace minecraft:lava");
                boxRoomOutput = boxRoomOutput + getRoomWalls(wallType + " replace minecraft:water");
            }
        }

        for (let i = minY; i < maxY; i++) {
                if (!preserveMinerals) {
                    boxRoomOutput = boxRoomOutput +
                        "fill " + minX + " " + i + " " + minZ + " " + maxX + " " + i + " " + maxZ + " minecraft:air\n";
                } else {
                    boxRoomOutput = boxRoomOutput + clearRoomInterior("minecraft:water", i);
                    boxRoomOutput = boxRoomOutput + clearRoomInterior("minecraft:dirt", i);
                    boxRoomOutput = boxRoomOutput + clearRoomInterior("minecraft:gravel", i);
                    boxRoomOutput = boxRoomOutput + clearRoomInterior("minecraft:sand", i);
                    boxRoomOutput = boxRoomOutput + clearRoomInterior("minecraft:air", i);
                    boxRoomOutput = boxRoomOutput + clearRoomInterior("minecraft:lava", i);
                }
        }
    }


    document.getElementById("boxRoomOutput").value = boxRoomOutput;
}

function getRoomWalls(replaceCode) {
    let output      = "fill " + (minX - 1) + " " + (minY - 1) + " " + (minZ - 1) + " " + (maxX + 1) + " " + (minY - 1) + " " + (maxZ + 1) + " " + replaceCode + "\n"; // Floor
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

function updateShell() {
    let hardCrunchyShell = document.getElementById("hardCrunchyShell").checked;

    if (hardCrunchyShell === true) {
        document.getElementById("shellType").disabled = false;
        document.getElementById("wallType").disabled = false;
    } else {
        document.getElementById("shellType").disabled = true;
        document.getElementById("wallType").disabled = true;
        document.getElementById("shellType").value = "-";
    }

    updateWallType();
}

function updateWallType() {
    document.getElementById("wallType").disabled = true;
    let shellType = document.getElementById("shellType").value;

    if (shellType === "Natural") {
        document.getElementById("wallType").value = "minecraft:stone";
    } else if (shellType === "Custom") {
        document.getElementById("wallType").disabled = false;
        document.getElementById("wallType").value = "minecraft:obsidian";

    } else if (shellType === "-") {
        document.getElementById("wallType").value = "";
    } else {
        document.getElementById("wallType").value = document.getElementById("shellType").value;
    }
}


// fill -47 6 -47 47 7 47 minecraft:stone replace minecraft:water
// fill -47 6 -47 47 7 47 minecraft:stone replace minecraft:dirt
// fill -47 6 -47 47 7 47 minecraft:stone replace minecraft:gravel
// fill -47 6 -47 47 7 47 minecraft:stone replace minecraft:sand
// fill -47 6 -47 47 7 47 minecraft:glass replace minecraft:air
// fill -47 6 -47 47 7 47 minecraft:obsidian replace minecraft:lava
// fill -47 8 -47 47 9 47 minecraft:stone replace minecraft:water
// fill -47 8 -47 47 9 47 minecraft:stone replace minecraft:dirt
// fill -47 8 -47 47 9 47 minecraft:stone replace minecraft:gravel
// fill -47 8 -47 47 9 47 minecraft:stone replace minecraft:sand
// fill -47 8 -47 47 9 47 minecraft:glass replace minecraft:air
// fill -47 8 -47 47 9 47 minecraft:obsidian replace minecraft:lava