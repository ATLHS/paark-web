module.exports = {
  confirmationCodeMessage: (code) =>
    `Votre code de vérification Paark est ${code}.`,
  userConfirmedReservationMessage: (hour, address, dropOffCode) =>
    `Votre réservation Paark est confirmée pour ${hour} à l'adresse : ${address}.\n\nVotre code d’authentification est : ${dropOffCode}\n\nPour des raisons de sécurité, assurez-vous que vous et votre voiturier avez bien le même code lors de la prise en charge.`,
  userConfirmedCarBackMessage: (address, dropBackCode) =>
    `Votre véhicule est pris en charge par un voiturier Paark, il vous contactera dès son arrivée à l'adresse : ${address}.\n\nVotre code d’authentification est : ${dropBackCode}.\n\nIl vous sera demandé par le voiturier pour vous identifier en tant que propriétaire et garantir une passation plus sécurisée.`,
  adminNewReservationAlertMessage: () =>
    "Une nouvelle réservation a été effectuée veuillez consulter le tableau de bord.",
};
