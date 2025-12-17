// components/editor-panel.tsx
"use client"

import { useState } from "react"
import { Code2, Eye, Copy, Download, MoreVertical, Split } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeEditor } from "./code-editor"

interface FileNode {
  path: string
  content: string
}

interface EditorPanelProps {
  files: FileNode[]
  activeFile: string
}

function Breadcrumb({ path }: { path: string }) {
  const parts = path.split("/")
  return (
    <div className="flex items-center gap-1 text-sm text-muted-foreground">
      {parts.map((part, idx) => (
        <div key={idx} className="flex items-center">
          {idx > 0 && <span className="mx-1">›</span>}
          <span className={idx === parts.length - 1 ? "text-foreground" : ""}>
            {part}
          </span>
        </div>
      ))}
    </div>
  )
}

export function EditorPanel({ files, activeFile,tab, setTab }: EditorPanelProps) {
  const activeFileObj = files.find(f => f.path === activeFile)

  const handleCopy = () => {
    if (activeFileObj) navigator.clipboard.writeText(activeFileObj.content)
  }

  return (
    <div className="h-full flex flex-col bg-gray-50">
           {/* Tabs */}
      <Tabs value={tab} onValueChange={(v) => setTab(v as "code" | "preview")} className="flex flex-col">
        <div className="h-12 flex border-b border-gray-300 items-center justify-between px-2">
            <div className="border border-gray-300 py-2 px-3">
                <Breadcrumb path={activeFile} />
            </div>
        <div className='flex gap-1 border border-gray-300 px-3'>
        <Button variant="ghost" size="icon" className="w-8 cursor-pointer " onClick={handleCopy}>
            <Copy className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="w-8 cursor-pointer">
            <Download className="h-4 w-4" />
          </Button>
        </div>
        
      </div>
        {/* Tab contents */}
        <TabsContent value="code">
          <CodeEditor content={activeFileObj?.content || ""} fileName={activeFile} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
