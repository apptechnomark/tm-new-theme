import DataComponent from "./_dataComponent";
async function fetchHomeData() {
  try {
    const res = await fetch("https://tm-new-theme.vercel.app/home.json", {
      cache: "no-store",
      next: { revalidate: 10 },
    });
    return res.json();
  } catch (error) {
    console.error("Error fetching home page data:", error);
    return null;
  }
}

export default async function Page() {
  const data = await fetchHomeData();

  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((id) => (
        <DataComponent id={id} key={id} data={data} />
      ))}
    </>
  );
}
