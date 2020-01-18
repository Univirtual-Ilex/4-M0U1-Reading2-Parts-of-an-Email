//Import
import React from 'react'
import styled from 'styled-components'
import styles from './Actividad2_styles'
import Ilex from '../../App/variables'
// styles from styled
import { ProgressbarContainer } from '../Actividad1/Actividad_styles'
// Components
import Container from '../Container'
import ProgressBar from '../ProgressBar'
import MainTitle from '../MainTitle'
import ButtonX from '../ButtonX'

// Componente base
const Actividad2_base = ({...props}) => {
    return (
        <Container bgImage='./src/bg_actividad1.png' {...props}>
            <ProgressbarContainer>
                <ProgressBar progress={50}/>
                <div class='container-content'>
                    <MainTitle color={Ilex.violeta2}> Videoquiz </MainTitle>
                    <p className='text'>Watch and listen to the video “First week of classes at university”
Choose if the statements are true or false</p>
                </div>
                <div className='buttoncontainer'>
                    <ButtonX> Go </ButtonX>
                </div>
            </ProgressbarContainer>
        </Container>

    )
}
const Actividad2 = styled(Actividad2_base)`${ styles }`
export default Actividad2
