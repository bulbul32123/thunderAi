"use client"

import { useState } from "react"
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable"
import { FileExplorer } from "@/components/file-explorer"
import { Code2, Eye, Copy, Download, MoreVertical, Split } from "lucide-react"
import { EditorPanel } from "@/components/editor-panel"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const mockProject = {
  framework: "nextjs",
  router: "app",
  files: [
    // ===== app/layout.tsx =====
    {
      path: "app/layout.tsx",
      content: `import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/header'

export const metadata: Metadata = {
  title: 'Resume Builder',
  description: 'Build resumes instantly with AI-powered Resume Builder',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Header />
        {children}
      </body>
    </html>
  )
}`,
    },
    {
      path: "app/page.tsx",
      content: `import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6">
      <h1 className="text-5xl font-bold text-gray-800">AI Resume Builder</h1>
      <p className="text-gray-600 text-lg">
        Create professional resumes instantly
      </p>
      <Link
        href="/builder"
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Start Building
      </Link>
    </div>
  )
}`,
    },
    {
      path: "app/builder/page.tsx",
      content: `import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function BuilderPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [experience, setExperience] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async () => {
    try {
      const res = await fetch('/api/resume', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, experience }),
      })
      if (res.ok) setSubmitted(true)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="max-w-3xl mx-auto py-12 space-y-6">
      <h2 className="text-3xl font-semibold">Create Your Resume</h2>

      {submitted ? (
        <div className="p-6 bg-green-100 rounded-md">
          <p className="text-green-800 font-medium">
            Resume submitted successfully!
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Full Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2"
              placeholder="John Doe"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2"
              placeholder="john@example.com"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Experience</label>
            <textarea
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 h-32"
              placeholder="Describe your work experience..."
            />
          </div>

          <Button onClick={handleSubmit}>Submit Resume</Button>
        </div>
      )}
    </div>
  )
}`,
    },
    {
      path: "app/api/resume/route.ts",
      content: `import { NextRequest, NextResponse } from 'next/server'

let resumeData: any[] = []

export async function GET() {
  return NextResponse.json(resumeData)
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    resumeData.push(body)
    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: 'Failed to submit resume' }, { status: 500 })
  }
}`,
    },
    {
      path: "components/header.tsx",
      content: `import Link from 'next/link'

export function Header() {
  return (
    <header className="w-full bg-white shadow p-4 flex justify-between items-center">
      <h1 className="font-bold text-lg">Resume Builder</h1>
      <nav className="space-x-4">
        <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
        <Link href="/builder" className="text-gray-700 hover:text-gray-900">Builder</Link>
      </nav>
    </header>
  )
}`,
    },
    {
      path: "components/ui/button.tsx",
      content: `import * as React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700',
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'`,
    },
    {
      path: "lib/utils.ts",
      content: `export function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}`,
    },
    {
      path: "app/globals.css",
      content: `@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-gray-50 text-gray-800;
}`,
    },
    {
      path: "package.json",
      content: `{
  "name": "resume-builder",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "tailwindcss": "^3.3.0"
  }
}`,
    },
    {
      path: "packasge.json",
      content: `{
  "name": "resume-builder",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "tailwindcss": "^3.3.0"
  }
}`,
    },
    {
      path: "packassdfge.json",
      content: `{
  "name": "resume-builder",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "tailwindcss": "^3.3.0"
  }
}`,
    },
    {
      path: "3.json",
      content: `{
  "name": "resume-builder",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "tailwindcss": "^3.3.0"
  }
}`,
    },
    {
      path: "6.json",
      content: `{
  "name": "resume-builder",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "tailwindcss": "^3.3.0"
  }
}`,
    },
    {
      path: "9.json",
      content: `{
  "name": "resume-builder",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "tailwindcss": "^3.3.0"
  }
}`,
    },
    {
      path: "3345.json",
      content: `{
  "name": "resume-builder",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "tailwindcss": "^3.3.0"
  }
}`,
    },
    {
      path: "3fs .json",
      content: `{
  "name": "resume-builder",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "tailwindcss": "^3.3.0"
  }
}`,
    },
  ],
}

function Breadcrumb({ path }) {
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
export default function WorkspaceLayout() {
  const [activeFile, setActiveFile] = useState(mockProject.files[0].path)
  const activeFileObj = mockProject?.files?.find(f => f.path === activeFile)
  const [tab, setTab] = useState("code")
  const handleCopy = () => {
    if (activeFileObj) navigator.clipboard.writeText(activeFileObj.content)
  }
  return (
    <div className="h-screen w-full bg-background text-black">
      <Tabs value={tab} className="flex-1 flex flex-col ">
            <div className="border-b border-gray-300">
          <TabsList className="h-12 w-full bg-transparent rounded-none px-4 flex justify-between items-center">
            <div className="flex gap-2 border ">
            <TabsTrigger value="code" onClick={()=> setTab('code')} className={`rounded-none flex items-center !cursor-pointer ${tab === 'code'&& '!bg-black !text-white'}`}>
              <Code2 className="h-4 w-4 mr-2 " /> Code
            </TabsTrigger>
            <TabsTrigger value="preview"  onClick={()=> setTab('preview')} className={`rounded-none flex items-center !cursor-pointer ${tab === 'preview' && '!bg-black !text-white'}`}>
              <Eye className="h-4 w-4 mr-2" /> Preview
            </TabsTrigger>
            </div>
            <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8 cursor-pointer">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
          </TabsList>
        </div>
      </Tabs>
      <ResizablePanelGroup direction="horizontal">
        {tab === 'code' ? (
          <>
          <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
          <FileExplorer files={mockProject.files} activeFile={activeFile} onFileSelect={setActiveFile} />
        </ResizablePanel>
        <ResizableHandle className="bg-border text-black" />
        <ResizablePanel defaultSize={80}>
          <EditorPanel files={mockProject?.files} tab={tab} setTab={setTab} activeFile={activeFile} />
        </ResizablePanel>
          </>
        ): (
          <div className="h-full w-full flex items-center justify-center bg-gray-100">
            <div className="text-center space-y-2">
              <Eye className="h-12 w-12 mx-auto text-gray-400" />
              <p className="text-lg font-medium">Live Preview</p>
              <p className="text-sm text-gray-500">Preview coming soon</p>
            </div>
          </div>
        )
        }
      </ResizablePanelGroup>
    </div>
  )
}
