import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Loading } from "../Components/loader";
import { useAuth } from "../context/authContext";
import AppStack from "./appStack";
import AuthStack from "./authStack";


export const Router = ({ }) => {
    const { authData,loading} = useAuth();

    if(loading){
        return <Loading/>;
    }
    return (
        <NavigationContainer>
            {authData ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
}