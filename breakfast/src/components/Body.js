import React, { useContext } from 'react';
import { ExpandableContext } from './Expandable'
import './Body.css'

const Body = ({ children, className = '',expanded, ...restProps }) => {
    const combinedClassNames = ['Expandable-panel', className].join('')
    return expanded ? (<div
        className={combinedClassNames}
        {...restProps}>
        {children}
    </div>)
        : null
}

export default Body;