import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import TAG_DEFINE from '../constant/tagDefine';
import clsx from "clsx";
import Wrapper from "./Wrapper";
import { Card, Tooltip, Tag } from 'antd';
import { Fragment } from 'react';
import { getRestProps } from '../Util/functions';

interface Props extends Omit<getRestProps, "restProps"> {
    className?: any,
    title: string,
}

const ProductDemo: React.FC<Props> = (props: Props) => {
    const { Meta } = Card
    return (
        <Wrapper className={clsx("w-100 text-center mt-5", props.className)} AosAnimation="fade-up">
            <Wrapper>
                 <h3 className="furniture_home__title mt200 font-weight-bold">
                    {props.title.toUpperCase()}
                </h3>
            </Wrapper>
            <Swiper
        
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                className="container"
            >
                <Wrapper className="row pt-5 pl-5">
                    {
                        [0, 1, 2, 3, 4].map(item => 
                            <SwiperSlide className="col-3 pt-5">
                                <Card
                                    className="p-5"
                                    hoverable
                                    cover={<img alt="example" src="/define/71vbR3+AzaL._AC_SX466_.jpg" />}
                                >
                                    <Meta title={<span className="furniture_home__product__title">
                                        {("Europe Street beat").length > 10 && <Tooltip placement="leftTop" title="Europe Street beat">Europe Street beat</Tooltip>}
                                        </span>} 
                                        description={
                                            <Fragment>
                                                {
                                                    props.title === TAG_DEFINE.PAGE.HOMEPAGE.BEST_DISCOUNT ? <Fragment>
                                                        <p style={{textDecoration: "line-through", color: "gray"}} className="furniture_home__product__title__discount">2.990.000 VND</p>
                                                        <p className="font-weight-bold furniture_home__product__price">2.500.000 VND</p>
                                                    </Fragment> : <span className="font-weight-bold furniture_home__product__price">2.990.000 VND</span>
                                                }
                                                <Tag color="#87d068" className="mt-3">Xem ngay</Tag>
                                            </Fragment>
                                        }
                                    />
                                </Card>
                            </SwiperSlide>
                        )
                    }
                </Wrapper>
            </Swiper>
        </Wrapper>
    )
}

export default ProductDemo;