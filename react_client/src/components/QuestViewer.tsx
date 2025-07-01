import { useState } from "react";
import { fetchQuestsByOwner } from "../api/quests";
import { Quest } from "../types/quest";

export default function QuestViewer() {
  const [ownerId, setOwnerId] = useState("");
  const [quests, setQuests] = useState<Quest[]>([]);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    try {
      const data = await fetchQuestsByOwner(ownerId);
      setQuests(data);
      setError(null);
    } catch (e) {
      setError("Failed to load quests.");
    }
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Sidequest Client</h1>
      <input
        placeholder="Owner ID"
        value={ownerId}
        onChange={(e) => setOwnerId(e.target.value)}
      />
      <button onClick={load}>Load Quests</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {quests.map((q) => (
          <li key={q.id}>
            <strong>{q.title}</strong> ({q.status})<br />
            {q.description}
          </li>
        ))}
      </ul>
    </div>
  );
}