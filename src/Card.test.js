import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Card from './Card';

describe('<Card />', () => {
  it('renders with props', () => {
    // Create a DOM element to render the component
    const div = document.createElement('div');

    // Pass required props in the usual way
    ReactDOM.render(
        <Card
          title="Fifth card"
          content="lorem ipsum"
        />,
        div
    );

    // Clean up
    ReactDOM.unmountComponentAtNode(div);

  });

    it('renders this UI as expected', () => {
      //Render the component, as JSON
      const tree = renderer.create(<Card 
        title="Fifth card"
        content="lorem ipsum"
      />).toJSON();
      // Check whther it matches the previous snapshot
      // Store in ... 
      expect(tree).toMatchSnapshot();
    });

});