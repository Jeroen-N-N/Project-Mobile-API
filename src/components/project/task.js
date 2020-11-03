import React from 'react';
import Style from '../../style/styleSheet';
import { Text, View } from 'react-native';

const task = props => {

    let priority = '';

    switch (props.task.relations.priority.color) {
        case 'green':
            priority = 'success'
            break;
        case 'yellow':
            priority = 'warning'
            break;
        case 'red':
            priority = 'danger'
            break;
        default:
            priority = props.task.relations.priority.color;
    }

    let completed = props.task.completed ? 'success' : 'danger';

    return (
        <View style={Style.card}>
            <View>
                <Text style={Style.padding}>
                    { props.task.description }
                </Text>
            </View>

            <View style={{
                flex: 2,
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10
            }}>
                <View style={[Style.badge.base, Style.badge[priority]]}>
                    <Text style={[Style.padding, Style.badge[priority]]}>{props.task.relations.priority.title}</Text>
                </View>

                <View style={[Style.badge.base, Style.badge[completed]]}>
                    <Text style={[Style.padding, Style.badge[completed]]}>{ props.task.completed ? 'Voltooid' : 'Niet voltooid' }</Text>
                </View>
            </View>

        </View>
    )
}

export default task;