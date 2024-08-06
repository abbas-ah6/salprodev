"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import ServicesHero from "./components/ServicesHero/ServicesHero";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(ServicesHero, {
  name: "ServicesHero",
  inputs: [
    {
      name: "title",
      type: "string",
    },    {
      name: "description",
      type: "longText",
    },    {
      name: "icon",
      type: "file",
    },
  ],
});