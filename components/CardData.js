import React, { useState, useEffect, useContext } from "react";
import {
  NativeBaseProvider,
  Text,
  Box,
  CloseIcon,
  ScrollView,
  FlatList,
  Stack,
  HStack,
} from "native-base";
import axios from "axios";
import { AppContext } from "../context/contextapp";
import { TouchableOpacity, SafeAreaView } from "react-native";
import { fontSize } from "styled-system";

function CardData() {
  const [todos, settodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [mode] = useContext(AppContext);
  const [hide, sethide] = useState("30");
  const getTodos = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://expotodo.herokuapp.com/expo/v1/todos"
      );
      setIsLoading(false);
      settodos(response.data.data);
    } catch (error) {
      console.log(error);
      alert("Data Not Found");
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const renderItem = ({ item }) => (
    <Box
      marginTop="10px"
      padding="25px"
      bg="muted.100"
      borderRadius="20px"
      marginBottom="20px"
      height="120px"
      shadow={2}
      width="100%"
      _text={{
        fontSize: "15px",
        fontWeight: "medium",
        letterSpacing: "lg",
        color: `${mode === "sun" ? "indigo.800" : "muted.800"}`,
      }}
    >
      <Stack>
        <HStack space={3} h="20">
          <Text
            h="40"
            color={mode === "sun" ? "indigo.800" : "muted.800"}
            w="20"
          >
            {item.title}
          </Text>
          <CloseIcon size="2" right="2" position="absolute" color="muted.500" />
        </HStack>
        <Text
          bottom="3"
          color={mode === "sun" ? "indigo.800" : "muted.800"}
          fontSize="10"
        >
          {item.createdAt}
        </Text>
      </Stack>
    </Box>
  );

  return (
    <Box
      zIndex="2"
      width="100%"
      height="100%"
      backgroundColor="muted.50"
      borderTopRightRadius="25"
      borderTopLeftRadius="25"
      padding="20px"
      marginTop="-80px"
    >
      <FlatList
        data={todos}
        keyExtractor={(item) => item?.id?.toString()}
        renderItem={renderItem}
        refreshing={isLoading}
        onRefresh={getTodos}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  );
}

export default CardData;
