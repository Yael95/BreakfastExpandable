import React from 'react'
import useExpanded from './hooks/useExpanded.js'
import useEffectAfterMount from './hooks/useEffectAfterMount.js'

import Header from './components/Header'
import Icon from './components/Icon'
import Body from './components/Body'

import './App.css'

const customClickHandler = () => {
    console.log('custom click handler!!!!!')
}

function App () {
  const { expanded, getTogglerProps } = useExpanded(true)
  return (
    <div style={{ marginTop: '3rem' }}>
      <button
          {...getTogglerProps({
            id: 'my-btn-id',
            'aria-label': 'custom toggler',
            // look here 👇
            onClick: customClickHandler
          })}
        >
          Click to view awesomeness...
      </button>
      {expanded ? <p>{'😎'.repeat(50)}</p> : null}
    </div>
  )
}

export default App
