import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, FlatList, TextInput } from 'react-native';

export default class OtherUserProfile extends Component {
    state = {
        people: [
            { name: 'Iron-Man', date: '10 Apr 2020', type: 'Offer', category: 'IT Information', tag: ' ', title: 'The dog is a member of the genus Canis, which forms part of the wolf-like canids, and is the most widely abundant terrestrial carnivore.', image: "https://post.healthline.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg", id: '1' },
            { name: 'Spider-Man', date: '10 Apr 2020', category: 'Trasportation', type: 'Request', tag: 'Mark as taken', title: 'The dog is a member of the genus Canis, which forms part of the wolf-like canids, and is the most widely abundant terrestrial carnivore.', image: "https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/dogs_1280p_0.jpg?itok=cnRk0HYq", id: '2' },
            { name: 'Iron-Man', date: '10 Apr 2020', type: 'Offer', category: 'IT Information', tag: 'Mark as taken', title: 'The dog is a member of the genus Canis, which forms part of the wolf-like canids, and is the most widely abundant terrestrial carnivore.', image: "https://post.healthline.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg", id: '3' },
            { name: 'Iron-Man', date: '10 Apr 2020', type: 'Offer', category: 'IT Information', tag: ' ', title: 'The dog is a member of the genus Canis, which forms part of the wolf-like canids, and is the most widely abundant terrestrial carnivore.', image: "https://post.healthline.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg", id: '4' },
        ]
    }
    render() {
        return (
            <View>
                <View style={styles.headerBar}>
                    <Text style={styles.textHeader}>User Profile</Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.settingRegion}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.textName}>xxjoanne</Text>
                            <View style={styles.regionText}>
                                <Text>Phnom Penh</Text>
                                <Text>,</Text>
                                <Text style={{ paddingLeft: 5 }}>Cambodia</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.container1}>
                        <View style={styles.post}>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: 30, fontFamily: 'Montserrat', color: '#B14297', fontWeight: "bold", paddingLeft: 15 }}>70</Text>
                                <Text style={styles.typePost}>Total Posts</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: 30, fontFamily: 'Montserrat', color: '#F7C217', fontWeight: "bold" }}>54</Text>
                                <Text style={styles.typePost}>Offers</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 30, fontFamily: 'Montserrat', color: '#8DB9BF', fontWeight: "bold", paddingLeft: 6 }}>16</Text>
                                <Text style={styles.typePost}>Request</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <FlatList
                            keyExtractor={(item) => item.id}
                            data={this.state.people}
                            renderItem={({ item }) => (
                                <View style={styles.containerIten}>
                                    <View style={styles.regionText}>
                                        <View>
                                            <Text style={styles.userName}>{item.name}</Text>
                                            <Text style={styles.datePost}>{item.date}</Text>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text style={styles.colorType}>.</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.catageryType}>{item.category}</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={styles.typePost}>{item.title}</Text>
                                    </View>
                                    <View>
                                        <Image
                                            style={{ height: 300, width: 370 }}
                                            source={{ uri: item.image }}
                                        />
                                    </View>
                                    <View style={styles.sendMessage}>
                            <TextInput style={styles.inputSearch} placeholder="Send a message" />
                            <TouchableOpacity>
                                <Image style={{ height: 36, width: 36, marginTop: 20, marginRight: 2 }}
                                    source={require('./images/send.png')}
                                />
                            </TouchableOpacity>
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
        color: '#ffffff'
    },
    headerBar: {
        backgroundColor: '#B14297',
        height: 65,
        alignItems: "center",
        justifyContent: "center"
    },
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 20
    },
    container1: {
        paddingLeft: 20,
        paddingRight: 20
    },
    containerIten: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 30
    },
    textName: {
        fontFamily: 'Montserrat',
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20
    },
    regionText: {
        fontFamily: 'Montserrat',
        flexDirection: "row",
        fontSize: 13
    },
    settingRegion: {
        flexDirection: "row",
        alignItems: "center"
    },
    post: {
        flexDirection: "row",
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20
    },
    typePost: {
        fontFamily: 'Montserrat',
        fontSize: 13
    },
    userName: {
        fontFamily: 'Montserrat',
        fontSize: 16,
        fontWeight: "bold"
    },
    datePost: {
        fontFamily: 'Montserrat',
        fontSize: 11,
        marginTop: 5
    },
    colorType: {
        marginTop: -89,
        marginLeft: 15,
        color: '#97CACA',
        fontSize: 100
    },
    catageryType: {
        fontFamily: 'Montserrat',
        color: '#000000',
        fontWeight: "bold",
        fontSize: 11,
        marginTop: 3
    },
    inputSearch: {
        height: 36,
        borderRadius: 17,
        borderColor: '#707070',
        fontFamily: 'Montserrat',
        paddingHorizontal: 20,
        justifyContent: "center",
        borderWidth: 1,
        flex: 1,
        marginBottom: 20,
        marginRight: 5,
        marginTop: 20
    },
    sendMessage: {
        flexDirection: "row"
    }
});