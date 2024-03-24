import React from "react";
import {
  TextInput,
  ActionIcon,
  useMantineTheme,
  rem,
  Center,
  Box,
  Flex,
  getGradient,
} from "@mantine/core";
import { IconSearch, IconArrowRight } from "@tabler/icons-react";

export default function SearchForm() {
  const theme = useMantineTheme();
  const [quote, setQuote] = React.useState([] as any);
  async function sendRequest(event: any) {
    event.preventDefault();
    const response = await fetch(
      `https://api.api-ninjas.com/v1/quotes?category=${event!.target[0].value}`,
      {
        method: "GET",
        headers: {
          "X-Api-Key": "2zDImS1XlyI9ZtjBaZMWGg==ZYN5E07AvYkVONOH",
        },
      }
    );
    if (response) {
      await response.json().then((data) => {
        console.log(data);
        setQuote(data);
      });
    }
  }
  return (
    <Flex 
      mih={50}
      mt={350}  
        gap="xl"
        justify="center"
        align="center"
        direction="column"
        wrap="wrap"
      >
      <Box>
        <form onSubmit={sendRequest}>
          <TextInput
            radius="xl"
            size="md"
            placeholder="Search..."
            rightSectionWidth={42}
            leftSection={
              <IconSearch
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            }
            rightSection={
              <ActionIcon
                size={32}
                radius="xl"
                color={theme.primaryColor}
                variant="filled"
                type="submit"
              >
                <IconArrowRight
                  style={{ width: rem(18), height: rem(18) }}
                  stroke={1.5}
                />
              </ActionIcon>
            }
          />
        </form>
      </Box>
      <Box>
        <div>
          {quote && quote.length > 0 && (
            <div>
              <h2>{quote[0].quote}</h2>
              <p>{quote[0].author}</p>
            </div>
          )}
          {!quote || quote.length == 0 && (
            <div>
              <h2>Topic not found.</h2>
            </div>
          )}
        </div>
      </Box>
    </Flex>
  );
}
