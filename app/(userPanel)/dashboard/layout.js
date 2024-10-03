export default async function RootLayout({ children }) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
