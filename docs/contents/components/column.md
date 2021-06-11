---
title: Column 
published: true
---

Creates a flexbox column

## Examples

```jsx
import { Col } from '@barelyreaper/rlayouts'

export default function ColumnExample() {
  return (
    <>
      <Col align="center" justify="center">
        <div>
          <p>Some Content 1</p>
        </div>
        <div>
          <p>Some Content 2</p>
        </div>
      </Col>
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