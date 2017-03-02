import React, { Component } from 'react';
import Router from './router';
import {
    StackNavigation,
    TabNavigation,
    TabNavigationItem,
} from '@exponent/ex-navigation';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { typography } from '../config/styles';

class NavigationLayout extends Component {
    // static route = {
    //     // navigationBar: {
    //     // }
    // }
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
                navigatorUID="main"
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
                    />
                </TabNavigationItem>
            </TabNavigation>
        );
    }
}

export default NavigationLayout;