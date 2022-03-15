import RenderReactElementsToTheDom from '../components/04renderReactElementsToTheDom';
describe('Render HTML Elements to the DOM', () => {
    it('The constant JSX should return a div element.', () => {
        const wrapper = shallow(<RenderReactElementsToTheDom />);
        const wrapperLength = wrapper.length;
        expect(wrapperLength).toEqual(1)
        expect(wrapper.at(0).exists('div') )
    });

    it('The div should contain an h1 tag as the first element.', ()=>{
        const wrapper = shallow(<RenderReactElementsToTheDom />);
        expect(wrapper.children(0).at(0).exists('h1')).toBe(true)
        // expect(wrapper.find('div')).to.equal('h1');


    })

    it('The div should contain a p tag as the second element.', ()=>{
        const wrapper = shallow(<RenderReactElementsToTheDom />);
        expect(wrapper.children(0).at(1).exists('p')).toBe(true)        
    })

    it('The provided JSX element should render to the DOM node with id challenge-node.', ()=>{
        const wrapper = shallow(<RenderReactElementsToTheDom />);
        expect(wrapper.contains( <div id="challenge-node">
        <h1>Hello World</h1>
        <p>Lets render this to the DOM</p>
      </div>)).toEqual(true)    
    })
});


// The constant JSX should return a div element.

// The div should contain an h1 tag as the first element.

// The div should contain a p tag as the second element.

// The provided JSX element should render to the DOM node with id challenge-node.
