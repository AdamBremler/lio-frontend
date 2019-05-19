import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAd } from '../../actions/adActions';
import PageWrapper from '../common/PageWrapper';
import AdCard from './styled/AdCard';
import SubTitle from './styled/AdSubTitle';
import TagList from '../common/TagList';
import UnstyledLink from '../common/styled/UnstyledLink';

function index({ match: { params: { id } }, ad, getAd }) {
    useEffect(() => {
        if (!ad || id !== ad._id) getAd(id);
    }, [id]);

    return (
        <PageWrapper>
            {ad ? (
                <AdCard>
                    <h2>{ad.title}</h2>
                    <SubTitle>
                        <UnstyledLink to={`/profile/${ad.profile._id}`}>{ad.profile.name}</UnstyledLink> - {ad.location}
                    </SubTitle>
                    <div>
                        {ad.description.split('\n').map((p, i) =>
                            <p key={i}>{p}</p>
                        )}
                    </div>
                    <TagList list={ad.skills} />
                </AdCard>
            ) : null}
        </PageWrapper>
    );
}

const mapStateToProps = state => ({
    ad: state.ad.ad
});

const mapDispatchToProps = dispatch => ({
    getAd: id => dispatch(getAd(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(index);
