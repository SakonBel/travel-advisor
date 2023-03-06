import { Autocomplete } from "@react-google-maps/api";

const Header = () => {
  return (
    <div>
      <div className="toolbar">
        <h1>Travel Advisor</h1>
        <div className="container">
          <h3>Explore new place</h3>
          {/* <Autocomplete> */}
          <div>
            <div className="search-icon">icon</div>
            <input type="search" className="search" />
          </div>
          {/* </Autocomplete> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
