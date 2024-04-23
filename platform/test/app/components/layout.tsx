import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="min-h-screen min-w-screen flex flex-col justify-center items-center relative w-full">
      {children}
    </div>
  );
}
