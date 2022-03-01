import { Layout, ViewPager } from "@ui-kitten/components";
import React, { useEffect } from "react";
import { Dimensions, FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Carousel from "react-native-snap-carousel";
import CategoriesCarousel from "../Components/categoriesCarousel";
import LatestNewsCarousel, { ArticleProps } from "../Components/latestNewsCarousel";
import NewsListItem from "../Components/NewsListItem";
import { PrimaryButton } from "../Components/PrimaryButton";
import TopNewsList from "../Components/TopNewsList";
import { countries, getEverything, topHeadlines } from "../services/news";
import { categories } from '../services/news';

const windowHeight = Dimensions.get('window').height;


const HomeScreen = () => {

    const [latestNews, setLatestNews] = React.useState<any>(null);
    const [topNews, setTopNews] = React.useState<any>(null);
    const [selectedCategory, setSelectedCategory] = React.useState<any>(categories.general);


    const loadTopNews = React.useCallback(async () => {
        try {
            console.log("selectedCategory", selectedCategory);

            const topNews = await topHeadlines({
                category: selectedCategory,
            });
            setTopNews(topNews);

        } catch (error) {

        }
    }, [selectedCategory]);

    const loadEveryThing = React.useCallback(async () => {
        try {
            const news = await getEverything({
                q: 'corona',
                // country: countries.us,
            });
            const { status } = news;

            if (status == 'ok') {
                setLatestNews(news);
            }
        } catch (error) {

        }
    }, []);


    useEffect(() => {
        loadEveryThing();
        loadTopNews();
    }, []);



    const onCategoryPress = React.useCallback(async (category) => {
        console.log("onCategoryPress", category);
        setSelectedCategory(category);
    }, []);

    const headerComponent = React.useCallback(() => {
        return (<View>
            <LatestNewsCarousel data={latestNews} />
            <CategoriesCarousel onTab={onCategoryPress} />
        </View>);
    }, [latestNews]);


    return (
        <View style={styles.container}>
            <TopNewsList data={topNews?.articles} headerComponent={headerComponent} />
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});


