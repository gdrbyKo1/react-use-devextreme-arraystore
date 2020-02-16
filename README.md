# @gdrbyko1/react-use-devextreme-arraystore

> Construct a DevExtreme ArrayStore from an array and keep it in sync when the array changes.

[![NPM](https://img.shields.io/npm/v/@gdrbyko1/react-use-devextreme-arraystore.svg)](https://www.npmjs.com/package/@gdrbyko1/react-use-devextreme-arraystore) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @gdrbyko1/react-use-devextreme-arraystore
```

## Usage

```ts
dxArrayStore = useDxArrayStore(items: any[], key: string)
```

The `key` parameter specifies the name of the property which can be used to uniquely identify an object in the array.
The hook will take care of pushing updates to the ArrayStore whenever the array changes.

```tsx
import * as React from 'react'

import { useDxArrayStore } from '@gdrbyko1/react-use-devextreme-arraystore'

const Example = () => {
  const dxArrayStore = useDxArrayStore([], 'keyField')
  return (
    <div>
      todo
    </div>
  )
}
```

## License

MIT © [gdrbyKo1](https://github.com/gdrbyKo1)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
