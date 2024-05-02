import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      width: width,
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      marginBottom: 40,
      color: "#fff",
      textAlign: "center",
    },
    input: {    
      backgroundColor: "#FFF",
      width: "80%",
      height: 50,
      borderColor: "#6d4c41",
      borderWidth: 1,
      borderRadius: 10,
      marginBottom: 20,
      paddingHorizontal: 15,
      fontSize: 16,
      color: "#000000",
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
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        height: height,
        width: width,
      },
});

export default styles;