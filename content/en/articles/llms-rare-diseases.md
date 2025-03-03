---
title: How Large Language Models can help with the diagnosis of Rare Diseases
date: 03/03/2025
description: In the complex world of medical diagnostics, rare diseases present unique challenges due to their uncommon nature and often puzzling symptoms. Large Language Models (LLMs) are emerging as powerful tools that can analyze vast medical literature, recognize subtle symptom patterns, and assist healthcare professionals in identifying these elusive conditions, potentially reducing the years-long diagnostic odyssey many patients endure.
tags:
  - Machine Learning
  - Rare Diseases
  - Diagnosis
image: /articles/llms-rare-diseases-cover.png
readingTime: "10"
---

![preview](/articles/llms-rare-diseases-cover.png)

## The Curious Case of Rare Diseases

Imagine being so special that doctors need a medical detective to figure you out. Welcome to the world of rare diseases, where being one-in-a-million isn't just a compliment—it's a diagnosis!

### Not-So-Common Facts

Rare diseases affect approximately 300 million people worldwide—that's like the entire population of the United States deciding to collect unusual medical conditions. Despite the name "rare," these conditions collectively are about as rare as coffee shops in Seattle.

The average patient with a rare disease embarks on what medical professionals call the "diagnostic odyssey"—a fancy term for "visiting 8 different specialists who all scratch their heads while your symptoms throw a party." This journey typically takes 4-7 years, during which patients might hear phrases like "it's probably just stress" more times than they hear "good morning."

### Meet Fibrodysplasia Ossificans Progressiva (FOP)

Take FOP, for example—a condition where your body thinks, "You know what would make this muscle injury better? Turning it into bone!" It affects just 1 in 2 million people, making it rarer than finding someone who hasn't binged a streaming show.

Patients with FOP gradually develop a second skeleton (because apparently, one wasn't enough). Doctors often misdiagnose it as cancer or fibrosis, and unnecessary biopsies can actually trigger more bone formation—talk about adding insult to injury!

### AI to the Rescue (Without the Cape)

Enter Large Language Models—the medical equivalent of that friend who somehow remembers every obscure fact from every conversation ever. These AI systems can process thousands of research papers, clinical notes, and genetic data faster than a doctor can say "I'll need to consult with a colleague."

When presented with a constellation of seemingly unrelated symptoms, LLMs can suggest rare conditions that might not immediately come to mind for physicians who haven't seen a case since medical school (if ever).

In a world where being rare makes diagnosis difficult, AI doesn't forget the zebras while looking for horses.

![snippets-exemple](/articles/snippets-exemple.gif)

### Component Template: `!comp`

The `!comp` snippet is a basic yet powerful template for creating new Vue components. It includes a script setup with TypeScript support, a template section, and scoped styling. This snippet is ideal for rapidly scaffolding new components in your project.

**Usage Example:** Use `!comp` to quickly create new Vue components, ensuring consistency and saving time on setup.

```vue [MyComponent.vue]
<script setup lang="ts">
import type { PropType } from "vue";

const props = defineProps({
 item: {
  type: String, 
  required: true
 }
});
</script>

<template>
  <div>
    <h1>{{ item }}</h1>
  </div>
</template>

<style scoped>

</style>
```

### API Handler Template: `!api`

Handling API requests is a common task in modern web applications. The `!api` snippet provides a template for creating API handlers using `h3`, a lightweight HTTP toolkit. This snippet streamlines the process of setting up API routes and handling requests.

**Usage Example:** Implement the `!api` snippet for creating efficient API routes in your Nuxt application, especially when dealing with CRUD operations.

```ts [~/server/api/MyHandler.ts]
import { H3Event } from "h3";

export default defineEventHandler(async (event: H3Event) => {
  const body = await readBody(event);
  // your_api_logic
});
```

### State Management with Pinia: `!store`

State management is crucial in large-scale applications. The `!store` snippet utilizes Pinia, a Vue store, offering a structured template for managing application state. It includes a state definition, getters, and actions.

**Usage Example:** Utilize `!store` for setting up store modules in your Nuxt/Vue app, managing state more effectively and cleanly. the { clipboard } while be replaced by your actual clipboard.

```ts [~/store/{clipboard}.ts]
import { defineStore } from 'pinia';

type {clipboard}Store = { 
  count: number;
} 

export const use{clipboard}Store = defineStore('{clipboard}', {
  state: (): {clipboard}Store => ({ 
    count: 0,
  }), 
  getters: { 
    getCount(): number { 
      return this.count; 
    }
  },
  actions: { 
    increment() {
      this.count++; 
    }, 
  } 
});
```

### Composable Function Template: `!cps`

Composable functions in Vue 3 bring reusability and organization to your code. The `!cps` snippet offers a template for creating these functions, aiding in maintaining a clean and modular codebase.

**Usage Example:** Use `!cps` for creating reusable composable functions that can be shared across components, enhancing code reusability and maintainability.

```ts [~/composables/useComposables.ts]
export function use{clipboard}() {
  const {clipboard} = ref(null);
  
  // Composable logic
  
  return { {clipboard} };
}
```

### Fetching Data with Composition API: `!fcomp`

The `!fcomp` snippet is designed for fetching data using Vue's Composition API. It provides a setup for making HTTP requests, handling loading states, and managing errors, all within a component.

**Usage Example:** Implement `!fcomp` in scenarios where you need to fetch data from an API, providing a robust structure for data fetching and state management.

```vue [MyComponent.vue]
<script setup lang="ts">
const { data, pending, error, refresh } = useFetch("your_url", { 
  immediate: false,
  watch: false,
});

function loadData() {
  await refresh();
}
</script>

<template>
  <div>
    <button @click="loadData">Load Data</button>
    <div v-if="pending">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <div v-if="data">{{ data }}</div>
  </div>
</template>

<style scoped>
/* composant styles */
</style>
```

### Why Use These Snippets?

#### Enhance Productivity

Raycast snippets save time and effort by providing ready-to-use code templates, allowing you to focus on the unique aspects of your project.

#### Maintain Consistency

Using standardized snippets ensures consistency across your codebase, making it easier to read, maintain, and collaborate on.

#### Streamline Development

Snippets cater to common development tasks, streamlining your workflow and reducing the likelihood of errors or oversights.

#### Foster Learning

For new developers or those new to Nuxt and Vue, these snippets offer insight into best practices and efficient coding patterns.

In conclusion, incorporating these Raycast snippets into your Nuxt and Vue development workflow can significantly enhance productivity, maintain code consistency, and streamline your development process. Whether you're building a small project or a large-scale application, these snippets are invaluable tools in the modern developer's arsenal.
