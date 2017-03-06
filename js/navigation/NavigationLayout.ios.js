import React, { Component } from 'react';
import Router from './router';
import {
    StackNavigation,
    TabNavigation,
    TabNavigationItem,
} from '@exponent/ex-navigation';
import LinearGradient from 'react-native-linear-gradient';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { typography, colors } from '../config/styles';
import styles from './styles'

const bannerStyle = {
    navigationBar: {
        titleStyle: {
            fontSize: 24,
            fontFamily: typography.fontMain,

            fontWeight: 'bold'
        },
        tintColor: colors.white,
        renderBackground: () => (
            <LinearGradient
                start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }}
                colors={[colors.red, colors.purple]}
                style={styles.linearGradient} />
        ),
    }
}

class NavigationLayout extends Component {

    renderIcon(iconName, isSelected) {
        let color = isSelected ? 'white' : 'gray';
        return (
            <Icon name={iconName} size={30} color={color} />
        );
    }
    renderTitle(title, isSelected) {
        const titleStyle = {
            color: isSelected ? 'white' : 'gray',
            fontFamily: typography.fontMain
        }
        return (
            <Text style={titleStyle}>{title}</Text>
        )
    }

    render() {
        return (
            <TabNavigation
                id="main"
                initialTab="about-tab"
                tabBarColor="black">
                <TabNavigationItem
                    id="about-tab"
                    title="About"
                    renderIcon={isSelected => this.renderIcon('ios-information-circle', isSelected)}
                    renderTitle={isSelected => this.renderTitle('About', isSelected)}
                >
                    <StackNavigation
                        id="about"
                        navigatorUID="about"
                        initialRoute={Router.getRoute('about')}
                        defaultRouteConfig={bannerStyle}
                    />
                </TabNavigationItem>
                <TabNavigationItem
                    id="schedule"
                    title="Schedule"
                    renderIcon={isSelected => this.renderIcon('ios-calendar', isSelected)}
                    renderTitle={isSelected => this.renderTitle('Schedule', isSelected)}
                >
                    <StackNavigation
                        id="schedule"
                        navigatorUID="schedule"
                        initialRoute={Router.getRoute('schedule')}
                        defaultRouteConfig={bannerStyle}
                    />
                </TabNavigationItem>
                <TabNavigationItem
                    id="faves"
                    title="Faves"
                    renderIcon={isSelected => this.renderIcon('ios-heart', isSelected)}
                    renderTitle={isSelected => this.renderTitle('Faves', isSelected)}
                >
                    <StackNavigation
                        id="faves"
                        navigatorUID="faves"
                        initialRoute={Router.getRoute('faves')}
                        defaultRouteConfig={bannerStyle}
                    />

                </TabNavigationItem>
            </TabNavigation>
        );
    }
}

export default NavigationLayout;