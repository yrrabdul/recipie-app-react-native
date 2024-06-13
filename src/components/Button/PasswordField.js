import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function PasswordField({ place,change }) {
    return (
        <View style={styles.container}>
            <TextInput placeholder={place} secureTextEntry={true} onChangeText={change} style={styles.Line} />
        </View>
    );


}
const styles = StyleSheet.create({
    container: {
    
        flex: 0.1,
        width: '100%',
        marginVertical:5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:20
    
    },

    Line: {
        backgroundColor: 'white',
        borderWidth:2,
        borderColor:'lightgrey',
        width: "80%",
        height: 60,
        borderRadius: 20,
        marginBottom: 10,
        fontSize: 20,
        paddingLeft: 15,


    }





})