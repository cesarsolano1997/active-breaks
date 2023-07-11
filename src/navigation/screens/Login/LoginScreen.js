import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import { TouchableOpacity, ImageBackground, Image } from 'react-native'

export default function LoginScreen()
{
    return (
        <View style={styles.container}>
             <ImageBackground 
                    source={require('../../../assets/login.jpg')}
                    style={{
                        width: '100%',
                        height: "100%",
                    }}
                />
            <View style={styles.header}>
                <View style={styles.logo}>
                    <Image
                        source={require('../../../assets/casuarinas-logo.png')}
                        style={styles.image}
                    />
                </View>
            </View>
            <View style={styles.top}>
               
                <Text style={styles.title}>Pausas activas</Text>
            </View>
            <View style={styles.center}>
                <TouchableOpacity style={styles.btnLogin}>
                    <Text style={styles.textLogin}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnRegister}>
                    <Text style={styles.textRegister}>Registro</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.footer}>
                <Text style={styles.textFooter}>Continuar como invitado</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        marginHorizontal: 15
    },
    header: {
        height: '30%'
    },
    top: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: '15%'
    },
    logo: {
        width: '100%',
        alignItems: 'flex-end',
        marginTop: 20
    },
    image: {
        width: 100,
        height: 100
    },
    title: {
        fontFamily: 'Roboto',
        fontSize: 30,
        fontWeight: 'bold'
    },
    textLogin: {
        fontFamily: 'Roboto',
        fontWeight: '600',
        fontSize: 16,
        color: 'white'
    },
    btnLogin: {
        width: "100%",
        backgroundColor: '#1E232C',
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        height: 56
    },
    btnRegister: {
        width: "100%",
        borderColor: '#1E232C',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56
    }, 
    textRegister: {
        fontFamily: 'Roboto',
        fontWeight: '600',
        fontSize: 16,
        color: '#1E232C'
    },
    center: {
        marginTop: 20,
        marginBottom: 20,
        width: "100%",
        height: '40%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    footer: {
        alignItems: 'center',
        marginBottom: 20
    },
    textFooter: {
        fontFamily: 'Roboto',
        textDecorationLine: 'underline'
    }
})