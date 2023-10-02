import { StyleSheet } from "react-native"
import { colors } from "../../styles/colors"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: colors.white
    },
    title: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
        padding: 5
    },
    formRow: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 5
    },
    icon: {
        fontSize: 28,
        color: colors.secundary,
        padding: 5
    },
    input: {
        fontSize: 16,
        padding: 10,
        width: "85%"
    }
})
