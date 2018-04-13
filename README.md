# autofloor-calc-outline
Calculate the decoration outline of specified line segments


[A related blog post](https://qiita.com/kenzo-takahashi/items/db0ad161516c9e53bce2)(Japanese) for more information.

## Tutorial

```bash
npm install -D @kenzotakahashi/autofloor-calc-outline
```

```js
import {constructWallOutline, constructOutline} from '@kenzotakahashi/autofloor-calc-outline'

const walls = [
      [[1,3],[3.5,3]],
      [[1,3],[1.2,0.8]]
]
const wallOutlines = constructWallOutline(walls)
console.log(wallOutlines)
```

Output:
```json
[
    {
      "right": [
        [
          0.9167775056994335,
          3.076
        ],
        [
          3.5,
          3.076
        ]
      ],
      "left": [
        [
          1.0832224943005666,
          2.924
        ],
        [
          3.424,
          2.924
        ]
      ],
      "location": [
        [
          1,
          3
        ],
        [
          3.5,
          3
        ]
      ]
    },
    {
      "right": [
        [
          1.0832224943005666,
          2.924
        ],
        [
          1.2694043124823848,
          0.8759999999999981
        ]
      ],
      "left": [
        [
          0.9167775056994335,
          3.076
        ],
        [
          1.130595687517615,
          0.7239999999999998
        ]
      ],
      "location": [
        [
          1,
          3
        ],
        [
          1.2,
          0.8
        ]
      ]
    }
]
```

You can change the width of a wall(the distance between the center line and each outline).

```js
const wallOutlines = constructWallOutline(walls, 0.08)
```