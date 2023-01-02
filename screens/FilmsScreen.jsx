import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, FlatList, StyleSheet, ActivityIndicator, Text, Image, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { API_KEY, IMG_URL, URL } from '../api'
import { Loader } from '../Components/Loader'
import { ModalComponent } from '../Components/ModalComponent'

import { fetchFilms } from '../redux/slices/filmsSlice'
import { setIsActive } from '../redux/slices/modalSlice'

export const FilmsScreen = () => {
    const { films, status } = useSelector((state) => state.film)
    const { isActive } = useSelector((state) => state.modal)
    const [details, setDetails] = useState([])
    const [trailers, setTrailers] = useState([])
    const dispatch = useDispatch()


    const fetchDetailsFilm = async (id) => {
        try {
            const { data } = await axios.get(`${URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`)
            setDetails(data)
            setTrailers(data.videos.results[0])
        } catch (error) {
        }
    }

    const onClickDetailsById = (id) => {
        dispatch(setIsActive(!isActive))

        fetchDetailsFilm(id)
    }

    useEffect(() => {
        dispatch(fetchFilms())
    }, [])

    if (status === 'loading') return (
        <Loader />
    )

    return (
        <View style={styles.container}>
            <FlatList
                refreshing={status === 'loading'}
                onRefresh={() => dispatch(fetchFilms())}
                data={films} renderItem={({ item }) =>
                    <TouchableOpacity
                        onPress={() => onClickDetailsById(item.id)}
                    >
                        <View style={{ alignItems: 'center', alignSelf: 'center', marginTop: 20, justifyContent: 'center', width: 300 }}>

                            <Text style={{ fontSize: 18, color: '#fff', width: 200, textAlign: 'center' }}>{item.title}</Text>
                            <Image style={{ width: 200, height: 280, borderRadius: 15 }} source={{
                                uri: IMG_URL + item.poster_path
                            }} />

                        </View>
                    </TouchableOpacity>
                } />

            <ModalComponent title={details.title} imageUrl={details.poster_path} overview={details.overview} trailers={trailers} id={details.id} setDetails={setDetails} />
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