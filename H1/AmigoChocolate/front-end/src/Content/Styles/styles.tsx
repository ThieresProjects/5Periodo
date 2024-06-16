import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {      
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      width: width,
      paddingHorizontal: 20      
    },
    body: {
      marginTop: 80,
      marginBottom: 50
    },
    header:{
      display: 'flex',
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      marginBottom: 40,
      color: "#fff",
      textAlign: "center",
    },
    subtitle: {
      fontSize: 28,
      fontWeight: "bold",
      // marginBottom: 40,
      color: "#fff",
    },
    input: {    
      backgroundColor: "#FFF",
      color: "#000",
      width: "80%",
      height: 50,
      borderColor: "#6d4c41",
      borderWidth: 1,
      borderRadius: 10,
      marginBottom: 20,
      paddingHorizontal: 15,
      fontSize: 16,
    },
    forgotPassword: {
      color: "#6d4c41",
      fontSize: 16,
      marginBottom: 20,
    },
    signUp: {
      color: "#6d4c41",
      fontSize: 16,
      marginBottom: 20,
    },
    button: {
      backgroundColor: "#6d4c41",
      width: "80%",
      height: 50,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 4
    },
    buttonText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
    },
    buttonAdd : {
      opacity:0.7,
      borderWidth: 3,
      borderColor: 'green',
      backgroundColor: '#000',
      paddingVertical:15,
      paddingHorizontal:20,
      borderRadius:10,
      textAlign: 'center',
    },
    buttonCancel : {
      textAlign: 'center',
      opacity:0.7,
      borderWidth: 3,
      borderColor: 'red',
      backgroundColor: '#000',
      paddingVertical:15,
      paddingHorizontal:20,
      // width: 75,
      // height: 20,
      borderRadius:10
    },
    image: {
      flex: 1,
      justifyContent: 'center',
      alignItems: "center",
      height: height + 50,
      width: width,
    },
    underline: { textDecorationLine: 'underline' },
    ContentImg: {
      backgroundColor: 'blue',
      width: 150,
      height: 150,
      borderRadius: 500,
      margin: 50,
    },
    HeaderImg: {
      width: 70,
      height: 70,
      borderRadius: 500,
    },
    ListItem:{
      // fontSize:20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor:'#fff',
      // paddingStart: 20,
      // paddingEnd:200,
      paddingHorizontal:15,
      paddingVertical: 15,
      borderRadius:50,
      margin: 10,
    },
    text20:{
      fontSize:20
    }
});


export default styles;