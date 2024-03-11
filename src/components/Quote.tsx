import axios from "axios";
import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
export default function Quote() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get(
          "https://api.api-ninjas.com/v1/quotes?category=success",
          {
            headers: {
              "X-Api-Key": "gCY9Poeol0my1YXbiiit9A==jJNQV1c4rNyQyxxP",
            },
          }
        );
        console.log(response.data[0]);
        if (response.data[0].quote.length > 80) {
          fetchQuote();
        } else {
          setQuote(response.data[0].quote);
        }
      } catch (error) {
        console.log(error);
      }
    };

    // Call the fetchQuote function
    fetchQuote();
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <Text fontWeight={"bold"} fontSize={"1rem"}>
      🚀 {quote}
    </Text>
  );
}
