import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { MaterialIcons } from "@expo/vector-icons";

const HomeScreen = () => {
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    "we are loading your location"
  );
  const [locationServicesEnable, setLocationServicesEnable] = useState(false);
  useEffect(() => {
    checkIfLocationEnable();
    getCurrentLocation();
  }, []);
  const checkIfLocationEnable = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert(
        "Location services not enabled",
        "Please enable the location services",
        [
          {
            text: "Cancel",
            onPress: () => Alert.alert("Cancel Pressed"),
            style: "cancel",
          },
        ],
        {
          cancelable: true,
        }
      );
    } else {
      setLocationServicesEnable(enabled);
    }
  };
  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission denied",
        "Allow the app to use the location services",
        [
          {
            text: "Cancel",
            onPress: () => Alert.alert("Cancel Pressed"),
            style: "cancel",
          },
        ],
        {
          cancelable: true,
        }
      );
    }

    const { coords } = await Location.getCurrentPositionAsync();
    console.log(coords);

    if (coords) {
      const { latitude, longitude } = coords;

      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      console.log(response);
      for (let item of response) {
        let address = `${item.name} ${item.city} ${item.postalCode}`;
        setDisplayCurrentAddress(address);
      }
    }
  };
  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MaterialIcons name="location-on" size={24} color="#fd5c63" />
        <View>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>Home</Text>
          <Text>{displayCurrentAddress}</Text>
        </View>
        <Pressable style={{ marginLeft: "auto", marginRight: 7 }}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 25 }}
            source={{
              uri: "https://lh3.googleusercontent.com/ogw/AOLn63FDlVF3W0v9FpPzU_hILRd5zxm0mnk9zxlaXhfP=s64-c-mo",
            }}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
