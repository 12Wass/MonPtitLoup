import React, {useState} from "react";
import {Linking, View} from "react-native";
import { MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {Button, Layout, Text} from "react-native-rapi-ui";
import WerewolfLogo from "../components/utils/WerewolfLogo";
import {getPlayers} from "../provider/PlayersProvider";
import Cards from "../provider/CardsList.json"

export default function ({
     navigation,
 }: NativeStackScreenProps<MainStackParamList, "MainTabs">) {

    const [players, setPlayers] = useState<object | undefined | string>({})
    const cards = Cards;

    getPlayers().then(res  => {
        setPlayers(res);
    })

    const generateGame = () => {
        /*
        Pour la génération automatique, nous devons prendre en compte le nombre de joueurs existants et
        créer des paramètres de jeu correspondants.
        S'il y a 7 joueurs, il faudra par exemple 3 villageois, 2 loups, 1 sorcière et 1 voyante.
         */

    }

    const shuffleCards = (toShuffle: []) => {
        let rand, temp, i;
        for (i = toShuffle.length - 1; i > 0; i -= 1) {
            rand = Math.floor(Math.random() * (i + 1));
            temp = toShuffle[i];
            toShuffle[i] = toShuffle[rand];
            toShuffle[rand] = temp;
        }
        }

    return (
        <Layout>
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <WerewolfLogo />
                <Text>Choix des cartes : </Text>
                <Button
                    style={{ marginTop: 10 }}
                    text="Sélection manuelle"
                    status="success"
                />
                <Button
                    style={{ marginTop: 10 }}
                    text="Génération automatique"
                    status="success"
                    onPress={generateGame}
                />

                {}

            </View>
        </Layout>
    );
}
