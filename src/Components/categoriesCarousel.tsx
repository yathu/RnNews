import { View, Text, Dimensions, Alert, FlatList, StyleSheet } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import { categories } from '../services/news'
import Carousel from 'react-native-snap-carousel';
import Chip from './Chip';

export default function CategoriesCarousel(props: any) {

    const { onTab } = props;

    const _categories = Object.values(categories);
    const [activeIndex, setActiveIndex] = React.useState<number>(0);

    interface RenderItemProps {
        item: any,
        index: number,
    }

    const handlePress = (index: number) => {
        setActiveIndex(index);
    };

    const renderItem = useCallback(({ item, index }: RenderItemProps) => {
        return (

            <Chip text={item} onPress={() => {
                handlePress(index);
                onTab(item);
            }} isActive={index == activeIndex} />
        );
    }, [activeIndex]);


    return (
        <View style={styles.container}>
            <FlatList
                nestedScrollEnabled={true}
                data={_categories}
                renderItem={renderItem}
                keyExtractor={item => item}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        marginVertical: 20
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