import propTypes from "prop-types";
import Search from "./Search";
import Button from "./Button"

const Header = ({title,onAdd,showAdd,setNameSearch,ratingSearch, setRatingSearch}) => {
    
    return ( 
        <div className="Header">
            <h1>{title}</h1>
            <Search
        setNameSearch={setNameSearch}
        ratingSearch={ratingSearch}
        setRatingSearch={setRatingSearch}
      />
            <Button
                color={showAdd ? 'red' : 'green'}
                text={showAdd ? 'Close' : 'add'}
                onClick={onAdd} 
            />
        </div>
     );
}
Header.defaultProps = {
    title: 'MovieApp'
}

Header.propTypes  = {
    title: propTypes.string.isRequired ,
}
export default Header;