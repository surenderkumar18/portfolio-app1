import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// Base URL for the API
const BASE_URL = "http://localhost:3041/api/positions";

// Fetch all positions
const fetchPositions = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

// Fetch a single position by ID
export const fetchPositionById = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};

// Update an existing position by ID
export const updatePosition = async (id, updatedPosition) => {
  const response = await axios.put(`${BASE_URL}/${id}`, updatedPosition);
  return response.data;
};

// React Query hook for fetching all positions
export const usePositions = () => {
  return useQuery("positions", fetchPositions);
};

// React Query hook for fetching a position by ID
export const usePositionById = (id) => {
  return useQuery(["position", id], () => fetchPositionById(id), {
    enabled: !!id, // Only run the query if ID is provided
  });
};
