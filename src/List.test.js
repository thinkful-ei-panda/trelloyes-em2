import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import STORE from './store';

import List from './List';

describe('<List />', () => {
  it('renders with props', () => {
    // Create a DOM element to render the component into
    const div = document.createElement('div');

    // Pass required props in the usual way
    ReactDOM.render(
        <List 
          header="First List"
          cards={[
            {id: 'a', title: 'First card', content: 'lorem ipsum'},
            {id: 'd', title: 'Fourth card', content: 'lorem ipsum'}
          ]}
        />,
        div
    );
    // Clean up
    ReactDOM.unmountComponentAtNode(div);
  
  });

    it('renders this UI as expected', () => {
      // Render the component, as JSON
      const tree = renderer.create(<List 
        header="First List"
        cards={[
          {id: 'a', title: 'First card', content: 'lorem ipsum'},
          {id: 'd', title: 'Fourth card', content: 'lorem ipsum'}
        ]}
      />).toJSON();
      // Check whether it matches the previous snapshot
      // Stored in __snapshots__/List.test.js.snap
      expect(tree).toMatchSnapshot();
    });

});

