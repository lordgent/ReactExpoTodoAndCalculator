import React, { useContext, useState } from "react";
import { Center, Box, Text, Input, Button, Alert } from "native-base";
import { AppContext } from "../context/contextapp";
import axios from "axios";
function AddTodo({ navigation }) {
  const [mode] = useContext(AppContext);
  const [alert, setalert] = useState(null);
  const [form, setform] = useState({
    title: "",
    todos: "",
  });

  const handleChange = (e, ipt) => {
    setform({
      ...form,
      [ipt]: e,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = JSON.stringify(form);
      console.log(data);
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await axios.post(
        "https://expotodo.herokuapp.com/expo/v1/todo",
        data,
        config
      );

      if (response?.status === 200) {
        const alert = (
          <>
            <Alert>
              <Text>Success</Text>
            </Alert>
          </>
        );
        setalert(alert);
        console.log("success");
        console.log(form);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      bg={mode === "sun" ? "indigo.700" : "muted.800"}
      h="100%"
      w="100%"
      _text={{
        fontSize: "md",
        fontWeight: "medium",
        color: `${mode === "sun" ? "indigo.700" : "muted.800"} `,
        backgroundColor: "white",
        letterSpacing: "lg",
      }}
    >
      <Center flex={1} px={3}>
        <Input
          onChangeText={(e) => handleChange(e, "title")}
          mx="3"
          placeholder="Title"
          w={{
            base: "75%",
            md: "25%",
          }}
          borderColor={mode === "sun" ? "indigo.100" : "muted.400"}
        />
        <Input
          mx="3"
          mt="2"
          height="90"
          onChangeText={(e) => handleChange(e, "todos")}
          color="white"
          placeholder="Activity"
          w={{
            base: "75%",
            md: "30%",
          }}
          borderColor={mode === "sun" ? "indigo.100" : "muted.300"}
        />
        <Button
          bg={mode === "sun" ? "indigo.100" : "muted.300"}
          _text={{
            color: `${mode === "sun" ? "indigo.700" : "muted.800"}`,
          }}
          w="75%"
          mt="2"
          onPress={handleSubmit}
        >
          Add Todo
        </Button>
        <Button
          onHoverIn={{ bg: "muted.100" }}
          bg={mode === "sun" ? "indigo.100" : "muted.300"}
          _text={{
            color: `${mode === "sun" ? "indigo.700" : "muted.800"}`,
          }}
          w="75%"
          mt="2"
          onPress={() => navigation.navigate("TodoList")}
        >
          Back
        </Button>
      </Center>
    </Box>
  );
}

export default AddTodo;
