import React from "react";
import { Text , Button, View } from "react-native";
import Question from "./src/View/Questions";
export default function App() {

const questions = [{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy",question:"Who created the digital distribution platform Steam?",correct_answer:"Valve",incorrect_answers:["Valve","Pixeltail Games","Ubisoft","Electronic Arts"]},
{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy",question:"Who is the main character in &quot;The Stanley Parable&quot;?",correct_answer:"Stanley",incorrect_answers:["Stanley","The Adventure Line","The Narrator","The Boss"]},
{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy",question:"In the 2002 video game &quot;Kingdom Hearts&quot;, how many Keyblades are usable?",correct_answer:"18",incorrect_answers:["18","13","16","15"]},
// {"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"Which of these is NOT the name of a rival gang in the video game Saint&#039;s Row 2?","correct_answer":"The Zin Empire","incorrect_answers":["The Brotherhood","The Ronin","The Sons of Samedi"]},
// {"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"Who is the creator of the Super Smash Bros. Series?","correct_answer":"Masahiro Sakurai","incorrect_answers":["Reggie Fils-Aim&eacute;","Bill Trinen","Hideo Kojima"]},
// {"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"TF2: What code does Soldier put into the door keypad in &quot;Meet the Spy&quot;?","correct_answer":"1111","incorrect_answers":["1432","1337","No code"]},
// {"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"In the Half-Life series, Gordon Freeman&#039;s signature weapon is a:","correct_answer":"Crowbar","incorrect_answers":["Sledgehammer","Fiber Wire","Katana"]},
// {"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"In Minecraft, which two items must be combined to craft a torch?","correct_answer":"Stick and Coal","incorrect_answers":["Stick and Fire","Wood and Coal","Wood and Fire"]},
// {"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"Lanky, Funky, and Chunky are all characters featured in which series owned by Nintendo?","correct_answer":"Donkey Kong","incorrect_answers":["Mario","Kirby","Zelda"]},
// {"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"In the &quot;Metal Gear Solid&quot; series, what&#039;s the name of Solid Snake&#039;s brother?","correct_answer":"Liquid Snake","incorrect_answers":["Kulus Snake","Billy Snake","Gilur Snake"]}
]

  return (
    <View>
      <Text style={{textAlign:'center',fontWeight:'bold',marginTop:10,fontSize:25}}>Quizz Application</Text>
      <Question questions={questions}/>
    </View>
    )
}