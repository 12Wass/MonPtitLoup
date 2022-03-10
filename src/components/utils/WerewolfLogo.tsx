import React from "react";
import { Image } from "react-native"
export default () => {
    return (
        <Image source={require('../../images/logo.png')} style={{
            width: 200,
            height: 200,
        }}/>
    );
};
