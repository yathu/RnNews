import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ArticleProps } from './latestNewsCarousel'
import Overlay from './Overlay';
import appColors from '../utils/colors';
import { useEffect } from 'react';

interface listItemProps {
    data: ArticleProps,
    onPress?: void,
}

const NewsListItem: React.FC<listItemProps> = ({ data, onPress }) => {

    const { title, description, urlToImage, author, publishedAt } = data;
    return (
        <View style={styles.container}>
            <Image source={{ uri: urlToImage }}
                style={styles.image} />

            <Overlay style={styles.overlay}>
                <View style={styles.contentContainer}>
                    <Text numberOfLines={2} style={styles.title}>{title}</Text>
                    <View style={styles.footerContainer}>
                        <Text style={styles.footerText}>{author}</Text>
                        <Text style={styles.footerText}>{publishedAt}</Text>
                    </View>
                </View>
            </Overlay>
        </View>
    );
}

export default NewsListItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 128,
        position: 'relative',
        marginBottom: 16,
        marginHorizontal: 20,
        borderRadius: 10,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    contentContainer: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignContent: 'space-between'
    },
    overlay: {
        position: 'absolute',
        padding: 15,
    },
    title: {
        fontSize: 14,
        color: appColors.newsListText
    },
    footerText: {
        fontSize: 12,
        // flex: 1,
        color: appColors.newsListText
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }


})