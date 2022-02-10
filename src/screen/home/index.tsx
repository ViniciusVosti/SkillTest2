import React, { useEffect, useState } from 'react';
import {
    FlatList,
    Text,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { colors, p } from '../../styles';
import { Content, Button } from '../../components';
import { } from '../../actions';

const Home: React.FC = (props) => {

    const [contacts, setContacts] = useState<Record<string, unknown>[]>([])

    useEffect(() => {
        getContacts()
    }, [])

    const getContacts = async () => {
        global.contact.getAll().then((res) => {
            setContacts(res)
        })
        .catch((err) => {
            console.log("err", err)
        })
    }

    const _renderContact = ({ item, index }) => {
        let text_style = [p.tcWhite];
        return (
            <TouchableWithoutFeedback onPress={() => {
                Actions.newContact({ id: item.Id, item })
            }}>
                <View style={[p.mh8, p.p16, p.bgcPrimary, p.bRad8, p.mb16]}>
                    <View>
                        <Text style={text_style}>{item.Name}</Text>
                    </View>

                    <View style={[p.mt8]}>
                        <Text style={[...text_style, p.fwBold]}>Redes sociais</Text>
                        <View>
                            <Text style={text_style}> - {item.Facebook}</Text>
                            <Text style={text_style}> - {item.Website}</Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    const renderHeader = () => {
        return (
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

    return (
        <Content
            statusBarColor={colors.primary}
            menu
        >

            <FlatList
                data={contacts}
                renderItem={({ item, index }) => _renderContact({ item, index })}
                ListHeaderComponent={() => renderHeader()}
            />

        </Content>
    );

}

export default Home;