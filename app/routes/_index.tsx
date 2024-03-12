import type { MetaFunction } from "@remix-run/node";
import SearchForm from "./SearchForm"

export const meta: MetaFunction = () => {
  return [
    { title: "Quote Generato" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};



export default function Index() {
  return (
    <SearchForm/>
  );
}
