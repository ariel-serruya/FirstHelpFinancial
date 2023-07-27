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

function App() {
  const [count, setCount] = useState(0);

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
          </Heading>{" "}
          <FormControl>
            <FormLabel>Name on Card</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>Card Number</FormLabel>
            <Input type="number" />
          </FormControl>
          <Flex flexDir={"row"} width={"100%"} gap={3}>
            <FormControl>
              <FormLabel>Expiration Date</FormLabel>
              <Input type="number" />
            </FormControl>
            <FormControl>
              <FormLabel>Security Code</FormLabel>
              <Input type="number" />
            </FormControl>
          </Flex>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Input type="number" />
          </FormControl>
          <FormControl>
            <FormLabel>Address Line 1</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>Address Line 2</FormLabel>
            <Input type="text" />
          </FormControl>
          <Flex flexDir={"row"} width={"100%"} gap={3}>
            <FormControl>
              <FormLabel>City</FormLabel>
              <Input type="number" />
            </FormControl>
            <FormControl>
              <FormLabel>State</FormLabel>
              <Input type="number" />
            </FormControl>
          </Flex>
          <Flex flexDir={"row"} width={"100%"} gap={3}>
            <FormControl>
              <FormLabel>Postal Code</FormLabel>
              <Input type="number" />
            </FormControl>
            <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <Input type="tel" />
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
            <Button variant="ghost" color={"#276dd7"}>
              Cancel
            </Button>
            <Button style={{ backgroundColor: "#276dd7", color: "white" }}>
              {" "}
              Add New Card{" "}
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
