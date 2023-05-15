import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import HorizontalDatepicker from "@awrminkhodaei/react-native-horizontal-datepicker";

const PickUpScreen = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState([]);
  const [delivery, setDelivery] = useState([]);
  const deliveryTime = [
    {
      id: "0",
      name: "2-3 Days",
    },
    {
      id: "1",
      name: "3-4 Days",
    },
    {
      id: "2",
      name: "4-5 Days",
    },
    {
      id: "3",
      name: "5-6 Days",
    },
    {
      id: "4",
      name: "Tommorrow",
    },
  ];

  const times = [
    {
      id: "0",
      time: "11:00 PM",
    },
    {
      id: "1",
      time: "12:00 PM",
    },
    {
      id: "2",
      time: "1:00 PM",
    },
    {
      id: "2",
      time: "2:00 PM",
    },
    {
      id: "4",
      time: "3:00 PM",
    },
    {
      id: "5",
      time: "4:00 PM",
    },
  ];

  return (
    <SafeAreaView>
      <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>
        enter Address
      </Text>
      <TextInput
        style={{
          padding: 40,
          borderColor: "gray",
          borderWidth: 0.7,
          paddingVertical: 80,
          borderRadius: 9,
          margin: 10,
        }}
      />
      <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>
        Pick Up Date
      </Text>
      <HorizontalDatepicker
        mode="gregorian"
        startDate={new Date("2023-02-21")}
        endDate={new Date("2023-02-28")}
        initialSelectedDate={new Date("2020-08-22")}
        onSelectedDateChange={(date) => setSelectedDate(date)}
        selectedItemWidth={170}
        unselectedItemWidth={38}
        itemHeight={38}
        itemRadius={10}
        selectedItemTextStyle={styles.selectedItemTextStyle}
        unselectedItemTextStyle={styles.selectedItemTextStyle}
        selectedItemBackgroundColor="#222831"
        unselectedItemBackgroundColor="#ececec"
        flatListContainerStyle={styles.flatListContainerStyle}
      />
      <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>
        Select time
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {times.map((item, index) => (
          <Pressable
            key={index}
            onPress={() => setSelectedTime(item.time)}
            style={
              selectedTime.includes(item.time)
                ? {
                    margin: 10,
                    borderRadius: 7,
                    padding: 15,
                    borderColor: "red",
                    borderWidth: 0.7,
                  }
                : {
                    margin: 10,
                    borderRadius: 7,
                    padding: 15,
                    borderColor: "grey",
                    borderWidth: 0.7,
                  }
            }
          >
            <Text>{item.time}</Text>
          </Pressable>
        ))}
      </ScrollView>
      <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>
        Delivery Date
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {deliveryTime.map((item, i) => (
          <Pressable
            style={
              delivery.includes(item.name)
                ? {
                    margin: 10,
                    borderRadius: 7,
                    padding: 15,
                    borderColor: "red",
                    borderWidth: 0.7,
                  }
                : {
                    margin: 10,
                    borderRadius: 7,
                    padding: 15,
                    borderColor: "grey",
                    borderWidth: 0.7,
                  }
            }
            onPress={() => setDelivery(item.name)}
            key={i}
          >
            <Text>{item.name}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PickUpScreen;

const styles = StyleSheet.create({});
