export default function Files({ frontMatter }) {
  console.log(frontMatter)
  if (!frontMatter?.additional_files || !frontMatter.additional_files.length)
    return null;
  return (
    <div
      style={{ display: "flex", flexDirection: "column", paddingTop: "1rem" }}
    >
      <h2>Additional Files</h2>
      {frontMatter.additional_files.map((path, index) => (
        <a href={path} target="_blank" key={index}>
          {path.split("/").pop()}
        </a>
      ))}
    </div>
  );
}
