import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export default function Search({ navigation }) {
  const [text, setText] = useState("");
  const [bus, setBus] = useState("");

  return (
    <View style={[styles.container, { backgroundColor: "skyblue" }]}>
      <Text
        style={{
          fontSize: 38,
          alignItems: "center",
          color: "purple",
          marginBottom: 10,
        }}
      >
        SBS Transit
      </Text>
      <Text
        style={{
          fontSize: 38,
          alignItems: "center",
          color: "brown",
          marginBottom: 50,
        }}
      >
        Bus Timing App
      </Text>
      <Text style={{ fontSize: 24 }}>BusStop Number</Text>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={(text) => setText(text)}
        placeholder={"Enter Bus Stop "}
      />

      <Text style={{ fontSize: 24 }}>Bus Number</Text>
      <TextInput
        style={styles.textInput}
        value={bus}
        onChangeText={(bus) => setBus(bus)}
        placeholder={"Enter Bus number"}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Result", { text, bus })}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttond}
          onPress={() => navigation.navigate("Search", {})}
        >
          <Text style={styles.buttonText}>Dismiss</Text>
        </TouchableOpacity>
      </View>
      {/* <Text>{text.toUpperCase()}</Text> 
      <Text style={{ marginTop: 40, color: "grey" }}>
        This is what you typed:
      </Text>
      <Text style={{ color: "#333", marginTop: 10 }}>{text}</Text>*/}
    </View>
  );
}

//export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    borderColor: "grey",
    borderWidth: 1,
    width: "80%",
    padding: 10,
    marginTop: 20,
  },
  button: {
    padding: 10,
    backgroundColor: "orange",
    borderRadius: 5,
    margin: 10,
    marginTop: 30,
    width: 80,
  },
  buttond: {
    padding: 10,
    backgroundColor: "red",
    borderRadius: 5,
    margin: 10,
    marginTop: 30,
    width: 80,
  },
  buttonText: {
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
});
