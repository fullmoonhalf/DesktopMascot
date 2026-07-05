import type { AgentMessage } from "@desktop-mascot/shared";
import { MascotMessageView } from "./components/mascot/MascotMessageView.js";

const sampleMessage: AgentMessage = {
  id: "sample-message",
  text: "こんにちは。\n今日もよろしくお願いします。",
  expression: "happy",
  motion: "wave",
  source: "system",
  createdAt: new Date().toISOString(),
};

export function App(): React.JSX.Element {
  return (
    <main>
      <h1>Desktop Mascot</h1>
      <MascotMessageView message={sampleMessage} />
    </main>
  );
}

