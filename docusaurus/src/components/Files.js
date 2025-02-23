export default function Files({ frontMatter }) {
  if (!frontMatter?.files || !frontMatter.files.length) return null;
  return (
    <div>
      {frontMatter.files.map((path) => (
        <a href={path} key={path}>
          {path.split("/").pop()}
        </a>
      ))}
    </div>
  );
}
