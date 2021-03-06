import React, {Component} from 'react';
import {StyleSheet, 
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    ScrollView
} from 'react-native';

import Header from './Header';

const cityList = [
    {
        name: 'Belei'
    },
    {
        name: 'Humlusy'
    },
    {
        name: 'Colognl'
    },
    {
        name: 'Belei'
    },
    {
        name: 'Humlusy'
    },
    {
        name: 'Colognl'
    },
    {
        name: 'Belei'
    },
    {
        name: 'Humlusy'
    }
]

export default class Cities extends Component {
    render() {
        const shadowStyle = {
            shadowColor: '#ed7171',
            shadowOpacity: 0.8,
            shadowRadius: 10,
            shadowOffset: {width: 0, height: 0},
            elevation: 7
        }
        return (
        <View style={styles.container}>
            <View>
                <Header {...this.props}/>
            </View>
            <ScrollView contentContainerStyle={styles.contentContainer} style={[styles.scrollviewStyle,shadowStyle]}>
                <FlatList
                    data={cityList}
                    renderItem={
                        ({item}) => <TouchableOpacity style={[styles.button,shadowStyle]}>
                                        <Text style={styles.buttonText}>{item.name}</Text>
                                    </TouchableOpacity>
                    }
                >
                </FlatList>
            </ScrollView>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'rgb(255, 255, 255)',
    },
        scrollviewStyle: {
        marginTop: 20,
        borderRadius: 10,
    },
        contentContainer: {
        paddingHorizontal: 25,
        paddingVertical: 25,
    },

    button: {
        width: 300,
        borderRadius: 10,
        marginVertical: 10,
        paddingVertical: 16,
    },
    buttonText: {
        fontSize: 20,
        color: '#838383',
        textAlign: 'center',
        fontWeight: '500'
    }
});