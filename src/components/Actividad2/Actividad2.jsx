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
import { IRow, ICol } from '../Grid'

// Componente base
const Actividad2_base = ({...props}) => {
    return (
        <Container bgImage='./src/bg_actividad1.png' {...props}>
            <ProgressbarContainer>
                <ProgressBar progress={50}/>
            </ProgressbarContainer>
            <IRow w={100} align='center' justify='center' py={0.5}>
                <ICol w={100}>
                    <div className='container-content'>
                        <MainTitle color={Ilex.violeta2}> ORGANIZE THE EMAIL IN THE CORRECT ORDER  </MainTitle>
                    </div>
                </ICol>
            </IRow>
        </Container>

    )
}
const Actividad2 = styled(Actividad2_base)`${ styles }`
export default Actividad2
