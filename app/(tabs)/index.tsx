import { Image, View, StyleSheet, Platform, Text, Button } from 'react-native';
import { useState } from "react";
import { TextInput } from 'react-native-gesture-handler';

export default function HomeScreen() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ });

  const validateForm = () => {
    let errors = {}

    if(!username) errors.username = "Username is required";
    if(!password) errors.password = "Password is required";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if(validateForm()) {
      console.log("Submitted", username, password);
      setUsername("");
      setPassword("");
      setErrors({});
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Username</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername} />
          {
            errors.username ? <Text style={styles.errorText}>{errors.username}</Text> : null
          }
        <Text style={styles.label}>Password</Text>
        <TextInput 
          style={styles.input}
          placeholder="Enter your password" 
          secureTextEntry
          value={username}
          onChangeText={setPassword} 
          />
          {
            errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null
          }
          <Button title="Login" onPress={handleSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5"
  },
  form: {
    backgroundColor: "eggshell",
    padding: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold"
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5
  },
  errorText: {
    color: "red",
    marginBottom: 10
  }
});
