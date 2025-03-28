import { GoogleMap, LoadScript } from "@react-google-maps/api";
import {
  TextField,
  Button,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

const areas = [
  { name: "", area: "Airport", status: "Active" },
  { name: "", area: "City", status: "Active" },
  { name: "", area: "Onj demand", status: "Pending" },
];

const OperatingArea = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1 className="text-2xl font-semibold">Operating Area</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          marginBottom: "20px",
          gap: "12px",
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Search"
          size="small"
          style={{ width: "250px" }}
        />
        <Button variant="contained" color="primary">
          Add New Area
        </Button>
      </div>
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
        />
      </LoadScript>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          gap: "20px",
        }}
      >
        {areas.map((area, index) => (
          <Card key={index} style={{ width: "250px" }}>
            <CardContent>
              <IconButton style={{ float: "right" }}>
                <EditIcon />
              </IconButton>
              <p>
                <strong>Name:</strong> {area.name}
              </p>
              <p>
                <strong>Area:</strong> {area.area}
              </p>
              <p>
                <strong>Status:</strong> {area.status}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OperatingArea;
