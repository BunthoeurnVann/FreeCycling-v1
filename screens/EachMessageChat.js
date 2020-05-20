import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
export default class EachMessageChat extends Component {
    state = {
        people: [
            { name: 'emelie johnson', date: '10 Apr 2020', title: 'I love you', nextTitle: '', nextTitle1: '', date1: '12 Jun 2020', title1: 'Feeling hgvgvgvgg', title2: 'Spleepy', id: '1' },
            { name: 'emelie johnson', date: '10 Apr 2020', title: 'I love you', nextTitle: '', nextTitle1: '', date1: '12 Jun 2020', title1: 'Feeling hgvgvgvgg', title2: 'Spleepy', id: '2' },
            { name: 'emelie johnson', date: '10 Apr 2020', title: 'I love you', nextTitle: 'Hey you bad guy My friend bit bot ', nextTitle1: 'Boom my godda mana', date1: '12 Jun 2020', title1: 'Feeling hgvgvgvgg', title2: 'Spleepy', id: '1' },
        ]
    }
    render() {
        return (
            <View>
                <View style={styles.headerBar}>
                    <TouchableOpacity>
                        <Image style={{ height: 30, width: 30, justifyContent: "center", marginLeft: 15 }}
                            source={require('./images/backarrow.png')}
                        />
                    </TouchableOpacity>
                    <Text style={styles.textHeader}>MaDaKac</Text>
                </View>
                <ScrollView>
                    <View>
                        <View style={styles.container}>
                            <View style={styles.settingRegion}>
                                <Text style={styles.textName}>xxjoanne</Text>
                                <View style={styles.regionText}>
                                    <Text>Phnom Penh</Text>
                                    <Text>,</Text>
                                    <Text style={{ paddingLeft: 5 }}>Cambodia</Text>
                                </View>
                            </View>
                        </View>
                        <FlatList
                            keyExtractor={(item) => item.id}
                            data={this.state.people}
                            renderItem={({ item }) => (
                                <View style={{ marginLeft: 20, marginRight: 20 }}>
                                    <View>
                                        <View>
                                            <View>
                                                <Text style={styles.itemName}>{item.name}</Text>
                                                <Text style={styles.itemDate}>{item.date}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.itemTitle}>{item.title}</Text>
                                                <Text style={styles.itemTitle}>{item.titleNext}</Text>
                                                <Text style={styles.itemTitle}>{item.titleNext1}</Text>
                                            </View>
                                        </View>
                                        <View>
                                            <View>
                                            <Text style={styles.itemDate}>{item.date1}</Text>
                                            </View>
                                            <View>
                                            <Text style={styles.itemTitle1}>{item.title1}</Text>
                                                <Text style={styles.itemTitle1}>{item.title2}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    textHeader: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
        fontWeight: "bold",
        fontFamily: 'Montserrat',
        color: '#ffffff',
        flexGrow: 1,
        marginRight: 50
    },
    headerBar: {
        backgroundColor: '#F7C217',
        height: 65,
        alignItems: "center",
        flexDirection: "row"
    },
    regionText: {
        fontFamily: 'Montserrat',
        flexDirection: "row",
        fontSize: 13
    },
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 20
    },
    textName: {
        fontFamily: 'Montserrat',
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 5
    },
    itemName: {
        fontFamily: 'Montserrat',
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5
    },
    itemDate: {
        fontFamily: 'Montserrat',
        fontSize: 11,
        marginBottom: 5
    },
    regionText: {
        fontFamily: 'Montserrat',
        flexDirection: "row",
        fontSize: 13
    },
    itemTitle:{
        fontFamily: 'Montserrat',
        fontSize: 14
    },
    itemTitle1:{
        fontFamily: 'Montserrat',
        fontSize: 14,
        backgroundColor: '#B14297'
    }
});  