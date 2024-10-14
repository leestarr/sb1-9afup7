import { Calendar, Clock, MapPin } from 'lucide-react';

export default function EventDetails() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl md:text-5xl font-semibold text-center text-deep-pink mb-8">Event Details</h1>
      
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Hindu Ceremony</h2>
        <div className="flex items-center mb-2">
          <Calendar className="w-5 h-5 mr-2" />
          <p>November 16th, 2024</p>
        </div>
        <div className="flex items-center mb-2">
          <Clock className="w-5 h-5 mr-2" />
          <p>11:00 AM - 3:30 PM</p>
        </div>
        <div className="flex items-center mb-4">
          <MapPin className="w-5 h-5 mr-2" />
          <p>Doltone House - Bossley Park</p>
        </div>
        <p className="mb-4">
          Join us for a traditional Hindu ceremony as we begin our journey together.
        </p>
      </div>

      <hr className="border-t border-rustic-pink my-8" />

      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Catholic Ceremony</h2>
        <div className="flex items-center mb-2">
          <Calendar className="w-5 h-5 mr-2" />
          <p>November 17th, 2024</p>
        </div>
        <div className="flex items-center mb-2">
          <Clock className="w-5 h-5 mr-2" />
          <p>3:00 PM</p>
        </div>
        <div className="flex items-center mb-4">
          <MapPin className="w-5 h-5 mr-2" />
          <p>OLQP Church Greystanes</p>
        </div>
        <p className="mb-4">
          We invite you to witness our love as we exchange vows in a Catholic ceremony.
        </p>
      </div>

      <hr className="border-t border-rustic-pink my-8" />

      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Wedding Reception</h2>
        <div className="flex items-center mb-2">
          <Calendar className="w-5 h-5 mr-2" />
          <p>November 17th, 2024</p>
        </div>
        <div className="flex items-center mb-2">
          <Clock className="w-5 h-5 mr-2" />
          <p>6:30 PM - 12:00 AM</p>
        </div>
        <div className="flex items-center mb-4">
          <MapPin className="w-5 h-5 mr-2" />
          <p>Doltone House - Bossley Park</p>
        </div>
        <p className="mb-4">
          Celebrate with us at our reception featuring dinner, dancing, and joyous festivities.
        </p>
      </div>

      <hr className="border-t border-rustic-pink my-8" />

      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Dress Code</h2>
        <p>Traditional Indian attire or formal Western wear</p>
      </div>
    </div>
  );
}