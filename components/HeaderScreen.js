import React, { useState, useContext } from "react";
import {
  Box,
  Text,
  NativeBaseProvider,
  MoonIcon,
  SunIcon,
  CheckIcon,
  Image,
} from "native-base";
import { AppContext } from "../context/contextapp";
import { TouchableOpacity } from "react-native";
function HeaderScreen({ navigateprops }) {
  const [mode, setmode] = useContext(AppContext);
  return (
    <Box
      paddingTop="3"
      bg={mode === "sun" ? "indigo.600" : "muted.800"}
      h="45%"
      _text={{
        fontSize: "md",
        fontWeight: "medium",
        letterSpacing: "lg",
      }}
    >
      <Box
        right="6"
        marginTop="10"
        borderWidth="2"
        padding=".8"
        borderColor="white"
        width="55"
        borderRadius="15"
        position="absolute"
        bg="white"
      >
        {mode === "sun" ? (
          <TouchableOpacity onPress={() => setmode("night")}>
            <SunIcon size="6" marginLeft="6" color="indigo.600" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity>
            <MoonIcon
              color="amber.300"
              size="6"
              onPress={() => setmode("sun")}
            />
          </TouchableOpacity>
        )}
      </Box>

      <Text
        color="black"
        fontSize="23"
        fontWeight="bold"
        width="200px"
        marginLeft="5"
        marginTop="6%"
        height="10"
        color="white"
        letterSpacing="2"
        marginBottom="-4"
      >
        Simple TodoApp
      </Text>
      <Text
        color="white"
        fontSize="11"
        fontStyle="italic"
        marginLeft="5"
        marginBottom="5"
      >
        helps your activities
      </Text>
      <TouchableOpacity>
        <Text
          color="white"
          marginLeft="5"
          fontSize="19"
          borderRadius="5"
          width="90"
          height="6"
          borderWidth="1"
          marginBottom="15px"
          textAlign="center"
          borderColor="white"
          onPress={navigateprops}
        >
          ADD +
        </Text>
      </TouchableOpacity>
    </Box>
  );
}

export default HeaderScreen;
