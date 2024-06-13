import { StyleSheet, Text, View, TextInput } from 'react-native';


export default function TextField({ place,change }) {
    return (
        <View style={styles.container}>
            <TextInput placeholder={place} onChangeText={change} style={styles.Input} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 0.1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:20
        },
    Input: {
        backgroundColor: 'white',
        borderWidth:2,
        borderColor:'lightgrey',
        width: "80%",
        height: 60,
        borderRadius: 20,
        marginBottom: 20,
        fontSize: 20,
        paddingLeft: 15,
        
    }
})