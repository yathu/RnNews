import { View, Text, StyleSheet, ViewStyle } from 'react-native'
import React, { PropsWithChildren, ReactChildren, ReactNode } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import appColors from '../utils/colors'


interface overlayProps {
    children?: ReactNode | undefined,
    style?: ViewStyle,
}

const Overlay = (props: overlayProps) => {

    const { children, style } = props;

    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
            colors={[appColors.overlayStart, appColors.overlayEnd]}
            style={[styles.linearGradient, style]}>
            {children}
        </LinearGradient>
    );
}


const styles = StyleSheet.create({
    linearGradient: {
        width: '100%',
        height: '100%',
    },
});

export default Overlay;