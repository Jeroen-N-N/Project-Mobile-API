import {StyleSheet} from "react-native";
import * as color from "./colorSheet";


const Style = {
    body: {
        backgroundColor: color.default.theme.background,
    },
    bodyLogin: {
        backgroundColor: color.default.theme.dark
    },
    screen: {
        top: {
            backgroundColor: color.default.theme.dark,
            borderColor: color.default.theme.dark,
            borderBottomWidth: 0
        },

        shape: {
            marginBottom: -50,
            backgroundColor: color.default.theme.dark,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            height: 60
        }
    },
    padding: {
        padding: 10
    },

    avatar: {
        primary: {
            backgroundColor: color.default.primary.light,
            color: color.default.primary.normal
        },

        success: {
            backgroundColor: color.default.success.light,
            color: color.default.success.normal
        },

        warning: {
            backgroundColor: color.default.warning.light,
            color: color.default.warning.normal
        },

        danger: {
            backgroundColor: color.default.danger.light,
            color: color.default.danger.normal
        }
    },

    badge: {
        base: {
            width: 150,
            marginRight: 20,
        },

        primary: {
            backgroundColor: color.default.primary.light,
            color: color.default.primary.normal
        },

        success: {
            backgroundColor: color.default.success.light,
            color: color.default.success.normal
        },

        warning: {
            backgroundColor: color.default.warning.light,
            color: color.default.warning.normal
        },

        danger: {
            backgroundColor: color.default.danger.light,
            color: color.default.danger.normal
        }
    },

    alert: {
        layout: {
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
            borderRadius: 10
        },
        text: {
            padding: 15
        },

        success: {
            backgroundColor: color.default.success.light,
            color: color.default.success.normal,
        },
        warning: {
            backgroundColor: color.default.warning.light,
            color: color.default.warning.normal,
        },

        danger: {
            backgroundColor: color.default.danger.light,
            color: color.default.danger.normal,
        }
    },
    card: {
        backgroundColor: '#fff',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        padding: 10,
        borderRadius: 10,
        shadowColor: "rgba(0, 0, 0, .1)",
        shadowOffset: {
            width: 1.5,
            height: 1.5
        },
        shadowRadius: 6,
        shadowOpacity: .5
    },
    cardTitle: {
        backgroundColor: color.default.theme.dark,
        padding: 20,
        color: '#fff'
    },

    stats: {
        row: {
            flex: 1,
            flexDirection: 'row',
            padding: 5,
        },

        content: {
            marginRight: 25,
        },

        title: {
            fontSize: 16,
            fontWeight: 'bold'
        },

        text: {
            opacity: .5
        },
    }
}

export default Style;