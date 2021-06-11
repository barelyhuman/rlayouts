---
title: Spacer 
published: true
---

Similar to Padding but used for uni-directional spacing, also works in multiples of `8`

## Examples

**`16px` of space on top, or margin-top:16px**

```jsx
import { Spacer } from '@barelyreaper/rlayouts'

export default function SpacerExample() {
  return (
    <>
      <Spacer y={2} />
      <div>
        <p>Some Content</p>
      </div>
    </>
  )
}
```

**`16px` of space on the left of the element**

```jsx
import { Padding, Spacer } from '@barelyreaper/rlayouts'

export default function SpacerExample() {
  return (
    <>
      <div>
        <Spacer x={2} inline />
        <p>Some Content</p>
      </div>
    </>
  )
}
```

## Props

```js
{
    inline: boolean,
    x: number,
    y: number
}
```