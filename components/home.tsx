import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { commonStyles } from "../styles";
import { useEffect, useState } from "react";
import { GetGames } from "../data/gameList";
import Heading from "./heading";

export default function Home() {
    const [game, setGame] = useState<Game>();
    const [hiddenName, setHiddenName] = useState<string>("");

    useEffect(() => {
        async function getGames() {
            var games = GetGames();
            var index = Math.floor(Math.random() * games.length);
            var game = games[index];
            setGame(game);
            hideGameName(game.name);
        }

        getGames();
    }, []);

    function hideGameName(gameTitle: string) {
        var hiddenName: string = "";
        for (var i = 0; i < gameTitle.length; i++) {
            hiddenName += gameTitle[i] === " " ? "   " : " _ ";
        }
        setHiddenName(hiddenName);
    }

    return (
        <SafeAreaView style={commonStyles.container}>
            <Heading title="This is a test"></Heading>
            <View style={commonStyles.mainHeight}>
                <Text>{hiddenName}</Text>
                <Text>{game?.desciption}</Text>
                <Text>{game?.releaseDate.toDateString()}</Text>
                <Text>{game?.platforms}</Text>
                <Image style={styles.tinyLogo} source={{uri: game?.screenshotUrl}}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: '95%',
        height: undefined,
        aspectRatio: 1,
        borderRadius: 10
      },
});