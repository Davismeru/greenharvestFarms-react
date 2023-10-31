import { Element, scroller } from "react-scroll";

function Objectives() {
  return (
    <Element name="objectives" className="gradient text-white p-5">
      {/* objectives */}
      <div className="objectives-container">
        <h1 className="text-center mb-10 font-bold text-3xl">
          <span className="text-gray-50">Objectives</span>
        </h1>
        {/* Single objective */}
        <section className="mb-7">
          <p>
            Sustainably cultivate drought-resitant crops that are resilient to
            arid conditions, ensuring a food supply for the local community
          </p>
          <div className="objective">
            <img src="/images/camel.jpg" alt="camel" className="rounded-md" />
          </div>
        </section>

        {/* Single objective */}
        <section className="mb-7">
          <p>
            Leverage technology and modern agricultural practices to enhance
            crop production, reduce waste and improve the quality of locally
            grown produce.
          </p>
          <div className="objective">
            <img
              src="/images/tractor.jpg"
              alt="tractor"
              className="rounded-md"
            />
          </div>
        </section>

        {/* Single objective */}
        <section className="mb-7">
          <p>
            Establish and maintain patnership with local markets, retailers and
            consumers for distribution of of fresh, locally grown crops.
          </p>
          <div className="objective">
            <img src="/images/plants.jpg" alt="camel" className="rounded-md" />
          </div>
        </section>

        {/* Single objective */}
        <section className="mb-7">
          <p>
            Contribute to the reduction of dependency on imported agricultural
            products and enhance food security in the region.
          </p>
          <div className="objective">
            <img src="/images/dessert.jpg" alt="camel" className="rounded-md" />
          </div>
        </section>

        {/* Single objective */}
        <section className="mb-7">
          <p>
            Create economic opportunities for small-scale farmers, generate
            employment and simulate local economic growth.
          </p>
          <div className="objective">
            <img src="/images/horses.jpg" alt="camel" className="rounded-md" />
          </div>
        </section>
      </div>
    </Element>
  );
}

export default Objectives;
