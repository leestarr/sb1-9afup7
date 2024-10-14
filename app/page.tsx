import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, Heart, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl md:text-6xl font-semibold text-center text-deep-pink mb-8">
        Leander & Avashinita
      </h1>
      <div className="relative w-full h-96 mb-8">
        <Image
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="Leander and Avashinita"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="text-center mb-12">
        <p className="text-3xl mb-4">We're getting married!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-rustic-pink text-white p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Hindu Ceremony</h2>
          <div className="flex items-center mb-2">
            <Calendar className="w-5 h-5 mr-2" />
            <p>November 16th, 2024</p>
          </div>
          <div className="flex items-center mb-2">
            <Clock className="w-5 h-5 mr-2" />
            <p>11:00 AM - 3:30 PM</p>
          </div>
          <div className="flex items-center mb-2">
            <MapPin className="w-5 h-5 mr-2" />
            <p>Doltone House - Bossley Park</p>
          </div>
        </div>

        <div className="bg-rustic-pink text-white p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Catholic Ceremony</h2>
          <div className="flex items-center mb-2">
            <Calendar className="w-5 h-5 mr-2" />
            <p>November 17th, 2024</p>
          </div>
          <div className="flex items-center mb-2">
            <Clock className="w-5 h-5 mr-2" />
            <p>3:00 PM</p>
          </div>
          <div className="flex items-center mb-2">
            <MapPin className="w-5 h-5 mr-2" />
            <p>OLQP Church Greystanes</p>
          </div>
        </div>

        <div className="bg-rustic-pink text-white p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Wedding Reception</h2>
          <div className="flex items-center mb-2">
            <Calendar className="w-5 h-5 mr-2" />
            <p>November 17th, 2024</p>
          </div>
          <div className="flex items-center mb-2">
            <Clock className="w-5 h-5 mr-2" />
            <p>6:30 PM - 12:00 AM</p>
          </div>
          <div className="flex items-center mb-2">
            <MapPin className="w-5 h-5 mr-2" />
            <p>Doltone House - Bossley Park</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <Link href="/event-details" className="bg-deep-pink text-white p-6 rounded-lg text-center hover:bg-rustic-pink transition duration-300">
          <h2 className="text-2xl mb-2">Event Details</h2>
          <p>Find out more about our celebrations</p>
        </Link>
        <Link href="/our-story" className="bg-deep-pink text-white p-6 rounded-lg text-center hover:bg-rustic-pink transition duration-300">
          <h2 className="text-2xl mb-2">Our Story</h2>
          <p>How we met and fell in love</p>
        </Link>
        <Link href="/rsvp" className="bg-deep-pink text-white p-6 rounded-lg text-center hover:bg-rustic-pink transition duration-300">
          <h2 className="text-2xl mb-2">RSVP</h2>
          <p>Let us know if you can make it</p>
        </Link>
      </div>

      <div className="text-center">
        <Heart className="w-12 h-12 mx-auto mb-4 text-deep-pink" />
        <p className="text-xl italic">"Two souls with but a single thought, two hearts that beat as one."</p>
      </div>
    </div>
  );
}