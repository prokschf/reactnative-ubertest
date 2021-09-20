import React from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import tw from "tailwind-react-native-classnames"
import { GOOGLE_MAPS_APIKEY } from "@env";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/NavSlicee';
import { useNavigation } from '@react-navigation/core';

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>Good morning, John</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete placeholder="Where to?"
                        placeholder="Where to?"
                        fetchDetails={true}
                        enablePoweredByContainer={false}
                        query={{
                            key: GOOGLE_MAPS_APIKEY
                        }}
                        minLength={2}
                        styles={toInputBoxStyles}
                        nearbyPlacesAPI="GooglePlacesSearch"
                        debounce={400}
                        onPress={(data, details = null) => {
                            dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description
                            }))

                            navigation.navigate("RideOptionsCard");
                        }}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18,
    },
    textInput: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
});
