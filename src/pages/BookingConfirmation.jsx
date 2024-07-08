import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const BookingConfirmation = () => {
  const [bookingId, setBookingId] = useState("");
  const [destination, setDestination] = useState("");
  const [flightDetails, setFlightDetails] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleConfirm = () => {
    if (!bookingId || !destination || !flightDetails || !userInfo) {
      setError("All fields are required.");
      return;
    }
    setIsConfirmed(true);
    console.log("Booking confirmed. Email sent to user.");
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">Booking Confirmation</h2>
      <Card>
        <CardHeader>
          <CardTitle>Confirm Your Booking</CardTitle>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert>
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {isConfirmed ? (
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Booking Confirmed!</h3>
              <p>Your booking ID is {bookingId}.</p>
              <Button variant="primary" className="mt-4" onClick={() => navigate("/")}>
                Go to Home
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Booking ID"
                value={bookingId}
                onChange={(e) => setBookingId(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Flight Details"
                value={flightDetails}
                onChange={(e) => setFlightDetails(e.target.value)}
              />
              <Input
                type="text"
                placeholder="User Information"
                value={userInfo}
                onChange={(e) => setUserInfo(e.target.value)}
              />
              <Button variant="primary" onClick={handleConfirm}>
                Confirm Booking
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingConfirmation;