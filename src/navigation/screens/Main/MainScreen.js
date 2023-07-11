import { StyleSheet, Image, View, StatusBar, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import Stacks from '../../../global/stacks'

export default function MainScreen({ navigation })
{
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View>
                    <Text style={styles.title}>Actividades a realizar</Text>
                </View>
            </View>
            <View style={styles.center}>
                <View style={styles.left}>
                    <TouchableOpacity
                        style={styles.activities}
                        onPress={() =>
                        {
                            navigation.navigate(Stacks.ActivityOne)
                        }}
                    >
                        <Image
                            source={require('../../../assets/onboarding_1.jpg')}
                            style={{
                                width: 150,
                                height: 150,
                                borderRadius: 5
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.activities} onPress={() =>
                        {
                            navigation.navigate(Stacks.ActivitySecond)
                        }}>
                        <Image
                            source={require('../../../assets/onboarding_2.jpg')}
                            style={{
                                width: 150,
                                height: 150,
                                borderRadius: 5
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.activities} onPress={() =>
                        {
                            navigation.navigate(Stacks.ActivityThird)
                        }}>
                        <Image
                            source={require('../../../assets/onboarding_3.jpg')}
                            style={{
                                width: 150,
                                height: 150,
                                borderRadius: 5
                            }}
                        />
                    </TouchableOpacity>

                </View>
                <View style={styles.right}>
                    <TouchableOpacity style={styles.activities} onPress={() =>
                        {
                            navigation.navigate(Stacks.ActivityFourth)
                        }}>
                        <Image
                            source={require('../../../assets/onboarding_4.jpg')}
                            style={{
                                width: 150,
                                height: 150 * 3.28,
                                borderRadius: 5
                            }}
                        />
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    center: {
        flexDirection: 'row',
    },
    left: {
        flex: 0.5
    },
    right: {
        flex: 0.5
    },
    activities: {
        margin: 10,
        borderRadius: 5
    },
    top: {
        height: 100
    },
    title: {
        fontSize: 30,
        fontFamily: 'Roboto',
        fontWeight: '800'
    }
})