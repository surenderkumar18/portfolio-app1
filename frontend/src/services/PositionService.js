import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchPositions = async () => {
  const response = await axios.get("http://localhost:3041/api/positions");
  return response.data;
};

export const usePositions = () => {
  return useQuery("positions", fetchPositions);
};
