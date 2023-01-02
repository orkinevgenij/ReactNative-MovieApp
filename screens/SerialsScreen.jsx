import { View, FlatList, StyleSheet, TouchableOpacity, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchSerials } from '../redux/slices/serialsSlice'
import { setIsActive } from '../redux/slices/modalSlice'
import { Loader } from '../Components/Loader'
import { ModalComponent } from '../Components/ModalComponent'
import { API_KEY, IMG_URL, URL } from '../api'
import axios from 'axios'

export const SerialsScreen = () => {
    const { serials, status } = useSelector((state) => state.serial)
    const { isActive } = useSelector((state) => state.modal)
    const [details, setDetails] = useState([])
    const [trailers, setTrailers] = useState([])
    const dispatch = useDispatch()


    const fetchDetailsSerial = async (id) => {
        try {
            const { data } = await axios.get(`${URL}/tv/${id}?api_key=${API_KEY}&append_to_response=videos`)
            setDetails(data)
            setTrailers(data.videos.results[0])
        } catch (error) {
        }
    }

    const onClickDetailsById = (id) => {
        fetchDetailsSerial(id)
        dispatch(setIsActive(!isActive))
    }




    useEffect(() => {
        dispatch(fetchSerials())
    }, [])

    if (status === 'loading') return (
        <Loader />
    )

    return (
        <View style={styles.container}>
            <FlatList
                refreshing={status === 'loading'}
                onRefresh={() => dispatch(fetchSerials())}
                data={serials} renderItem={({ item }) =>
                    <TouchableOpacity
                        onPress={() => onClickDetailsById(item.id)}
                    >
                        <View style={{ alignItems: 'center', alignSelf: 'center', marginTop: 20 }}>

                            <Text style={{ fontSize: 18, color: '#fff', width: 200, textAlign: 'center' }}>{item.name}</Text>
                            <Image style={{ width: 200, height: 280, borderRadius: 15 }} source={{
                                uri: IMG_URL + item.poster_path
                            }} />

                        </View>
                    </TouchableOpacity>
                } />

            <ModalComponent title={details.name} imageUrl={details.poster_path} overview={details.overview} trailers={trailers} id={details.id} setDetails={setDetails} />
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

