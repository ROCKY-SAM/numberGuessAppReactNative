import React from 'react';
import {View,Text,StyleSheet, TextInput,Button} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/color';
import Input from '../components/Input';
const StartGameScreen = props =>{
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Game Screen</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input style={styles.input} 
                blurOnSubmit 
                autoCapitalize='none' 
                autoCorrect={false}
                 keyboardType="number-pad" 
                 maxLength={2} />
                <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="Reset" onPress={() => {}} color={Colors.accent} />
                </View>
                <View style={styles.button}>
                    <Button title="Confirm" onPress={() => {}} color={Colors.primary} />
                </View>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    title:{
        fontSize:20,
        marginVertical:10
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
    }
});

export default StartGameScreen;