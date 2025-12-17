// components/code-editor.tsx
"use client"

import { useEffect, useState } from "react"
import { getHighlighter } from "shiki"

interface CodeEditorProps {
  content: string
  fileName: string
}

export function CodeEditor({ content, fileName }: CodeEditorProps) {
  const [html, setHtml] = useState("")

  useEffect(() => {
    async function run() {
      const highlighter = await getHighlighter({
        themes: ["github-light"],
        langs: ["ts", "tsx", "js", "json", "css"],
      })

      const lang =
        fileName.endsWith(".tsx") ? "tsx" :
        fileName.endsWith(".ts") ? "ts" :
        fileName.endsWith(".css") ? "css" :
        fileName.endsWith(".json") ? "json" :
        "ts"

      const result = highlighter.codeToHtml(content, {
        lang,
        theme: "github-light",
        transformers: [
          {
            pre(node) {
              node.properties.class = "shiki code-with-line-numbers"
            },
          },
        ],
      })

      setHtml(result)
    }

    run()
  }, [content, fileName])

  return (
    <div className="h-[85vh] overflow-x-hidden bg-white pb-10">
      <div
        className="shiki min-h-full"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
