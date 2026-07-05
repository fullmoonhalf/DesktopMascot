import type { AgentMessage } from "@desktop-mascot/shared";

export type SpeechBubbleProps = {
  readonly message?: AgentMessage;
};

export function SpeechBubble({ message }: SpeechBubbleProps): React.JSX.Element | null {
  if (message === undefined) {
    return null;
  }

  const lines = message.text.split("\n");

  return (
    <div className="speech-bubble" role="status" aria-live="polite">
      <p className="speech-bubble-text">
        {lines.map((line, index) => (
          <span key={`${message.id}-${index}`}>
            {line}
            {index < lines.length - 1 && <br />}
          </span>
        ))}
      </p>
      <div className="speech-bubble-tail" aria-hidden="true" />
    </div>
  );
}
