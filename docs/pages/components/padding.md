# Padding

Creates a padding around the children component in multiples of `8px`

## Examples

**Vertical Padding of `16px` and horizontal padding of `8px`**
```jsx
import { Padding } from '@barelyreaper/rlayouts'

export default function PaddingExample() {
  return (
    <>
      <Padding y={2} x={1}>
        <div>
          <p>Some Content</p>
        </div>
      </Padding>
    </>
  )
}
```


**Overall padding of `16px`**

```jsx
import { Padding } from '@barelyreaper/rlayouts'

export default function PaddingExample() {
  return (
    <>
      <Padding all={16}>
        <div>
          <p>Some Content</p>
        </div>
      </Padding>
    </>
  )
}
```


## Props 
```js
{
    children:React.Node,
    all: number,
    x: number,
    y: number
}
```

