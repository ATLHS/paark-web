const bookingValidation = {
  title: "Booking form",
  description: "Valet reservation",
  type: "object",
  fields: {
    googlePlaces: {
      label: "Déestination",
      name: "destination",
      description: "User destination",
      type: "google-places",
      default: "",
      placeholder: "Indiquez votre destination ?",
      helper: "Un voiturier vous attendra à la destination choisie.",
      validation: {
        required: "Indiquez votre destination",
        validate: {
          validateCity: (v) =>
            v.value.structured_formatting.secondary_text === "Paris" ||
            "Veuillez indiquer une adresse dans Paris",
        },
      },
    },
    firstname: {
      label: "Prénom",
      name: "firstname",
      description: "User name",
      type: "text",
      default: "",
      placeholder: "Prénom",
      helper: "",
      validation: {
        required: "Indiquez votre prénom",
        pattern: {
          value: /^[a-zA-Z\u00C0-\u00FF]*$/,
          message: "Veuillez indiquez un prénom valide",
        },
      },
    },
    phone: {
      label: "Téléphone",
      name: "phone",
      description: "User phone number",
      type: "phone",
      default: "",
      placeholder: "N° de téléphone",
      helper:
        "Nous vous enverrons un SMS pour confirmer la réservation et restitution de votre véhicule.",
      validation: {
        required: "Indiquez votre n° de téléphone",
        minLength: {
          value: 10,
          message: "N° de téléphone invalide.",
        },
      },
    },
    time: {
      label: "Heure d'arrivée",
      name: "time",
      description: "User time",
      type: "select",
      default: "",
      placeholder: "Heure d'arrivée",
      helper: "Un voiturier vous attendra à l'heure choisie.",
      validation: {
        required: "Indiquez l'heure d'arrivée",
      },
    },
  },
};

export default bookingValidation;
