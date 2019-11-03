import React from 'react'

import { useMyHook } from 'ws09-foss4g-thailand-2019'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
