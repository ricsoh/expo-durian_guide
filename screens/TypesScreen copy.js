import * as React from "react";
import { Text, View, Button, Image, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Card, CardItem, Body } from "native-base";

const typesData = [
  {
    name: "Mao Shan Wang (aka Butter durian, Cat Mountain King, Rajah Kunyit)",
    placeOrigin: "Place of origin: Kelatan, Pahang and Johor",
    description:
      "Probably the most popular type of durian among Singaporeans besides the D24. Rich in taste and colour, Mao Shan Wang durians boast a creamy texture and leave a strong bittersweet taste in your mouth. To distinguish them, look out for the pyramid-shapes thorns at the base of the stem. They also have a unique starfish-shaped pattern found at the base of the durian fruit.",
    pic:
      "https://www.asiaone.com/sites/default/files/inline-images/20200629_durian_the%20straits%20times.jpg",
  },
  {
    name: "D24 (aka Sultan)",
    placeOrigin: "Place of origin: Johor, Pahang and Cameron Highlands",
    description:
      "Before the Mao Shan Wang breed surged in popularity, the most famous breed back in the ’90s was the D24 durians. D24 durians are a little less overwhelming in flavour and are known for their creamy texture and subtle bittersweet after-taste. If you’re not that familiar with durians, this is a good introduction to the king of fruits. The stem of the durian is shorter compared to other durians and it has a brown-coloured ring around the bottom of the stem.",
    pic:
      "https://www.asiaone.com/sites/default/files/inline-images/20200629_durian_the%20straits%20times-2.jpg",
  },
  {
    name: "Golden Phoenix (aka Jin Feng)",
    placeOrigin: "Place of origin: Pahang and Johor",
    description:
      "Despite being one of the smallest durians (it can be as small as a mango), this breed actually brings something new to the table with its strong pungent smell. It’s known for its bitter taste, watery texture and pale yellow-white colour that’s often mistaken for being rotten. To identify it, the shell of the durian has sharp needle-like thorns, while the fruit is roundish and oval in shape.",
    pic:
      "https://www.asiaone.com/sites/default/files/inline-images/20200629_durian_the%20straits%20times-3.jpg",
  },
  {
    name: "XO",
    placeOrigin: "Place of origin: Johor, Genting and Cameron Highlands",
    description:
      "If you like your durian intense and bitter, the XO durian is right up your alley. It has a pale yellow flesh that’s slightly watery. Its alcoholic name derives from the fact that the breed is cultivated through an extended period of fermentation inside its shell, thus its slight alcoholic aftertaste. XO durians are typically round or oval and their thorns are pointed inwards at the base of the fruit.",
    pic:
      "https://www.asiaone.com/sites/default/files/inline-images/20200629_durian_the%20straits%20times-4.jpg",
  },
];

function TypesHomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Different types of durians.</Text>
      <Card style={styles.card}>
        <CardItem cardBody>
          <Image
            source={{ uri: typesData[0].pic }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Body>
            <Text style={styles.cardTitle}>
              {typesData[0].name}
            </Text>
            <Text>{typesData[0].placeOrigin}</Text>
            <Text>{typesData[0].description}</Text>
          </Body>
        </CardItem>
      </Card>
      <Button
        onPress={() => navigation.navigate("TypesSecond")}
        title="Next type"
      ></Button>
    </View>
  );
}

function TypesSecondScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Different types of durians.</Text>
      <Card style={styles.card}>
        <CardItem cardBody>
          <Image
            source={{ uri: typesData[1].pic }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Body>
            <Text style={styles.cardTitle}>
              {typesData[1].name}
            </Text>
            <Text>{typesData[1].placeOrigin}</Text>
            <Text>{typesData[1].description}</Text>
          </Body>
        </CardItem>
      </Card>
      <Button
        onPress={() => navigation.navigate("TypesThird")}
        title="Next type"
      ></Button>
    </View>
  );
}

function TypesThirdScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Different types of durians.</Text>
      <Card style={styles.card}>
        <CardItem cardBody>
          <Image
            source={{ uri: typesData[2].pic }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Body>
            <Text style={styles.cardTitle}>
              {typesData[2].name}
            </Text>
            <Text>{typesData[2].placeOrigin}</Text>
            <Text>{typesData[2].description}</Text>
          </Body>
        </CardItem>
      </Card>
      <Button
        onPress={() => navigation.navigate("TypesForth")}
        title="Next type"
      ></Button>
    </View>
  );
}

function TypesForthScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Different types of durians.</Text>
      <Card style={styles.card}>
        <CardItem cardBody>
          <Image
            source={{ uri: typesData[3].pic }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Body>
            <Text style={styles.cardTitle}>{typesData[3].name}</Text>
            <Text>{typesData[3].placeOrigin}</Text>
            <Text>{typesData[3].description}</Text>
          </Body>
        </CardItem>
      </Card>
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
      <Stack.Screen name="TypesHome" component={TypesHomeScreen} />
      <Stack.Screen name="TypesSecond" component={TypesSecondScreen} />
      <Stack.Screen name="TypesThird" component={TypesThirdScreen} />
      <Stack.Screen name="TypesForth" component={TypesForthScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
  },
});
