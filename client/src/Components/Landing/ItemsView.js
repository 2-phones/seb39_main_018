import React from 'react';
import {
  ItemsView_Container,
  ItemPreview,
  PreviewImg,
  PreviewInfo,
  PreviewPrice,
  PreviewList,
  AllviewBtn,
} from './LandingStyle.jsx';
import { BasicBtn } from '../Common/Button/Buttons.js';
import { RightIcon } from '../Common/Icons/Icons.js';
import { useNavigate } from 'react-router-dom';


const ItemsView = ({ latestDatas }) => {
  const navigate = useNavigate();

  return (
    <ItemsView_Container>
      <div className="Previe_title">최근상품</div>
      <PreviewList>
        {latestDatas.map((items) => {
          return (
            <ItemPreview key={items.id}>
              <PreviewImg></PreviewImg>
              <PreviewInfo>
                <p className="title">{items.title}</p>
                <PreviewPrice>
                  <p className="price">{items.price}</p>
                  <p className="won">원</p>
                </PreviewPrice>
              </PreviewInfo>
            </ItemPreview>
          );
        })}
      </PreviewList>
      <AllviewBtn onClick={() => navigate('/')}>
        <BasicBtn name="전체보기" icon={<RightIcon />} background="none" color="black" />
      </AllviewBtn>
    </ItemsView_Container>
  );
};

export default ItemsView;