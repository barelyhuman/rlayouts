# Row

Creates a flexbox row

## Examples

```jsx
import { Row } from '@barelyreaper/rlayouts'

export default function RowExample() {
  return (
    <>
      <Row align="center" justify="center">
        <div>
          <p>Some Content 1</p>
        </div>
        <div>
          <p>Some Content 2</p>
        </div>
      </Row>
    </>
  )
}
```

## Props

```js
{
    children: React.Node
    inline: boolean
    wrap: boolean
    reverse: boolean
    justify: 'start'|'end'|'center'|'baseline'
    align: 'start'|'end'|'center'|'baseline'
}
```
