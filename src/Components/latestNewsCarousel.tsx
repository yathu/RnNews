import { Icon, Text } from '@ui-kitten/components';
import React, { useState, useCallback, useRef } from "react";
import { useEffect } from "react";
import { View, SafeAreaView, Dimensions, Image, StyleSheet } from "react-native";

import Carousel from "react-native-snap-carousel";
import appColors from "../utils/colors";
import Overlay from "./Overlay";

export interface ArticleProps {
    author: string;
    title: string;
    description: string;
    urlToImage: string;
    publishedAt: string;
}

interface LatestCarouselProps {
    data: any;
}
interface RenderItemProps {
    item: ArticleProps;
    index: number;
}


const WINDOW_HEIGHT = Dimensions.get('window').height;
const SLIDER_HEIGHT = Math.round(WINDOW_HEIGHT * 1 / 3);

const LatestNewsCarousel: React.FC<LatestCarouselProps> = ({ data }) => {

    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [carouselItems, setCarouselItems] = useState<ArticleProps[]>([]);
    const ref = useRef(null);

    const SLIDER_WIDTH = Dimensions.get('window').width;
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

    const { articles } = (data && data?.articles) ? data : []

    useEffect(() => {
        setCarouselItems(articles);
    }, [data]);


    const renderItem = useCallback(({ item, index }: RenderItemProps) => {
        return (
            <View style={styles.renderItemContainer}>
                <Image source={{ uri: item.urlToImage }}
                    style={styles.image} />

                <Overlay style={styles.overlay}>
                    <View style={styles.contentContainer}>

                        <View>
                            <Text style={styles.author}>{item.author}</Text>
                            <Text numberOfLines={2} style={styles.title}>
                                {item.title}
                            </Text>
                        </View>

                        <Text numberOfLines={2} style={styles.content}>
                            {item.description}
                        </Text>
                    </View>
                </Overlay>


            </View>
        );
    }, []);

    return (
        <View style={styles.container}>

            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>
                    Latest News
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.seeAll}>
                        See All
                    </Text>
                    <Icon
                        style={styles.icon}
                        fill={appColors.linkText}
                        name='arrow-forward'

                    />
                </View>
            </View>

            <Carousel
                layout={"default"}
                ref={ref}
                data={carouselItems}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                // itemHeight={ITEM_HEIGHT}
                renderItem={renderItem}
                onSnapToItem={(index: number) => setActiveIndex(index)}
                activeSlideAlignment={"start"}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: SLIDER_HEIGHT,
        backgroundColor: 'white',
        paddingLeft: 20,
        overflow: 'hidden'
    },
    sectionContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingRight: 20,
        marginBottom: 20,
        marginTop: 15
    },
    sectionTitle: {
        fontSize: 18,
        color: appColors.sectionTitle,
    },
    seeAll: {
        fontSize: 12,
        color: appColors.linkText,
    },
    icon: {
        width: 24,
        height: 24,
        marginLeft: 10
    },
    renderItemContainer: {
        height: '100%',
        width: '100%',
    },
    contentContainer: {
        height: '70%',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
    },
    overlay: {
        position: 'absolute',
        borderRadius: 10,

    },
    author: {
        color: appColors.cardTextColor,
        fontSize: 10,
        marginBottom: 7,
    },
    title: {
        color: appColors.cardTextColor,
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 21,
    },
    content: {
        color: appColors.cardTextColor,
        fontSize: 10,
    },
    titleContainer: {

    }
});


export default LatestNewsCarousel;
