import {ToDo, List} from '../components/14passAnArrayAsProps';

// The first List component representing the tasks for today should have 2 or more items.
// The second List component representing the tasks for tomorrow should have 3 or more items.
// Need ot find a way to test specific instances of <list />


describe('Pass Array As Props', () => {

    let wrapperToDo;
    let wrapperList;

    let wrapperToDoMount;
    let wrapperListMount


    const props1 = {
        tasks: ['Walk', 'Cook', 'Bake']
    }

    const props2 = {
        tasks: ['Study', 'Code','Eat']
    }

    beforeEach(() => {
        wrapperToDo = shallow(<ToDo />);
        wrapperList =shallow(<List {...props1} />)
        wrapperToDoMount =mount(<ToDo />)
        wrapperListMount = mount(<List {...props2} />)

   });
   

    it('The ToDo component should return a single outer div.', () => {  
        expect(wrapperToDo.at(0).exists('div')).toBe(true)  
        expect(wrapperToDo.length).toEqual(1)    
    });

        it('The third child of the ToDo component should be an instance of the List component.', () => {  
        expect(wrapperToDo.children(0).at(2).exists('List')).toBe(true)
    });

    it('The fifth child of the ToDo component should be an instance of the List component', () => {  
        expect(wrapperToDo.children(0).at(4).exists('List')).toBe(true)
    });

    it('Both instances of the List component should have a property called tasks and tasks should be of type array.', () => {  
        const text = wrapperListMount.prop('tasks')
        expect(text instanceof Array).toBe(true)
    });

    it('The first List component representing the tasks for tomorrow should have 3 or more items.', () => {  
        const array = wrapperListMount.prop('tasks')
        let arrayLength = array.length;
        expect(arrayLength >=2).toBe(true)
        expect(wrapperToDo.children(0).at(2).prop('tasks')).toStrictEqual(["Walk", "Cook", "Bake"])
    });

    it('The second List component representing the tasks for tomorrow should have 3 or more items.', () => {  
        const array = wrapperListMount.prop('tasks')
        let arrayLength = array.length;
        expect(arrayLength >=3).toBe(true)
        expect(wrapperToDo.children(0).at(2).prop('tasks')).toStrictEqual(["Walk", "Cook", "Bake"])

    });

    it('The List component should render the value from the tasks prop in the p tag', () => {  
        const text = wrapperListMount.find('p').text()
        expect(text).toEqual('Study, Code, Eat')
    });

});


