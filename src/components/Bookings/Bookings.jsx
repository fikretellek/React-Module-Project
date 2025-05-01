import Search from "@/components/Search/Search";
import Card from "../Card/Card";
// import SearchResults from "@/componentsSearchResults.js";
// import FakeBookings from "@/data/fakeBookings.json";

const Bookings = () => {
  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
  };

  return (
    <main className="bookings">
      <Search search={search} />
      {/* <SearchResults results={FakeBookings} /> */}
      <Card title={"test"} />
    </main>
  );
};

export default Bookings;
