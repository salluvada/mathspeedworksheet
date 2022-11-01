import React from 'react';
import Filter from './Filter';

export default function Footer(props) {
    const {activeItemCount, filter, changeFilter, allItemCount, correctItemCount, wrongItemCount } = props;
    return (
        <footer className="clearfix">
            <div className="pull-left">
                {`${activeItemCount} problems left`}
            </div>
            <div className="pull-right">
                <Filter {...{filter, changeFilter, allItemCount, correctItemCount, wrongItemCount, activeItemCount}}/>
            </div>
        </footer>
    );
}
