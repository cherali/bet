function Banner() {
  return (
    <section className="bg-white shadow shadow-gray-200 flex items-center justify-center mb-4 h-36">
      <section className="flex gap-2 font-bold text-2xl">
        <p>Real Betis Seville</p>
        <p>3</p>
      </section>

      <section className="flex flex-col gap-1 items-center text-xs w-40">
        <p>Apr, 21, 2025</p>
        <p className="font-semibold">FINAL</p>
        <p>O/U 2.5</p>
      </section>

      <section className="flex gap-2 font-bold text-2xl">
        <p>1</p>
        <p>Girona FC</p>
      </section>
    </section>
  );
}

export default Banner;
