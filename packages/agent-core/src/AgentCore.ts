import type {
  AgentMessage,
  LlmProvider,
  McpClient,
  MascotRenderer,
  NotificationService,
  StorageService,
} from "@desktop-mascot/shared";

export interface AgentCoreDeps {
  readonly llm: LlmProvider;
  readonly mcp: McpClient;
  readonly storage: StorageService;
  readonly notifications: NotificationService;
  readonly renderer: MascotRenderer;
}

// Placeholder — business logic will be implemented in future milestones.
export interface AgentCore {
  handleMessage(text: string): Promise<AgentMessage>;
}
