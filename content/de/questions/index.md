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

{{< alert icon="💡" text="Können Sie Ihre Frage nicht finden? Komm und frag uns auf Discord." />}}

## Einmal im Spiel

### Woher weiß ich, ob die erste Zusammenführung stattgefunden hat?
Dieser Punkt kann vor allem für Neulinge knifflig sein. Wir empfehlen, eine Kreuzung so nah wie möglich zu gestalten.

Gelingt das nicht, wenn man sieht, dass die beiden Flugzeuge begonnen haben, sich umzudrehen, nachdem sie mehr als 90° natürlich verändert haben... Es bedeutet, dass die Zusammenführung vorbei ist!

Seien Sie ritterlich und beginnen Sie mit einer Helmüberquerung!

### Was tun, wenn das AutoSpwan-Skript "bugs" ist?
Sie können immer noch einen manuellen Respawn durchführen. Werden Sie Zuschauer und setzen Sie sich wieder in Ihr Flugzeug (koordinieren Sie sich mit dem Gegner). Sie werden sehen, dass der Server Ihnen von dem Moment an, in dem Sie ein Spiel im Gange haben, nicht erlaubt, einem anderen Slot beizutreten.

### Wie kann ich meine ELOs und LVL kennen, wenn ich in DCS bin?
Stellen Sie einfach die Frage im DCS-Chat (= **ELOs?** Chat-Befehl):

![ELOs? chat-Befehl](Elos.png)

### Was ist, wenn beiden Flugzeugen der Treibstoff ausgeht und sie landen können?
Sei **fairplay**! Mit Audio/Chat-Austausch meinen Sie, gleichzeitig auszuwerfen. Dies führt zu einer "Null"-Runde, die wiederholt werden muss.

### Für F-14-Konkurrenten, wie verhindern Sie, dass Jester ausgeworfen wird?
Der einzige identifizierte Weg, dies zu tun, besteht darin, Jesters Schleudersitz zu deaktivieren.
Dafür müssen Sie bei jeder Runde einen Pass auf dem Rücksitz machen. Drücken Sie die Taste 2 auf der Tastatur:

![Auf den Rücksitz des F14](en_f14-ejection-seat-unarm_step1.jpg)

Deaktivieren Sie den Schleudersitz:

![Schleudersitz deaktivieren](en_f14-ejection-seat-unarm_step2.jpg)

Kehren Sie zum Vordersitz zurück, Taste 1 auf der Tastatur:

![Zurück auf dem vorderen Sitz](en_f14-ejection-seat-unarm_step3.jpg)

Wenn jemand einen einfacheren / effektiveren Weg kennt, um zu verhindern, dass Jester ausgeworfen wird, teilen Sie ihn bitte mit CoubyStark.


## ELO Dogfight Design-Entscheidungen

### Wie finde ich den ELO Dogfight Server?
Suche nach **Rapace** oder **ELO Dogfight**.

![DCS-Servereinstellungen](rapace_server.png)

### Was sind Servereinstellungen?

![DCS-Servereinstellungen](elodf_dcs_server_settings.jpg)

### Wie werden die anfänglichen Kraftstoffstände eingestellt?
Im Moment mit den gleichen Einstellungen wie auf dem **Canon BFR Wettbewerb** und/oder dem **Dogfighters** Server.

Sie müssen jedem Flugzeug 5 Minuten Vollgas erlauben.

![Kraftstoffdaten](elodf_fuel_data.jpg)

Dieser Punkt wird genauer untersucht und dokumentiert, um die unterschiedlichen Verbräuche je nach Höhenlage zu berücksichtigen. Damit soll ein noch gerechteres Gleichgewicht gewährleistet werden.

### Was ist ELO?
Das ELO repräsentiert die Stärke eines Mitbewerbers und ermöglicht es, Spieler zu klassifizieren/vergleichen.
Dieses Prinzip stammt aus dem Schachspiel. Konsultieren Sie den Wikipedia-Artikel [Elo-Zahl](https://de.wikipedia.org/wiki/Elo-Zahl).

### Wird die Anzahl der gespielten Kämpfe im ELO-Koeffizienten berücksichtigt? Können wir ein gutes ELO haben, indem wir ein paar Spiele spielen? Können wir unsere ELO unbegrenzt erhöhen, indem wir immer gegen die gleichen Leute spielen?
Die Anzahl der gespielten Kämpfe ist implizit in das Prinzip der ELO-Berechnung integriert. In der Tat repräsentiert das ELO die "Stärke" eines Spielers für gegebene Spielbedingungen. Je mehr ein Spieler **eine große Anzahl von Matches** und gegen **eine unterschiedliche Anzahl von Spielern** gespielt hat, **desto mehr ist sein ELO-Koeffizient repräsentativ für seine Stärke**.</br >
Das ordnungsgemäße Funktionieren der Grundlage dieses Berechnungsalgorithmus ist ein mathematisches Problem, das erfahrene Mathematiker untersucht haben. Da es seit langem für Schachwettbewerbe verwendet wird, haben wir Vertrauen in diese.</br >
Der **K-Faktor**, der in der Konfiguration des Algorithmus auf ELO Dogfight beibehalten wird, erlaubt es einem Spieler nicht, in wenigen Spielen ein Super-ELO zu erreichen. Sie müssen wirklich viele Spiele spielen, um Ihre ELO deutlich steigern zu können.</br >
Darüber hinaus schränkt das Prinzip der "Levels" die Möglichkeit, Ihr ELO unbegrenzt zu erhöhen, indem Sie immer gegen dieselben Leute spielen, sehr stark ein.

### Wer organisiert und verwaltet ELO Dogfight?
**CoubyStark**, unter dem Banner von **Cellules Rapaces**, eSport-Team der **French Air and Space Force Gamers Community**.


## In Spielerhänden

### Ich kann jedes Flugzeug mit jedem Flugzeug bekämpfen?
Ja.

Achten Sie jedoch auf die Ausgewogenheit des Spiels. Es liegt an jedem Spieler zu wählen/verwalten, welches Flugzeug er verwendet und gegen das er kämpft. Es erfordert auch, mit dem Gegner des Augenblicks übereinzustimmen. Es gibt keine Auferlegung/Verpflichtung. Beachten Sie jedoch, dass die ELO-Berechnung für das von Ihnen verwendete Flugzeug nur das Spielergebnis und das ELO des Gegners auf dem von ihm verwendeten Flugzeug berücksichtigt. Bei der Berechnung des ELO wird der Flugzeugtyp nicht berücksichtigt.

### Ist Identitätswechsel oder Identitätskonflikt möglich?
Nein.
Ergebnisse auf Serverebene enthalten alle Spieler-UCIDs. Dies ist eine eindeutige Kennung, die dem DCS-Konto des Spielers zugeordnet ist.
Ergebnisse, die auf Website-Ebene angezeigt werden, machen diese UCID nicht verfügbar. Diese basieren auf dem Spitznamen. Sobald es jedoch einen Spitznamenkonflikt gibt, wird der Administrator gewarnt, sich manuell mit der Situation zu befassen. Es wird den Spitznamen des letzten Spielers mit diesem anpassen (Hinzufügen eines Hinweises).

### Ist es möglich, meinen Spieler-Nickname in den Ergebnissen zu ändern?
Ja.
Um dies zu tun, kontaktiere **CoubyStark** auf dem Rapace Discord.
