import Wrapper from "../../Component/Wrapper";
import TAG_DEFINE from "../../constant/tagDefine";
import { getRestProps } from "../../Util/functions";
import { ReactComponentProps } from '../../Util/inteface';
import React from 'react'

const ServiceIntro: React.FC<ReactComponentProps> = props => {
    return (
        <Wrapper className="container mt-5 mb-5">
            <Wrapper className="mt-5 mb-5">
                <h3 className="text-center furniture_home__service__title font-weight-bold">{props.title}</h3>
            </Wrapper>
            <Wrapper className="row furniture_home__service">
                {
                    TAG_DEFINE.PAGE.HOMEPAGE.SERVICES_INTRO.content.slice(0, 3).map((item, index) => 
                        <Wrapper key={index} className="col container p-5 center">
                            <img className="align-self-end rounded-circle furniture_home__service__image mb-5" src="/define/small-living-rooms-bungalow-etna-nook-029-1608661123.jpg" />
                            <Wrapper className="">
                                <h3 className="text-center font-weight-bold text-warning">{item.title}</h3>
                                <h4 className="text-center">{item.content}</h4>
                            </Wrapper>
                        </Wrapper>
                    )
                }
                {
                    TAG_DEFINE.PAGE.HOMEPAGE.SERVICES_INTRO.content.slice(3, 6).map((item, index) => 
                        <Wrapper key={index}  className="col container p-5 center">
                            <img className="align-self-end rounded-circle furniture_home__service__image mb-5" src="/define/small-living-rooms-bungalow-etna-nook-029-1608661123.jpg" />
                            <Wrapper className="">
                                <h3 className="text-center font-weight-bold text-warning">{item.title}</h3>
                                <h4 className="text-center">{item.content}</h4>
                            </Wrapper>
                        </Wrapper>
                    )
                }
            </Wrapper>
        </Wrapper>
    )
}

export default ServiceIntro;