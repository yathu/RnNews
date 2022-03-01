import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import NewsListItem from './NewsListItem';

interface topNewsListProps {
    headerComponent: any,
    data: any,
}
const TopNewsList: React.FC<topNewsListProps> = (props) => {

    const { headerComponent, data } = props;

    useEffect(() => {
        console.log("rerendering.......");
    }, [data]);


    const renderItem = ({ item, index }) => (
        <NewsListItem data={item} />
    );
    return (
        <FlatList
            ListHeaderComponent={headerComponent}
            nestedScrollEnabled={true}
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.title}
        />
    )
}

export default TopNewsList

const styles = StyleSheet.create({})