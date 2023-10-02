import { StyleSheet } from "react-native"
import { colors } from "../../styles/colors"

export const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.secundary,
        borderRadius: 5,
        margin: 5
    },
    text: {
        color: colors.white,
        fontWeight: "bold",
        padding: 10,
        fontSize: 18,
        textAlign: "center"
    }
})