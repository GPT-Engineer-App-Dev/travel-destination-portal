import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/flight-search-results?query=${search}`);
  };

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Explore the World</h1>
          <form onSubmit={handleSearch} className="w-1/2 mb-4">
            <Input
              type="text"
              placeholder="Search for destinations, hotels, or flights"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full mb-4"
            />
            <Button type="submit" variant="primary" size="lg">Explore Now</Button>
          </form>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card key={item}>
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              <CardHeader>
                <CardTitle>Destination {item}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Short description of the destination.</p>
                <Button variant="outline" className="mt-4">View Details</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Special Offers */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <Card key={item}>
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              <CardHeader>
                <CardTitle>Special Offer {item}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Details about the special offer.</p>
                <Button variant="outline" className="mt-4">Book Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <Carousel>
          <CarouselContent>
            {[1, 2, 3].map((item) => (
              <CarouselItem key={item}>
                <Card>
                  <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
                  <CardHeader>
                    <CardTitle>Customer {item}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Feedback from customer {item}.</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-bold">Quick Links</h3>
              <ul>
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms of Service</a></li>
              </ul>
            </div>
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-bold">Follow Us</h3>
              <ul className="flex space-x-4">
                <li><a href="#" className="hover:underline">Facebook</a></li>
                <li><a href="#" className="hover:underline">Twitter</a></li>
                <li><a href="#" className="hover:underline">Instagram</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold">Contact Us</h3>
              <p>Email: contact@travelbooking.com</p>
              <p>Phone: +123 456 7890</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;