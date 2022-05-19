import renderer from 'react-test-renderer';
import Link from '../Link';


//test to see if it rendered correctly
describe('Testing link component', () => {

    test('should', () => {

            //create render component (as you would in the return of a component)
    const component = renderer.create(
        <Link Page="https://facebook.com/">Facebook</Link>
    );

    //render as json to investigate
    let tree = component.toJSON();

    //Test if it rendered correctly
    expect(tree).toMatchSnapshot();

    //2. simulate interaction with component

    //trigger the leave of component hover
    renderer.act(() => {
        tree.props.onMouseEnter();
    })
        
     //re-render tree
     tree = component.toJSON();
     expect(tree).toMatchSnapshot();

    })


})