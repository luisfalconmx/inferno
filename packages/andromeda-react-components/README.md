# @andromeda-ds/react-components

Library of components developed in React for the Andromeda Design System.

## Installation

Install this library with the next command

```
npm install @andromeda-ds/react-components
```

Next, import the compiled styles into your `main.tsx` file

```typescript
// src/main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css"; // import first
import "@andromeda/react-components/dist/style.css"; // import at the end

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

Now you can import any component from the library. Example:

```ts
import { Button } from "@andromeda/react-components";

function App() {
  return (
    <>
      <Button label="this works!" onClick={() => {}} />
    </>
  );
}

export default App;

```
