
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './Sentence_styles'
import Ilex from '../../App/variables'
import {ReactSortable} from 'react-sortablejs'

//Components
import DraggableItem from '../Draggable'
import ButtonEval from '../ButtonEval'
import { useState } from 'react'


// Componente base
const Sentence_base = ({basename, words, ...props}) => {

    // Orden correcto de las frases
    let InitialState = words

    const probe = () => {
        console.log('initial' ,InitialState)

    }
    // 
    const randomizeItems = (array) => {
        //let sortable = array.sort(()=>Math.random() - 0.5)
        let sortable = array.map((item, index)=>{
            return item
        })
        sortable.sort(()=>Math.random() - 0.5)
        return sortable
    }
    
    let [WordsState, setWordsState] = useState(randomizeItems(words))

    return (
        <div {...props}>
            <article className='container'>
                <div className='d-line field'>{basename}</div>
                <div className='d-line words'>
                    <ReactSortable 
                        list={WordsState} 
                        setList={setWordsState}
                        group="groupName"
                        animation={200}
                        delayOnTouchStart={true}
                        delay={2}
                        direction="horizontal"
                    >
                    { WordsState.map((word, index) => {

                        return(
                            <DraggableItem name={word.name} key={basename+''+word.id} onClick={probe} />
                        )
                    }) }
                    </ReactSortable>
                </div>
                <div className='d-line eval'>
                    <span className='ok'><img src='./src/ok.svg' alt='Ok'/></span>
                    <span className='wrong'><img src='./src/wrong.svg' alt='Error'/></span>
                    <ButtonEval color={Ilex.color_amarilloClaro} mx={0.2} txtcolor={Ilex.morado}>Hint</ButtonEval>
                    <ButtonEval color={Ilex.morado} mx={0.2}>Check</ButtonEval>
                </div>
            </article>
        </div>
    )
}
const Sentence = styled(Sentence_base)`${ styles }`
export default Sentence
    