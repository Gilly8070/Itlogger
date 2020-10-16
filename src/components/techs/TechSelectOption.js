import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techAction';
import PropTypes from 'prop-types'

const TechSelectOption = ({ getTechs, tech: {techs, loading } }) => {

    useEffect(() => {
        getTechs();
        //eslint-disable-next-line
    }, []);


    return (
        !loading && techs !== null && techs.map(t => (
            <option key={t.id} value={`${t.firstName} ${t.lastName}`} >
                {t.fisrName} {t.lastName}
            </option>
        ))
    )
}

TechSelectOption.propTypes= {
    tech: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired,
}

const mapStatetoProps= state =>  ({
    tech: state.tech
});





export default connect(mapStatetoProps, { getTechs })(TechSelectOption);
