"use client";

import {
    ModelSelector,
    ModelSelectorContent,
    ModelSelectorEmpty,
    ModelSelectorGroup,
    ModelSelectorInput,
    ModelSelectorItem,
    ModelSelectorList,
    ModelSelectorLogo,
    ModelSelectorLogoGroup,
    ModelSelectorName,
    ModelSelectorTrigger,
} from "@/components/ai-elements/model-selector";

import {
    PromptInput,
    PromptInputActionAddAttachments,
    PromptInputActionMenu,
    PromptInputActionMenuContent,
    PromptInputActionMenuTrigger,
    PromptInputAttachment,
    PromptInputAttachments,
    PromptInputBody,
    PromptInputButton,
    PromptInputFooter,
    PromptInputProvider,
    PromptInputSpeechButton,
    PromptInputSubmit,
    PromptInputTextarea,
    PromptInputTools,
} from "@/components/ai-elements/prompt-input";

import { CheckIcon, GlobeIcon } from "lucide-react";
import { useRef, useState } from "react";

const models = [
    { id: "gpt-4o", name: "GPT-4o", chef: "OpenAI", chefSlug: "openai", providers: ["openai"] },
    { id: "gpt-4o-mini", name: "GPT-4o Mini", chef: "OpenAI", chefSlug: "openai", providers: ["openai"] },
    { id: "claude-opus-4", name: "Claude 4 Opus", chef: "Anthropic", chefSlug: "anthropic", providers: ["anthropic"] },
    { id: "gemini-2-flash", name: "Gemini 2 Flash", chef: "Google", chefSlug: "google", providers: ["google"] },
];

const SUBMITTING_TIMEOUT = 200;
const STREAMING_TIMEOUT = 2000;

export default function Dashboard() {
    const [model, setModel] = useState(models[0].id);
    const [modelSelectorOpen, setModelSelectorOpen] = useState(false);
    const [status, setStatus] = useState("ready");
    const textareaRef = useRef(null);

    const selectedModelData = models.find((m) => m.id === model);

    const handleSubmit = (message) => {
        if (!message.text && !message.files?.length) return;

        setStatus("submitted");
        setTimeout(() => setStatus("streaming"), SUBMITTING_TIMEOUT);
        setTimeout(() => setStatus("ready"), STREAMING_TIMEOUT);
    };

    return (
        <div className="w-full max-w-[724px] mx-auto px-4">
            <PromptInputProvider>
                {/* 🔥 Animated Border Wrapper */}
                <div className="ai-prompt-border">
                    <PromptInput
                        globalDrop
                        multiple
                        onSubmit={handleSubmit}
                        className="ai-prompt-inner"
                    >
                        <PromptInputAttachments>
                            {(attachment) => (
                                <PromptInputAttachment data={attachment} />
                            )}
                        </PromptInputAttachments>

                        <PromptInputBody>
                            <PromptInputTextarea
                                ref={textareaRef}
                                placeholder="What can Rocket build for you today?"
                                className="resize-none min-h-[90px]"
                            />
                        </PromptInputBody>

                        <PromptInputFooter>
                            <PromptInputTools>
                                <PromptInputActionMenu>
                                    <PromptInputActionMenuTrigger />
                                    <PromptInputActionMenuContent>
                                        <PromptInputActionAddAttachments />
                                    </PromptInputActionMenuContent>
                                </PromptInputActionMenu>

                                <PromptInputSpeechButton textareaRef={textareaRef} />

                                <PromptInputButton>
                                    <GlobeIcon size={16} />
                                    <span>Search</span>
                                </PromptInputButton>

                                <ModelSelector
                                    open={modelSelectorOpen}
                                    onOpenChange={setModelSelectorOpen}
                                >
                                    <ModelSelectorTrigger asChild>
                                        <PromptInputButton>
                                            {selectedModelData?.chefSlug && (
                                                <ModelSelectorLogo
                                                    provider={selectedModelData.chefSlug}
                                                />
                                            )}
                                            <ModelSelectorName>
                                                {selectedModelData?.name}
                                            </ModelSelectorName>
                                        </PromptInputButton>
                                    </ModelSelectorTrigger>

                                    <ModelSelectorContent>
                                        <ModelSelectorInput placeholder="Search models..." />
                                        <ModelSelectorList>
                                            <ModelSelectorEmpty>
                                                No models found
                                            </ModelSelectorEmpty>

                                            {["OpenAI", "Anthropic", "Google"].map((chef) => (
                                                <ModelSelectorGroup key={chef} heading={chef}>
                                                    {models
                                                        .filter((m) => m.chef === chef)
                                                        .map((m) => (
                                                            <ModelSelectorItem
                                                                key={m.id}
                                                                value={m.id}
                                                                onSelect={() => {
                                                                    setModel(m.id);
                                                                    setModelSelectorOpen(false);
                                                                }}
                                                            >
                                                                <ModelSelectorLogo provider={m.chefSlug} />
                                                                <ModelSelectorName>{m.name}</ModelSelectorName>
                                                                <ModelSelectorLogoGroup>
                                                                    {m.providers.map((p) => (
                                                                        <ModelSelectorLogo
                                                                            key={p}
                                                                            provider={p}
                                                                        />
                                                                    ))}
                                                                </ModelSelectorLogoGroup>
                                                                {model === m.id ? (
                                                                    <CheckIcon className="ml-auto size-4" />
                                                                ) : (
                                                                    <div className="ml-auto size-4" />
                                                                )}
                                                            </ModelSelectorItem>
                                                        ))}
                                                </ModelSelectorGroup>
                                            ))}
                                        </ModelSelectorList>
                                    </ModelSelectorContent>
                                </ModelSelector>
                            </PromptInputTools>

                            <PromptInputSubmit status={status} />
                        </PromptInputFooter>
                    </PromptInput>
                </div>
            </PromptInputProvider>
        </div>
    );
}
