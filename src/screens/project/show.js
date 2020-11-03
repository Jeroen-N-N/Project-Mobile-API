import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import globalStyle from '../../style/styleSheet';

import * as color from "../../style/colorSheet";
import pusher from "../../api/pusher";

import { Button } from "react-native-elements";
import { ProjectShow } from '../../api/dispatch';

import Project from "../../components/project";
import Task from "../../components/project/task";

class show extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            project: this.props.route.params.project,
            statusWithTasks: []
        }
    }

    UNSAFE_componentWillMount () {
        this.getProject();
    }

    getProject() {
         if(!this.state.project.length) {
             const onSuccess = ({data}) => {
                 this.setState(data);
             };

             ProjectShow(this.state.project).then(onSuccess);
        }
    }


    render() {
        let channel = pusher.subscribe('project');
        let ref = this;

        channel.bind('refresh.show', function() {
            ref.getProject();
        });

        return (
            <ScrollView>
                <Project project={this.state.project} key={this.state.project.id} single={true}/>

                <View style={[globalStyle.card, { height: 70 }]}>
                    <View style={globalStyle.stats.row}>
                        <View style={globalStyle.stats.content}>
                            <Text style={globalStyle.stats.title}>Taken</Text>
                            <Text style={globalStyle.stats.text}>{this.state.project.stats.tasks}</Text>
                        </View>
                        <View style={globalStyle.stats.content}>
                            <Text style={globalStyle.stats.title}>Activiteiten</Text>
                            <Text style={globalStyle.stats.text}>{this.state.project.stats.activitys}</Text>
                        </View>
                        <View style={globalStyle.stats.content}>
                            <Text style={globalStyle.stats.title}>Doelen</Text>
                            <Text style={globalStyle.stats.text}>{this.state.project.stats.milestones}</Text>
                        </View>
                        <View style={globalStyle.stats.content}>
                            <Text style={globalStyle.stats.title}>Bijlages</Text>
                            <Text style={globalStyle.stats.text}>{this.state.project.stats.attachments}</Text>
                        </View>
                    </View>
                </View>

                {(this.state.statusWithTasks ).map((status) => (
                    <View key={status.title}>
                        <Text style={[globalStyle.card, globalStyle.cardTitle, {
                            backgroundColor: color.default[status.type].light,
                            color: color.default[status.type].normal
                        }]}>
                            {status.title}
                        </Text>

                        {(status.tasks ).map((task) => (
                            <View>
                                <Task task={task} key={task.title} />
                            </View>
                        ))}
                    </View>
                ))}
            </ScrollView>
        )
    }
}

export default show;