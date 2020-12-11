import {useState,useCallback,useMemo} from 'react';

const callFunctionsInSequence = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args));

export default function useExpanded(initialExpand = false) {
    const [expanded,setExpanded] = useState(initialExpand)
    const toggle = useCallback(() => setExpanded(prevExpanded => !prevExpanded),[]);

    const getTogglerProps = useCallback(({onClick,...customProps}) => ({
        onClick : callFunctionsInSequence(toggle,onClick),
        'aria-expanded': expanded,
        ...customProps    
    }),[toggle, expanded])

    const value = useMemo(() => ({expanded, toggle, getTogglerProps}),[expanded,toggle,getTogglerProps])
    
    return value
}

