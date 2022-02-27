import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { getEverything } from "../services/news";

const HomeScreen = () => {

    const [data, setData] = React.useState<any>(null);

    const onLoad = React.useCallback(async () => {
        const news = await getEverything('bitcoin');
        console.log("news==>", news);
        setData(news);
    }, []);

    //it's called when mount
    useEffect(() => {
        onLoad();
    }, []);


    return (
        <View>
            <Text>Home Screen</Text>
            <Text>{JSON.stringify(data)}</Text>
        </View>
    );
}

export default HomeScreen;