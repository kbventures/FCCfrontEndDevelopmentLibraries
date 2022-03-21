import {ToDo, List} from '../components/14passAnArrayAsProps';

describe('Pass Array As Props', () => {

    let wrapperToDo;
    let wrapperList;

    beforeEach(() => {
        wrapperToDo = shallow(<ToDo />);
        // wrapperList =shallow(<List />)

   });

    it('The ToDo component should return a single outer div.', () => {  
        // expect(wrapperToDo.at(0).exists('div')).toBe(true)  
        // expect(wrapperToDo.length).toEqual(1)        
    });

});


