import StatefulComponent20 from '../components/20createAstatefulComponent';

// The state of StatefulComponent should be initialized with a property name set to a string.

// The property name in the state of StatefulComponent should render in the h1 element.

describe('Stateful Component', () => {

    let wrapperStatefulComponentMount;
    let wrapperStatefulComponentShallow;

    const props = {
        name:'Mathieu'
    }

    beforeEach(() => {
        wrapperStatefulComponentMount = mount(<StatefulComponent20 />);
        wrapperStatefulComponentShallow = shallow(<StatefulComponent20 />);

   });


   it('StatefulComponent should render a div and an h1 element.', () => {
    expect(wrapperStatefulComponentMount.at(0).exists('h1')).toBe(true)
    expect(wrapperStatefulComponentMount.children(0).at(0).exists('h1')).toBe(true)
    });

it(' StatefulComponent should exist and render.', () => {
    expect(wrapperStatefulComponentMount.contains(<StatefulComponent20>
        <div>
          <h1>
            Mathieu
          </h1>
        </div>
      </StatefulComponent20>))
    });

   it('The property name in the state of StatefulComponent should render in the h1 element.', () => {
    const text = wrapperStatefulComponentShallow.children().at(0).text()
    expect(text).toBe('Mathieu')
    });

    it('StatefulComponent should render a div and an h1 element.', () => {
        const wrapperLengthParent = wrapperStatefulComponentShallow.length;
        const wrapperLengthChild = wrapperStatefulComponentShallow.children().length;
        expect(wrapperLengthParent).toEqual(1)
        expect(wrapperLengthChild).toEqual(1)
        const h1Element = wrapperStatefulComponentShallow.children().type();
        expect(h1Element).toEqual('h1');
        const divElement = wrapperStatefulComponentShallow.type();
        expect(divElement).toEqual('div');
    });

});