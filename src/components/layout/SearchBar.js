import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchLogs } from '../../actions/logActions';


const SearchBar = ({ searchLogs }) => {

    const onChange = e => {
        searchLogs(text.current.value);
    }

    const text = useRef('');
    return (
        <nav style={{ marginBottom: '30px' }} className='blue'>
            <div className='nav-wrapper'>
                <form>
                    <div className='input-field'>
                        <input id='search' type='search' placeholder='Search Logs' ref={text} onChange={onChange} />
                        <label className='label-icon' htmlFor='search'>
                            <i className='material-icons'>Search</i>
                        </label>
                        <i className='material-icons'>Close</i>
                    </div>
                </form>
            </div>
        </nav>
    );
};

SearchBar.prorpTypes = {
    searchLogs: PropTypes.func.isRequired,
}


export default connect(null, { searchLogs })(SearchBar);