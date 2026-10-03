import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cipher | Private Password Analyzer & Generator" },
      { name: "description", content: "Analyze password strength and generate secure passwords privately, entirely on your device." },
      { property: "og:title", content: "Cipher | Private Password Analyzer & Generator" },
      { property: "og:description", content: "A private password workbench. Analyze and generate passwords entirely on your device." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  loader: () => { throw redirect({ href: "/password-tool.html" }); },
});
