import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import {
  Container,
  Content,
  Header,
  List,
  ListItem,
  Left,
  Right,
  Thumbnail,
  Body,
  Text,
} from "native-base";

const contactsData = [
  {
    name: "Combat Durians",
    street: "249 Balestier Rd",
    postcode: "Singapore 329714",
    pic: "https://www.tnp.sg/sites/default/files/styles/rl480/public/articles/2018/08/15/NP_20180815_BXDURIAN15_4210116.jpg?itok=Uc_ddo_z",
  },
  {
    name: "99 Old Trees",
    street: "Blk 46 Owen Road #01-277",
    postcode: "Singapore 210046",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGdFTQu2mq7u1SmnwF24NeDcV8S4zht4vkWw&usqp=CAU",
  },
  {
    name: "Ah Seng Durian",
    street: "20 Ghim Moh Rd #01-119 to #01-122",
    postcode: "Singapore 270020",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThQ3pH1z5RdM0j5LBwNb8S0OdsSgRjvXlcEQ&usqp=CAU",
  },
  {
    name: "The Durian Tree",
    street: "277 Bukit Batok East Ave 3, #01-371",
    postcode: "Singapore 650277",
    pic: "https://2.bp.blogspot.com/-FixDOuPT2mM/ViHsqcx6bnI/AAAAAAAAPaI/5suU7RukIOw/s1600/The-Durian-Tree-Bukit-Batok-Singapore.jpg",
  },
  {
    name: "The Durian Story",
    street: "151 Serangoon North Ave 2, #01-11",
    postcode: "Singapore 550151",
    pic: "https://i1.wp.com/photos.smugmug.com/Singapore-Posts/i-rGZpMrj/0/c32f9dab/L/P7060071-1-L.jpg?w=1100&ssl=1",
  },
  {
    name: "Spike Empire",
    street: "Blk 7 Hougang Ave 3, #01-56",
    postcode: "Singapore 530007",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr0JZUu-J9D1nYdF-YZU17CoKF0joU5KFsmA&usqp=CAU",
  },
];

function StallsStallsScreen() {
  return (
    <Container>
      <Content>
        <List>
          {contactsData.map((item) => (
            <ListItem avatar key={item.name}>
              <Left>
                <Thumbnail source={{ uri: item.pic }} />
              </Left>
              <Body>
                <Text>{item.name}</Text>
                <Text note>
                  {item.street}. {item.postcode}
                </Text>
              </Body>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  );
}

const Stack = createStackNavigator();

export default function StallsScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Places to buy durians" component={StallsStallsScreen} />
    </Stack.Navigator>
  );
}