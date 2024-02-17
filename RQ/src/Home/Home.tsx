import { getPosts } from "../api/api.ts";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const result = useQuery({ queryKey: ["posts"], queryFn: getPosts });
  console.log(result);

  return <div>홈페이지</div>;
};

export default Home;
