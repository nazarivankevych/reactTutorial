function JsonInput() {
  return (
    <label>
      Workflow or Atomic Action JSON:
      <textarea
        className="border-4"
        name="postContent"
        defaultValue="I really enjoyed biking yesterday!"
        rows={4}
        cols={40}
      />
    </label>
  );
}

export default JsonInput;