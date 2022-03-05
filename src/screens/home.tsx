import React, { useEffect } from "react";
import { Alert, Dimensions, FlatList, StyleSheet, View } from "react-native";
import CategoriesCarousel from "../Components/categoriesCarousel";
import LatestNewsCarousel from "../Components/latestNewsCarousel";
import NewsListItem from "../Components/NewsListItem";
import { categories, getEverything, topHeadlines } from "../services/news";

const windowHeight = Dimensions.get('window').height;


const HomeScreen = () => {

    const [latestNews, setLatestNews] = React.useState<any>(null);
    const [topNews, setTopNews] = React.useState<any>(null);
    const [selectedCategory, setSelectedCategory] = React.useState<any>(categories.general);




    const loadEveryThing = React.useCallback(async () => {
        try {
            const news = await getEverything({
                q: 'corona',
            });
            const { status } = news;

            if (status == 'ok') {
                setLatestNews(news);
            }
        } catch (error) {

        }
    }, []);


    const onCategoryPress = React.useCallback((category: string) => {
        console.log(selectedCategory, "category==> 1");
        setSelectedCategory(category);
        console.log(category, "category==>");
    }, [topNews, selectedCategory]);


    const headerComponent = React.useMemo(() => {
        return (<>
            <LatestNewsCarousel data={latestNews} />
            <CategoriesCarousel onTab={onCategoryPress} />
        </>);
    }, [latestNews, selectedCategory]);


    const loadTopNews = React.useCallback(async () => {
        try {

            console.log('selectedCategory', selectedCategory, "==>")
            const _topNews = await topHeadlines({
                category: selectedCategory,
            });

            setTopNews(_topNews);

        } catch (error) {

        }
    }, [selectedCategory]);



    React.useEffect(() => {
        loadEveryThing();
    }, []);

    React.useEffect(() => {
        loadTopNews();
    }, [selectedCategory]);

    const renderItem = ({ item, index }: any) => (
        <NewsListItem key={item?.title} data={item} />
    );

    return (
        <View style={styles.container}>
            <FlatList
                ListHeaderComponent={headerComponent}
                nestedScrollEnabled={true}
                data={topNews?.articles}
                renderItem={renderItem}
                keyExtractor={item => item.title}
            />
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


