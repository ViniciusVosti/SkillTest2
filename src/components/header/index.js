import React, { Component, } from 'react';
import { ActivityIndicator, View, Text, Image, StatusBar, TouchableWithoutFeedback, Dimensions, ImageBackground, Platform } from 'react-native';

import styles from './styles';
import { colors, p } from '../../styles';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Icon } from '..';
import TouchableScale from 'react-native-touchable-scale';
import { TextInput } from 'react-native-gesture-handler';

class Header extends Component {

    state = {
        searching: false,
    }

    _menuLeft() {
        if (this.props.hasOwnProperty("menu") && this.props.menu) {
            return (
                <TouchableWithoutFeedback onPress={() => { Actions.drawerOpen() }}>
                    <View style={[styles.btnHead, p.jStart, { }]}>
                        <Icon name='menu-three-horizontal-lines-symbol' size={22} style={{ color: this.props.color ? this.props.color : colors.white }} />
                    </View>
                </TouchableWithoutFeedback>
            );
        }

        return (
            <TouchableWithoutFeedback onPress={this.props.customPop ? this.props.customPop : () => Actions.pop()}>
                <View style={[styles.btnHead, p.jStart, {}]}>
                    <Icon type="FontAwesome5" name='chevron-left' size={22} style={{ color: this.props.color ? this.props.color : colors.white }} />
                </View>
            </TouchableWithoutFeedback>
        );
    }

    _menuRight() {
        let {
            onPress = () => global.alert.alert("Em desenvolvimento"),
            iconName = 'edit',
            iconType = 'FontAwesome5',
            iconSize = 22,
            color = colors.white,

        } = this.props;

        if (this.props.hasOwnProperty("action") && this.props.action && !this.props.fullHeader) {
            return (
                <View style={[p.row, p.aiCenter, { marginRight: -16 }]}>
                    <View style={[p.mr4]}>
                        <Text numberOfLines={1} style={[p.fsBig, { color: this.props.color ? this.props.color : colors.white }, p.ffRegular, this.props.titleStyles != "" ? this.props.titleStyles : {}]}>{this.props.title}</Text>
                    </View>
                    <TouchableWithoutFeedback onPress={onPress}>
                        <View style={[p.pr16, p.pl8, p.jCenter, { height: 60 }]}>
                            <Icon name={iconName} type={iconType} size={iconSize} style={[{ color: this.props.iconColor ? this.props.iconColor : color }]} />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            )
        }

        if (this.props.fullHeader) {
            return (
                <View style={[p.row, p.aiCenter]}>
                    <View style={[p.mr8]}>
                        <Text numberOfLines={1} style={[p.fsDef, { color: colors.black }, p.ffRegular, this.props.titleStyles != "" ? this.props.titleStyles : {}]}>{this.props.title}</Text>
                    </View>
                    <TouchableWithoutFeedback onPress={onPress}>
                        <View style={[p.jCenter, p.aiCenter, p.bgcYellow, { height: 40, width: 40, borderRadius: 40 / 2 }]}>
                            <Icon name={iconName} type={iconType} size={iconSize} style={[{ color: this.props.iconColor ? this.props.iconColor : color }]} />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            )
        }

        if (this.props.hasOwnProperty("title") && this.props.title) {
            return (
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <Text numberOfLines={1} style={[p.fsBig, { paddingTop:14, color: this.props.color ? this.props.color : colors.white }, p.ffRegular, this.props.titleStyles != "" ? this.props.titleStyles : {}]}>{this.props.title}</Text>
                </View>
            )
        }
    }

    headerSearchLeft() {
        if (this.state.searching == true) {
            return (
                <TouchableWithoutFeedback onPress={() => this.setState({ searching: false }, () => this.props.onChangeSearch(false))}>
                    <View style={[p.jStart, p.pl16, p.jCenter, { height: 60, width: 46 }]}>
                        <Icon type="FontAwesome5" name='trash' size={22} style={[p.tcError]} />
                    </View>
                </TouchableWithoutFeedback>
            );
        }
        
        if(this.props.hasOwnProperty("menu") && this.props.menu){
            return(
                <TouchableWithoutFeedback onPress={() => Actions.drawerOpen() }>
                    <View style={[styles.btnHead, p.jStart, p.pl16, {}]}>
                        <Icon name='menu-three-horizontal-lines-symbol' size={22} style={{ color: this.props.color ? this.props.color : colors.white }} />
                    </View>
                </TouchableWithoutFeedback>
            )
        }

        return (
            <TouchableWithoutFeedback onPressOut={this.props.customPop ? this.props.customPop : () => Actions.pop()}>
                <View style={[styles.btnHead, p.jStart, p.pl16, {}]}>
                    <Icon type="FontAwesome5" name='chevron-left' size={22} style={[{ color: this.props.color ? this.props.color : colors.white }]} />
                </View>
            </TouchableWithoutFeedback>
        );
    }

    render() {
        if (this.props.search) {
            let headerStyle = this.props.headerStyle ? this.props.headerStyle : {};
            return (
                <View style={[p.row, p.bgcPrimary, headerStyle, { height: 56}]}>
                    <View style={[p.aiCenter,p.jCenter]}>
                        {this.headerSearchLeft()}
                    </View>
                    <View style={[p.f1]}>
                        <View style={[p.f1]}>
                            <TouchableScale style={[p.f1]} onPress={() => this.setState({ searching: true }, () => this.props.onChangeSearch(true))}>
                                {!this.state.searching ?
                                    <View style={[p.f1, p.row, p.aiCenter]}>
                                        {this.props.title &&
                                        <View style={[this.props.search && this.props.title ? p.pr12 : {}, p.f1, p.aiEnd, p.jCenter]}>
                                            <Text numberOfLines={1} style={[p.ffBlack, p.fsBig, { color: this.props.color ? this.props.color : '' }]}>{this.props.title}</Text>
                                        </View>}
                                        <View style={[styles.btnHead,p.aiCenter, {  }]}>
                                            <TouchableScale onPress={() => this.setState({ searching: true }, () => this.props.onChangeSearch(true))}>
                                                <Icon type="FontAwesome5" name='search' size={22} style={[{ color: this.props.color ? this.props.color : colors.white }]} />
                                            </TouchableScale>
                                        </View>
                                    </View>
                                    :
                                    <TextInput style={[p.f1, p.bRad8, p.bgcGreyLight, p.mv8, p.mr16]} autoFocus={true}
                                        value={this.props.searchvalue}
                                        onChangeText={(text) => this.props.searchOnChangeText(text)} />
                                }
                            </TouchableScale>
                        </View>
                    </View>
                </View >
            );
        }

        if (this.props.iconRight) {
            let headerStyle = this.props.headerStyle ? this.props.headerStyle : {};
            return (
                <View style={[p.row, p.bgcWhite, headerStyle]}>
                    <View style={[]}>
                        {this.headerSearchLeft()}
                    </View>
                    <View style={[p.f1]}>
                        {
                            (this.props.hasOwnProperty("title") && this.props.title) &&
                            <View style={[p.f1]}>
                                <TouchableScale style={[p.f1]} onPress={() => { }}>
                                    <View style={[p.f1, p.row, p.aiCenter]}>
                                        <View style={[this.props.iconRight && this.props.title ? p.pr16 : {}, p.f1, p.aiEnd, p.jCenter]}>
                                            <Text numberOfLines={1} style={[p.ffRegular, p.fsbig, { color: this.props.color ? this.props.color : '' }]}>{this.props.title}</Text>
                                        </View>
                                        {this.props.hasPermition &&
                                            <View style={[styles.btnHead, p.jStart, p.pr16]}>
                                                <TouchableScale onPress={() => this.props.onChangeIcon()}>
                                                    <Icon type="FontAwesome5" name='users-cog' size={22} style={[{ color: this.props.color ? this.props.color : colors.white }]} />
                                                </TouchableScale>
                                            </View>
                                        }
                                    </View>
                                </TouchableScale>
                            </View>
                        }
                    </View>
                </View >
            );
        }

        return (
            <View style={[styles.header, { backgroundColor: this.props.headerBackgroundColor ? this.props.headerBackgroundColor : colors.primary }, this.props.headerStyle ? this.props.headerStyle : {}]}>

                <StatusBar backgroundColor={this.props.statusBarColor ? this.props.statusBarColor : this.props.backgroundColor ? this.props.backgroundColor : colors.white} translucent={false} barStyle="light-content" {...this.props} />

                <View style={[styles.headerViewLeft, {}]}>
                    {this._menuLeft()}
                </View>

                {/* <View style={[p.flex, {}]}>
                    {this._menuCenter()}
                </View> */}

                <View style={[styles.headerViewRight, {}]}>
                    {this._menuRight()}
                </View>

            </View>
        );
    }
}

const mapStateToProps = state => (
    {
        // example: state.example_reducer.example
    }
)

export default connect(mapStateToProps, {})(Header);
