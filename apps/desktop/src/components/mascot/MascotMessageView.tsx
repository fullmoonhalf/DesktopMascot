import type { AgentMessage } from "@desktop-mascot/shared";
import { MascotView } from "./MascotView.js";
import { SpeechBubble } from "./SpeechBubble.js";

export type MascotMessageViewProps = {
  readonly message?: AgentMessage;
};

export function MascotMessageView({ message }: MascotMessageViewProps): React.JSX.Element {
  return (
    <div className="mascot-message-view">
      {message !== undefined && <SpeechBubble message={message} />}
      <MascotView
        expression={message?.expression ?? "neutral"}
        {...(message?.motion !== undefined ? { motion: message.motion } : {})}
      />
    </div>
  );
}
