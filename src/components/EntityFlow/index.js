import React, { cloneElement, PropTypes } from 'react';
import Pane from 'components/ui/Pane';
import Sidebar from 'components/Sidebar';

export default function EntityFlow(props) {
  return (
    <Pane size="1">
      <Pane width="170px">
        <Sidebar secondary
          items={ props.secondarySidebarItems }
        />
      </Pane>
      <Pane size="1">
        { cloneElement(props.children, {
          type: props.type,
          category: props.category,
        }) }
      </Pane>
    </Pane>
  );
}

EntityFlow.propTypes = {
  type: PropTypes.string,
  category: PropTypes.string,
  secondarySidebarItems: PropTypes.array,
};
