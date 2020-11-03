import React from 'react';

import Style from '../../style/styleSheet';
import globalStyle from "../../style/styleSheet";

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Avatar, Icon } from 'react-native-elements'

import { useNavigation } from '@react-navigation/native';

const index = props => {
    const navigation = useNavigation();

    const status = props.project.relations.status.type === "danger" ?
        'warning' : props.project.relations.status.type;

    return (
        <View style={globalStyle.card}>
            <View style={styles.row}>
                <View style={[styles.colAvatar, { justifyContent: props.single ? 'flex-start' : 'center' }]}>
                    <Avatar
                        size="medium"
                        title={props.project.shortcut}
                        overlayContainerStyle={[styles.avatar, Style.avatar[status]]}
                        titleStyle={[styles.avatarTitle, Style.avatar[status]]}
                        rounded
                    />
                </View>

                {!props.single ? (
                    <View style={styles.colContent}>
                        <Text style={styles.contentTitle} ellipsizeMode="head" numberOfLines={1}>
                            {props.project.title}
                        </Text>
                        <Text style={styles.contentText} ellipsizeMode="head" numberOfLines={2}>
                            {props.project.description}
                        </Text>
                    </View>
                ) : (
                    <View style={styles.colContent}>
                        <Text style={styles.contentTitle}>
                            {props.project.title}
                        </Text>
                        <Text style={styles.contentText}>
                            {props.project.description}
                        </Text>
                    </View>
                )}

                {!props.single ? (
                    <View style={styles.buttonCol}>
                        <TouchableOpacity onPress={() => navigation.navigate('project.show', { project: props.project, getClients: 1 })}>
                            <Icon
                                name='ellipsis-v'
                                type='font-awesome'
                                color='#000'
                                style={{ opacity: .3}}
                            />
                        </TouchableOpacity>
                    </View>
                ) : null }
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    colAvatar: {
        flex: 1,
        flexDirection: 'column'
    },
    avatar: {
        backgroundColor: '#dff1cc',
        alignSelf: 'stretch',
        borderRadius: 10
    },
    avatarTitle: {
        marginTop: 0
    },

    colContent: {
        flex: 4,
        paddingRight: 0,
        paddingLeft: 15
    },
    contentBadge: {
        marginRight: 10
    },
    contentTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    contentText: {
        opacity: .5
    },

    buttonCol: {
        flex: .5,
        paddingLeft: 10
    },
    button: {
        opacity: .4
    }
});

export default index;