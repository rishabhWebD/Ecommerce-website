import React from "react";
import "../css/Search.css";
import { Link, BrowserRouter as Router } from "react-router-dom";

const Search = () => {
  const [searchedthing, setsearchedthing] = React.useState("");
  const HandleKeypress = (event) => {
    if (event.keyCode === 13) {
      console.log("did");
      event.preventDefault();
      window.location.href = `/search/${searchedthing}`;
      //GoOnThatPage();
    }
  };
  const handleSearch = (event) => {
    setsearchedthing(event.target.value);
    console.log(searchedthing);
  };
  return (
    <Router component={Search} forceRefresh={true}>
      <div class="Hotbg">
        <input
          type="text"
          name=""
          class="Hotbg-txt"
          placeholder="Search.."
          onChange={handleSearch}
          onKeyDown={HandleKeypress}
        />
        <Link
          to={`/search/${searchedthing}`}
          class="Hotbg-btn"
          //onClick={GoOnThatPage}
        >
          <i class="fa fa-search" onClick={() => {}}></i>
        </Link>
      </div>
    </Router>
  );
};

export default Search;

// export default withRouter(connect(
//   mapStateToProps,
// )(App))

// function GoOnThatPage() {
//   // return <Redirect to={`/search/${searchedthing}`} />;
//   //let history = useHistory();
//   //browserHistory.push(`/search/${searchedthing}`);
// }

// function useQuery() {
//   const { search } = useLocation();
//   return React.useMemo(() => new URLSearchParams(search), [search]);
// }
