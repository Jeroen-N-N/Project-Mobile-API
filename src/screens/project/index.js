import React from 'react';
import Style from '../../style/styleSheet';

import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements'
import Message from "../../components/message";

import Project from "../../components/project";
import {  ProjectIndex } from '../../api/dispatch';
import pusher from "../../api/pusher";


class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }

    UNSAFE_componentWillMount () {
        let channel = pusher.subscribe('project');
        let ref = this;

        channel.bind('refresh.index', function() {
            ref.getProjects();
        });

        this.getProjects();
    }

    getProjects() {
        if(this.state.projects.length === 0) {
            const onSuccess = ({data}) => {
                const projects = data.data;
                this.setState({projects});
            };

            ProjectIndex().then(onSuccess)
        }
    }

    render() {
        return (
            <ScrollView style={styles.scrollView}>
                <View style={Style.screen.shape}/>
                <View style={Style.card}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 10
                    }}>
                        <View>
                            <Text style={{ fontWeight: 'bold' }}>Welkom,</Text>
                            <Text>Gebruiker</Text>
                        </View>
                        <View>
                            <Icon
                                name="sign-out"
                                type="font-awesome"
                                onPress={() => this.props.route.params.logout()}/>

                        </View>
                    </View>
                </View>

                {this.state.projects === null ?
                    <View>
                        <Message type={"warning"} content={"Laden.."} />
                    </View>

                    :

                    <View>
                        <Message type={"success"} content={"Er zijn " + this.state.projects.length + " projecten geladen."} />

                        {(this.state.projects).map((project) => (
                            <Project project={project} key={project.id} single={false} />
                        ))}
                    </View>
                }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row'
    },

    col_1: {
        width: 70,
        height: 50
    },

    col_2: {
        width: '70%',
    },
});

export default index;