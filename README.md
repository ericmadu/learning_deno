# learning_deno

## How to use
Add this to your deps file:

`export {default as learnDeno } from "https://deno.land/x/learning_deno/mod.ts";`

Once in your app use it like this:

```ts
import { learnDeno } from "./dep.ts";

interface Object {
    shape: string;
    type: string;
    size: number;
    emote: string;
}

const objects: Object[] = [
    {
        shape: "car",
        type: "vehicle",
        size: 12,
        emote: "🚗"
    },
    {
        shape: "circle",
        type: "geometric",
        size: 6,
        emote: "🔴"
    },
    {
        shape: "triangle",
        type: "geometric",
        size: 5,
        emote: "🔺"
    }, {
        shape: "square",
        type: "geometric",
        size: 7,
        emote: "🟥"
    }
];

const objectGroups = learnDeno.countBy(objects, 'type'); // Output: {geometric: 3, vehicle: 1 }

```

## Module host
- Code also available at [deno.land](https://deno.land/x/learning_deno)
![image](https://user-images.githubusercontent.com/81642614/121691511-74039480-ca9d-11eb-8491-7a8c5e7ed15a.png)

## References
- [Create your first deno module](https://dev.to/brunnerlivio/create-your-first-module-with-deno-575k)
- [How to publish your deno module](https://dev.to/craigmorten/how-to-publish-deno-modules-2cg6)

## Authors
- Eric Madureira
- Sebastian Lozano

## Made for RollWorks HackWeek 1 2021.
