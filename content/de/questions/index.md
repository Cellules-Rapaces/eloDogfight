---
title: "Fragen - Antworten"
description: ""
lead: "Fragen - Antworten"
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
toc: true
---

{{< alert icon="💡" text="Du kannst Deine Frage nicht finden? Komm und frag uns auf Discord." />}}

## Einmal im Spiel

### Woher weiß ich, ob der erste Merge stattgefunden hat?
Dieser Punkt kann vor allem für Neulinge knifflig sein. Wir empfehlen, das Vorbeifliegen so nah wie möglich zu gestalten.

Gelingt das nicht, dann achtet darauf, dass beide Flugzeuge einen Kurswechsel von mehr als 90° durchgeführt haben. Dies bedeutete, dass der Merge bereits passiert wurde.

Seien Sie ritterlich und beginnen Sie mit einer „Helmbegegnung“!


### Was tun, wenn das AutoSpawn-Skript “buggy” ist?
Du kannst immer noch einen manuellen Respawn durchführen. Wechsle in die Zuschauerrolle und setze Dich wieder in Ihr Flugzeug (koordiniere das mit dem Gegner). Du wirst sehen, dass der Server von dem Moment an, in dem das Spiel im Gange ist, nicht erlaubt, einem anderen Slot beizutreten.

### Wie kann ich meine ELOs und LVL erkennen, wenn ich in DCS bin?
Stelle einfach folgende Frage im DCS-Chat (= **ELOs?** Chat-Befehl):

![ELOs? chat-Befehl](Elos.png)

### Was ist, wenn beiden Flugzeugen der Treibstoff ausgeht und sie landen können?
Sei **fair**! Tauscht euch über Voice / Chat aus und steigt zur selben Zeit aus. Das führt dazu, dass die Runde als eine „Null-Runde“ gewertet wird.

### Für F-14-Piloten – Wie kann ich verhindern, dass Jester aussteigt?
Der einzige identifizierte Weg, dies zu tun, besteht darin, Jesters Schleudersitz zu deaktivieren. Dafür musst Du bei jeder Runde zum Rücksitz wechseln. Drücke dazu die Taste [2] auf der Tastatur:

![Auf den Rücksitz des F14](en_f14-ejection-seat-unarm_step1.jpg)

Deaktiviere den Schleudersitz:

![Schleudersitz deaktivieren](en_f14-ejection-seat-unarm_step2.jpg)

Kehre zum Pilotensitz zurück, Taste [1]:

![Zurück auf dem vorderen Sitz](en_f14-ejection-seat-unarm_step3.jpg)

Wenn jemand einen einfacheren / effektiveren Weg kennt, um zu verhindern, dass Jester aussteigt, dann teilt ihn bitte CoubyStark mit.


## ELO Dogfight Fragen

### Wie finde ich den ELO Dogfight Server?
Suche nach **Rapace** oder **ELO Dogfight**.

![DCS-Servereinstellungen](rapace_server.png)

### Wie sind die Servereinstellungen?

![DCS-Servereinstellungen](elodf_dcs_server_settings.jpg)

### Mit wieviel Kraftstoff starte ich initial in den Luftkampf?
Im Moment mit den gleichen Einstellungen wie im **Canon BFR Wettbewerb** und/oder dem **Dogfighters** Server.

Dies muss jedem Flugzeug 5 Minuten Vollgas erlauben.

![Kraftstoffdaten](elodf_fuel_data.jpg)

Dieser Punkt wird genauer untersucht und dokumentiert, um die unterschiedlichen Kraftstoffverbräuche je nach Höhenlage zu berücksichtigen. Damit soll ein noch gerechterer Wettbewerb gewährleistet werden.

### Was ist ELO?
Das ELO repräsentiert die Stärke eines Mitbewerbers und ermöglicht es, Spieler zu klassifizieren / zu vergleichen.
Dieses Prinzip stammt aus dem Schachspiel. Konsultieren Sie den Wikipedia-Artikel [Elo-Zahl](https://de.wikipedia.org/wiki/Elo-Zahl).

### Wird die Anzahl der gespielten Kämpfe im ELO-Koeffizienten berücksichtigt? Können wir ein gutes ELO haben, indem wir ein paar Matches spielen? Können wir unsere ELO unbegrenzt erhöhen, indem wir immer gegen die gleichen Leute spielen?
Die Anzahl der geflogenen Luftkämpfe ist implizit in das Prinzip der ELO-Berechnung integriert. In der Tat repräsentiert das ELO die “Stärke” eines Spielers für gegebene Spielbedingungen. Je mehr ein Spieler **eine große Anzahl von Matches** und gegen **eine unterschiedliche Anzahl von Spielern** gespielt hat, **desto mehr ist sein ELO-Koeffizient repräsentativ für seine Stärke**.</br >
Die Berechnungsbasis für den Algorithmus ist eine mathematische Herausforderung, welche von erfahrenen Mathematikern untersucht wurde. Der hierbei verwendete Algorithmus wird seit langer Zeit zur Errechnung des ELO-Wertes in der Schachcommunity verwendet, von daher vertrauen wir dieser Kalkulation.</br >
Der **K-Faktor**, der in der Konfiguration des Algorithmus auf ELO Dogfight beibehalten wird, erlaubt es einem Spieler nicht, in wenigen Spielen ein Super-ELO zu erreichen. Es müssen wirklich viele Luftkämpfe bestritten werden, um den ELO deutlich steigern zu können.</br >
Darüber hinaus schränkt das Prinzip der “Levels” die Möglichkeit ein, das ELO unbegrenzt erhöhen zu können, indem immer gegen dieselben Leute geflogen wird, sehr stark ein.

### Wer organisiert und verwaltet ELO Dogfight?
**CoubyStark**, unter dem Banner von **Cellules Rapaces**, dem eSport-Team der **French Air and Space Force Gamers Community**.


## In Spielerhänden

### ch kann mit jedem Flugzeug gegen jedes andere Flugzeug kämpfen?
Ja.

Achte jedoch auf die Ausgewogenheit des Luftkampfes. Es liegt an jedem Spieler zu wählen, welches Flugzeug er verwendet und gegen welches er kämpft. Es erfordert auch, sich mit dem Gegner abzustimmen. Es gibt keine Regel / Verpflichtung. Beachte jedoch, dass die ELO-Berechnung für das von Dir verwendete Flugzeug nur das Spielergebnis und das ELO des Gegners auf dem von ihm verwendeten Flugzeug berücksichtigt. Bei der Berechnung des ELO wird der Flugzeugtyp nicht berücksichtigt.

### Ist Identitätswechsel oder Identitätskonflikt möglich?
Nein.
Ergebnisse auf Serverebene enthalten alle die Spieler-UCIDs. Dies ist eine eindeutige Kennung, die dem DCS-Konto des Spielers zugeordnet ist. Ergebnisse, die auf Website-Ebene angezeigt werden, zeigen die UCID nicht an. Diese basieren auf dem Spitznamen. Sobald es jedoch einen Spitznamenkonflikt gibt, wird der Administrator gewarnt, sich mit der Situation zu befassen. Es wird den Spitznamen des letzten Spielers mit diesem anpassen (Hinzufügen eines Hinweises).

### Ist es möglich, meinen Spieler-Nickname in den Ergebnissen zu ändern?
Ja.
Um dies zu tun, kontaktiere **CoubyStark** auf dem Rapace Discord.
