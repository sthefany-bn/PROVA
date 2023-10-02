import { Text, TouchableOpacity, TouchableOpacityProps} from "react-native";
import { styles } from "./styles";
export interface IButton extends TouchableOpacityProps {
    title: string
}

export function ButtonInterface({title, onPress, ...rest}:IButton) {
    return(
        <TouchableOpacity onPress={onPress} {...rest} style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}