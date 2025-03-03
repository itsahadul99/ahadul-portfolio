import { useState, useEffect } from "react";

const CodeHighlighter = () => {
    const [typedText, setTypedText] = useState<string>("");

    const codeSnippet: string = `// Welcome to my Portfolio! �
import { AhadulIslam } from 'itsahadul99';
import { Skills } from '@/expertise';

function createAmazingProjects() {
  const mySkills = {
    frontend: ["HTML", "CSS", "JavaScript", "React", "Redux", "Tailwind"],
    backend: ["Node.js", "Express", "MongoDB"],
    tools: ["Git", "VS Code", "Figma"],
    passion: "Building user-friendly web applications"
  };

  return {
    message: "Let's collaborate and create something amazing!",
    contact: "Scroll down to connect →"
  };
}`;

    // Reset typedText on mount (reload)
    useEffect(() => {
        setTypedText(""); // Start from empty string on every reload
    }, []);

    // Typing animation
    useEffect(() => {
        if (typedText.length >= codeSnippet.length) return;
        let currentIndex = typedText.length;
        const typingInterval = setInterval(() => {
            if (currentIndex < codeSnippet.length) {
                const newTypedText = codeSnippet.slice(0, currentIndex + 1);
                setTypedText(newTypedText);
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 50);

        return () => clearInterval(typingInterval);
    }, [typedText, codeSnippet]);

    // Highlighting logic
    const highlightCode = (text: string) => {
        return text.split('\n').map((line, lineIndex) => (
            <span key={`line-${lineIndex}`}>
                {line.split(/(\s+)/).map((word, wordIndex) => {
                    let className = "text-white"; // Default color

                    // Keywords
                    if (word.match(/^(import|function|const|return|from|to)$/)) {
                        className = "text-[#8E5BF8]"; // Purple for keywords
                    }
                    // Strings
                    else if (word.match(/^(['"]).*\1$/)) {
                        className = "text-[#996d6c]"; // Brown for strings
                    }
                    // Symbols
                    else if (word.match(/^[{}[\]():;,=><]+$/)) {
                        className = "text-red-400"; // Red for symbols
                    }
                    // Object keys
                    else if (word.match(/^(frontend|backend|tools|passion|mySkills)$/)) {
                        className = "text-green-400"; // Green for object keys
                    }

                    return (
                        <span key={`word-${lineIndex}-${wordIndex}`} className={className}>
                            {word}
                        </span>
                    );
                })}
                {'\n'}
            </span>
        ));
    };

    return (
        <pre className="whitespace-pre-wrap">
            <code className="block">
                {highlightCode(typedText)}
                <span className="cursor-blink text-[#8E5BF8]">|</span>
            </code>
        </pre>
    );
};

export default CodeHighlighter;