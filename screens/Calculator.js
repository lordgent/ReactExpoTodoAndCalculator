import { StatusBar } from "expo-status-bar";
import React, { useState, useContext } from "react";
import { TouchableOpacity } from "react-native";
import { Box, Text, HStack } from "native-base";
import { AppContext } from "../context/contextapp";
export default function App() {
  const [mode] = useContext(AppContext);
  const [calculate, setcalculate] = useState("");
  const [result, setresult] = useState(null);

  const Number = (a) => {
    setcalculate(calculate + a);
  };
  const handleDelete = () => {
    setcalculate("");
    setresult(null);
  };

  const calculator = () => {
    try {
      let rslt = eval(calculate).toString();
      setresult(rslt);
    } catch (error) {
      setcalculate("");
      console.log(error);
    }
  };

  return (
    <>
      <Box w="100%" h="100%" bg={mode === "sun" ? "indigo.600" : "muted.800"}>
        <Box right="3" marginTop="20%" position="absolute">
          <Text letterSpacing="3" fontSize="30">
            {calculate}
          </Text>
        </Box>
        <Box right="3" marginTop="35%" position="absolute">
          <Text fontSize="37">{!result ? " " : `= ${result}`}</Text>
        </Box>

        <Box
          w="100%"
          position="absolute"
          h="70%"
          bottom={-29}
          borderRadius="25"
          bg="white"
        >
          <HStack space={7} pt="5" pl="5" pr="5" alignItems="center">
            <TouchableOpacity onPress={handleDelete}>
              <Box
                w="60"
                h="60"
                _text={{
                  fontSize: "30px",
                  margin: "auto",
                  color: `${mode === "sun" ? "indigo.600" : "muted.800"}`,
                }}
              >
                C
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Number("%")}>
              <Box
                w="60"
                h="60"
                _text={{ fontSize: "30px", margin: "auto", color: "#636e72" }}
              >
                %
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Number("/")}>
              <Box
                w="60"
                h="60"
                _text={{ fontSize: "30px", margin: "auto", color: "#636e72" }}
              >
                /
              </Box>
            </TouchableOpacity>
            <Box
              w="60"
              h="60"
              _text={{ fontSize: "30px", margin: "auto", color: "#636e72" }}
            >
              DEL
            </Box>
          </HStack>
          <HStack space={7} pt="5" pl="5" pr="5" alignItems="center">
            <TouchableOpacity onPress={() => Number("7")}>
              <Box
                w="60"
                h="60"
                borderColor="#dfe6e9"
                _text={{ fontSize: "30px", margin: "auto", color: "#636e72" }}
              >
                7
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Number("8")}>
              <Box
                w="60"
                h="60"
                _text={{ fontSize: "30px", margin: "auto", color: "#636e72" }}
              >
                8
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Number("9")}>
              <Box
                w="60"
                h="60"
                _text={{ fontSize: "30px", margin: "auto", color: "#636e72" }}
              >
                9
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Number("*")}>
              <Box
                w="60"
                h="60"
                _text={{ fontSize: "30px", margin: "auto", color: "#636e72" }}
              >
                x
              </Box>
            </TouchableOpacity>
          </HStack>
          <HStack space={7} pt="5" pl="5" pr="5" alignItems="center">
            <TouchableOpacity onPress={() => Number("4")}>
              <Box
                w="60"
                h="60"
                borderColor="#dfe6e9"
                _text={{ fontSize: "30px", margin: "auto", color: "#636e72" }}
              >
                4
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Number("5")}>
              <Box
                w="60"
                h="60"
                _text={{ fontSize: "30px", margin: "auto", color: "#636e72" }}
              >
                5
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Number("6")}>
              <Box
                w="60"
                h="60"
                _text={{ fontSize: "30px", margin: "auto", color: "#636e72" }}
              >
                6
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Number("-")}>
              <Box
                w="60"
                h="60"
                _text={{ fontSize: "30px", margin: "auto", color: "#636e72" }}
              >
                -
              </Box>
            </TouchableOpacity>
          </HStack>

          <HStack space={7} pt="5" pl="5" pr="5" alignItems="center">
            <TouchableOpacity onPress={() => Number("3")}>
              <Box
                w="60"
                h="60"
                borderColor="#dfe6e9"
                _text={{ fontSize: "30px", margin: "auto", color: "#636e72" }}
              >
                3
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Number("2")}>
              <Box
                w="60"
                h="60"
                _text={{ fontSize: "30px", margin: "auto", color: "#636e72" }}
              >
                2
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Number("1")}>
              <Box
                w="60"
                h="60"
                _text={{ fontSize: "30px", margin: "auto", color: "#636e72" }}
              >
                1
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Number("+")}>
              <Box
                w="60"
                h="60"
                _text={{ fontSize: "30px", margin: "auto", color: "#636e72" }}
              >
                +
              </Box>
            </TouchableOpacity>
          </HStack>
          <HStack space={3} pt="5" pl="5" pr="5" alignItems="center">
            <TouchableOpacity onPress={() => Number("0")}>
              <Box
                w="60"
                h="60"
                _text={{ fontSize: "30px", margin: "auto", color: "#636e72" }}
              >
                0
              </Box>
            </TouchableOpacity>
            <TouchableOpacity bg="black" w="100vh" onPress={calculator}>
              <Box
                w="240"
                borderRadius="15"
                bg={mode === "sun" ? "indigo.600" : "muted.800"}
              >
                <Text
                  color="white"
                  fontSize="30"
                  textAlign="center"
                  width="100%"
                >
                  =
                </Text>
              </Box>
            </TouchableOpacity>
          </HStack>
        </Box>
      </Box>
    </>
  );
}
