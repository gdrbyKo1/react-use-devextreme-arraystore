import React from 'react'
import { useState } from 'react'
import { useDxArrayStore } from '@gdrbyko1/react-use-devextreme-arraystore'

const App = () => {
  const [myItems] = useState([{
    Id: 123,
    Value: 'foo'
  }]);
  const dxArrayStore = useDxArrayStore(myItems, 'Id')
  console.log('dxArrayStore', dxArrayStore);
  return (
    <div>
      todo
    </div>
  )
}
export default App
