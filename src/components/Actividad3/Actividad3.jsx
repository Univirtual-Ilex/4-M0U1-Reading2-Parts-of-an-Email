//Import
import React from 'react'
import styled from 'styled-components'
import styles from './Actividad3_styles'
import Container from '../Container'
import Ilex from '../../App/variables'
import ProgressBar from '../ProgressBar'
import MainTitle from '../MainTitle'
import InputWords from '../InputWords'

// styles from styled
import { ProgressbarContainer } from '../Actividad1/Actividad_styles'
import {Olist} from './Actividad3_styles'
import {Item}from './Actividad3_styles'
import ButtonModal from '../ButtonModal'


// Componente base
const Actividad3_base = ({...props}) => {
    return (
        <Container {...props} bgImage='./src/bg_actividad1.png'>
            <ProgressbarContainer>
                <ProgressBar progress={75} />
            </ProgressbarContainer>
            <div className='container-content'>
                <MainTitle color={Ilex.violeta2}> COMPLETE THE SENTENCES WITH THE CORRECT WORDS FROM THE CONVERSATION </MainTitle>
            </div>
            <div className='listado'>
                <Olist>
                    <Item> Marcela has <InputWords /> to Literature class on Tuesdays.</Item>
                    <Item> Johnny and Marcela’s class is in room  <InputWords /> </Item>
                    <Item> Johnny’s class at “La Julita” is in room  <InputWords /></Item>
                    <Item> Antonio has <InputWords /> and writing class with Johnny. </Item>
                    <Item> Marcela and Johnny have class at the Fine  <InputWords /> building.</Item>
                </Olist>
                <div className='contenedorButton'>
                <ButtonModal>Ready</ButtonModal> 
                </div>

            </div>
        </Container>

    )
}
const Actividad3 = styled(Actividad3_base)`${ styles }`

export default Actividad3
