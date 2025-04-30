import Image from "next/image";

function Overview() {
  return (
    <section className="py-4 px-2 -page-section">
      <section className="flex text-gray-600 text-sm pb-2">
        <section className="flex-5"></section>
        <section className="flex-1">H1</section>
        <section className="flex-1">H2</section>
        <section className="flex-1 text-gray-900">T</section>
      </section>

      <section className="border border-b-0 border-input">
        <section className="border-b border-input py-3 flex items-center">
          <section className="flex-5 flex items-center gap-1 px-2">
            <Image
              src="https://www.bettingpros.com/assets/images/logos/soccer/50x50/RBB.webp"
              alt="logo"
              width={40}
              height={40}
            />
            <p className="font-semibold">Real Betis Seville</p>
          </section>
          <section className="flex-1 text-gray-600">3</section>
          <section className="flex-1 text-gray-600">0</section>
          <section className="flex-1 text-gray-900">3</section>
        </section>

        <section className="border-b border-input py-3 flex items-center">
          <section className="flex-5 flex items-center gap-1 px-2">
            <Image
              src="https://www.bettingpros.com/assets/images/logos/soccer/50x50/RBB.webp"
              alt="logo"
              width={40}
              height={40}
            />
            <p className="font-semibold">Real Betis Seville</p>
          </section>
          <section className="flex-1 text-gray-600">3</section>
          <section className="flex-1 text-gray-600">0</section>
          <section className="flex-1 text-gray-900">3</section>
        </section>
      </section>
    </section>
  );
}

export default Overview;
