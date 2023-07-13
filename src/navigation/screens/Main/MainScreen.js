import { StyleSheet, Image, View, StatusBar, TouchableOpacity, Text, Platform } from 'react-native'
import React from 'react'
import Stacks from '../../../global/stacks'
import Modal from 'react-native-modal'
import { FlatList } from 'react-native'
import { windowWidth } from '../../../global/tools'
import YoutubePlayer from 'react-native-youtube-iframe'
import { Audio } from 'expo-av';
import { useFocusEffect, useIsFocused } from '@react-navigation/native'

const DATA = [{
    key: 1,
    description: 'Estira frente al ordenador de 10 a 20 segundos 2 veces',
    image: require('../../../assets/step_1.png')
}, {
    key: 2,
    description: 'Estira la mano derecha y izquierda de 8 a 10 segundos',
    image: require('../../../assets/step_2.png')
}, {
    key: 3,
    description: 'Mueve los hombros hacia arriba de 5 a 10 segundos 3 veces',
    image: require('../../../assets/step_3.png')
}, {
    key: 4,
    description: 'Pon la rodilla sobre la otra y mueve tu brazo hacia atrás de 8 a 10 segundos cada lado',
    image: require('../../../assets/step_4.png')
}, {
    key: 5,
    description: 'Estira la parte lumbar de tu cuerpo de 10 a 15 segundos 2 veces',
    image: require('../../../assets/step_5.png')
}, {
    key: 6,
    description: 'Levanta las manos de 10 a 15 segundos',
    image: require('../../../assets/step_6.png')
}, {
    key: 7,
    description: 'Apóyate en una silla e inclínate a 90 grados y levántate(repetir)',
    image: require('../../../assets/step_7.png')
}, {
    key: 8,
    description: 'Estira los lados de los hombre durante 10 segundos cada lado ',
    image: require('../../../assets/step_8.png')
}, {
    key: 9,
    description: 'Estira el cuello 10 a 20 segundos 2 veces',
    image: require('../../../assets/step_9.png')
}]

const DATA_2 = [{
    key: 1,
    description: 'Camina durante 1 minuto en tu oficina, pasillo o subiendo escaleras',
    image: require('../../../assets/walk_1.png')
}, {
    key: 2,
    description: 'Cuello: Inclinación de cuelo hacia los laterales y hacia delante de forma suave',
    image: require('../../../assets/walk_2.png')
}, {
    key: 3,
    description: 'Brazos y espalda: Puedes realizar varios de estos ejercicios, manteniendo la postura 10 segundos',
    image: require('../../../assets/walk_3.png')
}, {
    key: 4,
    description: 'Manos: Realiza estos dos ejercicios para elongar la musculatura de los flexores de los dedos',
    image: require('../../../assets/walk_4.png')
}, {
    key: 5,
    description: 'Durante 30 segundos realiza movimientos con los ojos para disminuir la fatiga visual: cierra los ojos varios segundos, mira a un lado y a otro, mira hacia el horizonte',
    image: require('../../../assets/walk_5.png')
}, {
    key: 6,
    description: 'Aprovecha que te has levantado para hidratarte',
    image: require('../../../assets/walk_6.png')
}]

const DATA_3 = [{
    key: 1,
    description: 'Oscuridad total, tapa tus ojos',
    image: require('../../../assets/visual_1.png')
}, {
    key: 2,
    description: 'Derecha - izquierda - Izquierda - derecha',
    image: require('../../../assets/visual_2.png')
}, {
    key: 3,
    description: 'De esquina a esquina',
    image: require('../../../assets/visual_3.png')
}, {
    key: 4,
    description: 'Rotaciones',
    image: require('../../../assets/visual_4.png')
}, {
    key: 5,
    description: 'Arriba - abajo Abajo - arriba',
    image: require('../../../assets/visual_5.png')
}, {
    key: 6,
    description: 'Descanso',
    image: require('../../../assets/visual_6.png')
}]

export default function MainScreen({ navigation })
{
    const [visible, setVisible] = React.useState(false)
    const [step, setStep] = React.useState(1)

    const [visible_2, setVisible_2] = React.useState(false)
    const [step_2, setStep_2] = React.useState(1)

    const [visible_3, setVisible_3] = React.useState(false)
    const [step_3, setStep_3] = React.useState(1)


    const [visible_4, setVisible_4] = React.useState(false)

    const [sound, setSound] = React.useState();

    const isFocused = useIsFocused()

    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync( require('../../../assets/music/intro.mp3')
        );
        setSound(sound);
    
        console.log('Playing Sound');
        await sound.playAsync();
      }

      React.useEffect(() => {
        playSound()
      },[])

      React.useEffect(() => {
        return sound
          ? () => {
              console.log('Unloading Sound');
              sound.unloadAsync();
            }
          : undefined;
      }, [sound]);
     

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
                            setVisible(true)
                            setStep(1)
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
                        setVisible_2(true)
                        setStep_2(1)
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
                        setVisible_3(true)
                        setStep_3(1)
                    }}>
                        <Image
                            source={require('../../../assets/card_3.jpg')}
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
                        sound.unloadAsync();
                        setVisible_4(true)
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
            <Modal
                isVisible={visible}
                onBackdropPress={() => setVisible(false)}
                animationIn={'slideInUp'}
                animationOut={'slideOutDown'}
                style={{ margin: 0, justifyContent: 'flex-end' }}
                animationInTiming={800}
                animationOutTiming={800}
                onBackButtonPress={() => setVisible(false)}
                onModalHide={() => setVisible(false)}
                avoidKeyboard={true}
            >
                <View style={{ width: '100%', height: '75%', backgroundColor: 'white', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                    <TouchableOpacity style={{ width: '100%', alignItems: 'flex-end', padding: 20, flexDirection: 'row' }}
                        onPress={() => setVisible(false)}
                    >
                        <Text style={{ fontFamily: 'Roboto', fontSize: 16, fontWeight: '700', flex: 1 }}>Estiramiento de manos</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>X</Text>
                    </TouchableOpacity>
                    <View style={{ paddingHorizontal: 20 }}>
                        <Text>Paso {step} de {DATA.length}</Text>
                        <FlatList
                            data={DATA}
                            keyExtractor={item => item.key.toString()}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{
                                paddingHorizontal: 10
                            }}
                            onMomentumScrollEnd={ev =>
                            {
                                const index = Math.floor(ev.nativeEvent.contentOffset.x / windowWidth)
                                setStep(index + 1)
                            }}
                            snapToInterval={windowWidth}
                            renderItem={({ item, index }) =>
                            {
                                return (
                                    <View
                                        style={{
                                            width: windowWidth,
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Image
                                            source={item.image}
                                            style={{
                                                width: '100%',
                                                height: 320,
                                                marginHorizontal: 10
                                            }}
                                            resizeMode='contain'
                                        />

                                        <Text style={{
                                            fontFamily: 'Roboto',
                                            width: '90%',
                                            marginTop: 10
                                        }}>{item.description}</Text>
                                    </View>
                                )
                            }}
                        />
                        <TouchableOpacity
                            style={{
                                borderRadius: 10,
                                backgroundColor: '#1E232C',
                                alignItems: 'center',
                                height: 56,
                                justifyContent: 'center',
                                marginTop: 20
                            }}
                            onPress={() =>
                            {
                                sound.unloadAsync();
                                setVisible(false)
                                navigation.navigate(Stacks.ActivityOne)
                            }}>
                            <Text style={{ color: 'white', fontFamily: 'Roboto', fontSize: 16 }}>Iniciar cronómetro</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal
                isVisible={visible_2}
                onBackdropPress={() => setVisible_2(false)}
                animationIn={'slideInUp'}
                animationOut={'slideOutDown'}
                style={{ margin: 0, justifyContent: 'flex-end' }}
                animationInTiming={800}
                animationOutTiming={800}
                onBackButtonPress={() => setVisible_2(false)}
                onModalHide={() => setVisible_2(false)}
                avoidKeyboard={true}
            >
                <View style={{ width: '100%', height: '75%', backgroundColor: 'white', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                    <TouchableOpacity style={{ width: '100%', alignItems: 'flex-end', padding: 20, flexDirection: 'row' }}
                        onPress={() => setVisible_2(false)}
                    >
                        <Text style={{ fontFamily: 'Roboto', fontSize: 16, fontWeight: '700', flex: 1 }}>Caminata en la oficina</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>X</Text>
                    </TouchableOpacity>
                    <View style={{ paddingHorizontal: 20 }}>
                        <Text>Paso {step_2} de {DATA_2.length}</Text>
                        <FlatList
                            data={DATA_2}
                            keyExtractor={item => item.key.toString()}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{
                                paddingHorizontal: 10
                            }}
                            onMomentumScrollEnd={ev =>
                            {
                                const index = Math.floor(ev.nativeEvent.contentOffset.x / windowWidth)
                                setStep_2(index + 1)
                            }}
                            snapToInterval={windowWidth}
                            renderItem={({ item, index }) =>
                            {
                                return (
                                    <View
                                        style={{
                                            width: windowWidth,
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Image
                                            source={item.image}
                                            style={{
                                                width: '100%',
                                                height: 320,
                                                marginHorizontal: 10
                                            }}
                                            resizeMode='contain'
                                        />

                                        <Text style={{
                                            fontFamily: 'Roboto',
                                            width: '90%',
                                            marginTop: 10
                                        }}>{item.description}</Text>
                                    </View>
                                )
                            }}
                        />
                        <TouchableOpacity
                            style={{
                                borderRadius: 10,
                                backgroundColor: '#1E232C',
                                alignItems: 'center',
                                height: 56,
                                justifyContent: 'center',
                                marginTop: 20
                            }}
                            onPress={() =>
                            {
                                setVisible(false)
                                navigation.navigate(Stacks.ActivityOne)
                                sound.unloadAsync();
                            }}>
                            <Text style={{ color: 'white', fontFamily: 'Roboto', fontSize: 16 }}>Iniciar cronómetro</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal
                isVisible={visible_3}
                onBackdropPress={() => setVisible_3(false)}
                animationIn={'slideInUp'}
                animationOut={'slideOutDown'}
                style={{ margin: 0, justifyContent: 'flex-end' }}
                animationInTiming={800}
                animationOutTiming={800}
                onBackButtonPress={() => setVisible_3(false)}
                onModalHide={() => setVisible_3(false)}
                avoidKeyboard={true}
            >
                <View style={{ width: '100%', height: '60%', backgroundColor: 'white', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                    <TouchableOpacity style={{ width: '100%', alignItems: 'flex-end', padding: 20, flexDirection: 'row' }}
                        onPress={() => setVisible_3(false)}
                    >
                        <Text style={{ fontFamily: 'Roboto', fontSize: 16, fontWeight: '700', flex: 1 }}>Pausas visuales</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>X</Text>
                    </TouchableOpacity>
                    <View style={{ paddingHorizontal: 20 }}>
                        <Text>Paso {step_3} de {DATA_3.length}</Text>
                        <FlatList
                            data={DATA_3}
                            keyExtractor={item => item.key.toString()}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{
                                paddingHorizontal: 10
                            }}
                            onMomentumScrollEnd={ev =>
                            {
                                const index = Math.floor(ev.nativeEvent.contentOffset.x / windowWidth)
                                setStep_2(index + 1)
                            }}
                            snapToInterval={windowWidth}
                            renderItem={({ item, index }) =>
                            {
                                return (
                                    <View
                                        style={{
                                            width: windowWidth,
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Image
                                            source={item.image}
                                            style={{
                                                width: '100%',
                                                height: 320,
                                                marginHorizontal: 10
                                            }}
                                            resizeMode='contain'
                                        />

                                        <Text style={{
                                            fontFamily: 'Roboto',
                                            width: '90%',
                                        }}>{item.description}</Text>
                                    </View>
                                )
                            }}
                        />
                    </View>
                </View>
            </Modal>

            <Modal
                isVisible={visible_4}
                onBackdropPress={() => setVisible_4(false)}
                animationIn={'slideInUp'}
                animationOut={'slideOutDown'}
                style={{ margin: 0, justifyContent: 'flex-end' }}
                animationInTiming={800}
                animationOutTiming={800}
                onBackButtonPress={() => setVisible_4(false)}
                onModalHide={() => setVisible_4(false)}
                avoidKeyboard={true}
            >
                <View style={{ width: '100%', height: '55%', backgroundColor: 'white', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                    <TouchableOpacity style={{ width: '100%', alignItems: 'flex-end', padding: 20, flexDirection: 'row' }}
                        onPress={() => setVisible_4(false)}
                    >
                        <Text style={{ fontFamily: 'Roboto', fontSize: 16, fontWeight: '700', flex: 1 }}>Pausas activas con baile</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>X</Text>
                    </TouchableOpacity>
                    <View style={{ paddingHorizontal: 20 }}>

                        <YoutubePlayer
                            height={200}
                            play={true}
                            videoId={'GmO1Uy4_pLM'}
                            // onChangeState={onStateChange}
                            // onReady={() => loadingRef?.current?.hide()}
                            webViewStyle={{ opacity: 0.99 }}
                            webViewProps={{
                                renderToHardwareTextureAndroid: true,
                                androidLayerType:
                                    Platform.OS === 'android' && Platform.Version <= 22 ? 'hardware' : 'none'
                            }}
                        />
                        <Text>En esta oportunidad se presenta a un experto en pausas activas con una linda dinámica de baile.</Text>
                    </View>
                </View>
            </Modal>
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