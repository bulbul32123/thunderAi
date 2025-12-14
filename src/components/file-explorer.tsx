"use client"
import { useState } from "react"
import { ChevronRight, ChevronDown, FileCode, FileJson, FileText, Folder } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

interface FileNode {
  path: string
  content: string
}

interface FolderStructure {
  [key: string]: FolderStructure | "file"
}

function buildFolderTree(files: FileNode[]): FolderStructure {
  const tree: FolderStructure = {}

  files.forEach((file) => {
    const parts = file.path.split("/")
    let current = tree

    parts.forEach((part, index) => {
      if (index === parts.length - 1) {
        current[part] = "file"
      } else {
        if (!current[part] || current[part] === "file") {
          current[part] = {}
        }
        current = current[part] as FolderStructure
      }
    })
  })

  return tree
}

function getFileIcon(fileName: string) {
  if (fileName.endsWith(".json")) return <FileJson className="h-4 w-4" />
  if (fileName.endsWith(".css")) return <FileText className="h-4 w-4" />
  return <FileCode className="h-4 w-4" />
}

interface TreeNodeProps {
  name: string
  node: FolderStructure | "file"
  path: string
  activeFile: string
  onFileSelect: (path: string) => void
  level: number
}

function TreeNode({ name, node, path, activeFile, onFileSelect, level }: TreeNodeProps) {
  const [expanded, setExpanded] = useState(true)
  const isFile = node === "file"
  const isActive = activeFile === path

  if (isFile) {
    return (
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start h-7 px-2 font-normal text-sm hover:bg-accent",
          isActive && "bg-accent text-accent-foreground",
        )}
        style={{ paddingLeft: `${level * 12 + 8}px` }}
        onClick={() => onFileSelect(path)}
      >
        <span className="mr-2 text-muted-foreground">{getFileIcon(name)}</span>
        <span className="truncate">{name}</span>
      </Button>
    )
  }

  return (
    <div>
      <Button
        variant="ghost"
        className="w-full justify-start h-7 px-2 font-normal text-sm hover:bg-accent"
        style={{ paddingLeft: `${level * 12 + 8}px` }}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? (
          <ChevronDown className="h-4 w-4 mr-1 text-muted-foreground" />
        ) : (
          <ChevronRight className="h-4 w-4 mr-1 text-muted-foreground" />
        )}
        <Folder className="h-4 w-4 mr-2 text-muted-foreground" />
        <span className="truncate">{name}</span>
      </Button>
      {expanded && (
        <div>
          {Object.entries(node)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([childName, childNode]) => {
              const childPath = path ? `${path}/${childName}` : childName
              return (
                <TreeNode
                  key={childPath}
                  name={childName}
                  node={childNode}
                  path={childPath}
                  activeFile={activeFile}
                  onFileSelect={onFileSelect}
                  level={level + 1}
                />
              )
            })}
        </div>
      )}
    </div>
  )
}

interface FileExplorerProps {
  files: FileNode[]
  activeFile: string
  onFileSelect: (path: string) => void
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

export function FileExplorer({ files, activeFile, onFileSelect }: FileExplorerProps) {
  const tree = buildFolderTree(files)


  return (
    <div className="flex flex-col h-full bg-background">
      <div className="h-12 flex items-center px-4 border-b border-gray-300">
        <h2 className="text-sm font-semibold">File Explorer</h2>
      </div>
      <ScrollArea className="">
        <div className="p-2 flex flex-col h-[85vh] overflow-x-hidden">
          {Object.entries(tree).map(([name, node]) => (
            <TreeNode
              key={name}
              name={name}
              node={node}
              path={name}
              activeFile={activeFile}
              onFileSelect={onFileSelect}
              level={0}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
