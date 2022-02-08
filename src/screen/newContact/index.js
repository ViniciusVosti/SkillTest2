import React, { Component } from 'react';
import { ActivityIndicator, FlatList, TextInput, View, } from 'react-native';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { colors, p } from '../../styles';
import { Content, Button } from '../../components';

import {

} from '../../actions';

class NewContact extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            page: 0,
            fields: [],
            contact: {},
            loading: true,
            loading_button: false,
        }
    }

    componentDidMount = () => {
        global.contact.getForm().then((res) => {
            if(res[0].Fields){
                this.setState({ fields: res[0].Fields }, () => {
                    let contact = {}
                    res[0].Fields.map((object, index) => {
                        contact[object.Field.PropertyName] = ''
                    })
                    if(this.props.id*1 > 0){
                        contact = this.props.item
                    }
                    this.setState({ contact, loading: false })
                })
            }else{
                global.alert.alert("Houve um erro ao carregar o formulário")
                Actions.pop()
            }
        })
        .catch((err) => {
            this.setState({ loading: false }, () => {
                console.log("err", err)
            })
        })
    }

    saveForm = () => {
        if(!this.state.loading_button) {
            this.setState({ loading_button: true }, () => {
                let erro = ''
                let { contact } = this.state
                let contact_object = {}
                this.state.fields.map((object, index) => {
                    contact_object[object.Field.UpdatePropertyName] = contact[object.Field.UpdatePropertyName]
                    if(object.Field.Required && contact[object.Field.UpdatePropertyName] == ''){
                        erro += object.hasOwnProperty(object.Field[object.Field.UpdatePropertyName]) + 'é obrigatório\n'
                    }
                })

                if(erro != '') {
                    this.setState({ loading_button: false }, () => {
                        global.alert.alert(erro)
                    })
                } else {
                    global.contact.saveOrUpdate(contact_object, this.props.id*1 || 0).then((res) => {
                        this.setState({ loading_button: false }, () => {
                            Actions.pop()
                        })
                    })
                    .catch((err) => {
                        global.alert.alert("Houve um erro ao salvar o formulário, tente novamente")
                    })
                }
            })
        }
    }

    updateField = (text, item, index) => {
        let { contact } = this.state
        contact[item.Field.UpdatePropertyName] = text
        this.setState({ contact })
    }

    _renderField = ({item, index}) => {
        let { contact } = this.state
        return(
            <View style={[p.mh8, p.mt16, p.ph4, p.bRad8, p.bcBlack, { borderWidth: 1 }]}>
                <TextInput
                    placeholder={item.Field.UpdatePropertyName}
                    value={contact[item.Field.UpdatePropertyName]}
                    onChangeText={(text) => {
                        this.updateField(text, item, index)
                    }}
                />
            </View>
        )
    }

    render() {

        let { loading, loading_button } = this.state

        return( 
            <Content 
                // noScroll
                statusBarColor={colors.primary}
                pop
            >

                {loading ? (
                    <View style={[p.mt32]}>
                        <ActivityIndicator animating={loading} color={colors.primary} />
                    </View>
                )
                :
                (
                    <View>
                        <FlatList
                            data={this.state.fields}
                            renderItem={({item, index}) => this._renderField({item, index})}
                        />

                        <View style={[p.mt32, p.mh8]}>
                            <Button
                                backgroundColor={colors.primary}
                                textColor={colors.white}
                                loading={loading_button}
                                text={this.props.id*1 ? 'Atualizar' : 'Salvar'}
                                onPress={() => {
                                    this.saveForm()
                                }}
                            />
                        </View>
                    </View>
                )}

            </Content>
        );
    }
}

const mapStateToProps = state => (
    {
        // loading: state.exemploReducer.loading,
    }
)

const functions = {

}

export default connect(mapStateToProps, functions)(NewContact);