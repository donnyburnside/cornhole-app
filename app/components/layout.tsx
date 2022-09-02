export function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="w-full max-w-4xl mx-auto p-2.5 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-5 sm:gap-x-10">
      <header className="col-span-full">
        <h1 className="text-2xl font-bold text-gray-900">
          The best <span className="text-indigo-600">cornhole</span> scoring application ever
        </h1>
      </header>
      {children}
    </div>
  );
}
