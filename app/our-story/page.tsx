import Image from 'next/image';
import { Heart } from 'lucide-react';

export default function OurStory() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl md:text-5xl font-semibold text-center text-deep-pink mb-8">Our Story</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <div className="relative w-full h-64 md:h-auto">
          <Image
            src="https://images.unsplash.com/photo-1529634597503-139d3726fed5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
            alt="Leander and Avashinita"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-4">How We Met</h2>
          <p className="mb-4">
            Our love story began on a warm summer evening in Mumbai. We were both attending a mutual friend's art exhibition, and as fate would have it, we reached for the same hors d'oeuvre at the same time. Our hands touched, our eyes met, and in that moment, we both felt a spark that would soon ignite into a beautiful romance.
          </p>
          <p>
            Leander was immediately captivated by Avashinita's radiant smile and her passion for art, while Avashinita was drawn to Leander's wit and his kind eyes. We spent the entire evening talking, laughing, and discovering our shared interests in travel, music, and Indian cuisine.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Journey</h2>
          <p className="mb-4">
            From that serendipitous meeting, our relationship blossomed. We explored Mumbai's hidden gems together, from quaint cafes to bustling markets. Our weekends were filled with adventures, whether it was trying out new recipes in the kitchen or planning spontaneous road trips to nearby coastal towns.
          </p>
          <p>
            As our love grew stronger, we supported each other through life's challenges and celebrated each other's successes. Leander's promotion at work coincided with Avashinita's first solo art exhibition, and we realized that together, we could achieve anything.
          </p>
        </div>
        <div className="relative w-full h-64 md:h-auto">
          <Image
            src="https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
            alt="Our Journey"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold mb-4">The Proposal</h2>
        <p className="mb-4">
          On our third anniversary, Leander surprised Avashinita with a romantic getaway to Udaipur. As the sun set over Lake Pichola, casting a golden glow on the City Palace, Leander got down on one knee and asked Avashinita to spend the rest of her life with him. With happy tears and a resounding "Yes!", our journey towards forever began.
        </p>
      </div>
      <div className="text-center">
        <Heart className="w-12 h-12 mx-auto mb-4 text-deep-pink" />
        <p className="text-xl italic">"And so, the adventure begins..."</p>
      </div>
    </div>
  );
}