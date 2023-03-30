import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Pressable, FlatList } from "react-native";
import { Text } from "../../components/Themed";
import { Link } from "expo-router";

const ScenariosScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Authenticated screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    marginTop: 10,
    flexDirection: "column",
    alignItems: "center",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  squircle: {
    width: "45%",
    height: 140,
    borderRadius: 15,
    marginHorizontal: 10,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10,
  },
});

export default ScenariosScreen;
