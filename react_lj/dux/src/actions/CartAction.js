// �ʿ��� ��ɵ� (������ �߰�, ������ ����, ��� ����)

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_ITEM = 'REMOVE_ITEM';
const REMOVE_ALL = 'REMOVE_ALL';

const addToCart = (item) => ({ type: ADD_TO_CART, item });
const removeItem = (id) => ({ type: REMOVE_ITEM, id });
const removeAll = () => ({ type: REMOVE_ALL });

export default {
	ADD_TO_CART,
	REMOVE_ITEM,
	REMOVE_ALL,
	addToCart,
	removeItem,
	removeAll,
};