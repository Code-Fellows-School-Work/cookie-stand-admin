export default function CookieStandForm(props) {

  function cookieStandHandler(event) {
    event.preventDefault();
    // Retrieved JB's demo code and used ChatGPT to remove hard coded hourly sales

    const minCustomers = parseInt(event.target.minimumCustomersPerHour.value);
    const maxCustomers = parseInt(event.target.maximumCustomersPerHour.value);
    const averageCookiesPerSale = parseFloat(event.target.averageCookiesPerSale.value);

    const hourlySales = generateHourlySales(minCustomers, maxCustomers, averageCookiesPerSale);

    props.onCreate({
        id: event.target.location.value,
        location: event.target.location.value,
        minimumCustomersPerHour: minCustomers,
        maximumCustomersPerHour: maxCustomers,
        averageCookiesPerSale: averageCookiesPerSale,
        hourly_sales: hourlySales
    });
    event.target.reset();
  }

  // Used ChatGPT to create hourly sales function
  function generateHourlySales(minCustomers, maxCustomers, averageCookiesPerSale) {
    const hourlySales = [];
    for (let i = 0; i < 14; i++) {
        const randomCustomers = Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers;
        const cookiesSold = Math.round(randomCustomers * averageCookiesPerSale);
        hourlySales.push(cookiesSold);
    }
    return hourlySales;
  }

  // Used ChatGPT to apply styling similar to screenshot example
  return (
    <form
      onSubmit={cookieStandHandler}
      className="w-2/3 mx-auto bg-green-200 p-8 shadow-md rounded-lg space-y-4 m-6"
    >
      <p className="flex justify-center font-semibold text-2xl">
        Create Cookie Stand
      </p>
      <div className="flex items-center space-x-4">
        <label className="block text-sm font-medium text-gray-700">
          Location
        </label>
        <input
          name="location"
          type="text"
          className="flex-1 mt-1 p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Min Customers per Hour
          </label>
          <input
            name="minimumCustomersPerHour"
            type="number"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Max Customers per Hour
          </label>
          <input
            name="maximumCustomersPerHour"
            type="number"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700">
            Average Cookies per Sale
          </label>
          <input
            name="averageCookiesPerSale"
            type="number"
            step="0.1"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md self-end"
        >
          Create
        </button>
      </div>
    </form>
  );
}