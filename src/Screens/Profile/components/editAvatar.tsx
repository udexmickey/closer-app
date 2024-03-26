import { View, Text, Alert } from "react-native";
import React, { SetStateAction, useState } from "react";
import {
  ViewDiv,
  ImageDiv,
  TextDiv,
  TouchableOpacityDiv,
} from "nativewind.config";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

const EditAvatar = () => {
  // Stores the selected image URI
  const [file, setFile] = useState(null);

  // Stores any error message
  const [error, setError] = useState(null);

  // Function to pick an image from
  //the device's media library
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      // If permission is denied, show an alert
      Alert.alert(
        "Permission Denied",
        `Sorry, we need camera  
                 roll permission to upload images.`
      );
    } else {
      // Launch the image library and get
      // the selected image
      const result = await ImagePicker.launchImageLibraryAsync();

      if (!result.canceled) {
        // If an image is selected (not cancelled),
        // update the file state variable
        setFile(result?.assets[0] as unknown as SetStateAction<null>);

        // Clear any previous errors
        setError(null);
      }
    }
  };

  const route = useRoute();

  return (
    <ViewDiv className="flex items-center gap-2 relative">
      <ImageDiv
        className="w-20 h-20 rounded-full bg-slate-100 relative"
        source={{
          uri: "https://s3-alpha-sig.figma.com/img/7165/7eeb/df476c83066f9fddf9706196aabc92d0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pHAISB8MUd5z46v-2D6dPVnmS-CwBhrMTcKcVVoDL~fsfc0NwaIe7elBBkmlHICxYwXgYY2jB0sbmzSH8~Pdx8ziygLZlA6nA08lgte9ni98Tb1EkPvtDYY0g51BG~g3vl1UlModBEW31M49WlzHsUnlHUVnkYPSBzvEr1bDEgltzudZBKeRxcoLYpqolXzzdNqtVTEdPR3SFj7ZaRjyf~aXP7AP7O-RGAW-Yg9ME6D3OTyGdNeKlOWv5Tvtn93Cw8K5tRjg8EpE7wiRj8stEe04ZPq8gDW8~31Uu81oaj1s6hmhcm-fB-nZsaqnjY4GSjPoBEJmsTjNfQCenBVkoQ__",
        }}
        resizeMode="contain"
        resizeMethod="resize"
      />
      {route.name === "PersonalInformation" ? (
        <>
          <TouchableOpacityDiv
            className="absolute top-10 right-[120px] bg-[#FFF1E4] p-2 rounded-full justify-center items-center"
            onPress={pickImage}
          >
            <AntDesign name="edit" size={24} color="#FF4B83" />
          </TouchableOpacityDiv>
          {/* Preview Profile Image here */}
          <View style={styles.container}>
            {/* Conditionally render the image  
            or error message */}
            {file ? (
              // Display the selected image
              <View style={styles.imageContainer}>
                <ImageDiv source={{ uri: file }} style={styles.image} />
              </View>
            ) : (
              // Display an error message if there's
              // an error or no image selected
              <Text style={styles.errorText}>{error}</Text>
            )}
          </View>
        </>
      ) : null}
    </ViewDiv>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // padding: 16,
  },
  imageContainer: {
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 200,
    height: 200,
    backgroundColor: "#F1F1F3",
    borderRadius: 8,
  },
  errorText: {
    color: "red",
    marginTop: 16,
  },
});

export default EditAvatar;
