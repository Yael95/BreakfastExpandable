import React, { useContext } from 'react';
import { ExpandableContext } from './Expandable'
import './Body.css'

const Body = ({ children, className = '', ...restProps }) => {
    const { expanded } = useContext(ExpandableContext);
    const combinedClassNames = ['Expandable-panel', className].join('')
    return expanded ? (<div
        className={combinedClassNames}
        {...restProps}>
        {children}
    </div>)
        : null
}

export default Body;