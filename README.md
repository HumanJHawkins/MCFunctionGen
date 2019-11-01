# MCFunctionGen
# An example of the kind of thing this is working towards. Deploy on test world as
# a function and try it out.

# Replace cave_air and void_air with air, so we don't have to handle 
# these seperately.
fill -51 2 -51 51 4 51 minecraft:air replace minecraft:cave_air
fill -51 5 -51 51 7 51 minecraft:air replace minecraft:cave_air
fill -51 8 -51 51 10 51 minecraft:air replace minecraft:cave_air
fill -51 11 -51 51 13 51 minecraft:air replace minecraft:cave_air
fill -51 14 -51 51 16 51 minecraft:air replace minecraft:cave_air

fill -51 2 -51 51 4 51 minecraft:stone replace minecraft:diorite
fill -51 5 -51 51 7 51 minecraft:stone replace minecraft:diorite
fill -51 8 -51 51 10 51 minecraft:stone replace minecraft:diorite
fill -51 11 -51 51 13 51 minecraft:stone replace minecraft:diorite
fill -51 14 -51 51 16 51 minecraft:stone replace minecraft:diorite

fill -51 2 -51 51 4 51 minecraft:stone replace minecraft:andesite
fill -51 5 -51 51 7 51 minecraft:stone replace minecraft:andesite
fill -51 8 -51 51 10 51 minecraft:stone replace minecraft:andesite
fill -51 11 -51 51 13 51 minecraft:stone replace minecraft:andesite
fill -51 14 -51 51 16 51 minecraft:stone replace minecraft:andesite

fill -51 2 -51 51 4 51 minecraft:stone replace minecraft:granite
fill -51 5 -51 51 7 51 minecraft:stone replace minecraft:granite
fill -51 8 -51 51 10 51 minecraft:stone replace minecraft:granite
fill -51 11 -51 51 13 51 minecraft:stone replace minecraft:granite
fill -51 14 -51 51 16 51 minecraft:stone replace minecraft:granite

fill -51 2 -51 51 4 51 minecraft:obsidian replace minecraft:lava
fill -51 5 -51 51 7 51 minecraft:obsidian replace minecraft:lava
fill -51 8 -51 51 10 51 minecraft:obsidian replace minecraft:lava
fill -51 11 -51 51 13 51 minecraft:obsidian replace minecraft:lava
fill -51 14 -51 51 16 51 minecraft:obsidian replace minecraft:lava

# Solidify ceiling
fill -51 16 -51 51 16 51 minecraft:glass replace minecraft:air
fill -51 16 -51 51 16 51 minecraft:glass replace minecraft:water
fill -51 16 -51 51 16 51 minecraft:stone_bricks replace minecraft:gravel
fill -51 16 -51 51 16 51 minecraft:stone_bricks replace minecraft:sand
fill -51 16 -51 51 16 51 minecraft:stone_bricks replace minecraft:stone
fill -51 16 -51 51 16 51 minecraft:stone_bricks replace minecraft:dirt

# Handle walls
fill -51 1 -51 51 1 51 minecraft:bedrock

fill -43 2 -43 43 5 43 minecraft:stone_bricks replace minecraft:bedrock
fill -43 2 -43 43 5 43 minecraft:glass replace minecraft:air
fill -43 2 -43 43 5 43 minecraft:glass replace minecraft:water
fill -43 2 -43 43 5 43 minecraft:stone_bricks replace minecraft:stone
fill -43 2 -43 43 5 43 minecraft:stone_bricks replace minecraft:dirt
fill -43 2 -43 43 5 43 minecraft:stone_bricks replace minecraft:gravel
fill -43 2 -43 43 5 43 minecraft:stone_bricks replace minecraft:sand

fill -47 6 -47 47 8 47 minecraft:stone_bricks replace minecraft:bedrock
fill -47 6 -47 47 8 47 minecraft:glass replace minecraft:air
fill -47 6 -47 47 8 47 minecraft:glass replace minecraft:water
fill -47 6 -47 47 8 47 minecraft:stone_bricks replace minecraft:stone
fill -47 6 -47 47 8 47 minecraft:stone_bricks replace minecraft:dirt
fill -47 6 -47 47 8 47 minecraft:stone_bricks replace minecraft:gravel
fill -47 6 -47 47 8 47 minecraft:stone_bricks replace minecraft:sand

fill -47 9 -47 47 9 47 minecraft:stone_bricks replace minecraft:bedrock
fill -47 9 -47 47 9 47 minecraft:glass replace minecraft:air
fill -47 9 -47 47 9 47 minecraft:glass replace minecraft:water
fill -47 9 -47 47 9 47 minecraft:stone_bricks replace minecraft:stone
fill -47 9 -47 47 9 47 minecraft:stone_bricks replace minecraft:dirt
fill -47 9 -47 47 9 47 minecraft:stone_bricks replace minecraft:gravel
fill -47 9 -47 47 9 47 minecraft:stone_bricks replace minecraft:sand

fill -51 10 -51 51 12 51 minecraft:stone_bricks replace minecraft:bedrock
fill -51 10 -51 51 12 51 minecraft:glass replace minecraft:air
fill -51 10 -51 51 12 51 minecraft:glass replace minecraft:water
fill -51 10 -51 51 12 51 minecraft:stone_bricks replace minecraft:stone
fill -51 10 -51 51 12 51 minecraft:stone_bricks replace minecraft:dirt
fill -51 10 -51 51 12 51 minecraft:stone_bricks replace minecraft:gravel
fill -51 10 -51 51 12 51 minecraft:stone_bricks replace minecraft:sand

fill -51 13 -51 51 15 51 minecraft:stone_bricks replace minecraft:bedrock
fill -51 13 -51 51 15 51 minecraft:glass replace minecraft:air
fill -51 13 -51 51 15 51 minecraft:glass replace minecraft:water
fill -51 13 -51 51 15 51 minecraft:stone_bricks replace minecraft:stone
fill -51 13 -51 51 15 51 minecraft:stone_bricks replace minecraft:dirt
fill -51 13 -51 51 15 51 minecraft:stone_bricks replace minecraft:gravel
fill -51 13 -51 51 15 51 minecraft:stone_bricks replace minecraft:sand

# Redo these multiple times, as flowing water stops earlier 
# attempts from working
fill -51 13 -51 51 15 51 minecraft:glass replace minecraft:water
fill -51 10 -51 51 12 51 minecraft:glass replace minecraft:water
fill -47 6 -47 47 8 47 minecraft:glass replace minecraft:water
fill -47 9 -47 47 9 47 minecraft:glass replace minecraft:water

fill -51 13 -51 51 15 51 minecraft:glass replace minecraft:water
fill -51 10 -51 51 12 51 minecraft:glass replace minecraft:water
fill -47 6 -47 47 8 47 minecraft:glass replace minecraft:water
fill -47 9 -47 47 9 47 minecraft:glass replace minecraft:water

fill -51 13 -51 51 15 51 minecraft:glass replace minecraft:water
fill -51 10 -51 51 12 51 minecraft:glass replace minecraft:water
fill -47 6 -47 47 8 47 minecraft:glass replace minecraft:water
fill -47 9 -47 47 9 47 minecraft:glass replace minecraft:water

# Replace all low-value blocks with air
fill -42 3 -42 42 6 42 minecraft:air replace minecraft:stone_bricks 
fill -42 3 -42 42 6 42 minecraft:air replace minecraft:glass

fill -46 7 -46 46 9 46 minecraft:air replace minecraft:stone_bricks 
fill -46 7 -46 46 9 46 minecraft:air replace minecraft:glass

fill -46 10 -46 46 10 46 minecraft:air replace minecraft:stone_bricks 
fill -46 10 -46 46 10 46 minecraft:air replace minecraft:glass

fill -50 11 -50 50 13 50 minecraft:air replace minecraft:stone_bricks 
fill -50 11 -50 50 13 50 minecraft:air replace minecraft:glass

fill -50 14 -50 50 15 50 minecraft:air replace minecraft:stone_bricks 
fill -50 14 -50 50 15 50 minecraft:air replace minecraft:glass

# Down shaft. Handle cave_air first...
fill -2 2 -2 2 80 2 minecraft:air replace minecraft:cave_air
fill -1 16 -2 1 67 1 minecraft:glass replace minecraft:air
fill -1 16 -2 1 67 1 minecraft:glass replace minecraft:water
fill -1 16 -2 1 67 1 minecraft:obsidian replace minecraft:lava
fill 0 2 -1 0 67 0 minecraft:air

# Landing Pool
fill 0 2 -2 0 15 -2 minecraft:polished_diorite
fill -2 2 -2 2 2 2 minecraft:polished_diorite
fill -1 2 -1 1 2 1 minecraft:water

# Ladder
setblock 0 3 -1 minecraft:ladder[facing=south]
setblock 0 4 -1 minecraft:ladder[facing=south]
setblock 0 5 -1 minecraft:ladder[facing=south]
setblock 0 6 -1 minecraft:ladder[facing=south]
setblock 0 7 -1 minecraft:ladder[facing=south]
setblock 0 8 -1 minecraft:ladder[facing=south]
setblock 0 9 -1 minecraft:ladder[facing=south]
setblock 0 10 -1 minecraft:ladder[facing=south]
setblock 0 11 -1 minecraft:ladder[facing=south]
setblock 0 12 -1 minecraft:ladder[facing=south]
setblock 0 13 -1 minecraft:ladder[facing=south]
setblock 0 14 -1 minecraft:ladder[facing=south]
setblock 0 15 -1 minecraft:ladder[facing=south]
setblock 0 16 -1 minecraft:ladder[facing=south]
setblock 0 17 -1 minecraft:ladder[facing=south]
setblock 0 18 -1 minecraft:ladder[facing=south]
setblock 0 19 -1 minecraft:ladder[facing=south]
setblock 0 20 -1 minecraft:ladder[facing=south]
setblock 0 21 -1 minecraft:ladder[facing=south]
setblock 0 22 -1 minecraft:ladder[facing=south]
setblock 0 23 -1 minecraft:ladder[facing=south]
setblock 0 24 -1 minecraft:ladder[facing=south]
setblock 0 25 -1 minecraft:ladder[facing=south]
setblock 0 26 -1 minecraft:ladder[facing=south]
setblock 0 27 -1 minecraft:ladder[facing=south]
setblock 0 28 -1 minecraft:ladder[facing=south]
setblock 0 29 -1 minecraft:ladder[facing=south]
setblock 0 30 -1 minecraft:ladder[facing=south]
setblock 0 31 -1 minecraft:ladder[facing=south]
setblock 0 32 -1 minecraft:ladder[facing=south]
setblock 0 33 -1 minecraft:ladder[facing=south]
setblock 0 34 -1 minecraft:ladder[facing=south]
setblock 0 35 -1 minecraft:ladder[facing=south]
setblock 0 36 -1 minecraft:ladder[facing=south]
setblock 0 37 -1 minecraft:ladder[facing=south]
setblock 0 38 -1 minecraft:ladder[facing=south]
setblock 0 39 -1 minecraft:ladder[facing=south]
setblock 0 40 -1 minecraft:ladder[facing=south]
setblock 0 41 -1 minecraft:ladder[facing=south]
setblock 0 42 -1 minecraft:ladder[facing=south]
setblock 0 43 -1 minecraft:ladder[facing=south]
setblock 0 44 -1 minecraft:ladder[facing=south]
setblock 0 45 -1 minecraft:ladder[facing=south]
setblock 0 46 -1 minecraft:ladder[facing=south]
setblock 0 47 -1 minecraft:ladder[facing=south]
setblock 0 48 -1 minecraft:ladder[facing=south]
setblock 0 49 -1 minecraft:ladder[facing=south]
setblock 0 50 -1 minecraft:ladder[facing=south]
setblock 0 51 -1 minecraft:ladder[facing=south]
setblock 0 52 -1 minecraft:ladder[facing=south]
setblock 0 53 -1 minecraft:ladder[facing=south]
setblock 0 54 -1 minecraft:ladder[facing=south]
setblock 0 55 -1 minecraft:ladder[facing=south]
setblock 0 56 -1 minecraft:ladder[facing=south]
setblock 0 57 -1 minecraft:ladder[facing=south]
setblock 0 58 -1 minecraft:ladder[facing=south]
setblock 0 59 -1 minecraft:ladder[facing=south]
setblock 0 60 -1 minecraft:ladder[facing=south]
setblock 0 61 -1 minecraft:ladder[facing=south]
setblock 0 62 -1 minecraft:ladder[facing=south]
setblock 0 63 -1 minecraft:ladder[facing=south]
setblock 0 64 -1 minecraft:ladder[facing=south]
setblock 0 65 -1 minecraft:ladder[facing=south]
setblock 0 66 -1 minecraft:ladder[facing=south]
setblock 0 67 -1 minecraft:ladder[facing=south]

# Cut mineshaft starts.
# Top level
fill -48 11 -51 -48 12 -51 minecraft:air
fill -51 11 -48 -51 12 -48 minecraft:air
fill 48 11 51 48 12 51 minecraft:air
fill 51 11 48 51 12 48 minecraft:air
fill 48 11 -51 48 12 -51 minecraft:air
fill 51 11 -48 51 12 -48 minecraft:air
fill -48 11 51 -48 12 51 minecraft:air
fill -51 11 48 -51 12 48 minecraft:air
fill -40 11 -51 -40 12 -51 minecraft:air
fill -51 11 -40 -51 12 -40 minecraft:air
fill 40 11 51 40 12 51 minecraft:air
fill 51 11 40 51 12 40 minecraft:air
fill 40 11 -51 40 12 -51 minecraft:air
fill 51 11 -40 51 12 -40 minecraft:air
fill -40 11 51 -40 12 51 minecraft:air
fill -51 11 40 -51 12 40 minecraft:air
fill -32 11 -51 -32 12 -51 minecraft:air
fill -51 11 -32 -51 12 -32 minecraft:air
fill 32 11 51 32 12 51 minecraft:air
fill 51 11 32 51 12 32 minecraft:air
fill 32 11 -51 32 12 -51 minecraft:air
fill 51 11 -32 51 12 -32 minecraft:air
fill -32 11 51 -32 12 51 minecraft:air
fill -51 11 32 -51 12 32 minecraft:air
fill -24 11 -51 -24 12 -51 minecraft:air
fill -51 11 -24 -51 12 -24 minecraft:air
fill 24 11 51 24 12 51 minecraft:air
fill 51 11 24 51 12 24 minecraft:air
fill 24 11 -51 24 12 -51 minecraft:air
fill 51 11 -24 51 12 -24 minecraft:air
fill -24 11 51 -24 12 51 minecraft:air
fill -51 11 24 -51 12 24 minecraft:air
fill -16 11 -51 -16 12 -51 minecraft:air
fill -51 11 -16 -51 12 -16 minecraft:air
fill 16 11 51 16 12 51 minecraft:air
fill 51 11 16 51 12 16 minecraft:air
fill 16 11 -51 16 12 -51 minecraft:air
fill 51 11 -16 51 12 -16 minecraft:air
fill -16 11 51 -16 12 51 minecraft:air
fill -51 11 16 -51 12 16 minecraft:air
fill -8 11 -51 -8 12 -51 minecraft:air
fill -51 11 -8 -51 12 -8 minecraft:air
fill 8 11 51 8 12 51 minecraft:air
fill 51 11 8 51 12 8 minecraft:air
fill 8 11 -51 8 12 -51 minecraft:air
fill 51 11 -8 51 12 -8 minecraft:air
fill -8 11 51 -8 12 51 minecraft:air
fill -51 11 8 -51 12 8 minecraft:air
fill 0 11 -51 0 12 -51 minecraft:air
fill -51 11 0 -51 12 0 minecraft:air
fill 0 11 51 0 12 51 minecraft:air
fill 51 11 0 51 12 0 minecraft:air
fill 0 11 -51 0 12 -51 minecraft:air
fill 51 11 0 51 12 0 minecraft:air
fill 0 11 51 0 12 51 minecraft:air
fill -51 11 0 -51 12 0 minecraft:air

# Bottom level
fill -44 7 -47 -44 8 -48 minecraft:air
fill -47 7 -44 -48 8 -44 minecraft:air
fill 44 7 47 44 8 48 minecraft:air
fill 47 7 44 48 8 44 minecraft:air
fill 44 7 -47 44 8 -48 minecraft:air
fill 47 7 -44 48 8 -44 minecraft:air
fill -44 7 47 -44 8 48 minecraft:air
fill -47 7 44 -48 8 44 minecraft:air
fill -36 7 -47 -36 8 -48 minecraft:air
fill -47 7 -36 -48 8 -36 minecraft:air
fill 36 7 47 36 8 48 minecraft:air
fill 47 7 36 48 8 36 minecraft:air
fill 36 7 -47 36 8 -48 minecraft:air
fill 47 7 -36 48 8 -36 minecraft:air
fill -36 7 47 -36 8 48 minecraft:air
fill -47 7 36 -48 8 36 minecraft:air
fill -28 7 -47 -28 8 -48 minecraft:air
fill -47 7 -28 -48 8 -28 minecraft:air
fill 28 7 47 28 8 48 minecraft:air
fill 47 7 28 48 8 28 minecraft:air
fill 28 7 -47 28 8 -48 minecraft:air
fill 47 7 -28 48 8 -28 minecraft:air
fill -28 7 47 -28 8 48 minecraft:air
fill -47 7 28 -48 8 28 minecraft:air
fill -20 7 -47 -20 8 -48 minecraft:air
fill -47 7 -20 -48 8 -20 minecraft:air
fill 20 7 47 20 8 48 minecraft:air
fill 47 7 20 48 8 20 minecraft:air
fill 20 7 -47 20 8 -48 minecraft:air
fill 47 7 -20 48 8 -20 minecraft:air
fill -20 7 47 -20 8 48 minecraft:air
fill -47 7 20 -48 8 20 minecraft:air
fill -12 7 -47 -12 8 -48 minecraft:air
fill -47 7 -12 -48 8 -12 minecraft:air
fill 12 7 47 12 8 48 minecraft:air
fill 47 7 12 48 8 12 minecraft:air
fill 12 7 -47 12 8 -48 minecraft:air
fill 47 7 -12 48 8 -12 minecraft:air
fill -12 7 47 -12 8 48 minecraft:air
fill -47 7 12 -48 8 12 minecraft:air
fill -4 7 -47 -4 8 -48 minecraft:air
fill -47 7 -4 -48 8 -4 minecraft:air
fill 4 7 47 4 8 48 minecraft:air
fill 47 7 4 48 8 4 minecraft:air
fill 4 7 -47 4 8 -48 minecraft:air
fill 47 7 -4 48 8 -4 minecraft:air
fill -4 7 47 -4 8 48 minecraft:air
fill -47 7 4 -48 8 4 minecraft:air

#Torches
fill -45 3 -45 -45 3 -45 minecraft:torch replace minecraft:air
fill -35 3 -45 -35 3 -45 minecraft:torch replace minecraft:air
fill -25 3 -45 -25 3 -45 minecraft:torch replace minecraft:air
fill -15 3 -45 -15 3 -45 minecraft:torch replace minecraft:air
fill -5 3 -45 -5 3 -45 minecraft:torch replace minecraft:air
fill 5 3 -45 5 3 -45 minecraft:torch replace minecraft:air
fill 15 3 -45 15 3 -45 minecraft:torch replace minecraft:air
fill 25 3 -45 25 3 -45 minecraft:torch replace minecraft:air
fill 35 3 -45 35 3 -45 minecraft:torch replace minecraft:air
fill 45 3 -45 45 3 -45 minecraft:torch replace minecraft:air
fill -50 11 -50 -50 11 -50 minecraft:torch replace minecraft:air
fill -40 11 -50 -40 11 -50 minecraft:torch replace minecraft:air
fill -30 11 -50 -30 11 -50 minecraft:torch replace minecraft:air
fill -20 11 -50 -20 11 -50 minecraft:torch replace minecraft:air
fill -10 11 -50 -10 11 -50 minecraft:torch replace minecraft:air
fill 0 11 -50 0 11 -50 minecraft:torch replace minecraft:air
fill 10 11 -50 10 11 -50 minecraft:torch replace minecraft:air
fill 20 11 -50 20 11 -50 minecraft:torch replace minecraft:air
fill 30 11 -50 30 11 -50 minecraft:torch replace minecraft:air
fill 40 11 -50 40 11 -50 minecraft:torch replace minecraft:air
fill 50 11 -50 50 11 -50 minecraft:torch replace minecraft:air
fill -45 3 -35 -45 3 -35 minecraft:torch replace minecraft:air
fill -35 3 -35 -35 3 -35 minecraft:torch replace minecraft:air
fill -25 3 -35 -25 3 -35 minecraft:torch replace minecraft:air
fill -15 3 -35 -15 3 -35 minecraft:torch replace minecraft:air
fill -5 3 -35 -5 3 -35 minecraft:torch replace minecraft:air
fill 5 3 -35 5 3 -35 minecraft:torch replace minecraft:air
fill 15 3 -35 15 3 -35 minecraft:torch replace minecraft:air
fill 25 3 -35 25 3 -35 minecraft:torch replace minecraft:air
fill 35 3 -35 35 3 -35 minecraft:torch replace minecraft:air
fill 45 3 -35 45 3 -35 minecraft:torch replace minecraft:air
fill -50 11 -40 -50 11 -40 minecraft:torch replace minecraft:air
fill -40 3 -40 -40 3 -40 minecraft:torch replace minecraft:air
fill -30 3 -40 -30 3 -40 minecraft:torch replace minecraft:air
fill -20 3 -40 -20 3 -40 minecraft:torch replace minecraft:air
fill -10 3 -40 -10 3 -40 minecraft:torch replace minecraft:air
fill 0 3 -40 0 3 -40 minecraft:torch replace minecraft:air
fill 10 3 -40 10 3 -40 minecraft:torch replace minecraft:air
fill 20 3 -40 20 3 -40 minecraft:torch replace minecraft:air
fill 30 3 -40 30 3 -40 minecraft:torch replace minecraft:air
fill 40 3 -40 40 3 -40 minecraft:torch replace minecraft:air
fill 50 11 -40 50 11 -40 minecraft:torch replace minecraft:air
fill -45 3 -25 -45 3 -25 minecraft:torch replace minecraft:air
fill -35 3 -25 -35 3 -25 minecraft:torch replace minecraft:air
fill -25 6 -25 -25 6 -25 minecraft:torch replace minecraft:air
fill -15 6 -25 -15 6 -25 minecraft:torch replace minecraft:air
fill -5 6 -25 -5 6 -25 minecraft:torch replace minecraft:air
fill 5 6 -25 5 6 -25 minecraft:torch replace minecraft:air
fill 15 6 -25 15 6 -25 minecraft:torch replace minecraft:air
fill 25 6 -25 25 6 -25 minecraft:torch replace minecraft:air
fill 35 3 -25 35 3 -25 minecraft:torch replace minecraft:air
fill 45 3 -25 45 3 -25 minecraft:torch replace minecraft:air
fill -50 11 -30 -50 11 -30 minecraft:torch replace minecraft:air
fill -40 3 -30 -40 3 -30 minecraft:torch replace minecraft:air
fill -30 6 -30 -30 6 -30 minecraft:torch replace minecraft:air
fill -20 6 -30 -20 6 -30 minecraft:torch replace minecraft:air
fill -10 6 -30 -10 6 -30 minecraft:torch replace minecraft:air
fill 0 6 -30 0 6 -30 minecraft:torch replace minecraft:air
fill 10 6 -30 10 6 -30 minecraft:torch replace minecraft:air
fill 20 6 -30 20 6 -30 minecraft:torch replace minecraft:air
fill 30 6 -30 30 6 -30 minecraft:torch replace minecraft:air
fill 40 3 -30 40 3 -30 minecraft:torch replace minecraft:air
fill 50 11 -30 50 11 -30 minecraft:torch replace minecraft:air
fill -45 3 -15 -45 3 -15 minecraft:torch replace minecraft:air
fill -35 3 -15 -35 3 -15 minecraft:torch replace minecraft:air
fill -25 6 -15 -25 6 -15 minecraft:torch replace minecraft:air
fill -15 5 -15 -15 5 -15 minecraft:torch replace minecraft:air
fill -5 5 -15 -5 5 -15 minecraft:torch replace minecraft:air
fill 5 5 -15 5 5 -15 minecraft:torch replace minecraft:air
fill 15 5 -15 15 5 -15 minecraft:torch replace minecraft:air
fill 25 6 -15 25 6 -15 minecraft:torch replace minecraft:air
fill 35 3 -15 35 3 -15 minecraft:torch replace minecraft:air
fill 45 3 -15 45 3 -15 minecraft:torch replace minecraft:air
fill -50 11 -20 -50 11 -20 minecraft:torch replace minecraft:air
fill -40 3 -20 -40 3 -20 minecraft:torch replace minecraft:air
fill -30 6 -20 -30 6 -20 minecraft:torch replace minecraft:air
fill -20 6 -20 -20 6 -20 minecraft:torch replace minecraft:air
fill -10 6 -20 -10 6 -20 minecraft:torch replace minecraft:air
fill 0 6 -20 0 6 -20 minecraft:torch replace minecraft:air
fill 10 6 -20 10 6 -20 minecraft:torch replace minecraft:air
fill 20 6 -20 20 6 -20 minecraft:torch replace minecraft:air
fill 30 6 -20 30 6 -20 minecraft:torch replace minecraft:air
fill 40 3 -20 40 3 -20 minecraft:torch replace minecraft:air
fill 50 11 -20 50 11 -20 minecraft:torch replace minecraft:air
fill -45 3 -5 -45 3 -5 minecraft:torch replace minecraft:air
fill -35 3 -5 -35 3 -5 minecraft:torch replace minecraft:air
fill -25 6 -5 -25 6 -5 minecraft:torch replace minecraft:air
fill -15 5 -5 -15 5 -5 minecraft:torch replace minecraft:air
fill -5 4 -5 -5 4 -5 minecraft:torch replace minecraft:air
fill 5 4 -5 5 4 -5 minecraft:torch replace minecraft:air
fill 15 5 -5 15 5 -5 minecraft:torch replace minecraft:air
fill 25 6 -5 25 6 -5 minecraft:torch replace minecraft:air
fill 35 3 -5 35 3 -5 minecraft:torch replace minecraft:air
fill 45 3 -5 45 3 -5 minecraft:torch replace minecraft:air
fill -50 11 -10 -50 11 -10 minecraft:torch replace minecraft:air
fill -40 3 -10 -40 3 -10 minecraft:torch replace minecraft:air
fill -30 6 -10 -30 6 -10 minecraft:torch replace minecraft:air
fill -20 6 -10 -20 6 -10 minecraft:torch replace minecraft:air
fill -10 5 -10 -10 5 -10 minecraft:torch replace minecraft:air
fill 0 5 -10 0 5 -10 minecraft:torch replace minecraft:air
fill 10 5 -10 10 5 -10 minecraft:torch replace minecraft:air
fill 20 6 -10 20 6 -10 minecraft:torch replace minecraft:air
fill 30 6 -10 30 6 -10 minecraft:torch replace minecraft:air
fill 40 3 -10 40 3 -10 minecraft:torch replace minecraft:air
fill 50 11 -10 50 11 -10 minecraft:torch replace minecraft:air
fill -45 3 5 -45 3 5 minecraft:torch replace minecraft:air
fill -35 3 5 -35 3 5 minecraft:torch replace minecraft:air
fill -25 6 5 -25 6 5 minecraft:torch replace minecraft:air
fill -15 5 5 -15 5 5 minecraft:torch replace minecraft:air
fill -5 4 5 -5 4 5 minecraft:torch replace minecraft:air
fill 5 4 5 5 4 5 minecraft:torch replace minecraft:air
fill 15 5 5 15 5 5 minecraft:torch replace minecraft:air
fill 25 6 5 25 6 5 minecraft:torch replace minecraft:air
fill 35 3 5 35 3 5 minecraft:torch replace minecraft:air
fill 45 3 5 45 3 5 minecraft:torch replace minecraft:air
fill -50 11 0 -50 11 0 minecraft:torch replace minecraft:air
fill -40 3 0 -40 3 0 minecraft:torch replace minecraft:air
fill -30 6 0 -30 6 0 minecraft:torch replace minecraft:air
fill -20 6 0 -20 6 0 minecraft:torch replace minecraft:air
fill -10 5 0 -10 5 0 minecraft:torch replace minecraft:air
fill 0 4 0 0 4 0 minecraft:torch replace minecraft:air
fill 10 5 0 10 5 0 minecraft:torch replace minecraft:air
fill 20 6 0 20 6 0 minecraft:torch replace minecraft:air
fill 30 6 0 30 6 0 minecraft:torch replace minecraft:air
fill 40 3 0 40 3 0 minecraft:torch replace minecraft:air
fill 50 11 0 50 11 0 minecraft:torch replace minecraft:air
fill -45 3 15 -45 3 15 minecraft:torch replace minecraft:air
fill -35 3 15 -35 3 15 minecraft:torch replace minecraft:air
fill -25 6 15 -25 6 15 minecraft:torch replace minecraft:air
fill -15 5 15 -15 5 15 minecraft:torch replace minecraft:air
fill -5 5 15 -5 5 15 minecraft:torch replace minecraft:air
fill 5 5 15 5 5 15 minecraft:torch replace minecraft:air
fill 15 5 15 15 5 15 minecraft:torch replace minecraft:air
fill 25 6 15 25 6 15 minecraft:torch replace minecraft:air
fill 35 3 15 35 3 15 minecraft:torch replace minecraft:air
fill 45 3 15 45 3 15 minecraft:torch replace minecraft:air
fill -50 11 10 -50 11 10 minecraft:torch replace minecraft:air
fill -40 3 10 -40 3 10 minecraft:torch replace minecraft:air
fill -30 6 10 -30 6 10 minecraft:torch replace minecraft:air
fill -20 6 10 -20 6 10 minecraft:torch replace minecraft:air
fill -10 5 10 -10 5 10 minecraft:torch replace minecraft:air
fill 0 5 10 0 5 10 minecraft:torch replace minecraft:air
fill 10 5 10 10 5 10 minecraft:torch replace minecraft:air
fill 20 6 10 20 6 10 minecraft:torch replace minecraft:air
fill 30 6 10 30 6 10 minecraft:torch replace minecraft:air
fill 40 3 10 40 3 10 minecraft:torch replace minecraft:air
fill 50 11 10 50 11 10 minecraft:torch replace minecraft:air
fill -45 3 25 -45 3 25 minecraft:torch replace minecraft:air
fill -35 3 25 -35 3 25 minecraft:torch replace minecraft:air
fill -25 6 25 -25 6 25 minecraft:torch replace minecraft:air
fill -15 6 25 -15 6 25 minecraft:torch replace minecraft:air
fill -5 6 25 -5 6 25 minecraft:torch replace minecraft:air
fill 5 6 25 5 6 25 minecraft:torch replace minecraft:air
fill 15 6 25 15 6 25 minecraft:torch replace minecraft:air
fill 25 6 25 25 6 25 minecraft:torch replace minecraft:air
fill 35 3 25 35 3 25 minecraft:torch replace minecraft:air
fill 45 3 25 45 3 25 minecraft:torch replace minecraft:air
fill -50 11 20 -50 11 20 minecraft:torch replace minecraft:air
fill -40 3 20 -40 3 20 minecraft:torch replace minecraft:air
fill -30 6 20 -30 6 20 minecraft:torch replace minecraft:air
fill -20 6 20 -20 6 20 minecraft:torch replace minecraft:air
fill -10 6 20 -10 6 20 minecraft:torch replace minecraft:air
fill 0 6 20 0 6 20 minecraft:torch replace minecraft:air
fill 10 6 20 10 6 20 minecraft:torch replace minecraft:air
fill 20 6 20 20 6 20 minecraft:torch replace minecraft:air
fill 30 6 20 30 6 20 minecraft:torch replace minecraft:air
fill 40 3 20 40 3 20 minecraft:torch replace minecraft:air
fill 50 11 20 50 11 20 minecraft:torch replace minecraft:air
fill -45 3 35 -45 3 35 minecraft:torch replace minecraft:air
fill -35 3 35 -35 3 35 minecraft:torch replace minecraft:air
fill -25 3 35 -25 3 35 minecraft:torch replace minecraft:air
fill -15 3 35 -15 3 35 minecraft:torch replace minecraft:air
fill -5 3 35 -5 3 35 minecraft:torch replace minecraft:air
fill 5 3 35 5 3 35 minecraft:torch replace minecraft:air
fill 15 3 35 15 3 35 minecraft:torch replace minecraft:air
fill 25 3 35 25 3 35 minecraft:torch replace minecraft:air
fill 35 3 35 35 3 35 minecraft:torch replace minecraft:air
fill 45 3 35 45 3 35 minecraft:torch replace minecraft:air
fill -50 11 30 -50 11 30 minecraft:torch replace minecraft:air
fill -40 3 30 -40 3 30 minecraft:torch replace minecraft:air
fill -30 6 30 -30 6 30 minecraft:torch replace minecraft:air
fill -20 6 30 -20 6 30 minecraft:torch replace minecraft:air
fill -10 6 30 -10 6 30 minecraft:torch replace minecraft:air
fill 0 6 30 0 6 30 minecraft:torch replace minecraft:air
fill 10 6 30 10 6 30 minecraft:torch replace minecraft:air
fill 20 6 30 20 6 30 minecraft:torch replace minecraft:air
fill 30 6 30 30 6 30 minecraft:torch replace minecraft:air
fill 40 3 30 40 3 30 minecraft:torch replace minecraft:air
fill 50 11 30 50 11 30 minecraft:torch replace minecraft:air
fill -45 3 45 -45 3 45 minecraft:torch replace minecraft:air
fill -35 3 45 -35 3 45 minecraft:torch replace minecraft:air
fill -25 3 45 -25 3 45 minecraft:torch replace minecraft:air
fill -15 3 45 -15 3 45 minecraft:torch replace minecraft:air
fill -5 3 45 -5 3 45 minecraft:torch replace minecraft:air
fill 5 3 45 5 3 45 minecraft:torch replace minecraft:air
fill 15 3 45 15 3 45 minecraft:torch replace minecraft:air
fill 25 3 45 25 3 45 minecraft:torch replace minecraft:air
fill 35 3 45 35 3 45 minecraft:torch replace minecraft:air
fill 45 3 45 45 3 45 minecraft:torch replace minecraft:air
fill -50 11 40 -50 11 40 minecraft:torch replace minecraft:air
fill -40 3 40 -40 3 40 minecraft:torch replace minecraft:air
fill -30 3 40 -30 3 40 minecraft:torch replace minecraft:air
fill -20 3 40 -20 3 40 minecraft:torch replace minecraft:air
fill -10 3 40 -10 3 40 minecraft:torch replace minecraft:air
fill 0 3 40 0 3 40 minecraft:torch replace minecraft:air
fill 10 3 40 10 3 40 minecraft:torch replace minecraft:air
fill 20 3 40 20 3 40 minecraft:torch replace minecraft:air
fill 30 3 40 30 3 40 minecraft:torch replace minecraft:air
fill 40 3 40 40 3 40 minecraft:torch replace minecraft:air
fill 50 11 40 50 11 40 minecraft:torch replace minecraft:air
fill -50 11 50 -50 11 50 minecraft:torch replace minecraft:air
fill -40 11 50 -40 11 50 minecraft:torch replace minecraft:air
fill -30 11 50 -30 11 50 minecraft:torch replace minecraft:air
fill -20 11 50 -20 11 50 minecraft:torch replace minecraft:air
fill -10 11 50 -10 11 50 minecraft:torch replace minecraft:air
fill 0 11 50 0 11 50 minecraft:torch replace minecraft:air
fill 10 11 50 10 11 50 minecraft:torch replace minecraft:air
fill 20 11 50 20 11 50 minecraft:torch replace minecraft:air
fill 30 11 50 30 11 50 minecraft:torch replace minecraft:air
fill 40 11 50 40 11 50 minecraft:torch replace minecraft:air
fill 50 11 50 50 11 50 minecraft:torch replace minecraft:air

# Wall torches
setblock -50 13 -48 minecraft:wall_torch[facing=east]
setblock -50 13 -40 minecraft:wall_torch[facing=east]
setblock -50 13 -32 minecraft:wall_torch[facing=east]
setblock -50 13 -24 minecraft:wall_torch[facing=east]
setblock -50 13 -16 minecraft:wall_torch[facing=east]
setblock -50 13 -8 minecraft:wall_torch[facing=east]
setblock -50 13 0 minecraft:wall_torch[facing=east]
setblock -50 13 0 minecraft:wall_torch[facing=east]
setblock -50 13 8 minecraft:wall_torch[facing=east]
setblock -50 13 16 minecraft:wall_torch[facing=east]
setblock -50 13 24 minecraft:wall_torch[facing=east]
setblock -50 13 32 minecraft:wall_torch[facing=east]
setblock -50 13 40 minecraft:wall_torch[facing=east]
setblock -50 13 48 minecraft:wall_torch[facing=east]
setblock -48 13 -50 minecraft:wall_torch[facing=south]
setblock -40 13 -50 minecraft:wall_torch[facing=south]
setblock -32 13 -50 minecraft:wall_torch[facing=south]
setblock -24 13 -50 minecraft:wall_torch[facing=south]
setblock -16 13 -50 minecraft:wall_torch[facing=south]
setblock -8 13 -50 minecraft:wall_torch[facing=south]
setblock 0 13 -50 minecraft:wall_torch[facing=south]
setblock 0 13 -50 minecraft:wall_torch[facing=south]
setblock 8 13 -50 minecraft:wall_torch[facing=south]
setblock 16 13 -50 minecraft:wall_torch[facing=south]
setblock 24 13 -50 minecraft:wall_torch[facing=south]
setblock 32 13 -50 minecraft:wall_torch[facing=south]
setblock 40 13 -50 minecraft:wall_torch[facing=south]
setblock 48 13 -50 minecraft:wall_torch[facing=south]
setblock -48 13 50 minecraft:wall_torch[facing=north]
setblock -40 13 50 minecraft:wall_torch[facing=north]
setblock -32 13 50 minecraft:wall_torch[facing=north]
setblock -24 13 50 minecraft:wall_torch[facing=north]
setblock -16 13 50 minecraft:wall_torch[facing=north]
setblock -8 13 50 minecraft:wall_torch[facing=north]
setblock 0 13 50 minecraft:wall_torch[facing=north]
setblock 0 13 50 minecraft:wall_torch[facing=north]
setblock 8 13 50 minecraft:wall_torch[facing=north]
setblock 16 13 50 minecraft:wall_torch[facing=north]
setblock 24 13 50 minecraft:wall_torch[facing=north]
setblock 32 13 50 minecraft:wall_torch[facing=north]
setblock 40 13 50 minecraft:wall_torch[facing=north]
setblock 48 13 50 minecraft:wall_torch[facing=north]
setblock 50 13 -48 minecraft:wall_torch[facing=west]
setblock 50 13 -40 minecraft:wall_torch[facing=west]
setblock 50 13 -32 minecraft:wall_torch[facing=west]
setblock 50 13 -24 minecraft:wall_torch[facing=west]
setblock 50 13 -16 minecraft:wall_torch[facing=west]
setblock 50 13 -8 minecraft:wall_torch[facing=west]
setblock 50 13 0 minecraft:wall_torch[facing=west]
setblock 50 13 0 minecraft:wall_torch[facing=west]
setblock 50 13 8 minecraft:wall_torch[facing=west]
setblock 50 13 16 minecraft:wall_torch[facing=west]
setblock 50 13 24 minecraft:wall_torch[facing=west]
setblock 50 13 32 minecraft:wall_torch[facing=west]
setblock 50 13 40 minecraft:wall_torch[facing=west]
setblock 50 13 48 minecraft:wall_torch[facing=west]


setblock -44 9 -46 minecraft:wall_torch[facing=south]
setblock -46 9 -44 minecraft:wall_torch[facing=east]
setblock 44 9 46 minecraft:wall_torch[facing=north]
setblock 46 9 44 minecraft:wall_torch[facing=west]
setblock 44 9 -46 minecraft:wall_torch[facing=south]
setblock 46 9 -44 minecraft:wall_torch[facing=west]
setblock -44 9 46 minecraft:wall_torch[facing=north]
setblock -46 9 44 minecraft:wall_torch[facing=east]
setblock -36 9 -46 minecraft:wall_torch[facing=south]
setblock -46 9 -36 minecraft:wall_torch[facing=east]
setblock 36 9 46 minecraft:wall_torch[facing=north]
setblock 46 9 36 minecraft:wall_torch[facing=west]
setblock 36 9 -46 minecraft:wall_torch[facing=south]
setblock 46 9 -36 minecraft:wall_torch[facing=west]
setblock -36 9 46 minecraft:wall_torch[facing=north]
setblock -46 9 36 minecraft:wall_torch[facing=east]
setblock -28 9 -46 minecraft:wall_torch[facing=south]
setblock -46 9 -28 minecraft:wall_torch[facing=east]
setblock 28 9 46 minecraft:wall_torch[facing=north]
setblock 46 9 28 minecraft:wall_torch[facing=west]
setblock 28 9 -46 minecraft:wall_torch[facing=south]
setblock 46 9 -28 minecraft:wall_torch[facing=west]
setblock -28 9 46 minecraft:wall_torch[facing=north]
setblock -46 9 28 minecraft:wall_torch[facing=east]
setblock -20 9 -46 minecraft:wall_torch[facing=south]
setblock -46 9 -20 minecraft:wall_torch[facing=east]
setblock 20 9 46 minecraft:wall_torch[facing=north]
setblock 46 9 20 minecraft:wall_torch[facing=west]
setblock 20 9 -46 minecraft:wall_torch[facing=south]
setblock 46 9 -20 minecraft:wall_torch[facing=west]
setblock -20 9 46 minecraft:wall_torch[facing=north]
setblock -46 9 20 minecraft:wall_torch[facing=east]
setblock -12 9 -46 minecraft:wall_torch[facing=south]
setblock -46 9 -12 minecraft:wall_torch[facing=east]
setblock 12 9 46 minecraft:wall_torch[facing=north]
setblock 46 9 12 minecraft:wall_torch[facing=west]
setblock 12 9 -46 minecraft:wall_torch[facing=south]
setblock 46 9 -12 minecraft:wall_torch[facing=west]
setblock -12 9 46 minecraft:wall_torch[facing=north]
setblock -46 9 12 minecraft:wall_torch[facing=east]
setblock -4 9 -46 minecraft:wall_torch[facing=south]
setblock -46 9 -4 minecraft:wall_torch[facing=east]
setblock 4 9 46 minecraft:wall_torch[facing=north]
setblock 46 9 4 minecraft:wall_torch[facing=west]
setblock 4 9 -46 minecraft:wall_torch[facing=south]
setblock 46 9 -4 minecraft:wall_torch[facing=west]
setblock -4 9 46 minecraft:wall_torch[facing=north]
setblock -46 9 4 minecraft:wall_torch[facing=east]

# High Torches
fill -45 15 -45 -45 15 -45 minecraft:torch replace minecraft:air
fill -35 15 -45 -35 15 -45 minecraft:torch replace minecraft:air
fill -25 15 -45 -25 15 -45 minecraft:torch replace minecraft:air
fill -15 15 -45 -15 15 -45 minecraft:torch replace minecraft:air
fill -5 15 -45 -5 15 -45 minecraft:torch replace minecraft:air
fill 5 15 -45 5 15 -45 minecraft:torch replace minecraft:air
fill 15 15 -45 15 15 -45 minecraft:torch replace minecraft:air
fill 25 15 -45 25 15 -45 minecraft:torch replace minecraft:air
fill 35 15 -45 35 15 -45 minecraft:torch replace minecraft:air
fill 45 15 -45 45 15 -45 minecraft:torch replace minecraft:air
fill -50 15 -50 -50 15 -50 minecraft:torch replace minecraft:air
fill -40 15 -50 -40 15 -50 minecraft:torch replace minecraft:air
fill -30 15 -50 -30 15 -50 minecraft:torch replace minecraft:air
fill -20 15 -50 -20 15 -50 minecraft:torch replace minecraft:air
fill -10 15 -50 -10 15 -50 minecraft:torch replace minecraft:air
fill 0 15 -50 0 15 -50 minecraft:torch replace minecraft:air
fill 10 15 -50 10 15 -50 minecraft:torch replace minecraft:air
fill 20 15 -50 20 15 -50 minecraft:torch replace minecraft:air
fill 30 15 -50 30 15 -50 minecraft:torch replace minecraft:air
fill 40 15 -50 40 15 -50 minecraft:torch replace minecraft:air
fill 50 15 -50 50 15 -50 minecraft:torch replace minecraft:air
fill -45 15 -35 -45 15 -35 minecraft:torch replace minecraft:air
fill -35 15 -35 -35 15 -35 minecraft:torch replace minecraft:air
fill -25 15 -35 -25 15 -35 minecraft:torch replace minecraft:air
fill -15 15 -35 -15 15 -35 minecraft:torch replace minecraft:air
fill -5 15 -35 -5 15 -35 minecraft:torch replace minecraft:air
fill 5 15 -35 5 15 -35 minecraft:torch replace minecraft:air
fill 15 15 -35 15 15 -35 minecraft:torch replace minecraft:air
fill 25 15 -35 25 15 -35 minecraft:torch replace minecraft:air
fill 35 15 -35 35 15 -35 minecraft:torch replace minecraft:air
fill 45 15 -35 45 15 -35 minecraft:torch replace minecraft:air
fill -50 15 -40 -50 15 -40 minecraft:torch replace minecraft:air
fill -40 15 -40 -40 15 -40 minecraft:torch replace minecraft:air
fill -30 15 -40 -30 15 -40 minecraft:torch replace minecraft:air
fill -20 15 -40 -20 15 -40 minecraft:torch replace minecraft:air
fill -10 15 -40 -10 15 -40 minecraft:torch replace minecraft:air
fill 0 15 -40 0 15 -40 minecraft:torch replace minecraft:air
fill 10 15 -40 10 15 -40 minecraft:torch replace minecraft:air
fill 20 15 -40 20 15 -40 minecraft:torch replace minecraft:air
fill 30 15 -40 30 15 -40 minecraft:torch replace minecraft:air
fill 40 15 -40 40 15 -40 minecraft:torch replace minecraft:air
fill 50 15 -40 50 15 -40 minecraft:torch replace minecraft:air
fill -45 15 -25 -45 15 -25 minecraft:torch replace minecraft:air
fill -35 15 -25 -35 15 -25 minecraft:torch replace minecraft:air
fill -25 15 -25 -25 15 -25 minecraft:torch replace minecraft:air
fill -15 15 -25 -15 15 -25 minecraft:torch replace minecraft:air
fill -5 15 -25 -5 15 -25 minecraft:torch replace minecraft:air
fill 5 15 -25 5 15 -25 minecraft:torch replace minecraft:air
fill 15 15 -25 15 15 -25 minecraft:torch replace minecraft:air
fill 25 15 -25 25 15 -25 minecraft:torch replace minecraft:air
fill 35 15 -25 35 15 -25 minecraft:torch replace minecraft:air
fill 45 15 -25 45 15 -25 minecraft:torch replace minecraft:air
fill -50 15 -30 -50 15 -30 minecraft:torch replace minecraft:air
fill -40 15 -30 -40 15 -30 minecraft:torch replace minecraft:air
fill -30 15 -30 -30 15 -30 minecraft:torch replace minecraft:air
fill -20 15 -30 -20 15 -30 minecraft:torch replace minecraft:air
fill -10 15 -30 -10 15 -30 minecraft:torch replace minecraft:air
fill 0 15 -30 0 15 -30 minecraft:torch replace minecraft:air
fill 10 15 -30 10 15 -30 minecraft:torch replace minecraft:air
fill 20 15 -30 20 15 -30 minecraft:torch replace minecraft:air
fill 30 15 -30 30 15 -30 minecraft:torch replace minecraft:air
fill 40 15 -30 40 15 -30 minecraft:torch replace minecraft:air
fill 50 15 -30 50 15 -30 minecraft:torch replace minecraft:air
fill -45 15 -15 -45 15 -15 minecraft:torch replace minecraft:air
fill -35 15 -15 -35 15 -15 minecraft:torch replace minecraft:air
fill -25 15 -15 -25 15 -15 minecraft:torch replace minecraft:air
fill -15 15 -15 -15 15 -15 minecraft:torch replace minecraft:air
fill -5 15 -15 -5 15 -15 minecraft:torch replace minecraft:air
fill 5 15 -15 5 15 -15 minecraft:torch replace minecraft:air
fill 15 15 -15 15 15 -15 minecraft:torch replace minecraft:air
fill 25 15 -15 25 15 -15 minecraft:torch replace minecraft:air
fill 35 15 -15 35 15 -15 minecraft:torch replace minecraft:air
fill 45 15 -15 45 15 -15 minecraft:torch replace minecraft:air
fill -50 15 -20 -50 15 -20 minecraft:torch replace minecraft:air
fill -40 15 -20 -40 15 -20 minecraft:torch replace minecraft:air
fill -30 15 -20 -30 15 -20 minecraft:torch replace minecraft:air
fill -20 15 -20 -20 15 -20 minecraft:torch replace minecraft:air
fill -10 15 -20 -10 15 -20 minecraft:torch replace minecraft:air
fill 0 15 -20 0 15 -20 minecraft:torch replace minecraft:air
fill 10 15 -20 10 15 -20 minecraft:torch replace minecraft:air
fill 20 15 -20 20 15 -20 minecraft:torch replace minecraft:air
fill 30 15 -20 30 15 -20 minecraft:torch replace minecraft:air
fill 40 15 -20 40 15 -20 minecraft:torch replace minecraft:air
fill 50 15 -20 50 15 -20 minecraft:torch replace minecraft:air
fill -45 15 -5 -45 15 -5 minecraft:torch replace minecraft:air
fill -35 15 -5 -35 15 -5 minecraft:torch replace minecraft:air
fill -25 15 -5 -25 15 -5 minecraft:torch replace minecraft:air
fill -15 15 -5 -15 15 -5 minecraft:torch replace minecraft:air
fill -5 15 -5 -5 15 -5 minecraft:torch replace minecraft:air
fill 5 15 -5 5 15 -5 minecraft:torch replace minecraft:air
fill 15 15 -5 15 15 -5 minecraft:torch replace minecraft:air
fill 25 15 -5 25 15 -5 minecraft:torch replace minecraft:air
fill 35 15 -5 35 15 -5 minecraft:torch replace minecraft:air
fill 45 15 -5 45 15 -5 minecraft:torch replace minecraft:air
fill -50 15 -10 -50 15 -10 minecraft:torch replace minecraft:air
fill -40 15 -10 -40 15 -10 minecraft:torch replace minecraft:air
fill -30 15 -10 -30 15 -10 minecraft:torch replace minecraft:air
fill -20 15 -10 -20 15 -10 minecraft:torch replace minecraft:air
fill -10 15 -10 -10 15 -10 minecraft:torch replace minecraft:air
fill 0 15 -10 0 15 -10 minecraft:torch replace minecraft:air
fill 10 15 -10 10 15 -10 minecraft:torch replace minecraft:air
fill 20 15 -10 20 15 -10 minecraft:torch replace minecraft:air
fill 30 15 -10 30 15 -10 minecraft:torch replace minecraft:air
fill 40 15 -10 40 15 -10 minecraft:torch replace minecraft:air
fill 50 15 -10 50 15 -10 minecraft:torch replace minecraft:air
fill -45 15 5 -45 15 5 minecraft:torch replace minecraft:air
fill -35 15 5 -35 15 5 minecraft:torch replace minecraft:air
fill -25 15 5 -25 15 5 minecraft:torch replace minecraft:air
fill -15 15 5 -15 15 5 minecraft:torch replace minecraft:air
fill -5 15 5 -5 15 5 minecraft:torch replace minecraft:air
fill 5 15 5 5 15 5 minecraft:torch replace minecraft:air
fill 15 15 5 15 15 5 minecraft:torch replace minecraft:air
fill 25 15 5 25 15 5 minecraft:torch replace minecraft:air
fill 35 15 5 35 15 5 minecraft:torch replace minecraft:air
fill 45 15 5 45 15 5 minecraft:torch replace minecraft:air
fill -50 15 0 -50 15 0 minecraft:torch replace minecraft:air
fill -40 15 0 -40 15 0 minecraft:torch replace minecraft:air
fill -30 15 0 -30 15 0 minecraft:torch replace minecraft:air
fill -20 15 0 -20 15 0 minecraft:torch replace minecraft:air
fill -10 15 0 -10 15 0 minecraft:torch replace minecraft:air
fill 0 15 0 0 15 0 minecraft:torch replace minecraft:air
fill 10 15 0 10 15 0 minecraft:torch replace minecraft:air
fill 20 15 0 20 15 0 minecraft:torch replace minecraft:air
fill 30 15 0 30 15 0 minecraft:torch replace minecraft:air
fill 40 15 0 40 15 0 minecraft:torch replace minecraft:air
fill 50 15 0 50 15 0 minecraft:torch replace minecraft:air
fill -45 15 15 -45 15 15 minecraft:torch replace minecraft:air
fill -35 15 15 -35 15 15 minecraft:torch replace minecraft:air
fill -25 15 15 -25 15 15 minecraft:torch replace minecraft:air
fill -15 15 15 -15 15 15 minecraft:torch replace minecraft:air
fill -5 15 15 -5 15 15 minecraft:torch replace minecraft:air
fill 5 15 15 5 15 15 minecraft:torch replace minecraft:air
fill 15 15 15 15 15 15 minecraft:torch replace minecraft:air
fill 25 15 15 25 15 15 minecraft:torch replace minecraft:air
fill 35 15 15 35 15 15 minecraft:torch replace minecraft:air
fill 45 15 15 45 15 15 minecraft:torch replace minecraft:air
fill -50 15 10 -50 15 10 minecraft:torch replace minecraft:air
fill -40 15 10 -40 15 10 minecraft:torch replace minecraft:air
fill -30 15 10 -30 15 10 minecraft:torch replace minecraft:air
fill -20 15 10 -20 15 10 minecraft:torch replace minecraft:air
fill -10 15 10 -10 15 10 minecraft:torch replace minecraft:air
fill 0 15 10 0 15 10 minecraft:torch replace minecraft:air
fill 10 15 10 10 15 10 minecraft:torch replace minecraft:air
fill 20 15 10 20 15 10 minecraft:torch replace minecraft:air
fill 30 15 10 30 15 10 minecraft:torch replace minecraft:air
fill 40 15 10 40 15 10 minecraft:torch replace minecraft:air
fill 50 15 10 50 15 10 minecraft:torch replace minecraft:air
fill -45 15 25 -45 15 25 minecraft:torch replace minecraft:air
fill -35 15 25 -35 15 25 minecraft:torch replace minecraft:air
fill -25 15 25 -25 15 25 minecraft:torch replace minecraft:air
fill -15 15 25 -15 15 25 minecraft:torch replace minecraft:air
fill -5 15 25 -5 15 25 minecraft:torch replace minecraft:air
fill 5 15 25 5 15 25 minecraft:torch replace minecraft:air
fill 15 15 25 15 15 25 minecraft:torch replace minecraft:air
fill 25 15 25 25 15 25 minecraft:torch replace minecraft:air
fill 35 15 25 35 15 25 minecraft:torch replace minecraft:air
fill 45 15 25 45 15 25 minecraft:torch replace minecraft:air
fill -50 15 20 -50 15 20 minecraft:torch replace minecraft:air
fill -40 15 20 -40 15 20 minecraft:torch replace minecraft:air
fill -30 15 20 -30 15 20 minecraft:torch replace minecraft:air
fill -20 15 20 -20 15 20 minecraft:torch replace minecraft:air
fill -10 15 20 -10 15 20 minecraft:torch replace minecraft:air
fill 0 15 20 0 15 20 minecraft:torch replace minecraft:air
fill 10 15 20 10 15 20 minecraft:torch replace minecraft:air
fill 20 15 20 20 15 20 minecraft:torch replace minecraft:air
fill 30 15 20 30 15 20 minecraft:torch replace minecraft:air
fill 40 15 20 40 15 20 minecraft:torch replace minecraft:air
fill 50 15 20 50 15 20 minecraft:torch replace minecraft:air
fill -45 15 35 -45 15 35 minecraft:torch replace minecraft:air
fill -35 15 35 -35 15 35 minecraft:torch replace minecraft:air
fill -25 15 35 -25 15 35 minecraft:torch replace minecraft:air
fill -15 15 35 -15 15 35 minecraft:torch replace minecraft:air
fill -5 15 35 -5 15 35 minecraft:torch replace minecraft:air
fill 5 15 35 5 15 35 minecraft:torch replace minecraft:air
fill 15 15 35 15 15 35 minecraft:torch replace minecraft:air
fill 25 15 35 25 15 35 minecraft:torch replace minecraft:air
fill 35 15 35 35 15 35 minecraft:torch replace minecraft:air
fill 45 15 35 45 15 35 minecraft:torch replace minecraft:air
fill -50 15 30 -50 15 30 minecraft:torch replace minecraft:air
fill -40 15 30 -40 15 30 minecraft:torch replace minecraft:air
fill -30 15 30 -30 15 30 minecraft:torch replace minecraft:air
fill -20 15 30 -20 15 30 minecraft:torch replace minecraft:air
fill -10 15 30 -10 15 30 minecraft:torch replace minecraft:air
fill 0 15 30 0 15 30 minecraft:torch replace minecraft:air
fill 10 15 30 10 15 30 minecraft:torch replace minecraft:air
fill 20 15 30 20 15 30 minecraft:torch replace minecraft:air
fill 30 15 30 30 15 30 minecraft:torch replace minecraft:air
fill 40 15 30 40 15 30 minecraft:torch replace minecraft:air
fill 50 15 30 50 15 30 minecraft:torch replace minecraft:air
fill -45 15 45 -45 15 45 minecraft:torch replace minecraft:air
fill -35 15 45 -35 15 45 minecraft:torch replace minecraft:air
fill -25 15 45 -25 15 45 minecraft:torch replace minecraft:air
fill -15 15 45 -15 15 45 minecraft:torch replace minecraft:air
fill -5 15 45 -5 15 45 minecraft:torch replace minecraft:air
fill 5 15 45 5 15 45 minecraft:torch replace minecraft:air
fill 15 15 45 15 15 45 minecraft:torch replace minecraft:air
fill 25 15 45 25 15 45 minecraft:torch replace minecraft:air
fill 35 15 45 35 15 45 minecraft:torch replace minecraft:air
fill 45 15 45 45 15 45 minecraft:torch replace minecraft:air
fill -50 15 40 -50 15 40 minecraft:torch replace minecraft:air
fill -40 15 40 -40 15 40 minecraft:torch replace minecraft:air
fill -30 15 40 -30 15 40 minecraft:torch replace minecraft:air
fill -20 15 40 -20 15 40 minecraft:torch replace minecraft:air
fill -10 15 40 -10 15 40 minecraft:torch replace minecraft:air
fill 0 15 40 0 15 40 minecraft:torch replace minecraft:air
fill 10 15 40 10 15 40 minecraft:torch replace minecraft:air
fill 20 15 40 20 15 40 minecraft:torch replace minecraft:air
fill 30 15 40 30 15 40 minecraft:torch replace minecraft:air
fill 40 15 40 40 15 40 minecraft:torch replace minecraft:air
fill 50 15 40 50 15 40 minecraft:torch replace minecraft:air
fill -50 15 50 -50 15 50 minecraft:torch replace minecraft:air
fill -40 15 50 -40 15 50 minecraft:torch replace minecraft:air
fill -30 15 50 -30 15 50 minecraft:torch replace minecraft:air
fill -20 15 50 -20 15 50 minecraft:torch replace minecraft:air
fill -10 15 50 -10 15 50 minecraft:torch replace minecraft:air
fill 0 15 50 0 15 50 minecraft:torch replace minecraft:air
fill 10 15 50 10 15 50 minecraft:torch replace minecraft:air
fill 20 15 50 20 15 50 minecraft:torch replace minecraft:air
fill 30 15 50 30 15 50 minecraft:torch replace minecraft:air
fill 40 15 50 40 15 50 minecraft:torch replace minecraft:air
fill 50 15 50 50 15 50 minecraft:torch replace minecraft:air




