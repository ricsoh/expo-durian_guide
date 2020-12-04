import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Accordion, Card, CardItem, Body } from "native-base";

const dataArray = [
  {
    title: "What is this?",
    content: "Exactly what the title says. A basket throwing competition!",
  },
  {
    title: "Who is this by?",
    content:
      "The International Society of Basket Throwers (ISBT). We love throwing baskets.",
  },
  {
    title: "Why is this?",
    content: "Because baskets! Wheee!",
  },
];

function HomeHomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Basket Throwing Tournament 2020</Text>
      <Card style={styles.card}>
        <CardItem>
          <Body>
            <Text style={styles.cardTitle}>Welcome</Text>
            <Text>
              Thanks for downloading our app! Here, you'll find all kinds of
              information about our upcoming event. It'll be great!
            </Text>
          </Body>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{
              uri:
                "https://www.containerstore.com/catalogimages/339352/10074096-small-seagrass-belly-basket.jpg",
            }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
      </Card>
      <Accordion style={styles.accordion} dataArray={dataArray} expanded={0} />
    </View>
  );
}

const Stack = createStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={HomeHomeScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  titleText: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
});
