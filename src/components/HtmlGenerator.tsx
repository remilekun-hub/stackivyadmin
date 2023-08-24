import { TypographyStylesProvider } from "@mantine/core";
import { generateHTML, JSONContent } from "@tiptap/core";
import Highlight from "@tiptap/extension-highlight";
import StarterKit from "@tiptap/starter-kit";
import SubScript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";

export default function HtmlGenerator({
  content,
}: {
  content: { type?: string; content?: JSONContent[] | undefined };
}) {
  return (
    <TypographyStylesProvider>
      <div
        className="leading-[17px]"
        dangerouslySetInnerHTML={{
          __html: generateHTML(content, [
            StarterKit,
            Highlight,
            SubScript,
            Link,
            Superscript,
            TextAlign,
            Underline,
          ]),
        }}
      />
    </TypographyStylesProvider>
  );
}
