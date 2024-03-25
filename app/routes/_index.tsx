import type { MetaFunction } from "@remix-run/node";
import SearchForm from "./SearchForm";
import { Stack, Container, Skeleton, Image } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';

export const meta: MetaFunction = () => {
  return [
    { title: "Quote Generator" },
    { name: "description", content: "Generate some famous quotes based on a topic!" },
  ];
};

export default function Index() {
const { width } = useViewportSize();

  return (
      <Stack h={100}>
        <Image
      h={160}
      src="https://fabriziocaramagna.com/wp-content/uploads/2022/05/Sfocato-1024x736.jpg"
    />
        <SearchForm/>
        <Image
      h={150}
      src="https://fabriziocaramagna.com/wp-content/uploads/2022/05/Sfocato-1024x736.jpg"
    />
      </Stack>
  );
}
