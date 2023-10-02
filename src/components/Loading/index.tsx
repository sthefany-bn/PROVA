import { View, Text } from "react-native"
import { styles } from "./styles"

export function Loading() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Carregando!!!</Text>
        </View>
    )
}
