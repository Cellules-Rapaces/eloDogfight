---
title: "介绍"
description: "ELO混战挑战介绍，作者：Coubystark."
date: 2022-07-25T08:49:55+00:00
lastmod: 2022-07-25T08:49:55+00:00
draft: false
images: []
---

介绍 ELO 混战挑战，由 Coubystark 设计。
![Image brief miz](elodf-pic01miz.png)

## 简而言之

ELO 混战服务器为您提供进行**1对1枪战**，使用您选择的飞机**H24**，7/7。</br>
比赛以3分**进行（可能的结果：3-0或2-1）。</br>
所有匹配结果都保存在服务器上，并根据每个匹配的结果为每个飞行员计算**“ELO”**，**每架飞机使用**。

{{< alert icon="⚠️" text="注意，为了能够在此服务器上飞行，安装脚本<strong>**自动生成**</strong>是强制性的。有关下载链接和说明，请参阅以下段落。" />}}


## 战斗竞技

![战斗竞技](elodf_battle_areas.jpg)
服务器包括根据玩家的等级（ELO）保留的战斗竞技场：
- LVL1玩家的6个战斗区域，从BA1-1到BA1-6 - 保留给ELO（使用的飞机）在1000到1400之间的玩家
- LVL2 玩家的 4 个战斗区域，从 BA2-1 到 BA2-4 - 保留给 ELO 在 1400 到 1800 之间的玩家
- LVL3玩家的3个战斗区域，从BA3-1到BA3-3 - 保留给ELO在1800到2200之间的玩家
- LVL4 玩家的 3 个战斗区域，从 BA4-1 到 BA4-3 - 保留给 ELO 在 2200 到 2600 之间的玩家
- 1 LVL5玩家的战斗区域，BA5-1 - 保留给ELO大于2600的玩家

您可以在插槽平面的组名称开头找到战斗区域和关联的 LVL 的引用：
![插槽](elodf_slots.jpg)


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
