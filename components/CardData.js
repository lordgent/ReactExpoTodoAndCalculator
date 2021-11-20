import React, { useState, useEffect, useContext } from "react";
import {
  NativeBaseProvider,
  Text,
  Box,
  AddIcon,
  Stack,
  ChevronDownIcon,
  FlatList,
  HStack,
} from "native-base";
import axios from "axios";
import { AppContext } from "../context/contextapp";
import { TouchableOpacity } from "react-native";

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
    <HStack space={3} alignItems="center" key={item?.id}>
      <Box
        h="40"
        w="20"
        borderWidth="1"
        borderColor={mode === "sun" ? "indigo.800" : "muted.800"}
        marginTop="2px"
        padding="10px"
        borderRadius="15"
        marginBottom="5px"
      >
        <Text color={mode === "sun" ? "indigo.800" : "muted.800"}>
          {item?.title}
        </Text>
      </Box>
    </HStack>
  );

  return (
    <NativeBaseProvider>
      <Box
        width="100%"
        padding="30px"
        height="100%"
        backgroundColor="white"
        marginTop="30%"
        borderTopRightRadius="20"
        borderTopLeftRadius="20"
      >
        {isLoading ? (
          <Box>Loading...</Box>
        ) : (
          <Stack>
            <FlatList
              data={todos}
              keyExtractor={(item) => item?.id?.toString()}
              renderItem={renderItem}
            />
          </Stack>
        )}
      </Box>
    </NativeBaseProvider>
  );
}

export default CardData;
