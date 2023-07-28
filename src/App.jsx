import { useState } from "react";
import "./App.css";
import {
  Flex,
  Text,
  Checkbox,
  Button,
  FormControl,
  Input,
  FormLabel,
  Heading,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux";
import {
  setCard,
  removeCard,
} from "./redux/features/creditcard/creditcardSlice";

function App() {
  const {
    name,
    cardNumber,
    expirationDate,
    securityCode,
    country,
    address1,
    address2,
    city,
    state,
    postalCode,
    phone,
  } = useSelector((state) => state.creditcard);

  const [newName, setNewName] = useState(name);
  const [newCardNumber, setNewCardNumber] = useState(cardNumber);
  const [newExpirationDate, setNewExpirationDate] = useState(expirationDate);
  const [newSecurityCode, setNewSecurityCode] = useState(securityCode);
  const [newCountry, setNewCountry] = useState(country);
  const [newAddress1, setNewAddress1] = useState(address1);
  const [newAddres2, setNewAddress2] = useState(address2);
  const [newCity, setNewCity] = useState(city);
  const [newState, setNewState] = useState(state);
  const [newPostalCode, setNewPostalCode] = useState(postalCode);
  const [newPhone, setNewPhone] = useState(phone);

  const dispatch = useDispatch();

  const { isLoading, error, data } = useQuery("eventData", () =>
    fetch("http://localhost:3000/events").then((res) =>
      console.log("Events:", res.json())
    )
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <Flex
      flexDir={"row"}
      gap={5}
      style={{
        paddingTop: 80,
        paddingLeft: 100,
        paddingRight: 100,
      }}
    >
      <Flex flexDir={"column"} flex={2} gap={5}>
        <Flex
          flexDir={"column"}
          style={{ border: "1px solid #bfbfbf", padding: 20, borderRadius: 5 }}
          align={"flex-start"}
          gap={3}
        >
          <Flex flexDir={"row"} gap={3} alignItems={"center"}>
            <Heading as="h2" size="md">
              Delivery
            </Heading>
            <CheckCircleIcon w={6} h={6} color="green.500" />
          </Flex>

          <Heading as="h2" size="sm">
            Mobile - Free
          </Heading>
          <Text textAlign={"left"}>
            Your phone's your ticket. Locate your tickets in your account - or
            in your app. When you go mobile, your tickets will not be emailed to
            you or available for print.
          </Text>
        </Flex>
        <Flex
          flexDir={"column"}
          style={{ border: "1px solid #bfbfbf", padding: 20, borderRadius: 5 }}
          align={"flex-start"}
          gap={3}
        >
          <Heading as="h2" size="md">
            Payment
          </Heading>
          <FormControl>
            <FormLabel>Name on Card</FormLabel>
            <Input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Card Number</FormLabel>
            <Input
              type="number"
              value={newCardNumber}
              onChange={(e) => setNewCardNumber(e.target.value)}
            />
          </FormControl>
          <Flex flexDir={"row"} width={"100%"} gap={3}>
            <FormControl>
              <FormLabel>Expiration Date</FormLabel>
              <Input
                type="number"
                value={newExpirationDate}
                onChange={(e) => setNewExpirationDate(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Security Code</FormLabel>
              <Input
                type="number"
                value={newSecurityCode}
                onChange={(e) => setNewSecurityCode(e.target.value)}
              />
            </FormControl>
          </Flex>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Input
              type="number"
              value={newCountry}
              onChange={(e) => setNewCountry(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Address Line 1</FormLabel>
            <Input
              type="text"
              value={newAddress1}
              onChange={(e) => setNewAddress1(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Address Line 2</FormLabel>
            <Input
              type="text"
              value={newAddres2}
              onChange={(e) => setNewAddress2(e.target.value)}
            />
          </FormControl>
          <Flex flexDir={"row"} width={"100%"} gap={3}>
            <FormControl>
              <FormLabel>City</FormLabel>
              <Input
                type="text"
                value={newCity}
                onChange={(e) => setNewCity(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>State</FormLabel>
              <Input
                type="text"
                value={newState}
                onChange={(e) => setNewState(e.target.value)}
              />
            </FormControl>
          </Flex>
          <Flex flexDir={"row"} width={"100%"} gap={3}>
            <FormControl>
              <FormLabel>Postal Code</FormLabel>
              <Input
                type="number"
                value={newPostalCode}
                onChange={(e) => setNewPostalCode(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="tel"
                value={newPhone}
                onChange={(e) => setNewPhone(e.target.value)}
              />
            </FormControl>
          </Flex>
          <Checkbox defaultChecked>
            Save this card for future purchases
          </Checkbox>
          <Flex
            flexDir={"row"}
            style={{ width: "100%" }}
            justifyContent={"flex-end"}
            gap={3}
          >
            <Button
              variant="ghost"
              color={"#276dd7"}
              onClick={() => dispatch(removeCard())}
            >
              Cancel
            </Button>
            <Button
              style={{ backgroundColor: "#276dd7", color: "white" }}
              onClick={() =>
                dispatch(
                  setCard(
                    newName,
                    newCardNumber,
                    newExpirationDate,
                    newSecurityCode,
                    newCountry,
                    newAddress1,
                    newAddres2,
                    newCity,
                    newState,
                    newPostalCode,
                    newPhone
                  )
                )
              }
            >
              Save New Card
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        flex={1}
        flexDir={"column"}
        align={"flex-start"}
        gap={3}
        style={{ border: "1px solid #bfbfbf", padding: 20, borderRadius: 5 }}
      >
        <Flex
          flexDir={"row"}
          justify={"space-between"}
          style={{ width: "100%" }}
        >
          <Heading as="h2" size="md">
            Total
          </Heading>
          <Heading as="h2" size="md">
            $322.39
          </Heading>
        </Flex>
        <Heading as="h2" size="sm">
          Tickets
        </Heading>
        <Flex
          flexDir={"row"}
          justify={"space-between"}
          style={{ width: "100%" }}
        >
          <Text> Verified Resale Tickets: $132.00 x 2 </Text>
          <Text> $264.00</Text>
        </Flex>
        <Heading as="h2" size="sm">
          Fees{" "}
        </Heading>
        <Flex
          flexDir={"row"}
          justify={"space-between"}
          style={{ width: "100%" }}
        >
          <Text> Service Fee: $27.72 x 2 </Text>
          <Text> $55.44</Text>
        </Flex>
        <Flex
          flexDir={"row"}
          justify={"space-between"}
          style={{ width: "100%" }}
        >
          <Text> Order Processing Fee</Text>
          <Text> $2.95</Text>
        </Flex>
        <Text> *All Sales Final - No Refunds or Exchanges</Text>
        <Checkbox defaultChecked fontWeight={"600"}>
          I agree to the current Terms of Use.
        </Checkbox>
        <Button
          style={{ width: "100%", backgroundColor: "#3b7d34", color: "white" }}
        >
          {" "}
          Place Order
        </Button>
        <Text fontWeight={"600"} fontSize={"11"}>
          {" "}
          *Exceptions may apply, see our Terms of Use.
        </Text>
      </Flex>
    </Flex>
  );
}

export default App;
