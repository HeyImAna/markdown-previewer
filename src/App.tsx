import React from "react";
import { useState } from "react";
import "./scss/style.scss";

import Editor, { defaultMarkdown } from "./components/Editor";
import Preview from "./components/Preview";

export type GlobalContent = {
  markdown: string;
  setMarkdown: React.Dispatch<React.SetStateAction<string>>;
};

export const MarkdownContext = React.createContext<GlobalContent>({
  markdown: defaultMarkdown,
  setMarkdown: () => {},
});

function App() {
  const [markdown, setMarkdown] = useState<string>(defaultMarkdown);
  return (
    <div className="grid">
      <MarkdownContext.Provider value={{ markdown, setMarkdown }}>
        <Editor />
        <Preview />
      </MarkdownContext.Provider>
    </div>
  );
}

export default App;
