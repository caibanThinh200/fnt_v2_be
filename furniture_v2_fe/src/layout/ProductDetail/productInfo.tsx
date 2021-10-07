import Wrapper from '../../Component/Wrapper';
import { ReactComponentProps } from '../../Util/inteface';
import { Tag, Radio } from 'antd';
import Input from '../../Component/Input';
const ProductInfo: React.FC<ReactComponentProps> = props => {
    return <Wrapper className="pl-5 p-4">
        <Wrapper className="mb-5">
            <Tag color="green" className="mr-2 p-2"><span className="h6 font-weight-bold">Nội thất gia đình</span></Tag>
            <Tag color="green" className="mr-2 p-2"><span className="h6 font-weight-bold">Ghế</span></Tag>
            <Tag color="green" className="mr-2 p-2"><span className="h6 font-weight-bold">Ghế làm việc</span></Tag>
        </Wrapper>
        <Wrapper className="mb-5">
            <span className="mr-2 h3 furniture-product-detail__title">Ghế ngồi làm việc A1</span>
        </Wrapper>
        <Wrapper className="mb-3">
            <span className="h4 mr-3">GIÁ BÁN:</span>
            <span className="h4 furniture-product-detail__price--discount mr-4">50000000 VND</span>
            <span className="h3 furniture-product-detail__price--discount-percent">30%</span>
        </Wrapper>
        <Wrapper className="mb-5">
            <span className="h4 furniture-product-detail__price mb-4 mr-3">GIÁ KHUYẾN MÃI:</span>
            <span className="h4 furniture-product-detail__price mb-4">4000000 VND</span>
        </Wrapper>
        <Wrapper className="mb-5">
            <span className="h7 font-weight-bold">LOẠI GHẾ:</span>
            <Wrapper className='mt-3'>
                <Radio.Group>
                    <Radio.Button className="mr-3" value="a">Chân sắt / nệm da</Radio.Button>
                    <Radio.Button value="b">Chân nhựa / nệm lưới</Radio.Button>
                </Radio.Group>
            </Wrapper>
        </Wrapper>
        <Wrapper className="mb-5">
            <span className="h7 font-weight-bold">MÀU SẮC:</span>
            <Wrapper className='mt-3'>
                <Radio.Group>
                    <Radio.Button className="mr-3" value="a">Trắng</Radio.Button>
                    <Radio.Button value="b">Đen</Radio.Button>
                </Radio.Group>
            </Wrapper>
        </Wrapper>
        <Wrapper className="mb-5 mt-4">
                <span className="h7 font-weight-bold">SỐ LƯỢNG</span>
                <Input className="ml-3 furniture-product-detail__quantity" addonBefore="+" addonAfter="-" defaultValue={1} />
        </Wrapper>
        <Wrapper>
            <button className="furniture-product-detail__button furniture-product-detail__button--add-cart">
                <span className="h5">Thêm vào giỏ hàng</span>
            </button>
        </Wrapper>
    </Wrapper>
}

export default ProductInfo;