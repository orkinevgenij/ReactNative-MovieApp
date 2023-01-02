import React, { useEffect } from 'react'
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { IMG_URL } from '../api'

import { fetchFilms } from '../redux/slices/filmsSlice'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { deleteFavoritesItem } from '../redux/slices/favoritesSlice'




export const FavoriteScreen = () => {
    const { favoritesItem } = useSelector((state) => state.favorites)
    const dispatch = useDispatch()

    const onClickRemove = (id) => {
        dispatch(deleteFavoritesItem(id))
    }

    useEffect(() => {
        dispatch(fetchFilms())
    }, [])
    return (
        <View style={styles.container}>
            <FlatList
                data={favoritesItem} renderItem={({ item }) =>
                    <View
                        style={{ marginBottom: 20, marginRight: 20, alignItems: 'center', }}
                    >
                        <Text style={{ fontSize: 18, color: '#fff', width: 200, textAlign: 'center' }}>{item.title}</Text>
                        <Image style={{ width: 180, height: 240, borderRadius: 15, marginTop: 10, marginBottom: 10 }} source={{
                            uri: IMG_URL + item.imageUrl
                        }} />
                        <TouchableOpacity
                            onPress={() => onClickRemove(item.id)}
                        >
                            <Ionicons name='remove-circle-outline' style={{ color: '#ff3900', fontSize: 44, textAlign: 'center' }} />
                        </TouchableOpacity>

                    </View>
                } />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#000',
    },
});