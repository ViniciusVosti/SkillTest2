import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Image, Text, TouchableWithoutFeedback, View, } from 'react-native';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { colors, p, styles } from '../../styles';
import { Content, Button, Icon } from '../../components';

import {

} from '../../actions';

import TouchableScale from 'react-native-touchable-scale';

import axios from 'axios'

class Home extends Component {

    constructor(props){
        super(props)
        
        this.state = {
            page: 0,
            contacts: []
        }
    }

    componentDidMount = () => {
        this.getContacts()
    }

    getContacts = async () => {
        global.contact.getAll().then((res) => {
            this.setState({ contacts: res })
        })
        .catch((err) => { 
            
        })
    }

    _renderContact = ({item, index}) => {
        let text_style = [p.tcWhite]
        return(
            <TouchableWithoutFeedback onPress={() => {
                Actions.newContact({ id: item.Id, item })
            }}>
                <View style={[p.mh8, p.p16, p.bgcPrimary, p.bRad8, p.mb16]}>
                    <View>
                        <Text style={text_style}>{item.Name}</Text>
                    </View>

                    <View style={[p.mt8]}>
                        <Text style={[...text_style, p.fwBold]}>Social media</Text>
                        <View>
                            <Text style={text_style}> - {item.Facebook}</Text>
                            <Text style={text_style}> - {item.Website}</Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    renderHeader = () => {
        return(
            <View style={[p.mt16, p.mh8]}>
                <Button
                    backgroundColor={colors.primary}
                    textColor={colors.white}
                    text={'Adicionar novo contato'}
                    onPress={() => {
                        Actions.newContact()
                    }}
                />
            </View>
        )
    }

    render() {
        return( 
            <Content 
                // noScroll
                statusBarColor={colors.primary}
                menu
            >

                <FlatList
                    data={this.state.contacts}
                    renderItem={({item, index}) => this._renderContact({item, index})}
                    ListHeaderComponent={() => this.renderHeader()}
                />
 
            </Content>
        );
    }
}

const mapStateToProps = state => (
    {
        // loading: state.PokemonReducer.loading,
    }
)

const functions = {

}

export default connect(mapStateToProps, functions)(Home);