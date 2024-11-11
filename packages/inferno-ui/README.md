# @luisfalconmx/inferno-ui

Library of components developed in React

## Installation

Install this library with the next command

```
npm install @luisfalconmx/inferno-ui
```

Next, import the compiled styles into your `main.tsx` file

```typescript
// src/main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css"; // import first
import "@luisfalconmx/inferno-ui/dist/style.css"; // import at the end

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

Now you can import any component from the library. Example:

```ts
import { Button } from "@luisfalconmx/inferno-ui";

function App() {
  return (
    <>
      <Button label="this works!" onClick={() => {}} />
    </>
  );
}

export default App;
```
