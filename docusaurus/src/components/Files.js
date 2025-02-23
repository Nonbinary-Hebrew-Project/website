export default function Files({ frontMatter }) {
  console.log(frontMatter)
  if (!frontMatter?.additional_files || !frontMatter.additional_files.length)
    return null;
  return (
    <div
      style={{ display: "flex", flexDirection: "column", paddingTop: "1rem" }}
    >
      <h3>Additional Files</h3>
      {frontMatter.additional_files.map((path) => (
        <a href={path} key={path}>
          {path.split("/").pop()}
        </a>
      ))}
    </div>
  );
}
