import React, { Component } from 'react';
import ButtonBar from 'components/ui/ButtonBar';
import Button from 'components/ui/Button';
import styles from './style';

export default class InventoryAddForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleDiscard = this.handleDiscard.bind(this);
  }

  handleDiscard() {
    history.back();
  }

  render() {
    return (
      <div className={ styles.PageWrapper }>
        <div className={ styles.FormWrapper }>

        </div>
        <ButtonBar>
          <Button title="DISCARD" onClick={ this.handleDiscard } color="secondary" />
          <Button title="SAVE" />
        </ButtonBar>
      </div>
    );
  }
}
