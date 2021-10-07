import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import Wrapper from "../../Component/Wrapper"
import { getRestProps } from "../../Util/functions"
import "../../style/productDetail.scss";
import clsx from 'clsx';
import React from 'react'

interface Props extends Omit<getRestProps, "restProps"> {
    className?: String
}

const DetailThumbnail: React.FC<Props> = (props) => {
    return <Wrapper className={clsx(props.className)}>
        <Wrapper className="furniture-product-detail__main-thumbnail p-1" shadow radius>
            <img src="/define/banner2.jpg" className="h-100 w-100 center-image radius-retangle"/>
        </Wrapper>
        <Wrapper radius className="mt-5">
            <Swiper
                freeMode={true}
                spaceBetween={15}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
            >
                {
                    [1,2,3,4,5].map((item, index) => <SwiperSlide className="furniture-product-detail__sub-thumbnail p-2">
                            <img key={index} src="/define/71vbR3+AzaL._AC_SX466_.jpg" className="w-50 h-100 center-image"/>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </Wrapper>
    </Wrapper>
}

export default DetailThumbnail