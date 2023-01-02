import React from 'react'
import { View, Text, StyleSheet, Image, FlatList, ActivityIndicator, Touchable, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Modal from "react-native-modal";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'

import { IMG_URL } from '../api';
import { addFavoritesItem, deleteFavoritesItem } from '../redux/slices/favoritesSlice';
import { setIsActive } from '../redux/slices/modalSlice';

export const ModalComponent = ({ title, overview, imageUrl, date, trailers, setDetails, isLoading, id }) => {
    const { isActive } = useSelector((state) => state.modal)
    const { favoritesItem } = useSelector((state) => state.favorites)
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const findItem = favoritesItem.find(obj => obj.id === id)


    const onFavorites = () => {
        if (findItem) {
            dispatch(deleteFavoritesItem(id))
        } else {
            dispatch(addFavoritesItem({ title, imageUrl, overview, id }))
        }
    }

    const onClickNavigateVideoScreen = () => {
        navigation.navigate('VideoScreen', {
            keyVideo: trailers.key
        })
        dispatch(setIsActive(false))
    }

    const closeModal = () => {
        dispatch(setIsActive(!isActive))
        setDetails('')

    }


    return (
        <View style={styles.container}>
            <Modal
                style={{ margin: 0 }}
                animationType="none"
                animationInTiming={0}
                transparent={true}
                visible={isActive}
                onBackdropPress={() => closeModal()
                }

            >
                <View style={styles.container}>
                    <View style={styles.View}>
                        {isLoading ? <ActivityIndicator size={'large'} color='#ff3900' textAlign='center' /> :
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={{ width: 100, height: 150, }} source={{ uri: IMG_URL + imageUrl }} />
                                <View style={{ marginLeft: 18, flex: 1 }}>
                                    <View>
                                        <Text numberOfLines={2} style={styles.text}>{title}</Text>
                                    </View>
                                    <Text style={{ color: '#fff', fontSize: 12, opacity: 0.5 }}>{date}</Text>
                                    <Text numberOfLines={5} style={{ color: '#fff', textAlign: 'justify' }}>{overview}</Text>

                                </View>
                                <Text>
                                    <AntDesign onPress={() => closeModal()} name='closecircleo' style={{
                                        fontSize: 30, color: '#ffffff', textAlign: 'center'
                                    }} />
                                </Text>

                            </View>
                        }

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={() => onClickNavigateVideoScreen()}
                            >
                                <Entypo
                                    name='video' style={{ color: '#ff3900', fontSize: 44, marginRight: 20 }} />
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => onFavorites()}
                            >
                                {findItem ?
                                    <AntDesign
                                        name='heart' style={{ color: '#ff3900', fontSize: 35, }} /> :
                                    <AntDesign name='hearto' style={{ color: '#ff3900', fontSize: 35, }} />

                                }
                            </TouchableOpacity>

                        </View>


                    </View>
                </View>
            </Modal>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        alignContent: 'center',

    },
    View: {
        backgroundColor: "#1b1a1a",
        opacity: 0.9,
        height: 220,
        width: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderColor8: "black",
        padding: 7,
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 20,
        color: "#fff",
    },
});