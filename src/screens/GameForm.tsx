import React, {useState} from "react";
import {Linking, StyleSheet, TextInput, TouchableOpacity, View} from "react-native";
import { MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {Button, Layout, Text, themeColor, TopNav, useTheme} from "react-native-rapi-ui";
import {Ionicons} from "@expo/vector-icons";
import Toast from 'react-native-toast-message';
import {storePlayers} from '../provider/PlayersProvider';
import {showToast} from "./utils/Toast";

export default function ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "MainTabs">) {

    const { isDarkmode, setTheme } = useTheme();
    const [inputs, setInputs] = useState([{key: '', value: ''}])
    const [isSixPlayers, setIsSixPlayers] = useState(false);

    // @ts-ignore
    const latestInput = inputs[Object.keys(inputs)[Object.keys(inputs).length - 1]];

    // TODO : Limiter le nombre de joueurs

    const addHandler = () => {
        const _inputs = [...inputs];

        if (typeof(latestInput) === "undefined" || latestInput["value"].length >= 2) {
            _inputs.push({key: '', value: ''});
            setInputs(_inputs);
        } else {
            showToast('error', 'Oups !', 'Le nom d\'un joueur doit contenir au moins deux lettres');
        }

        if (_inputs.length > 5) {
            setIsSixPlayers(true);
        }
    }

    const deleteHandler = (key: number) => {
        const _inputs = inputs.filter((input, index) => index != key);
        if (_inputs.length < 6) {
            setIsSixPlayers(false);
        }
        setInputs(_inputs);
    }

    const inputHandler = (text: any, key: any) => {
        const _inputs = [...inputs];
        _inputs[key].value = text;
        _inputs[key].key = key;
        setInputs(_inputs);
    }

    const launchGame = () => {
        // Vérification : Si le dernier Input n'est pas rempli, on renvoie une erreur.
        if (latestInput.value === "" || latestInput.value.length < 2){
            showToast('error', 'Oups !', 'Un champ est vide - trop court.');
        }

        // Stocker les joueurs dans l'AsyncStorage puis rediriger vers le jeu.
        storePlayers(inputs)
            .then(() => navigation.navigate('Cards'));

    }


    const styles = StyleSheet.create({
        input: {
            color: "rgb(255, 255, 255)",
            fontFamily: "Ubuntu_400Regular",
            marginLeft: 0,
            marginRight: 0,
            paddingTop: 10,
            paddingBottom: 10,
            paddingRight: 20,
            paddingLeft: 20,
            borderColor: "rgb(38, 40, 52)",
            borderRadius: 8,
            borderWidth: 1,
            justifyContent: "space-between",
        }
    })

    return (
    <Layout>
        <TopNav
            middleContent="Choix des joueurs"
            leftContent={
                <Ionicons
                    name="chevron-back"
                    size={20}
                    color={isDarkmode ? themeColor.white100 : themeColor.dark}
                />
            }
            leftAction={() => navigation.goBack()}
            rightContent={
                <Ionicons
                    name={isDarkmode ? "sunny" : "moon"}
                    size={20}
                    color={isDarkmode ? themeColor.white100 : themeColor.dark}
                />
            }
            rightAction={() => {
                if (isDarkmode) {
                    setTheme("light");
                } else {
                    setTheme("dark");
                }
            }}
        />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
          { inputs.map((input,key) => (
              <View style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  padding: 10
              }} key={key}>
                <TextInput style={styles.input} placeholder={"Nom du joueur"} value={input.value} onChangeText={(text) => inputHandler(text, key)} />
                <TouchableOpacity onPress={() => deleteHandler(key)}>
                    <Ionicons
                        name={isDarkmode ? "person-remove-outline" : "person-remove"}
                        size={20}
                        style={{
                            padding: 10
                        }}
                    />
                </TouchableOpacity>
              </View>
          ))}
          <Button
              style={{ marginTop: 10 }}
              text="Ajouter un nouveau joueur"
              status="info"
              onPress={addHandler}
          />
          { isSixPlayers ?
              <Button
              style={{ marginTop: 10 }}
              text="Lancer la partie"
              status="success"
              onPress={launchGame}
            /> : <></> }
          <Toast position='top' bottomOffset={20} />
      </View>
    </Layout>
  );
}
