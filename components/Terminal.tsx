"use client";

import { useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { social } from "@/data/social";

const responses: Record<string, string> = {
  help: "Available commands: <b>help</b>, <b>skills</b>, <b>hobbies</b>, <b>contact</b>, <b>clear</b>",
  skills:
    "Python · Java · Golang · FastAPI · Kafka · Pulsar · Docker · Kubernetes · LangGraph · LangChain",
  hobbies: "Painting, watching movies, photography.",
  contact: `Email: ${social.email}<br/>LinkedIn: ${social.linkedin}`,
};

type TerminalLine = {
  id: number;
  html: string;
};

export function Terminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      id: 0,
      html: '<span class="text-[var(--ink-soft)]">Welcome! Type <b>help</b> to see available commands.</span>',
    },
  ]);
  const [input, setInput] = useState("");
  const nextId = useRef(1);
  const bodyRef = useRef<HTMLDivElement>(null);

  function appendLine(html: string) {
    const id = nextId.current++;
    setLines((current) => [...current, { id, html }]);
    window.requestAnimationFrame(() => {
      if (bodyRef.current) {
        bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
      }
    });
  }

  function handleSubmit() {
    const value = input.trim().toLowerCase();
    if (!value) return;

    appendLine(
      `<span class="text-[var(--magenta-deep)]">smriti@portfolio ~ %</span> ${value}`,
    );

    if (value === "clear") {
      setLines([]);
    } else if (responses[value]) {
      appendLine(`<span class="text-[var(--ink-soft)]">${responses[value]}</span>`);
    } else {
      appendLine(
        `<span class="text-[var(--ink-soft)]">command not found: ${value} — try <b>help</b></span>`,
      );
    }

    setInput("");
  }

  return (
    <section className="flex flex-col items-center px-[6vw] pb-10 pt-16 sm:px-[8vw]">
      <Reveal className="w-full max-w-[780px]">
        <div className="overflow-hidden rounded-[20px] border-[1.5px] border-[var(--line)] bg-[var(--paper-strong)] shadow-[0_30px_70px_-25px_rgba(142,18,71,0.2)] backdrop-blur-md">
          <div className="flex items-center gap-2 border-b border-[var(--line)] bg-[rgba(251,220,232,0.55)] px-[18px] py-3.5 backdrop-blur-sm">
            <span className="h-[11px] w-[11px] rounded-full bg-[#E8775A]" />
            <span className="h-[11px] w-[11px] rounded-full bg-[#E8B23C]" />
            <span className="h-[11px] w-[11px] rounded-full bg-[#8FA378]" />
            <span className="font-inter ml-2.5 text-[0.78rem] text-[var(--ink-soft)]">
              smriti@portfolio — zsh
            </span>
          </div>

          <div
            ref={bodyRef}
            className="font-mono max-h-[340px] min-h-[240px] overflow-y-auto bg-[var(--paper)] px-[26px] py-6 text-[0.92rem] leading-[1.8] text-[var(--ink)] backdrop-blur-sm"
          >
            {lines.map((line) => (
              <div
                key={line.id}
                className="mb-1.5"
                dangerouslySetInnerHTML={{ __html: line.html }}
              />
            ))}

            <div className="-mx-[26px] mt-2 border-t border-[var(--line)] bg-[rgba(251,244,232,0.72)] px-[26px] py-3 backdrop-blur-sm">
              <div className="flex items-center">
                <span className="mr-2 shrink-0 text-[var(--magenta-deep)]">
                  smriti@portfolio ~ %
                </span>
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") handleSubmit();
                  }}
                  type="text"
                  autoComplete="off"
                  spellCheck={false}
                  placeholder="type a command..."
                  className="font-mono w-full border-none bg-transparent text-[0.92rem] text-[var(--ink)] outline-none placeholder:text-[var(--ink-soft)]/70"
                  style={{ caretColor: "var(--magenta)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
