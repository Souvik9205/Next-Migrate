// src/builderService.js
import { builder } from "@builder.io/react";

// Initialize Builder.io with your API key
builder.init("c6deead7e9874e8fbd32018bf8815dca");

// Function to fetch a single model or specific entry
export const fetchModel = async (modelName, options = {}) => {
  try {
    const content = await builder.get(modelName, options).promise();
    return content;
  } catch (error) {
    console.error(`Error fetching ${modelName} content:`, error);
    throw error;
  }
};

// Function to fetch a specific blog by slug or ID
export const fetchBlogBySlug = async (slug) => {
  try {
    const content = await builder
      .get("blog", {
        query: {
          "data.slug": slug,
        },
      })
      .promise();
    return content;
  } catch (error) {
    console.error(`Error fetching blog by slug: ${slug}`, error);
    throw error;
  }
};
