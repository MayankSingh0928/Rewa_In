import heroImage from '../assets/images/big_image_1.jpg';

function InnerHero({ title, copy }) {
  return (
    <section
      className="inner-hero"
      style={{
        backgroundImage: `linear-gradient(rgba(14, 18, 24, .62), rgba(14, 18, 24, .62)), url(${heroImage})`,
      }}
    >
      <div>
        <h1>{title}</h1>
        <p>{copy}</p>
      </div>
    </section>
  );
}

export default InnerHero;
