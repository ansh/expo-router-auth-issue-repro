import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot } from "expo-router";

const AuthLayout = () => {
  return (
    <View style={{ flex: 1 }}>
      <Slot />
    </View>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});
