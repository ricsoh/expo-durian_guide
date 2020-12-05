import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Accordion, Card, CardItem, Body } from "native-base";

const dataArray = [
  {
    title: "Durian categories?",
    content: "Durians are generally divided into two main categories – bitter or sweet. Though there are breeds that are both bitter and sweet, most people would prefer one predominant taste.",
  },
  {
    title: "Durian types?",
    content: "There are actually hundreds of durian types in the world, mostly grown in Malaysia and Thailand.",
  },
];

function HomeHomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>The Ultimate Guide to Common Durian Types</Text>
      <Card style={styles.card}>
        <CardItem>
          <Body>
            <Text style={styles.cardTitle}>Welcome</Text>
            <Text>
              We’ve rolled right into the season for durians – a thorny tropical fruit you either love or hate with a passion.
            </Text>
          </Body>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{
              uri:
                "https://www.asiaone.com/sites/default/files/styles/article_main_image/public/original_images/Jun2020/20200629_durian_the%20straits%20times-3_0.jpg?itok=hxREbQ3K",
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
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
});
