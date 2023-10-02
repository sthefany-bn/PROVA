import { KeyboardAvoidingView, Text, View, TextInput, Alert } from "react-native"
import { styles } from "./styles"
import { useEffect, useState } from "react"
import { ILivro } from "../Listar"
import { AntDesign, Ionicons } from "@expo/vector-icons"
import { CompButtonInterface, CompLoading } from "../../components"
import { apiLivro } from "../../services/data"
import { TabTypes } from "../../navigations/tab.navigation"
import { AxiosError } from "axios"

export function Cadastrar({ navigation }: TabTypes) {
    const [data, setData] = useState<ILivro>()
    const [loading, setLoading] = useState(true)
    async function handleSubmit() {
        try {
            setLoading
            if (data?.titulo && data.autor && data.ano) {
                await apiLivro.store(data)
                Alert.alert("Livro cadastrado!")
                navigation.navigate("Listar")
            } else {
                Alert.alert("Prencha todos os campos!")
            }
        } catch (error) {
            const err = error as AxiosError
            Alert.alert(err.response?.data as string)
        } finally {
            setLoading(false)
        }
    }
    function handleChange(item: ILivro) {
        setData({ ...data, ...item })
    }
    useEffect(() => {
        setLoading(false)
    }, [])
    return (
        <>
            {
                loading ? (
                    <CompLoading />
                ) : (
                    <KeyboardAvoidingView style={styles.container} >
                        <Text style={styles.title}>Cadastre o Livro</Text>
                        <View style={styles.formRow}>
                            <AntDesign name="book" style={styles.icon} />
                            <TextInput
                                placeholder="Título"
                                onChangeText={(i) => handleChange({ titulo: i })}
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.formRow}>
                            <Ionicons name="person" style={styles.icon} />
                            <TextInput
                                placeholder="Autor"
                                onChangeText={(i) => handleChange({ autor: i })}
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.formRow}>
                            <AntDesign name="calendar" style={styles.icon} />
                            <TextInput
                                placeholder="2023"
                                onChangeText={(i) => handleChange({ ano: Number(i) })}
                                style={styles.input}
                                keyboardType="numeric"
                            />
                        </View>
                        <CompButtonInterface title="Salvar" onPress={handleSubmit} />
                    </KeyboardAvoidingView >
                )
            }
        </>

    )
}
