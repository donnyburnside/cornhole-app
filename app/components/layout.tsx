export function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="w-full max-w-4xl mx-auto p-2.5 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-5">
      <header className="col-span-full">
        <h1 className="text-2xl font-bold text-gray-900">
          The best cornhole scoring application ever
        </h1>
      </header>
      {children}
    </div>
  );
}
