import { ShallowWrapper, shallow } from 'enzyme';
import Lnk from '../../../components/common/Lnk';

describe('Lnk', () => {
  let wrapper: ShallowWrapper<any>;

  beforeEach(() => {
    wrapper = shallow(<Lnk />);
  });

  it('should check if Knk conti=ains link', () => {
    expect(wrapper.find('a')).toHaveLength(1);
  });
});
