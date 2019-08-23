import React from 'react';
import { Button, Text, View, ScrollView, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { COLOR_GREEN, COLOR_BLUE, COLOR_DARK_GREY, COLOR_YELLOW } from '../constants/color';
import { Divider } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    successFullText: {
        fontSize: 20,
        fontWeight: "500"
    },
    successContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    infoContainer: {
        flexDirection: 'row',
        marginVertical: 40
    },
    subHeading: {
        fontSize: 14,
        color: COLOR_BLUE,
        fontWeight: "400"
    },
    infoText: {
        fontSize: 20
    },
    footerText: {
        marginVertical: 10,
        color: COLOR_DARK_GREY
    },
    steakContainer: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

})
export default class TicketBookedView extends React.Component {

	renderSteakAdded = () => {
        return(
        <View style={styles.steakContainer}>
            <Text>Streak Added</Text>
            <FontAwesome name='star' size={20} color={COLOR_YELLOW} />
        </View>
        );
    }
	render() {
		return (
			<ScrollView style={styles.container}>
            <View style={styles.successContainer}>
                <Text style={styles.successFullText}>Ticket Booked Successfully</Text>
                <MaterialIcons name='stars' size={24} color={COLOR_GREEN} />
            </View>
            <View style={styles.infoContainer}>
                <QRCode
                    size={150}
                    value="http://awesome.link.qr"
                />
                <View style={{ marginStart: 10, flex: 1}}>
                    <Text style={styles.subHeading}>From</Text>
                    <Text style={styles.infoText}>Dhulu kua circle</Text>
                    <Divider style={{margin: 10}}/>
                    <Text style={styles.subHeading}>To</Text>
                    <Text style={styles.infoText}>Infocity daiict</Text>
                </View>
            </View>
            {this.renderSteakAdded()}
            <Divider/>
            <Text style={styles.footerText}>Transction ID: 12580055525</Text>
            <Text style={styles.footerText}>10:31 AM, 21Aug 2019 </Text>
            </ScrollView>
		);
	}
}