import { FilterZone, Input } from './Filter.styled';
import PropTypes from "prop-types";

export const Filter = ({ filter,onChange }) => {
    return (
        <FilterZone>
          Find contacts by name
          <Input
            type="text"
            value={filter}
            onChange={onChange}
          />
        </FilterZone>
    )
};

Filter.propTypes = {
    filter: PropTypes.string,
    onChange: PropTypes.func,
}