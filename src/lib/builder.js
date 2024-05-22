// lib/builder.js
import { Builder } from "@builder.io/react";

// Replace 'YOUR_PUBLIC_API_KEY' with your actual Builder.io public API key
const API_KEY =
  process.env.NEXT_PUBLIC_BUILDER_API_KEY || "c6deead7e9874e8fbd32018bf8815dca";
Builder.init(API_KEY);
