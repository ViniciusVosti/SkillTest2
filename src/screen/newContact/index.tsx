import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, TextInput, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { colors, p } from '../../styles';
import { Content, Button } from '../../components';
import { } from '../../actions';

interface NewContactProps {
    id: number,
    item: unknown,
}

const NewContact: React.FC<NewContactProps> = (props) => {

    const { id, item } = props

    const [fields, setFields] = useState<Record<string, unknown>[]>([])
    const [contact, setContact] = useState<Record<string, unknown>>({})
    const [loading, setLoading] = useState<boolean>(false)
    const [loading_button, setLoadingButton] = useState<boolean>(false)

    useEffect(() => {
        global.contact.getForm().then(res => {
            let form = res[0]
            if (form.Fields) {
                let contact = {};
                
                setFields(form.Fields);

                form.Fields.map((object, index) => {
                    contact[object.Field.PropertyName] = '';
                });

                if (id > 0) contact = item;
                
                setContact(contact);
                setLoading(false);

            } else {
                global.alert.alert('Houve um erro ao carregar o formulário');
                Actions.pop();
            }
        })
        .catch(err => {
            console.log('err', err);
            setLoading(false);
        });
    })

    const saveForm = () => {
        if (!loading_button) {

            setLoadingButton(true);
            let erro = ''; 
            let contact_object = {};

            fields.map((object, index) => {
                contact_object[object.Field.UpdatePropertyName] = contact[object.Field.UpdatePropertyName];
                if (
                    object.Field.Required &&
                    contact[object.Field.UpdatePropertyName] == ''
                ) {
                    erro += object.hasOwnProperty(object.Field[object.Field.UpdatePropertyName]) + 'é obrigatório\n';
                }
            })

            if (erro != '') {
                setLoading(false);
                global.alert.alert(erro);
            } else {
                global.contact.saveOrUpdate(contact_object, id || 0).then(res => {
                    setLoadingButton(false)
                    Actions.pop();
                })
                .catch(err => {
                    global.alert.alert('Houve um erro ao salvar o formulário, tente novamente');
                });
            }

        }
    };

    const updateField = (text, item, index) => {
        contact[item.Field.UpdatePropertyName] = text;
        setContact(contact)
    };

    const _renderField = ({ item, index }) => {
        return (
            <View
                style={[p.mh8, p.mt16, p.ph4, p.bRad8, p.bcBlack, { borderWidth: 1 }]}>
                <TextInput
                    placeholder={item.Field.UpdatePropertyName}
                    value={contact[item.Field.UpdatePropertyName]}
                    onChangeText={text => {
                        updateField(text, item, index);
                    }}
                />
            </View>
        );
    };

    return (
        <Content
            // noScroll
            statusBarColor={colors.primary}
            pop>
            {loading ? (
                <View style={[p.mt32]}>
                    <ActivityIndicator animating={loading} color={colors.primary} />
                </View>
            ) : (
                <View>
                    <FlatList
                        data={fields}
                        renderItem={({ item, index }) => _renderField({ item, index })}
                    />

                    <View style={[p.mt32, p.mh8]}>
                        <Button
                            backgroundColor={colors.primary}
                            textColor={colors.white}
                            loading={loading_button}
                            text={id ? 'Atualizar' : 'Salvar'}
                            onPress={() => {
                                saveForm();
                            }}
                        />
                    </View>
                </View>
            )}
        </Content>
    )
}

export default NewContact;