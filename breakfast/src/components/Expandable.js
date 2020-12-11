import Header from './Header'
import Icon from './Icon'
import Body from './Body'
import React, { createContext, useState, useCallback, useRef, useEffect, useMemo } from 'react'
import './Expandable.css'
import useExpanded from '../../src/hooks/useExpanded'
import useEffectAfterMount from '../../src/hooks/useEffectAfterMount'

export const ExpandableContext = createContext()
const { Provider } = ExpandableContext

const Expandable = ({ children, onExpand, className = '', shouldExpand, ...restProps }) => {
    const isExpandControlled = shouldExpand !== undefined
    const [expanded, setExpanded] = useState(false)
    const toggle = useCallback(
        () => setExpanded(prevExpanded => !prevExpanded),
        []
    )
    const getToggle = isExpandControlled ? onExpand : toggle
    const componentJustMounted = useRef(true)
    useEffect(
        () => {
            if (!componentJustMounted) {
                onExpand(expanded)
            }
            componentJustMounted.current = false
        },
        [expanded]
    )
    const getState = isExpandControlled ? shouldExpand : expanded
    const value = useMemo(
        () => ({ expanded : getState, toggle : getToggle }),
        [getState, getToggle]
    )
    
    const combinedClassNames = ['Expandable', className].join('')
    return (
        <Provider value={value}>
            <div className={combinedClassNames} {...restProps}>
                {children}
            </div>
        </Provider>
    )
}

// Remember this is just a personal reference. It's not mandatory
Expandable.Header = Header
Expandable.Body = Body
Expandable.Icon = Icon

export default Expandable