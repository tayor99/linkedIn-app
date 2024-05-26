import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function index() {
  return (
    <View>
      <SafeAreaView />
      <View>
        <Text style={styles.red}>index</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  red: {
    color: "red",
  },
});
