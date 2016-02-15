import React, { PropTypes } from 'react';
import styles from './style';
import UIList from 'components/ui/List';
import Button from 'components/ui/Button';
import ListItem from './ListItem';

export default function EntityList(props) {
  return (
    <div className={ styles.PageWrapper }>
      <Button
        to={{
          pathname: `/entities/${props.category}/${props.type ? `${props.type}/` : ''}new`,
        }}
        title="ADD NEW ITEM"
        className={ styles.AddButton }
      />
      <UIList
        className={ styles.List }
        data={[
          { key: 'a' },
          { key: 'b' },
          { key: 'c' },
        ]}
        itemClass={ ListItem }
      />
    </div>
  );
}

EntityList.propTypes = {
  type: PropTypes.string,
  category: PropTypes.string,
};
