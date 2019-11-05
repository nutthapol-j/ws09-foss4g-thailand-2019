import React, { useEffect, useState, useRef, cloneElement } from 'react'
import mapboxgl from 'mapbox-gl'
import { MapPropTypes } from './interface-types'
import BasicStyle from './map-style/basic'


const Mapcomponent = (props: MapPropTypes) => {
    const [state, setstate] = useState<mapboxgl.Map | null>(null)
    const ref = useRef<any>(null)

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: ref.current,
            style: BasicStyle,
            center: props.center,
            zoom: props.zoom,
            preserveDrawingBuffer: true
        })
        map.on('load', (e) => {
            props.onMapLoaded(e.target)
            setstate(e.target)
        })

        return () => {
            map.remove()
            setstate(null)
        };
    }, [])

    return (
        <div ref={ref} className={props.className} style={{ height: '100%', width: '100%' }} >
            {props.children && Array.isArray(props.children)
                ? props.children.map((child: any, index: number) =>
                    cloneElement(child, { refMap: state, key: index })
                )
                : props.children && !Array.isArray(props.children)
                    ? cloneElement(props.children, { refMap: state })
                    : null}
        </div>
    )
}

Mapcomponent.defaultProps = {
    className: '',
    center: [0, 0],
    zoom: 3,
    onMapLoaded: () => { }
}

export default Mapcomponent
