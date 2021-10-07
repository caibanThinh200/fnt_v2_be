import React from 'react'
import Wrapper from '../../Component/Wrapper';
const DetailTab = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="d-flex detail-item">
                        <h6>Xuất xứ</h6>
                        <p>Trung Quốc</p>
                    </div>
                    <div className="d-flex detail-item">
                        <h6>Kích cỡ</h6>
                        <p>Dài: 120cm | Rộng: 50cm</p>

                    </div>
                    <div className="d-flex detail-item">
                        <h6>Khối lượng</h6>
                        <p>20Kg</p>
                    </div>
                    <div className="d-flex detail-item">
                        <h6>Trọng tải tối đa</h6>
                        <p>100Kg</p>
                    </div>
                    <div className="d-flex detail-item">
                        <h6>Nguyên liệu</h6>
                        <p>Vải, da, nhựa, thép</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DetailTab