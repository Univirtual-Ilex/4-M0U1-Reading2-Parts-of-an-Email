import React from 'react'
//Components
import Container from '../Container'
import ProgressBar from '../ProgressBar'
import MainTitle from '../MainTitle'
import ButtonUi from '../ButtonControlUI'
import {ICol, IRow} from '../Grid'
import Sentence from '../Sentence'
import Modal from '../Generales/Modal'

// Styles
import styled from 'styled-components'
import styles, { ProgressbarContainer, UiButtonsContainer } from './Actividad_styles'
import Ilex from '../../App/variables'
import { useState, useEffect } from 'react'




const Actividad_base =  ({staticContext,...props}) => {
    const [okSentences, setOkSentences] = useState([])
    const [solvedActivity, setSolvedActivity] = useState(false)
    const registerFeedBack = (data) => {
        setOkSentences(okSentences.concat(data))
    }

    useEffect(()=>{

        let numberofSentences = 10
        if (okSentences.length === numberofSentences){
            setSolvedActivity(true)
            console.log('Great Work')
        }

    },[okSentences])

    return (
        <Container bgImage='./src/bg_actividad1.png' w={69} h={38.8} {...props}>
            
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='slide the sentences to organize them, then press check to verify if it is right or wrong, press hint if you need help   ' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' onClick={ () => window.location.reload() } />
            </UiButtonsContainer>

            <ProgressbarContainer>
                <ProgressBar progress={0}/>
            </ProgressbarContainer>         


            <MainTitle color={Ilex.violeta2}>
            ORGANIZE THE SENTENCES IN THE CORRECT ORDER 
            </MainTitle>

            <IRow w={90} align='center' pt={2}>
                <ICol w={100}> 
                    <Sentence basename='Account/From' words={[{id:0, name: 'your'}, {id:1, name: 'email'}, {id:2, name: 'goes'}, {id:3, name: 'in'}, {id:4, name: 'this'}, {id:5, name: 'part'}]} sendFeedback={(info)=>{ registerFeedBack(info)}} />
                    <Sentence basename='To' words={[{id:0, name: 'you'}, {id:1, name: 'write'}, {id:2, name: 'the'}, {id:3, name: 'recipient`s'}, {id:4, name: 'email'}, {id:5, name: 'in'}, {id:6, name: 'this'}, {id:7, name: 'part'}]}  sendFeedback={(info)=>{ registerFeedBack(info)}} />
                    <Sentence basename='Subject field' words={[{id:0, name: 'you'}, {id:1, name: 'write'}, {id:2, name: 'the'}, {id:3, name: 'purpose'},{id:4, name:  'of'}, {id:5, name: 'your'}, {id:6, name: 'message'}, {id:7, name: 'in'}, {id:8, name: 'this'},{id:9, name: 'part'}]}  sendFeedback={(info)=>{ registerFeedBack(info)}} />
                    <Sentence basename='Greeting' words={[{id:0, name: 'you'}, {id:1, name: 'say'}, {id:2, name: 'hello'}, {id:3, name: 'or'}, {id:4, name: 'greet'}, {id:5, name: 'the'}, {id:6, name: 'person'}, {id:7, name: 'you'}, {id:8, name: 'write'},{id:9, name: 'the'},{id:10, name: 'message'}, {id:11, name: 'to'}]}  sendFeedback={(info)=>{ registerFeedBack(info)}} />
                    <Sentence basename='Introduction' words={[{id:0, name: 'you'}, {id:1, name: 'introduce'}, {id:2, name: 'the'}, {id:3, name: 'message'}, {id:4, name: 'you'}, {id:5, name: 'want'}, {id:6, name: 'to'},{id:7, name:  'send'},{id:8, name:  'on'}, {id:9, name: 'this'}, {id:10, name: 'section'}]}  sendFeedback={(info)=>{ registerFeedBack(info)}} />
                    <Sentence basename='Body' words={[{id:0, name: 'the'}, {id:1, name: 'content'}, {id:2, name: 'of'}, {id:3, name: 'your'}, {id:4, name: 'message'}, {id:5, name: 'goes'}, {id:6, name: 'in'}, {id:7, name: 'this'}, {id:8, name: 'part'}]}  sendFeedback={(info)=>{ registerFeedBack(info)}} />
                    <Sentence basename='Conclusion' words={[{id: 0,name: 'you'}, {id: 1,name: 'conclude'}, {id: 2,name: 'the'}, {id: 3,name: 'message'}, {id: 4,name: 'in'}, {id: 5,name: 'this'}, {id: 6,name: 'section'}]}  sendFeedback={(info)=>{ registerFeedBack(info)}}/>
                    <Sentence basename='Complimentary close' words={[{id: 0,name: 'it'}, {id: 1,name: 'is'}, {id: 2,name: 'a'}, {id: 3,name: 'section'}, {id: 4,name: 'of'}, {id: 5,name: 'the'},{id: 6,name:  'message'}, {id: 7,name: 'that'}, {id: 8,name: 'you'}, {id: 9,name: 'include'}, {id: 10,name: 'before'},{id: 11,name:  'your'}, {id: 12,name: 'signature'}]}  sendFeedback={(info)=>{ registerFeedBack(info)}} />
                    <Sentence basename='Signature' words={[{id: 0, name: 'in'}, {id: 1, name: 'this'}, {id: 2, name: 'part'}, {id: 3, name: 'you'},{id: 4, name:  'write'}, {id: 5, name: 'your'}, {id: 6, name: 'name'}, {id: 7, name: 'to'}, {id: 8, name: 'finish'}, {id: 9, name: 'the'}, {id: 10, name: 'message'}]}  sendFeedback={(info)=>{ registerFeedBack(info)}} />
                    <Sentence basename='Attachments' words={[{id: 0, name: 'here'},{id: 1, name:  'you'},{id: 2, name:  'include'},{id: 3, name:  'a'}, {id: 4, name: 'document'}, {id: 5, name: 'or'}, {id: 6, name: 'photo'}, {id: 7, name: 'to'}, {id: 8, name: 'the'}, {id: 9, name: 'message'}, {id: 10, name: 'email'}]}  sendFeedback={(info)=>{ registerFeedBack(info)}} />
                </ICol>
            </IRow>

            <Modal visible={solvedActivity} ok nxtUrl="#/actividad2" repeatUrl="#/actividad1" />
        </Container>
    )

}

const Actividad = styled(Actividad_base)`
    ${ styles.mistyles }
`


export default Actividad