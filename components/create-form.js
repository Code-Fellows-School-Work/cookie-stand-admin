// Used ChatGPT to apply styling similar to screenshot example
export default function CookieStandForm(props) {

    function cookieStandHandler(event) {
        event.preventDefault();
        // Retrieved from JB's demo
        props.onCreate({
            id: event.target.location.value,
            location: event.target.location.value,
            minimumCustomersPerHour: parseInt(event.target.minimumCustomersPerHour.value),
            maximumCustomersPerHour: parseInt(event.target.maximumCustomersPerHour.value),
            averageCookiesPerSale: parseFloat(event.target.averageCookiesPerSale.value),
            hourly_sales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
        });
        // setCookieStand(newCookieStand);
        event.target.reset();
        console.log(props.onCreate);
      }

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