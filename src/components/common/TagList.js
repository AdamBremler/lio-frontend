import React, { Fragment } from 'react';
import Tag from '../common/styled/Tag';

export default function TagList({ list }) {
    return list.map(t => <Fragment key={t}><Tag>{t}</Tag>{' '}</Fragment>);
}
