import React from 'react';
import { connect } from 'react-redux';
import { postAd } from '../../actions/adActions';
import PageWrapper from '../common/PageWrapper';
import CreateAdForm from './CreateAdForm';

function index({ postAd }) {
    return (
        <PageWrapper>
            <CreateAdForm onSubmit={postAd} />
        </PageWrapper>
    );
}

const mapDispatchToProps = dispatch => ({
    postAd: input => dispatch(postAd(input))
});

export default connect(
    null,
    mapDispatchToProps
)(index);
