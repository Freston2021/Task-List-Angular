
import { noUndefined } from "@angular/compiler/src/util"
import {Task} from "./Task"

export const TASKS: Task[] = [
    {
        id: 1,
        text: "Terminar primer modulo de Angular",
        day: "Agosto 5 a las 12:00",
        reminder: true

    },
    {
        id: 2,
        text: "Hacer las compras",
        day: "Agosto 5 a las 17:00",
        reminder: true
    },

    {
        id: 3,
        text: "Investigar sobre Ovnis",
        day: "Agosto 5 a las 19:00",
        reminder: true
    },

    {
        id: 4,
        text: "Leer las montañas de la locura",
        day: "Agosto 5 a las 21:00",
        reminder: true
    }
]