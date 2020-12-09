import React from 'react'
import useExpanded from './useExpanded.js'
import useEffectAfterMount from './useEffectAfterMount.js'
import './App.css'

function App () {
  const { expanded, toggle } = useExpanded()	
  // look here 👇
  useEffectAfterMount(
    () => {
      // user can perform any side effect here 👇
      console.log('Yay! button was clicked!!')
    },
    [expanded]
  )
  return (
    <div style={{ marginTop: '3rem' }}>
      <button onClick={toggle}>Click to view awesomeness...</button>
      {expanded ? <p>{'😎'.repeat(50)}</p> : null}
    </div>
  )
}


export default App
