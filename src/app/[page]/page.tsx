import DataComponent from "./_dataComponent";

export default function Home() {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16  ].map((id) => (
        <DataComponent id={id} key={id} />
      ))}
    </>
  );
}
