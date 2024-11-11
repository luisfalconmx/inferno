# @andromeda-ds/vue-components

Library of components developed in Vue 3 for the Andromeda Design System.

## Installation

Install this library with the next command

```
npm install @andromeda-ds/vue-components
```

Next, import the compiled styles into your `main.ts` file

```typescript
// src/main.ts
import { createApp } from "vue";
import App from "./App.vue";
import "@andromeda-ds/vue-components/dist/style.css"; // import first
import "./tailwind.css"; // import at the end

createApp(App).mount("#my-awesome-widget");
```

Now you can import any component from the library. Example:

```vue
<script setup lang="ts">
import { HelloWorld } from "@andromeda-ds/vue-components";
</script>

<template>
  <HelloWorld msg="Hello world!" />
</template>
```
