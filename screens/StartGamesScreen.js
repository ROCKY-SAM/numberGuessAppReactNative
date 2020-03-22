import React,{useState} from 'react';
import {View,Text,StyleSheet,Button,TouchableWithoutFeedback,Keyboard,Alert} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/color';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
const StartGameScreen = props =>{

const [enteredValue,setEnteredValue] = useState(''); 
const[confirmed,setConfirmed] = useState(false);
const [selectNumber,setSelectNumber] =useState();
const numberInputHandler = InputText => {
    setEnteredValue(InputText.replace(/[^0-9]/g,''));
};

const resetInputHandler = () =>{
    setEnteredValue('');   
    setConfirmed(false);
};

const confirmInputHandler = () =>{
    const chosenNumber = parseInt(enteredValue);
    if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99 ){
        Alert.alert('Invalid Number','Number has to a number between 1 - 99',[{text:'Okay',style:'destructive',onPress:resetInputHandler}]);
        return;
    }

    setConfirmed(true);  
    setSelectNumber(chosenNumber);
    setEnteredValue('');
    Keyboard.dismiss();
    
};

let confirmedOutput;
    if(confirmed){
    confirmedOutput = (
        <Card style={styles.summaryContainer} >
        <Text>You selected</Text>
        <NumberContainer>{selectNumber}</NumberContainer>
        <Button title="Start Game" onPress={() =>props.onStartGame(selectNumber)}/>
        </Card>);
    }

    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss}}>
        <View style={styles.screen}>
            <Text style={styles.title}>Game Screen</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input style={styles.input} 
                blurOnSubmit 
                autoCapitalize='none' 
                autoCorrect={false}
                 keyboardType="number-pad" 
                 maxLength={2} 
                 onChangeText={numberInputHandler}
                 value={enteredValue} />
                <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="Reset" onPress={resetInputHandler} color={Colors.accent} />
                </View>
                <View style={styles.button}>
                    <Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary} />
                </View>
                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    title:{
        fontSize:20,
        marginVertical:10,
        fontFamily:'open-sans-bold'
    },
    inputContainer:{
        width:300,
        maxWidth:'80%',
        alignItems:'center'
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:15
    },
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },button:{
        width:100
    },input:{
        width:80,
        textAlign:"center",
        fontSize:18,
    },summaryContainer:{
        margin:20,
        alignItems:"center",

    }
});

export default StartGameScreen;