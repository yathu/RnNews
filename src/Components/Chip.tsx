import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import appColors from '../utils/colors'

interface chipProps {
    text: string,
    onPress: () => void,
    style?: ViewStyle,
    isActive: boolean
}

const Chip: React.FC<chipProps> = (props) => {
    const { text, onPress, style, isActive } = props;
    const startColor = isActive ? appColors.primaryBtnStart : appColors.chipBg;
    const endColor = isActive ? appColors.primaryBtnEnd : appColors.chipBg;
    return (
        <TouchableOpacity style={[styles.btnContainer, style]} onPress={onPress}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={[startColor, endColor]}
                style={[styles.linearGradient, isActive && styles.active]}>
                <Text style={[styles.buttonText, isActive && styles.activeButtonText]}>
                    {text}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default Chip;

const styles = StyleSheet.create({
    btnContainer: {
        display: 'flex',
        marginRight: 15,
    },
    linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 50,
        width: '100%',
        borderWidth: 1,
        borderColor: appColors.chipBorder,
        paddingVertical: 5
    },
    active: {
        borderColor: appColors.chipActiveBorder
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
        backgroundColor: 'transparent',
        color: appColors.chipText
    },
    activeButtonText: {
        color: appColors.chipActiveText
    }
});