import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const fetchFlights = async (query) => {
  // Mock API call
  const response = await fetch(`/api/flights?query=${query}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const FlightSearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  const { data, error, isLoading } = useQuery({
    queryKey: ["flights", query],
    queryFn: () => fetchFlights(query),
    enabled: !!query,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return (
    <Alert>
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{error.message}</AlertDescription>
    </Alert>
  );

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">Flight Search Results</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.flights?.length ? (
          data.flights.map((flight) => (
            <Card key={flight.id}>
              <CardHeader>
                <CardTitle>{flight.destination}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Airline: {flight.airline}</p>
                <p>Price: ${flight.price}</p>
                <p>Duration: {flight.duration}</p>
              </CardContent>
            </Card>
          ))
        ) : (
          <p>No flights found for your search query.</p>
        )}
      </div>
    </div>
  );
};

export default FlightSearchResults;