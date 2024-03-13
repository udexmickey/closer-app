import AsyncStorage from '@react-native-async-storage/async-storage';
// store item
export const storeLocalStorageData = async (key: string, value: any) => {		
  try {
    await AsyncStorage.setItem(key, value);
    return {
        success: true
    }
  } catch (error) {
    return {
        success: false,
        error
    }
  }
}
// get item
export const getLocalStorageData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key)
    return {
        success: true,
        value
    }
  } catch(error) {
    return {
        success: false,
        error
    }
  }
}


export default {
    getLocalStorageData,
    storeLocalStorageData
}