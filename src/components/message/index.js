import React from 'react';
import Style from "../../style/styleSheet";
import {StyleSheet, Text, View } from 'react-native';
import { Icon } from "react-native-elements";

class Message extends React.Component {
    render() {
        // Build default variables in case there are no props given;
        let icon = this.props.icon ?? 'exclamation-triangle';
        let type = this.props.type ?? 'danger';
        let content = this.props.content ?? '--';

        // Build the layout css;
        let style = Style.alert.layout;

        // If we have the width prop..
        if(this.props.width > 0) {

            // Fix the style with the new width;
            style = StyleSheet.flatten([{ width: this.props.width }, style]);
        }

        return (
            <View style={[style, Style.alert[type]]}>
                <View style={styles.row}>
                    <View style={styles.colIcon}>
                        <Icon
                            name={icon}
                            type="font-awesome"
                            color={Style.alert[type].color}
                        />
                    </View>

                    <View style={styles.ColContent}>
                        <Text style={[Style.alert.text, Style.alert[type]]}>{content}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },

    colIcon: {
        paddingLeft: 15,
        marginTop: 13,
        justifyContent: 'flex-start'
    },

    ColContent: {
        justifyContent: 'flex-end'
    }
});

export default Message;