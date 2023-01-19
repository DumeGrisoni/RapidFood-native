import { View, Text, Image, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {ChevronDoubleDownIcon, UserIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon} from "react-native-heroicons/outline";

const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false
        })
    },[])


  return (
    <SafeAreaView className='pt-5 bg-[#FFF7E6]'>
        <Text className="text-[36px] font-[400] text-gray-800 pr-16 pl-2">
            {/* Header */}

            <View className='flex-row pb-3 space-x-4'>
                <Image 
                    source={require("../assets/Logo_RapidFood.png")}
                    className='h-8 w-8 bg-[#e5ac3f] p-4 rounded-full'
                />
                <View className='flex-row items-center justify-between'>
                    <View className='flex-auto w-[76vw] justify-center'>
                        <Text className='font-bold text-[#E5AC3F] text-xs'>
                            Username
                        </Text>
                        <Text className='font-bold text-xl'>
                            Votre position
                            <ChevronDoubleDownIcon size={15} color='#E5AC3F'/>
                        </Text>
                    </View>
                    <UserIcon size={30} color='#E5AC3F' className=' items-center justify-center flex-auto w-[18vw] '/>
                </View>
            </View>

            <View className='flex-row items-center space-x-4 pb-2 mx-4'>
                <View className=' flex-row  space-x-2 bg-white border border-[#E5AC3F] px-2 rounded-md w-[85vw] '>
                    <MagnifyingGlassIcon size={20} color='#E5AC3F'/>
                    <TextInput
                     placeholder='Découvrez tous nos plats '
                     keyboardType='default'
                      />
                        
                </View>
                <AdjustmentsVerticalIcon color='#E5AC3F' className='w-[5vw]'/>
            </View>
        </Text>
    </SafeAreaView>
  )
}




export default HomeScreen