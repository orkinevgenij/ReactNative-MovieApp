import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { setIsActive } from '../redux/slices/modalSlice'
import { fetchTopFilms } from '../redux/slices/topFilmsSlice'
import { fetchUpcomingFilms } from '../redux/slices/upcomingFilmsSlice'
import { API_KEY, IMG_URL, URL } from '../api'
import { Category } from '../Components/Category'
import { ModalComponent } from '../Components/ModalComponent'

export const HomeScreen = () => {
    const { topFilms } = useSelector((state) => state.topFilm)
    const { upcomingFilms } = useSelector((state) => state.upcomingFilm)
    const { isActive } = useSelector((state) => state.modal)
    const [details, setDetails] = useState([])
    const [trailers, setTrailers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()


    const fetchDetailsFilm = async (id) => {
        setIsLoading(true)
        try {
            const { data } = await axios.get(`${URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`)
            setDetails(data)
            setTrailers(data.videos.results[0])
            setIsLoading(false)
        } catch (error) {
        }
    }


    useEffect(() => {
        dispatch(fetchTopFilms())
    }, [])
    useEffect(() => {
        dispatch(fetchUpcomingFilms())
    }, [])

    const onClickDetailsById = (id) => {
        dispatch(setIsActive(!isActive))
        fetchDetailsFilm(id)
    }


    return (
        <View style={styles.container}>
            <Category />
            <ScrollView
            >
                <Text style={{ color: '#ff3900', fontWeight: '700', fontSize: 25, marginBottom: 15 }}>Топ фильмы</Text>
                <FlatList
                    style={{ marginBottom: 20, height: 300, }}
                    horizontal={true}
                    data={topFilms} renderItem={({ item }) =>
                        <TouchableOpacity
                            style={{ marginRight: 20, justifyContent: 'space-between' }}
                            onPress={() => onClickDetailsById(item.id)}
                        >
                            <Text style={{ fontSize: 18, color: '#fff', width: 200, textAlign: 'center' }}>{item.title}</Text>
                            <Image style={{ width: 180, height: 240, borderRadius: 15, marginTop: 10 }} source={{
                                uri: IMG_URL + item.poster_path
                            }} />

                        </TouchableOpacity>
                    } />
                <Text style={{ color: '#ff3900', fontWeight: '700', fontSize: 25, marginBottom: 15 }}>Ожидаемые фильмы</Text>
                <FlatList
                    style={{ marginBottom: 20, height: 300 }}
                    horizontal={true}
                    data={upcomingFilms} renderItem={({ item }) =>
                        <TouchableOpacity
                            style={{ marginRight: 20, justifyContent: 'space-between' }}
                            onPress={() => onClickDetailsById(item.id)}
                        >
                            <View style={{ alignItems: 'center', alignSelf: 'center', }}>
                                <Text style={{ fontSize: 18, color: '#fff', width: 250, textAlign: 'center' }}>{item.title}</Text>
                                <Image style={{ width: 180, height: 240, borderRadius: 15, marginTop: 10 }} source={{
                                    uri: IMG_URL + item.poster_path
                                }} />
                            </View>
                        </TouchableOpacity>
                    } />
                <ModalComponent title={details.title} imageUrl={details.poster_path} overview={details.overview} trailers={trailers} date={details.release_date} id={details.id} setDetails={setDetails} isLoading={isLoading} />
            </ScrollView >
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 20

    }
})