import React from 'react';
import { create } from 'react-test-renderer';
import Country from '.';

describe('Country component', () => {
    test('Snapshot', () => {
        const country = create(<Country data={{ name: "test" }} seeDetails={() => { }} />);
        expect(country.toJSON()).toMatchSnapshot();
    });
});
