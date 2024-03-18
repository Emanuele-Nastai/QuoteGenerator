import type { MetaFunction } from "@remix-run/node";
import SearchForm from "./SearchForm"

export const meta: MetaFunction = () => {
  return [
    { title: "Quote Generator" },
    { name: "description", content: "Generate some famous quotes based on a topic!" },
  ];
};

export default function Index() {
  return (
    <SearchForm/>
  );
}
