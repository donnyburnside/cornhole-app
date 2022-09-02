export function Export() {
  return (
    <div className="mt-10">
      <h2 className="relative mb-2.5 text-xl font-bold text-gray-900">
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 block w-full h-0 border-t-2 border-gray-300" aria-hidden="true" role="presentation"></span>
        <span className="relative z-10 inline-block pr-2.5 bg-gray-50">
          Export
        </span>
      </h2>
      <p>
        Share your glory with the world by printing or exporting the results.
      </p>
      <ul className="mt-2.5 grid grid-cols-2 gap-2.5 sm:gap-5">
        <li className="">
          <button className="w-full flex flex-row flex-nowrap items-center text-sm font-bold" type="button" onClick={() => console.log('Export')}>
            <span className="block p-2 bg-indigo-600 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
              </svg>
            </span>
            <span className="pl-2.5">
              Export
            </span>
          </button>
        </li>
        <li className="">
          <button className="w-full flex flex-row flex-nowrap items-center text-sm font-bold" type="button" onClick={() => console.log('Print')}>
            <span className="block p-2 bg-indigo-600 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M5 2.75C5 1.784 5.784 1 6.75 1h6.5c.966 0 1.75.784 1.75 1.75v3.552c.377.046.752.097 1.126.153A2.212 2.212 0 0118 8.653v4.097A2.25 2.25 0 0115.75 15h-.241l.305 1.984A1.75 1.75 0 0114.084 19H5.915a1.75 1.75 0 01-1.73-2.016L4.492 15H4.25A2.25 2.25 0 012 12.75V8.653c0-1.082.775-2.034 1.874-2.198.374-.056.75-.107 1.127-.153L5 6.25v-3.5zm8.5 3.397a41.533 41.533 0 00-7 0V2.75a.25.25 0 01.25-.25h6.5a.25.25 0 01.25.25v3.397zM6.608 12.5a.25.25 0 00-.247.212l-.693 4.5a.25.25 0 00.247.288h8.17a.25.25 0 00.246-.288l-.692-4.5a.25.25 0 00-.247-.212H6.608z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="pl-2.5">
              Print
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
}
