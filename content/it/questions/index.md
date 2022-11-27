---
title: "Domande - Risposte"
description: ""
lead: "Domande - Risposte"
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
toc: true
---

{{< alert icon="💡" text="Non riesci a trovare la tua domanda? Vieni a chiederci su Discord." />}}

## Una volta in gioco

### Come faccio a sapere se è avvenuta la prima unione?
Questo punto può essere complicato, soprattutto per i nuovi arrivati. Si consiglia di garantire un attraversamento il più vicino possibile.

In caso contrario, quando vedi che i due aerei hanno iniziato a girare dopo aver fatto più di 90° di cambio di rotta... Significa che la fusione è passata!

Sii cavalleresco e inizia con una traversata con il casco!

### Cosa fare se lo script AutoSpwan "bug"?
È comunque possibile eseguire un respawn manuale. Diventa uno spettatore e riposizionati sul tuo aereo (coordinati con l'avversario). Vedrai che dal momento in cui hai una partita in corso, il server non ti permetterà di unirti a un altro slot.

### Come posso conoscere i miei ELO e LVL quando sono in DCS?
Basta porre la domanda nella chat DCS (= **ELOs?** comando chat) :

![ELO? comando chat](Elos.png)

### Cosa succede se entrambi gli aerei esauriscono il carburante e riescono ad atterrare?
Sii **fairplay**! Per scambio audio/chat intendi espellere allo stesso tempo. Questo farà un round "nullo" che dovrà essere rigiocato.

### Per i concorrenti di F-14, come si fa a impedire a Jester di espellere?
L'unico modo identificato per farlo è disabilitare il seggiolino eiettabile di Jester.
Per questo, ad ogni round, devi fare un passaggio sul sedile posteriore. Premere il tasto 2 sulla tastiera:

![Spostamento sul sedile posteriore della F14](en_f14-ejection-seat-unarm_step1.jpg)

Disattivare il seggiolino eiettabile:

![Disabilita seggiolino eiettabile](en_f14-ejection-seat-unarm_step2.jpg)

Torna al sedile anteriore, tasto 1 sulla tastiera:

![Tornare sul sedile anteriore](en_f14-ejection-seat-unarm_step3.jpg)

Se qualcuno conosce un modo più semplice / più efficace per impedire a Jester di espellere, per favore condividilo con CoubyStark.


## Scelte di design di ELO Dogfight

### Come trovare il server ELO Dogfight?
Cerca **Rapace** o **ELO Dogfight**.

![Impostazioni server DCS](rapace_server.png)

### Cosa sono le impostazioni del server?

![Impostazioni server DCS](elodf_dcs_server_settings.jpg)

### Come vengono impostati i livelli iniziali del carburante?
Per il momento, utilizzando le stesse impostazioni del **canon BFR competition** e/o del server **Dogfighters**.

Devono consentire 5 minuti di postbruciatore completo/acceleratore completo a ciascun aeromobile.

![Dati sul carburante](elodf_fuel_data.jpg)

Questo punto sarà studiato e documentato più finemente per tenere conto dei diversi consumi a seconda delle altitudini. Questo per garantire un equilibrio ancora più equo.

### Cos'è ELO?
L'ELO rappresenta la forza di un concorrente e consente di classificare/confrontare i giocatori.
Questo principio deriva dal gioco degli scacchi. Consulta l'articolo di Wikipedia [ELO](https://it.wikipedia.org/wiki/Elo).

### Il numero di combattimenti giocati viene preso in considerazione nel coefficiente ELO? Possiamo avere un buon ELO giocando poche partite? Possiamo aumentare il nostro ELO indefinitamente giocando sempre contro le stesse persone?
Il numero di combattimenti giocati è implicitamente integrato nel principio del calcolo ELO. Infatti l'ELO rappresenta la "forza" di un giocatore per determinate condizioni di gioco. Più un giocatore ha giocato **un gran numero di partite** e contro **un numero vario di giocatori**, **più il suo coefficiente ELO è rappresentativo della sua forza**.</br >
Il corretto funzionamento della base di questo algoritmo di calcolo è un problema matematico che i matematici esperti hanno studiato. Essendo usato da molto tempo per le competizioni di scacchi, abbiamo fiducia in questo.</br >
Il **K factor** mantenuto nella configurazione dell'algoritmo su ELO Dogfight, non consente a un giocatore di ottenere un super ELO in poche partite. Devi davvero giocare a molti giochi per essere in grado di aumentare significativamente il tuo ELO.</br >
Inoltre, il principio dei "livelli" messo in atto limita fortemente la possibilità di aumentare indefinitamente il tuo ELO giocando sempre contro le stesse persone.

### Chi organizza e amministra ELO Dogfight?
**CoubyStark**, sotto la bandiera di **Cellules Rapaces**, team eSport della **comunità di giocatori dell'Aeronautica e della Space Force francese**.


## Nelle mani dei giocatori

### Posso combattere qualsiasi aereo con qualsiasi aereo?
Sì.

Tuttavia, presta attenzione all'equilibrio della partita. Spetta a ciascun giocatore scegliere/gestire quale aereo usare e contro cui combattere. Richiede anche di essere d'accordo con l'avversario del momento. Non vi è alcuna imposizione/obbligo. Ma tieni presente che il calcolo ELO per l'aereo che stai utilizzando tiene conto solo del risultato della partita e dell'ELO dell'avversario sull'aereo che stanno utilizzando. Il calcolo dell'ELO non tiene conto del tipo di aeromobile affrontato.

### È possibile la rappresentazione o il conflitto di identità?
No.
I risultati a livello di server includono tutti gli UCID dei giocatori. Si tratta di un identificatore univoco associato all'account DCS del giocatore.
I risultati visualizzati a livello di sito Web non espongono questo UCID. Questi sono basati sul soprannome. Tuttavia, non appena c'è un conflitto di nickname, l'amministratore viene avvisato di affrontare manualmente la situazione. Regolerà il soprannome dell'ultimo giocatore con questo (aggiungendo un suggerimento).

### È possibile modificare il nickname del mio giocatore visualizzato nei risultati?
Sì.
Per fare ciò, contatta **CoubyStark** su Rapace Discord.
