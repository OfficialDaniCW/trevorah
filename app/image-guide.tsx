export default function ImageGuide() {
  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <h1 className="text-3xl font-playfair mb-8">Image Guide for Trevorah Charters Website</h1>

      <div className="prose max-w-none">
        <p>
          This guide outlines the recommended images for the Trevorah Charters website. For optimal performance and
          visual appeal, please follow these specifications when replacing placeholder images with real yacht photos.
        </p>

        <h2 className="text-2xl font-playfair mt-8 mb-4">Image Specifications</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Use high-quality, professionally taken photographs</li>
          <li>Optimize all images for web (compress without visible quality loss)</li>
          <li>Use JPG format for photographs, PNG for graphics with transparency</li>
          <li>Ensure proper lighting and composition that showcases the luxury aspect</li>
        </ul>

        <h2 className="text-2xl font-playfair mt-8 mb-4">Required Images</h2>

        <table className="w-full border-collapse mb-8">
          <thead>
            <tr className="bg-navy text-white">
              <th className="border p-2 text-left">Location</th>
              <th className="border p-2 text-left">Size (px)</th>
              <th className="border p-2 text-left">Description</th>
              <th className="border p-2 text-left">File Path</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Hero Banner</td>
              <td className="border p-2">1920×1080</td>
              <td className="border p-2">Wide shot of Mojo yacht cruising in Poole Harbour with coastline visible</td>
              <td className="border p-2">/public/images/hero.jpg</td>
            </tr>
            <tr>
              <td className="border p-2">About Carousel 1</td>
              <td className="border p-2">1200×800</td>
              <td className="border p-2">Interior cabin showing luxurious furnishings</td>
              <td className="border p-2">/public/images/interior.jpg</td>
            </tr>
            <tr>
              <td className="border p-2">About Carousel 2</td>
              <td className="border p-2">1200×800</td>
              <td className="border p-2">Sun deck with comfortable seating</td>
              <td className="border p-2">/public/images/sundeck.jpg</td>
            </tr>
            <tr>
              <td className="border p-2">About Carousel 3</td>
              <td className="border p-2">1200×800</td>
              <td className="border p-2">Gourmet kitchen facilities</td>
              <td className="border p-2">/public/images/kitchen.jpg</td>
            </tr>
            <tr>
              <td className="border p-2">Sunset Cruise Package</td>
              <td className="border p-2">1200×800</td>
              <td className="border p-2">Yacht during sunset with golden light on water</td>
              <td className="border p-2">/public/images/sunset-cruise.jpg</td>
            </tr>
            <tr>
              <td className="border p-2">Weekend Getaway Package</td>
              <td className="border p-2">1200×800</td>
              <td className="border p-2">Yacht anchored at scenic cove along Jurassic Coast</td>
              <td className="border p-2">/public/images/weekend-getaway.jpg</td>
            </tr>
            <tr>
              <td className="border p-2">Corporate Events Package</td>
              <td className="border p-2">1200×800</td>
              <td className="border p-2">Business meeting setup on yacht</td>
              <td className="border p-2">/public/images/corporate-event.jpg</td>
            </tr>
            <tr>
              <td className="border p-2">Poole Harbour Destination</td>
              <td className="border p-2">1200×800</td>
              <td className="border p-2">View of Poole Harbour from yacht</td>
              <td className="border p-2">/public/images/poole-harbour.jpg</td>
            </tr>
            <tr>
              <td className="border p-2">Bournemouth Beaches Destination</td>
              <td className="border p-2">1200×800</td>
              <td className="border p-2">Bournemouth beaches viewed from yacht</td>
              <td className="border p-2">/public/images/bournemouth-beaches.jpg</td>
            </tr>
            <tr>
              <td className="border p-2">Jurassic Coast Destination</td>
              <td className="border p-2">1200×800</td>
              <td className="border p-2">Dramatic cliffs of Jurassic Coast</td>
              <td className="border p-2">/public/images/jurassic-coast.jpg</td>
            </tr>
            <tr>
              <td className="border p-2">Contact Form Image</td>
              <td className="border p-2">800×800</td>
              <td className="border p-2">Professional image of yacht or crew</td>
              <td className="border p-2">/public/images/contact.jpg</td>
            </tr>
            <tr>
              <td className="border p-2">SEO Images</td>
              <td className="border p-2">1200×630</td>
              <td className="border p-2">OG and Twitter card images</td>
              <td className="border p-2">
                /public/og-image.jpg
                <br />
                /public/twitter-image.jpg
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-2xl font-playfair mt-8 mb-4">How to Replace Images</h2>

        <ol className="list-decimal pl-6 space-y-2">
          <li>Create an "images" folder in the public directory if it doesn't exist</li>
          <li>Optimize your images using a tool like TinyPNG, Squoosh, or ImageOptim</li>
          <li>Name your files according to the file paths listed above</li>
          <li>Replace the placeholder URLs in ClientPage.tsx with the actual image paths</li>
          <li>
            Example: Change <code>src="/placeholder.svg?height=1080&width=1920"</code> to{" "}
            <code>src="/images/hero.jpg"</code>
          </li>
        </ol>

        <div className="bg-gold/10 border-l-4 border-gold p-4 mt-8">
          <h3 className="font-bold">Important Note</h3>
          <p>
            Ensure all images have descriptive alt text for accessibility and SEO purposes. The current alt text is
            optimized for SEO with relevant keywords for Poole, Dorset, and luxury yacht charters.
          </p>
        </div>
      </div>
    </div>
  )
}
