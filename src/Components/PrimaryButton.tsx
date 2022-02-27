import React from 'react';
import { ButtonProps, StyleSheet, ViewStyle } from 'react-native';
import { Button, Layout, Text } from '@ui-kitten/components';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import appColors from '../utils/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface buttonProps {
    text: string,
    onPress: () => void,
    style?: ViewStyle,
}

export const PrimaryButton = (props: buttonProps) => {
    const { text, onPress, style } = props;
    return (
        <TouchableOpacity style={[styles.btnContainer, style]} onPress={onPress}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={[appColors.primaryBtnStart, appColors.primaryBtnEnd]}
                style={[styles.linearGradient]}>
                <Text style={styles.buttonText}>
                    Sign In
                </Text>
            </LinearGradient>
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'red'
    },
    linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        width: '100%'
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});