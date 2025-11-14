export default function HomePage() {
  const mapsUrl = "https://www.google.com/maps/place/CPK+Real+Estate/data=!4m7!3m6!1s0x182f174fa880d92b:0xeed278d71fbe1b4d!8m2!3d-1.266345!4d36.8016281!16s/g/11h030f3sl!19sChIJK9mAqE8XLxgRTRu-H9d40u4?authuser=0&hl=en&rclk=1";
  const embedUrl = "https://www.google.com/maps?q=-1.266345,36.8016281&z=16&output=embed";

  return (
    <main className="container">
      <header className="header">
        <h1>CPK Real Estate</h1>
        <p className="subtitle">Nairobi, Kenya</p>
        <div className="ctaRow">
          <a className="cta" href={mapsUrl} target="_blank" rel="noreferrer noopener">Open in Google Maps</a>
        </div>
      </header>

      <section className="card">
        <h2>Location</h2>
        <div className="mapWrap">
          <iframe
            title="CPK Real Estate Location"
            src={embedUrl}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <ul className="details">
          <li><strong>Latitude:</strong> -1.266345</li>
          <li><strong>Longitude:</strong> 36.8016281</li>
        </ul>
      </section>

      <footer className="footer">
        <span>? {new Date().getFullYear()} CPK Real Estate</span>
      </footer>
    </main>
  );
}
