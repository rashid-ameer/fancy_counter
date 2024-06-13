function Title({ locked }) {
  return (
    <h1 className="title">
      {locked ? (
        <>
          Limit! Buy <b>Pro</b> for &gt; 5
        </>
      ) : (
        "Fancy Counter"
      )}
    </h1>
  );
}

export default Title;
