export default function PdfViewer({ frontMatter }) {
  if (
    !frontMatter?.pdf_file ||
    !frontMatter.pdf_file.length ||
    frontMatter.pdf_file === '""'
  )
    return null;
  return (
    <iframe
      src={`https://docs.google.com/gview?url=https://nonbinary-hebrew-project.netlify.app/${frontMatter.pdf_file}&embedded=true`}
      style={{ width: "100%", height: "30rem" }}
      frameborder="0"
    ></iframe>
  );
}
