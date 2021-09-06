import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import { List, RadioButton } from "react-native-paper";

export default function Question ({questions}){
    const [currentIndex,setCurrentIndex] = useState(0)
    const [isSelect,setIsSelect] = useState('')
    const [isChanged,setIsChanged] = useState(false)
    const [val, setVal] = React.useState('');
    const [score,setScore] = useState(0)
    
    // console.log(questions.length)
    
    const moveToNextQuestion = () =>{
        const nextQuestion = currentIndex + 1
        const correctAnswer = questions[currentIndex].correct_answer
       setScore(correctAnswer === val ? score+1 : score)
        if(nextQuestion < questions.length){
            setCurrentIndex(nextQuestion)
        }
        else{
            setIsChanged(true);
        }
    }

    const retry = () =>{
        setIsChanged(false)
        setCurrentIndex(0)
        setScore(0)
    }

    return(
        <View>
        {isChanged ? 
        <>
        <View style={{display:'flex',justifyContent:'center',alignSelf:'center',marginTop:200}}>
            <Text style={{textAlign:'center',fontWeight:'bold',fontSize:40}}>Score</Text>
            <Text style={{textAlign:'center',fontSize:20,marginBottom:50}}>You got {questions.length} Out of {score}</Text>
            <Button 
            title='Retry' 
            onPress={()=>retry()}
            />
        </View>
        </>
        
        :
        
        <View>
          <Text style={{textAlign:'center'}}>{questions[currentIndex].question}</Text>

          {questions[currentIndex].incorrect_answers.map((value,index)=>{
              //   return <Text style={{textAlign:"center"}}>{value}</Text>
              return(
                  
                  <RadioButton.Group onValueChange={val => setVal(val)} value={val}>
                <RadioButton.Item
                label={value} 
                value={value} 
                />
                </RadioButton.Group>
                
                )
            })}

            <Button 
            onPress={()=> moveToNextQuestion()}
            title='next'/>
        </View>
        }
        </View>
    )
}