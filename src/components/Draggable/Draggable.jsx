
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './Draggable_styles'
import BocinaButton from '../BocinaButton'
// Componente base
const Draggable_base = ({ name, ...props }) => {
    return (
        <div {...props}>
            <BocinaButton audio='audio.mp3'/>
            <span>{ name }</span>
        </div>
    )
}
const Draggable = styled(Draggable_base)`${ styles }`


export default Draggable
