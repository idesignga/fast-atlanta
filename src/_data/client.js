module.exports = {
    name: "FAST Atlanta Sports",
    email: "fastatlantasports@gmail.com",
    phoneForTel: "478418734",
    phoneFormatted: "(478) 410-8734",
    address: {
        lineOne: "123 Main St",
        lineTwo: "STE 140",
        city: "Atlanta",
        state: "GA",
        zip: "30318",
        country: "US",
        mapLink: "https://maps.app.goo.gl/TEdS5KoLC9ZcULuQ6",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.example.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
