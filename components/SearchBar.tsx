import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

const SearchBar = ({onPress, placeholder}:any) => {
    return (
        <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
            <Image className='size-5' source={icons.search} resizeMode='contain' tintColor={"#ab8bff"} />
            <TextInput
                onPress={onPress}
                placeholder={placeholder}
                value=''
                onChangeText={() => { }}
                placeholderTextColor={"#a8b5db"}
                className='flex-1 ml-2 text-white'
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({})