import * as React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Card, CardItem, Body } from "native-base";
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';

const typesData = [
  {
    name: "Mao Shan Wang (aka Butter durian, Cat Mountain King, Rajah Kunyit)",
    placeOrigin: "Kelatan, Pahang and Johor.",
    description:
      "Probably the most popular type of durian among Singaporeans besides the D24. Rich in taste and colour, Mao Shan Wang durians boast a creamy texture and leave a strong bittersweet taste in your mouth. To distinguish them, look out for the pyramid-shapes thorns at the base of the stem. They also have a unique starfish-shaped pattern found at the base of the durian fruit.",
    pic:
      "https://www.asiaone.com/sites/default/files/inline-images/20200629_durian_the%20straits%20times.jpg",
  },
  {
    name: "D24 (aka Sultan)",
    placeOrigin: "Johor, Pahang and Cameron Highlands.",
    description:
      "Before the Mao Shan Wang breed surged in popularity, the most famous breed back in the ’90s was the D24 durians. D24 durians are a little less overwhelming in flavour and are known for their creamy texture and subtle bittersweet after-taste. If you’re not that familiar with durians, this is a good introduction to the king of fruits. The stem of the durian is shorter compared to other durians and it has a brown-coloured ring around the bottom of the stem.",
    pic:
      "https://www.asiaone.com/sites/default/files/inline-images/20200629_durian_the%20straits%20times-2.jpg",
  },
  {
    name: "Golden Phoenix (aka Jin Feng)",
    placeOrigin: "Pahang and Johor.",
    description:
      "Despite being one of the smallest durians (it can be as small as a mango), this breed actually brings something new to the table with its strong pungent smell. It’s known for its bitter taste, watery texture and pale yellow-white colour that’s often mistaken for being rotten. To identify it, the shell of the durian has sharp needle-like thorns, while the fruit is roundish and oval in shape.",
    pic:
      "https://www.asiaone.com/sites/default/files/inline-images/20200629_durian_the%20straits%20times-3.jpg",
  },
  {
    name: "XO",
    placeOrigin: "Johor, Genting and Cameron Highlands.",
    description:
      "If you like your durian intense and bitter, the XO durian is right up your alley. It has a pale yellow flesh that’s slightly watery. Its alcoholic name derives from the fact that the breed is cultivated through an extended period of fermentation inside its shell, thus its slight alcoholic aftertaste. XO durians are typically round or oval and their thorns are pointed inwards at the base of the fruit.",
    pic:
      "https://www.asiaone.com/sites/default/files/inline-images/20200629_durian_the%20straits%20times-4.jpg",
  },
  {
    name: "Red Prawn (aka Hong Xia, Ang Hei, Udang Merah)",
    placeOrigin: "Pahang and Johor.",
    description:
      "For sweet durian lovers. The flesh of Red Pawn slightly differs from the others due to its vibrant reddish orange colour. Creamier and stickier than most durians, the taste of this durian depends largely on the age of the tree that it grew from. Younger durian trees yield sweeter fruit, while the more mature trees produce more bitter fruit. Red Prawn durian shells are thick due to the wide core of the durian, so there might not be a lot of fruit.",
    pic:
      "https://www.asiaone.com/sites/default/files/inline-images/20200629_durian_the%20straits%20times-5.jpg",
  },
  {
    name: "Black Pearl (aka Hei Zhen Zhu)",
    placeOrigin: "Johor.",
    description:
      "One of the rarer durian species. As its name suggests, Black Pearl durians have small seeds and pale yellow flesh with grey undertones. Featuring a smooth and creamy flesh, it has a bittersweet taste that doesn’t come off as overwhelming. To distinguish it, look out for a small shell with a stubby stem.",
    pic:
      "https://www.asiaone.com/sites/default/files/inline-images/20200629_durian_the%20straits%20times-6.jpg",
  },
  {
    name: "Green Bamboo (aka Qing Zhu)",
    placeOrigin: "Johor.",
    description:
      "Another sweet durian. This breed is popular for its buttery and fibrous flesh. When you pry it open, you’ll find a pale yellow, slightly greenish flesh and a trademark orange stem in the middle of the core.",
    pic:
      "https://www.asiaone.com/sites/default/files/inline-images/20200629_durian_the%20straits%20times-7.jpg",
  },
  {
    name: "Black Thorn",
    placeOrigin: "Penang.",
    description:
      "The flesh of the Black Thorn is bright yellow and creamy and it has a sweet and custardy taste, similar to that of Mao Shan Wang – but not as rich and has a lighter texture. The tips of the thorns tend to be darker too, thus the name.",
    pic:
      "https://www.asiaone.com/sites/default/files/inline-images/20200629_durian_year%20of%20the%20durian.jpg",
  },
  {
    name: "Black Gold",
    placeOrigin: "Pahang.",
    description:
      "A durian breed that’s a few grades higher than the popular Mao Shan Wang. Like Black Pearl durians, dark greyish undertones can be found on the flesh of Black Gold durians. It has a silky texture and an intense buttery, bitter aftertaste.",
    pic:
      "https://www.asiaone.com/sites/default/files/inline-images/20200629_durian_burpple.jpg",
  },
];

function TypesScreen({ route }) {
  const { name, placeOrigin, description, pic } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Different types of durians.</Text>
      <Card style={styles.card}>
        <CardItem cardBody>
          <Image
            source={{ uri: pic}}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Body>
            <Text style={styles.cardTitle}>{name}</Text>
            <Text style={styles.messageText}>Place of origin</Text>
            <Text>{placeOrigin}</Text>
            <Text style={styles.messageText}>Description</Text>
            <Text>{description}</Text>
          </Body>
        </CardItem>
      </Card>
    </View>
  );
}

const Stack = createStackNavigator();

export default function EventsStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TypesHome"
        component={TypesScreen}
        initialParams={{ ...typesData[0] }}
        options={{
          headerRight: () => (
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("TypesSecond")}>
              <Text style={styles.buttonText}>NEXT TYPE</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="TypesSecond"
        component={TypesScreen}
        initialParams={{ ...typesData[1] }}
        options={{
          headerRight: () => (
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("TypesThird")}>
              <Text style={styles.buttonText}>NEXT TYPE</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="TypesThird"
        component={TypesScreen}
        initialParams={{ ...typesData[2] }}
        options={{
          headerRight: () => (
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("TypesForth")}>
              <Text style={styles.buttonText}>NEXT TYPE</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="TypesForth"
        component={TypesScreen}
        initialParams={{ ...typesData[3] }}
        options={{
          headerRight: () => (
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("TypesFifth")}>
              <Text style={styles.buttonText}>NEXT TYPE</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="TypesFifth"
        component={TypesScreen}
        initialParams={{ ...typesData[4] }}
        options={{
          headerRight: () => (
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("TypesSixth")}>
              <Text style={styles.buttonText}>NEXT TYPE</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="TypesSixth"
        component={TypesScreen}
        initialParams={{ ...typesData[5] }}
        options={{
          headerRight: () => (
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("TypesSeventh")}>
              <Text style={styles.buttonText}>NEXT TYPE</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="TypesSeventh"
        component={TypesScreen}
        initialParams={{ ...typesData[6] }}
        options={{
          headerRight: () => (
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("TypesEight")}>
              <Text style={styles.buttonText}>NEXT TYPE</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="TypesEight"
        component={TypesScreen}
        initialParams={{ ...typesData[7] }}
        options={{
          headerRight: () => (
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("TypesNine")}>
              <Text style={styles.buttonText}>NEXT TYPE</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="TypesNine"
        component={TypesScreen}
        initialParams={{ ...typesData[8] }}
        options={{
          headerRight: () => (
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("TypesHome")}>
              <Text style={styles.buttonText}>BACK TO TOP</Text>
            </TouchableOpacity>
          ),
        }}
      />
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
  messageText: {
    fontWeight: "bold",
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 8,
    borderRadius: 10,
    marginRight: 15,
  },
  buttonText: {
    fontSize: 12,
    textAlign: 'center',
    color: 'white',
  }, 
});
