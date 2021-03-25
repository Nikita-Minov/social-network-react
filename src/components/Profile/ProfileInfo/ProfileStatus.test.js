import {create} from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('ProfileStatus component', () => {
  test('status from props should be in the state', () => {
    const component = create(<ProfileStatus status='hello' />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe('hello');
  });

  test('After creation <span></span> with status should be displayed with correct status', () => {
    const component = create(<ProfileStatus status="hello" />);
    const root = component.root;
    let span = root.findByType('span');
    expect(span.length).not.toBeNull();
  });

  test('After creation <input> shouldnt be displayed', () => {
    const component = create(<ProfileStatus status="hello" />);
    const root = component.root;
    
    expect(() => {
      let input = root.findByType('input');
    }).toThrow();
  });

  test('After creation <span></span> with status should contains correct status', () => {
    const component = create(<ProfileStatus status="hello" />);
    const root = component.root;
    let span = root.findByType('span');
    expect(span.children[0]).toBe('hello');
  });

  test('inpput should be displayed in editMode instead of span', () => {
    const component = create(<ProfileStatus status="hello" />);
    const root = component.root;
    let span = root.findByType('span');
    span.props.onDoulbeClick();
    let input = root.findByType('input');
    expect(input.props.value).toBe('hello');
  });

   test('callback should be called', () => {
     const mockCallback = jest.fn();
     const component = create(<ProfileStatus status="hello" updateStatus={mockCallback} />);
     const instance = component.getInstance();
     instance.deactivateEditMode();
     expect (mockCallback.mock.calls.length).toBe(1);

   });

})