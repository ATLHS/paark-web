import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import "./GooglePlacesAutocompleteField.scss";

const GooglePlacesAutocompleteField = ({
  field: { onChange, name },
  placeholder,
}) => {
  return (
    <>
      <GooglePlacesAutocomplete
        apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        name={name}
        apiOptions={{ language: "fr", region: "fr" }}
        autocompletionRequest={{
          bounds: [{ lat: 48.856614, lng: 2.3522219 }],
          strictBounds: true,
          types: ["address"],
          componentRestrictions: {
            country: "fr",
          },
        }}
        selectProps={{
          styles: {
            placeholder: (provided, state) => ({
              ...provided,
              opacity: state.isFocused ? 0.65 : 1,
              color: "#212529",
            }),
          },
          className: "google-places",
          classNamePrefix: "google-places__field",
          placeholder: placeholder,
          onChange: onChange,
        }}
      />
    </>
  );
};

export default GooglePlacesAutocompleteField;
