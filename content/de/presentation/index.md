---
title: "Präsentation"
description: "ELO Dogfight Challenge Einführung, von Coubystark."
date: 2022-07-25T08:49:55+00:00
lastmod: 2022-07-25T08:49:55+00:00
draft: false
images: []
---

Vorstellung der ELO Dogfight Challenge von Coubystark.
![Image brief miz](elodf-pic01miz.png)

## In Kürze

Der ELO Dogfight Server bietet dir die Durchführung **1 gegen 1 Schießerei**, mit dem Flugzeug deiner Wahl, **H24**, 7/7.</br>
Die Spiele werden **in 3 Punkten** gespielt (mögliche Ergebnisse: 3:0 oder 2:1).</br>
Alle Spielergebnisse werden auf dem Server gespeichert, und für jeden Piloten wird ein **"ELO"** berechnet, **pro eingesetztem Flugzeug**, basierend auf dem Ergebnis jedes Spiels.

{{< alert icon="⚠️" text="Achtung, um auf diesem Server fliegen zu können, ist es **<strong>obligatorisch</strong>** das Skript <strong>**AutoSpawn**</strong> zu installieren. Im folgenden Absatz finden Sie den Download-Link und Erläuterungen." />}}


## Kampfarenen

![Kampfarenen](elodf_battle_areas.jpg)

Der Server enthält Kampfarenen, die entsprechend dem Level (ELO) der Spieler reserviert sind:
- 6 Kampfgebiete für LVL1-Spieler, von BA1-1 bis BA1-6 - reserviert für Spieler, deren ELO (für das verwendete Flugzeug) zwischen 1000 und 1400 liegt
- 4 Kampfgebiete für LVL2-Spieler, von BA2-1 bis BA2-4 - reserviert für Spieler, deren ELO zwischen 1400 und 1800 liegt
- 3 Kampfgebiete für LVL3-Spieler, von BA3-1 bis BA3-3 - reserviert für Spieler, deren ELO zwischen 1800 und 2200 liegt
- 3 Kampfgebiete für LVL4-Spieler, von BA4-1 bis BA4-3 - reserviert für Spieler, deren ELO zwischen 2200 und 2600 liegt
- 1 Kampfgebiete für LVL5-Spieler, der BA5-1 - reserviert für Spieler, deren ELO größer als 2600 ist

Sie finden die Referenz von Battle Area und zugehörigem LVL am Anfang des Gruppennamens des Flugzeugs des Slots:
![Steckplätze](elodf_slots.jpg)


## AutoSpawn-Skript

Die Implementierung des AutoSpawn-Skripts ist zwingend erforderlich, um auf einer Serverebene stecken zu können.

💾 [AutoSpawn-Skript herunterladen](ELO-DF_auto-spawn_GameGUI.lua)

{{< alert icon="💡" text="Klicken Sie mit der rechten Maustaste - Speichern unter - mit Ihrem bevorzugten Browser. Überprüfen Sie, ob die gespeicherte Datei die Erweiterung <strong>.lua</strong> hat. Wenn dies nicht der Fall ist, ändern und fügen Sie die Datei hinzu."/>}}

Einzurichten in **```[user]\Saved Games\DCS.Openbeta\Scripts\Hooks```**.

Dieses Skript ermöglicht es, am Ende einer Runde die beiden Spieler automatisch neu zu setzen!

Mit der Einrichtung dieses Skripts und dem Slot auf einem Flugzeug auf dem ELO Dogfight Server akzeptieren Sie die in diesem digitalen Raum geltenden Teilnahme- und Nutzungsregeln.


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


## End of the match

Once the last kill is validated, the final score is displayed as well as your new **ELO for the aircraft used**.

You are automatically positioned as a spectator, in order to free the Battle Area.


## A last word

On ELO Dogfight, I tried to offer the most fluid and dynamic experience possible (AutoSpawn script), as well as to automatically limit the conditions offering a match in the expected conditions (limitations to slot relative to occupation, levels, current matches ...). However, it is you, your state of mind, your little words for your competitors, your advice for newcomers that can allow this server to be a fun and cool place where everyone can come to challenge, progress and show their ability to engage canon. I'm counting on you to nurture this spirit, and I wish you **happy hunting!**

[Some complementary rules](/regles/).

If you have any questions, feel free to come and ask them on Discord. I will see to add a page with the common questions and answers later.
