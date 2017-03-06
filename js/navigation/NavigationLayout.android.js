import {
    StackNavigation,
    DrawerNavigation,
    DrawerNavigationItem,
} from '@exponent/ex-navigation';
import Router from './router';
import React, { Component } from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { typography } from '../config/styles';

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
            <DrawerNavigation
                id="root"
                initialItem="about-tab"
                drawerWidth={300}
                renderIcon={this.renderIcon('md-information-circler')}
                >
                <DrawerNavigationItem
                    id="about-tab"
                    title="About"
                    renderIcon={isSelected => this.renderIcon('md-information-circle', isSelected)}
                    renderTitle={isSelected => this.renderTitle('About', isSelected)}
                >
                    <StackNavigation
                        id="about"
                        navigatorUID="about"
                        initialRoute={Router.getRoute('about')}
                    />
                </DrawerNavigationItem>
                <DrawerNavigationItem
                    id="schedule"
                    title="Schedule"
                    renderIcon={isSelected => this.renderIcon('md-calendar', isSelected)}
                    renderTitle={isSelected => this.renderTitle('Schedule', isSelected)}
                >
                    <StackNavigation
                        id="schedule"
                        navigatorUID="schedule"
                        initialRoute={Router.getRoute('schedule')}
                    />
                </DrawerNavigationItem>
            </DrawerNavigation>
        );
    }
}

export default NavigationLayout;