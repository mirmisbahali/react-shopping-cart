import Button from '@material-ui/core/Button';

// Types
import { CartItemType } from '../App';

// Styles
import { Wrapper } from './CartItem.styles';

type Props = {
    item: CartItemType;
    addToCart:(clicked: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

const CartItem: React.FC<Props> = ({item,  addToCart, removeFromCart}) => (
    <Wrapper>
        <div>
            <h3>{Item.title}</h3>
        </div>
    </Wrapper>
);

export default CartItem;

