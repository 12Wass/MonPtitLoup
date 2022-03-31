import React from "react";
import { MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { showToast } from "../screens/utils/Toast";


    export const storePlayers = async (value: any) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('players', jsonValue);
        } catch (e) {
            showToast('error', 'Oups !', 'Une erreur dans l\'enregistrement est survenue');
            console.log(e);
        }
    }
    export const getPlayers = async () => {
        try {
            const value = await AsyncStorage.getItem('players')
            if (value !== null) {
                return value;
            }
        } catch (e) {
            showToast('error', 'Oups !', 'Une erreur dans l\'enregistrement est survenue');
            console.log(e)
        }

}
