import React, {Component} from 'react';
import {Modal, View, Text, StatusBar, FlatList, TouchableWithoutFeedback} from 'react-native';
import {Icon} from "../icon";
import {Body, Card, Form, Input, Item, ListItem} from "native-base";

export class SelectModal extends Component {
    state = {
        loading: true,
        busca: "",
        items: []
    }

    componentWillMount() {
        this.updateComponent();
    }

    removeAcento( newStringComAcento ) {
        var string = newStringComAcento;
        var mapaAcentosHex 	= {
            a : /[\xE0-\xE6]/g,
            A : /[\xC0-\xC6]/g,
            e : /[\xE8-\xEB]/g,
            E : /[\xC8-\xCB]/g,
            i : /[\xEC-\xEF]/g,
            I : /[\xCC-\xCF]/g,
            o : /[\xF2-\xF6]/g,
            O : /[\xD2-\xD6]/g,
            u : /[\xF9-\xFC]/g,
            U : /[\xD9-\xDC]/g,
            c : /\xE7/g,
            C : /\xC7/g,
            n : /\xF1/g,
            N : /\xD1/g
        };

        for ( var letra in mapaAcentosHex ) {
            var expressaoRegular = mapaAcentosHex[letra];
            string = string.replace( expressaoRegular, letra );
        }

        return string;
    }

    async updateComponent(busca = "") {
        try {
            let items = [];

            busca = this.removeAcento(busca).toLowerCase();

            for (let o of this.props.items) {
                if (this.removeAcento(o.nome).toLowerCase().indexOf(busca) >= 0) {
                    items.push(o);
                }
            }

            this.setState({loading: false, items});
        } catch (e) {
            console.log(e);
            this.setState({loading: false, items: []})
        }
    }

    timeout = null;

    buscar(busca) {
        this.setState({busca}, () => {
            if (this.timeout != null) {
                clearTimeout(this.timeout);
            }

            this.timeout = setTimeout(() => {
                this._onRefresh();
            }, 800);
        });
    }

    _onRefresh() {
        this.setState({loading: true, items: []}, () => {
            this.updateComponent(this.state.busca);
        });
    }

    _onPressItem(item = null) {
        if (this.props.onClose) this.props.onClose(item);
    };

    _renderItem = ({item}) => (
        <Card style={{
            margin: 0,
            marginLeft: 12,
            marginRight: 12,
            borderRadius: 12
        }} >
            <ListItem
                onPress={() => this._onPressItem(item)}
                style={{
                    borderBottomWidth: 0
                }}
            >
                <Body>
                    <Text>{item.nome}</Text>
                </Body>
            </ListItem>
        </Card>
    );

    render() {
        const { items, loading, busca } = this.state;

        return <View style={{flex:1, backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
            <View style={{flex:1, margin: 40, backgroundColor: '#fefefe', opacity: 1}}>
                <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent={false} />

                <Form>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 12}}>
                        <Item style={{ flex: 1 }}>
                            <Icon name={'ios-search'}  type={'Ionicons'} style={{fontSize: 22}} />

                            <Input
                                placeholderColor='#c0c0c0'
                                placeholder="Filtrar"
                                value={busca}
                                onChangeText={text => this.buscar(text)}
                            />
                        </Item>

                        <TouchableWithoutFeedback onPress={() => {this._onPressItem()}}>
                            <View style={{paddingHorizontal: 16}}>
                                <Icon name={'close'}  type={'Ionicons'} style={{fontSize: 32}} />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </Form>
                <FlatList
                    data={items}
                    refreshing={loading}
                    keyExtractor={(item, index) => index}
                    onRefresh={() => this._onRefresh()}
                    renderItem={(data) => this._renderItem(data)}
                />
            </View>
        </View>;
    }
}

export class SelectFilter extends React.Component {
    state = {
        visible: false,
        item: { id: "", nome: "" }
    }

    render() {
        let nome = this.props.placeholder ? this.props.placeholder : "Clique para selecionar...";

        if (this.state.item && this.state.item.id != "") {
            nome = this.state.item.nome;
        }

        return <View style={{flex: 1}}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.visible}
            >
                <SelectModal
                    items={this.props.items}
                    itemId={this.props.itemId}
                    onClose={(item) => {
                        if (item) {
                            this.setState({ visible: false, item }, () => {
                                if (this.props.onChange) this.props.onChange(item);
                            });
                        } else {
                            this.setState({ visible: false });
                        }
                    }}
                />
            </Modal>
            <TouchableWithoutFeedback
                onPress={() => this.setState({ visible: true })}
            >
                <View style={[
                    {
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingVertical: 8,
                        paddingHorizontal: 6
                    },
                    this.props.style ? this.props.style : {}
                ]}>
                    <Text
                        style={[
                            { fontSize: 16 },
                            this.props.textStyle ? this.props.textStyle : {}
                        ]}
                    >{nome}</Text>
                    <Icon
                        type={this.props.iconType ? this.props.iconType : "Ionicons"}
                        name={this.props.iconName ? this.props.iconName : "arrow-dropdown"}
                        style={[
                            { fontSize: 25 },
                            this.props.iconStyle ? this.props.iconStyle : {}
                        ]}
                    />
                </View>
            </TouchableWithoutFeedback>
        </View>;
    }
};
