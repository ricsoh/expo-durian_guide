import * as React from "react";
import { Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

function EventsHomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Events First Page!</Text>
            <Button
                onPress={() => navigation.navigate("EventsSecond")}
                title="Second Screen"
            ></Button>
        </View>
    );
  }

  function EventsSecondScreen({ navigation }) {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Events Second Page!</Text>
            <Button
                onPress={() => navigation.navigate("EventsThird")}
                title="Third Screen"
            ></Button>
        </View>
      );
  }

  function EventsThirdScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Events Third Page!</Text>
            <Button
                onPress={() => navigation.popToTop()}
                title="Back to top"
            ></Button>
        </View>
    );
  }

  const Stack = createStackNavigator();

  export default function EventsStack() {
      return (
          <Stack.Navigator>
              <Stack.Screen name="EventsHome" component={EventsHomeScreen} />
              <Stack.Screen name="EventsSecond" component={EventsSecondScreen} />
              <Stack.Screen name="EventsThird" component={EventsThirdScreen} />
          </Stack.Navigator>
      );
  }