// app/page.tsx
import axios from "axios";
import DataComponent from "./_dataComponent";

// Option 1: Async Server Component
async function fetchHomeData() {
  try {
    const res = await fetch("http://localhost:3000/home.json", {
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

  // Add a check for data
  if (!data) {
    return <div>Loading or No Data...</div>;
  }

  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((id) => (
        <DataComponent id={id} key={id} data={data} />
      ))}
    </>
  );
}
