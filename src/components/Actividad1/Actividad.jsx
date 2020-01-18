import React from 'react'
//Components
import Container from '../Container'
import ProgressBar from '../ProgressBar'
import MainTitle from '../MainTitle'
import DraggableItem from '../Draggable'
import Area from '../AreaDrop'
import ButtonUi from '../ButtonControlUI'

// Styles
import styled from 'styled-components'
import styles, { DraggablesContainer, AreasContainer, ProgressbarContainer, UiButtonsContainer } from './Actividad_styles'
import Ilex from '../../App/variables'
import dataItems from './Actividad_data'



const Actividad_base =  ({...props}) => {
    return (
        <Container bgImage='./src/bg_actividad1.png' {...props}>
            
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='msjClick one time in each phrase to listen how pronounce them. Listen before start to resolve the exercise' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' />
            </UiButtonsContainer>

            <ProgressbarContainer>
                <ProgressBar progress={0}/>
            </ProgressbarContainer>
            


            <MainTitle color={Ilex.violeta2}>
            CLICK AND LISTEN TO EACH EXPRESSION AND CLASSIFY IN THEIR RIGHT GROUP
            </MainTitle>
            
            <DraggablesContainer>
                
                { dataItems.map((dato)=>{
                    return(
                        <DraggableItem name={dato.name} key={dato.id} />
                    )
                }) }

            </DraggablesContainer>
            <AreasContainer>
                <Area title='University Campus'/>
                <Area  title='Classes'/>
                <Area  title='Introducing People'/>
            </AreasContainer>
            
        </Container>
    )

}

const Actividad = styled(Actividad_base)`
    ${ styles.mistyles }
`


export default Actividad