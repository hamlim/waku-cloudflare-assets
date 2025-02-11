import { Link } from "waku";

import { Counter } from "../components/counter";

export default async function HomePage() {
  const data = await getData();

  console.log(new Date().toDateString());

  return (
    <div>
      <title>Whatup</title>
      <h1 className="text-4xl font-bold tracking-tight">{data.headline}</h1>
      <p>{data.body}</p>
      <Counter />
      <Link to="/about" className="mt-4 inline-block underline">
        About page
      </Link>
    </div>
  );
}

const getData = async () => {
  const data = {
    title: "Waku",
    headline: "Waku",
    body: "Hello world!",
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
