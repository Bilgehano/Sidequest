import { Quest } from "../types/quest";

export async function fetchQuestsByOwner(ownerId: string): Promise<Quest[]> {
  const res = await fetch(`/api/quest/byowner/${ownerId}/`);
  if (!res.ok) throw new Error("Server error");
  return await res.json();
}