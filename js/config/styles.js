import { Platform } from 'react-native';

export const colors = {
    black: '#000',
    white: '#fff',
    mediumGrey: '#999',
    lightGrey: '#e6e6e6',
    blue: '#8797D6',
    purple: '#9963ea',
    red: '#cf392a',
}

export const typography = {
    ...Platform.select({
        ios: {
            fontMain: 'Montserrat',
            baseSize: 16,
            mediumSize: 20,
            largeSize: 24
        },
        android: {
            fontMain: 'Montserrat-Regular',
            baseSize: 16,
            mediumSize: 20,
            largeSize: 24
        },
        fontMainLight: 'Montserrat-Light'
    })
}