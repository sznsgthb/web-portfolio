const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Red Hat Display', 'Helvetica', 'Arial', 'sans-serif'],
            },
        },
    },
    plugins: [],
});