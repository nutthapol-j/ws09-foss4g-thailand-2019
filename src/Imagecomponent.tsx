import React, { useState, useEffect, useCallback } from 'react'
import { ImageType } from './interface-types'

const Imagecomponent = (props: ImageType) => {
    const [state, setstate] = useState<{ data: any, dimension: any, }>({ data: '', dimension: { width: 0, height: 0 } })
    const genSize = (w: number, h: number) => {
        if (w && h) {
            if (w < h) {
                return { width: w, height: w * (state.dimension.height / state.dimension.width) }
            } else if (w > h) {
                return { width: h * (state.dimension.width / state.dimension.height), height: h }
            } else {
                return { width: w, height: h }
            }
        } else {
            return { width: 0, height: 0 }
        }
    }
    const getImageDimensions = (file: any) => {
        return new Promise(function (resolved) {
            var i = new Image()
            i.onload = function () {
                resolved({ w: i.width, h: i.height })
            };
            i.src = file
        })
    }
    const loadData = useCallback(
        async () => {
            const size: any = await getImageDimensions(props.src)
            setstate({ data: props.src, dimension: { width: size.w, height: size.h } })
        },
        [props.src],
    )

    useEffect(() => {
        if (props.src) {
            loadData()
        }
    }, [props.src])
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={state.data} alt='' style={genSize(props.width, props.height)} />
            </div>
        </div>
    )
}

Imagecomponent.defaultProps = {
    width: 500,
    height: 400
}

export default Imagecomponent
