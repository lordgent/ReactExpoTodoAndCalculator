import React, { useEffect, useState, useContext } from "react";
import { Box, Text, ScrollView } from "native-base";
import CardData from "../components/CardData";
import HeaderScreen from "../components/HeaderScreen";
function HomeScreen({ navigation }) {
  return (
    <>
      <HeaderScreen navigateprops={() => navigation.navigate("Todo")} />
      <CardData />
    </>
  );
}

export default HomeScreen;
