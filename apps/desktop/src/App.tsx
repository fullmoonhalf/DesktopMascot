import { MascotView } from "./components/mascot/MascotView.js";

export function App(): React.JSX.Element {
  const sampleExpression = "happy";

  return (
    <main>
      <h1>Desktop Mascot</h1>
      <MascotView expression={sampleExpression} />
    </main>
  );
}
