/******************************************************************************
 * Created Date: Friday July 28th 2023                                        *
 * Author: Ariel S.                                                           *
 * -----                                                                      *
 * Last Modified: Friday, 28th July 2023 1:27:45 pm                           *
 * Modified By: Ariel S.                                                      *
 * -----                                                                      *
 * File: /src/pages/EventsPage.js                                             *
 ******************************************************************************/
import {
  Text,
  Flex,
  NumberInput,
  Button,
  Heading,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCart } from "../redux/features/cart/cartSlice";

const EventsPage = () => {
  const dispatch = useDispatch();
  const { values } = useSelector((state) => state.cart);

  const { data, isLoading, error } = useQuery("eventData", () =>
    fetch("http://localhost:3000/events").then((res) => res.json())
  );

  const handleQuantity = (id) => (evt) => {
    const temp = { ...values };
    temp[id] = evt;
    dispatch(updateCart(temp));
  };

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <Flex
      flexDir="column"
      gap={10}
      style={{ width: "90vw" }}
      alignItems={"center"}
    >
      {data.map((event) => (
        <Flex
          padding={2}
          key={event.id}
          flexDir="row"
          alignItems={"center"}
          style={{ borderBottom: "1px solid grey", width: "100%" }}
        >
          <Flex flexDir={"column"} alignItems={"center"}>
            <Heading as="h2" size="sm">
              {event.date.split(" ")[0]}{" "}
            </Heading>
            <Heading as="h2" size="md">
              {event.date.split(" ")[1]}{" "}
            </Heading>
          </Flex>
          <Flex flexDir={"column"} flex={2} alignItems={"center"}>
            <Text>{event.date.split(";")[1]} </Text>
            <Heading as="h2" size="sm">
              {event.title}{" "}
            </Heading>
            <Text>{event.location} </Text>
          </Flex>
          <Flex flexDir={"column"} flex={1} alignItems={"center"}>
            <Heading as="h2" size="sm">
              Price (each)
            </Heading>
            <Heading as="h2" size="md">
              ${event.price}.00
            </Heading>
          </Flex>
          <NumberInput
            flex={2}
            size="sm"
            maxW={20}
            defaultValue={values[event.id]}
            onChange={handleQuantity(event.id)}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Flex>
      ))}
      <Link to="/checkout">
        <Button style={{ backgroundColor: "#3b7d34", color: "white" }}>
          Checkout
        </Button>
      </Link>
    </Flex>
  );
};

export default EventsPage;
