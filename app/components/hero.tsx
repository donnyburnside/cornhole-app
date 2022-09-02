export function Hero() {
  return (
    <section>
      <figure className="mb-2.5 bg-indigo-600">
        <img src="/cornhole.jpeg" alt="A woman playing cornhole" />
      </figure>
      <h2 className="mb-2.5 text-2xl sm:text-4xl font-bold text-gray-900">
        Are <span className="text-indigo-600">you</span> ready to play?
      </h2>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="mt-2.5">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p className="mt-2.5">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
  );
}
