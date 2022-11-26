---
title: "Introducción"
description: "ELO Dogfight Challenge Introducción, por Coubystark."
date: 2022-07-25T08:49:55+00:00
lastmod: 2022-07-25T08:49:55+00:00
draft: false
images: []
---

Presentamos el ELO Dogfight Challenge, de Coubystark.
![Image brief miz](elodf-pic01miz.png)

## En resumen

El servidor ELO Dogfight te ofrece llevar a cabo **1 contra 1 tiroteo**, con el avión de tu elección, **H24**, 7/7.</br>
Los partidos se juegan **en 3 puntos** (posibles resultados: 3-0 o 2-1).</br>
Todos los resultados de los partidos se guardan en el servidor y se calcula un **"ELO"** para cada piloto, **por avión utilizado**, basado en el resultado de cada partido.

{{< alert icon="⚠️" text="Atención, para poder volar en este servidor, es **<strong>obligatorio</strong>** instalar el script **<strong>AutoSpawn**</strong>. Consulte el párrafo siguiente para obtener el enlace de descarga y las explicaciones." />}}


## Arenas de batalla

![Áreas de batalla](elodf_battle_areas.jpg)

El servidor incluye arenas de combate reservadas según el nivel (ELO) de los jugadores:
- 6 áreas de batalla para jugadores de LVL1, desde BA1-1 hasta BA1-6 - reservadas para jugadores cuyo ELO (para el avión utilizado) está entre 1000 y 1400
- 4 áreas de batalla para jugadores de LVL2, desde BA2-1 hasta BA2-4 - reservadas para jugadores cuyo ELO está entre 1400 y 1800
- 3 áreas de batalla para jugadores de LVL3, de BA3-1 a BA3-3 - reservadas para jugadores cuyo ELO está entre 1800 y 2200
- 3 áreas de batalla para jugadores de LVL4, desde BA4-1 hasta BA4-3 - reservadas para jugadores cuyo ELO está entre 2200 y 2600
- 1 Áreas de batalla para jugadores de LVL5, el BA5-1 - reservado para jugadores cuyo ELO sea superior a 2600

Puedes encontrar la referencia de Área de Batalla y LVL asociada en el comienzo del nombre del grupo del plano de la ranura:

![Ranuras](elodf_slots.jpg)


## Script AutoSpawn

La implementación del script AutoSpawn es obligatoria para poder encajar en un plano de servidor.

💾 [Descargar AutoSpawn Script](ELO-DF_auto-spawn_GameGUI.lua)

{{< alert icon="💡" text="Haga clic derecho - guardar como - con su navegador favorito. Compruebe que el archivo guardado tiene la extensión <strong>.lua</strong>. De lo contrario, modifique-agregue el archivo a". />}}

Para configurar en **```[user]\Saved Games\DCS. Openbeta\Scripts\Hooks```**.

¡Este script permite, al final de una ronda, volver a colocar automáticamente a los dos jugadores!

Al configurar este script y la ubicación en un avión en el servidor ELO Dogfight, usted acepta las reglas de participación y uso vigentes en este espacio digital.


## Para ranurar en un plano de servidor

Los requisitos para poder unirse a una ranura:
- todas las ranuras del mismo campamento en la misma área de batalla deben ser libres - si un jugador ya está presente, no podrás encajar.
- debe tener un LVL / ELO en línea con el LVL de la ranura para el avión al que está tratando de unirse; puede ser LVL2 en M-2000C, y por lo tanto solo ser capaz de ranurar en las ranuras M-2000C de BA2-1 a BA2-4, mientras que ser LVL1 en F-15C por lo tanto sólo puede ranura en las ranuras F-15C de BA1-1 a BA1-6.
- debe tener instalado el script AutoSpawn

Si se cumplen todas las condiciones, recibirá un mensaje como sigue:

![Ranura permitida](elodf_slot_allowed.png)

Si no tienes el LVL correcto para el par avión/BattleArea que estás intentando introducir, recibirás un mensaje como este:

![Ranura no permitida](elodf_slot_not_allowed.jpg)

Cuando esté en una ranura de un campamento de BA, puede cambiar a otra ranura (siempre que su LVL para este avión coincida), recibirá un mensaje como el siguiente:

![Cambios de ranura](elodf_slot_change.jpg)


## Inicio del juego

Este momento puede ser un poco complicado, especialmente si engendras mientras esperas a que un jugador se una a la arena en el campo opuesto ...

Lo ideal es coordinar la entrada a la arena con tu oponente, para comenzar con los niveles de combustible que van bien. Esto también ayuda a garantizar que esté de acuerdo con el avión que todos están usando.

Tenga en cuenta, sin embargo, que no puede participar en el partido, siempre y cuando no haya habido una muerte. Puedes convertirte en un espectador y entablar un diálogo con el oponente si es necesario. Una vez más, es mejor haber estado de acuerdo antes de que alguien comience a desovar ...

Pero ten cuidado, desde el momento en que ha habido una muerte, ¡el partido se considera iniciado! Y debes ir tras los 3 puntos jugados.

Si uno de los competidores abandona el servidor antes del final de un partido, todos los puntos restantes por jugar se otorgan al que queda en el servidor.

## Una vez que el partido ha comenzado

Una muerte se valida si el asesino sobrevive a su víctima durante al menos 10 segundos.

Se muestra una cuenta atrás en pasos de 2 segundos.

Al final de la cuenta atrás, ambos jugadores aparecen automáticamente y la puntuación intermedia se muestra en el chat.

Si el asesino muere antes de los 10 segundos, o en el caso de **Lucky Luke**, la ronda se considera nula y el punto se vuelve a jugar.

## Fin del partido

Una vez que se valida la última muerte, se muestra la puntuación final, así como su nuevo **ELO para el avión utilizado**.

Te posicionas automáticamente como espectador, para liberar el área de batalla.

## Una última palabra

En ELO Dogfight, intenté ofrecer la experiencia más fluida y dinámica posible (script AutoSpawn), así como limitar automáticamente las condiciones que ofrece un match en las condiciones esperadas (limitaciones a la ranura en relación con la ocupación, niveles, partidas actuales...). Sin embargo, es usted, su estado de ánimo, sus pequeñas palabras para sus competidores, sus consejos para los recién llegados lo que puede permitir que este servidor sea un lugar divertido y genial donde todos puedan desafiar, progresar y mostrar su capacidad para involucrar a canon. Cuento contigo para nutrir este espíritu, y te deseo **¡feliz caza!**

[Algunas normas complementarias](/regles/).

Si tiene alguna pregunta, no dude en venir y preguntarla en Discord. Voy a ver para añadir una página con las preguntas y respuestas comunes más adelante.
