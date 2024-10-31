// pages/categories/plastic-bottles.js
import Layout from '../../components/Layout';

export default function PlasticBottles() {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Plastic Bottles</h1>
        <article>
          <h2 className="text-2xl font-semibold mb-2">The Environmental Impact of Plastic Bottles</h2>
          <p>
            Plastic bottles are among the most widely used containers worldwide, contributing significantly to pollution. In the United States alone, approximately 60 million plastic bottles are thrown away every day. These bottles take hundreds of years to decompose, leading to severe ecological consequences. By understanding the impact of plastic bottles on our planet, we can make more informed choices about their use.
          </p>
          <h2 className="text-2xl font-semibold mb-2">How to Recycle Plastic Bottles</h2>
          <p>
            To recycle plastic bottles effectively:
            <ul className="list-disc ml-6">
              <li>Clean and Dry: Rinse bottles to remove any residue.</li>
              <li>Cap Off: Remove caps, as they are often made of a different type of plastic.</li>
              <li>Check Local Guidelines: Recycling rules vary by location, so always verify what is accepted in your area.</li>
              <li>Drop Off: Take your cleaned bottles to your local recycling facility or designated recycling bins.</li>
            </ul>
          </p>
          <h2 className="text-2xl font-semibold mb-2">Upcycling Plastic Bottles</h2>
          <p>
            Instead of throwing away plastic bottles, consider these creative projects:
            <ul className="list-disc ml-6">
              <li>Planters: Cut the bottles in half, add soil, and plant herbs or flowers.</li>
              <li>Bird Feeders: Make a bird feeder by cutting openings in a bottle, filling it with birdseed, and hanging it outside.</li>
            </ul>
          </p>
        </article>
      </div>
    </Layout>
  );
}
