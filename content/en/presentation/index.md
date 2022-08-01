---
title: "Introduction"
description: "PELO Dogfight Challenge Introduction, by Coubystark."
date: 2022-07-25T08:49:55+00:00
lastmod: 2022-07-25T08:49:55+00:00
draft: false
images: []
---

Introducing the ELO Dogfight Challenge, by Coubystark.
![Image brief miz](elodf-pic01miz.png)

## In short

The ELO Dogfight server offers you to carry out **1 against 1 gun fights**, with the plane of your choice, **H24**, 7/7.</br>
The matches are played **in 3 points** (possible results: 3-0 or 2-1).</br>
All match results are saved on the server, and an **"ELO"** is calculated for each pilot, **per aircraft used**, based on the result of each match.

{{< alert icon="⚠️" text="Attention, to be able to fly on this server, it is <strong>**mandatory**</strong> to install the script <strong>**AutoSpawn**</ strong>. See the paragraph below for the download link and explanations." />}}


## Battle Arenas

![Battle areas](elodf_battle_areas.jpg)
The server includes combat arenas reserved according to the level (ELO) of the players:
- 6 Battle Areas for LVL1 players, from BA1-1 to BA1-6 - reserved for players whose ELO (for the plane used) is between 1000 and 1400
- 4 Battle Areas for LVL2 players, from BA2-1 to BA2-4 - reserved for players whose ELO is between 1400 and 1800
- 4 Battle Areas for LVL3 players, from BA3-1 to BA3-4 - reserved for players whose ELO is between 1800 and 2200
- 3 Battle Areas for LVL4 players, from BA4-1 to BA4-3 - reserved for players whose ELO is between 2200 and 2600
- 1 Battle Areas for LVL5 players, the BA5-1 - reserved for players whose ELO is greater than 2600

You can find the reference of Battle Area and associated LVL in the beginning of the group name of the plane of the slot:
![Slots](elodf_slots.jpg)


## AutoSpawn Script

The implementation of the AutoSpawn script is mandatory in order to be able to slot on a server plane.

💾 [Download AutoSpawn Script](ELO-DF_auto-spawn_GameGUI.lua)

{{< alert icon="💡" text="Right click - save as - with your favorite browser. Check that the saved file has the extension <strong>.lua</strong>. Failing that, modify-add the to file."/>}}

To be set up in **```[user]\Saved Games\DCS.Openbeta\Scripts\Hooks```**.

This script allows, at the end of a round, to automatically reslot the two players!

By setting up this script and slotting on an aircraft on the ELO Dogfight server, you accept the rules of participation and use in force in this digital space.


## To slot in a server plane

The requirements to be able to join a slot:
- all the slots of the same camp on the same Battle Area must be free - if a player is already present, you will not be able to slot.
- you must have an LVL/ELO in line with the LVL of the slot for the plane you are trying to join; you can be LVL2 on M-2000C, and thus only be able to slot on the M-2000C slots of BA2-1 to BA2-4, while being LVL1 on F-15C thus being able to slot only on the F-15C slots of BA1-1 to BA1-6.
- you must have the AutoSpawn script installed

If all the conditions are met, you will get a message as follows:
![Slot allowed](elodf_slot_allowed.png)

If you don't have the correct LVL for the aircraft/BattleArea pair you are trying to enter, you will get a message like this:
![Slot not allowed](elodf_slot_not_allowed.jpg)

When you are on a slot of a BA camp, you can change to another slot (provided that your LVL for this plane matches), you will then have a message as follows:
![Slot change](elodf_slot_change.jpg)


## Start of the game

This moment can be a little tricky, especially if you spawn while waiting for a player to join the arena in the opposite camp...

The ideal is to coordinate the entry into the arena with your opponent, in order to start with the fuel levels that are going well. This also helps ensure that you agree on the aircraft that everyone is using.

Be aware, however, that you can not engage the match, as long as there has not been a kill. You can become a spectator and engage in dialogue with the opponent if necessary. Again, it's best to have agreed before anyone starts spawning...

But be careful, from the moment there has been a kill, the match is considered to be started! And you must go after the 3 points played.

If one of the competitors leaves the server before the end of a match, all the points remaining to be played are awarded to the one left on the server.


## Once the match has started

A kill is validated if the killer survives his victim for at least 10 seconds.

A countdown is displayed in steps of 2 seconds.

At the end of the countdown, both players are respawned automatically, and the intermediate score is displayed in the chat.

If the killer dies before 10 seconds, or in the case of **Lucky Luke**, the round is considered void and the point is replayed.


## End of game

Once the last kill has been validated, the final score is displayed as follows