import 'react-native';
import React from 'react';
import { expect } from 'chai';
import WelcomeHeader from '../gen/components/WelcomeHeader.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('WelcomeHeader', () => {

  it('renders correctly', () => {
    const tree = renderer.create(
      <WelcomeHeader />
    );
  });

  it('RememberAll', () => {
    const tree = renderer.create(<WelcomeHeader />);
    const jsontree = tree.toJSON()
    expect(jsontree.children).to.include('RememberAll');
  });
});

afterAll(() => setTimeout(() => process.exit(), 4000))
